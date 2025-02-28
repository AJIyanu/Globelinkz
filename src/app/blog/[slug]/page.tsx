import React from 'react'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES, MARKS, Node } from '@contentful/rich-text-types'
import { format } from 'date-fns'
import { getBlogPostBySlug } from '../../../../types/contentful'
import { Document } from '@contentful/rich-text-types'

const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => (
      <p className="mb-4 text-gray-800">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node: Node, children: React.ReactNode) => (
      <h1 className="text-3xl font-bold mb-4">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: Node, children: React.ReactNode) => (
      <h2 className="text-2xl font-bold mb-3">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: Node, children: React.ReactNode) => (
      <h3 className="text-xl font-bold mb-2">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (node: Node, children: React.ReactNode) => (
      <ul className="list-disc ml-6 mb-4">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: Node, children: React.ReactNode) => (
      <ol className="list-decimal ml-6 mb-4">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: Node, children: React.ReactNode) => (
      <li className="mb-1">{children}</li>
    ),
    [BLOCKS.QUOTE]: (node: Node, children: React.ReactNode) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
    [INLINES.HYPERLINK]: (node: Node, children: React.ReactNode) => (
      <a
        href={node.data.uri}
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text: React.ReactNode) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text: React.ReactNode) => <u>{text}</u>,
    [MARKS.CODE]: (text: React.ReactNode) => (
      <code className="px-1 py-0.5 bg-gray-100 rounded">{text}</code>
    ),
  },
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getBlogPostBySlug(slug)

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto py-8 px-4">
        <div
          className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Article not found:</strong>
          <span className="block sm:inline">
            {' '}
            The requested article could not be found.
          </span>
        </div>
      </div>
    )
  }

  // Extract data from the Contentful response format
  const title = article.fields.blogTitle
  const createdAt = article.sys.createdAt
    ? format(new Date(article.sys.createdAt), 'MMMM dd, yyyy')
    : ''
  const categories = article.fields.category || []
  const thumbnail = article.fields.thumbnail?.fields?.file
  const content = article.fields.article

  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      {/* Featured Image */}
      {thumbnail && (
        <div className="mb-6 relative w-full h-96">
          <Image
            src={`https:${thumbnail.url}`}
            alt={
              typeof article.fields.thumbnail?.fields.description === 'string'
                ? article.fields.thumbnail.fields.description
                : title
            }
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      )}

      {/* Article Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>

      {/* Publication Info and Categories */}
      <div className="flex items-center mb-8">
        <div>
          <p className="text-sm text-gray-600">Published on {createdAt}</p>
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {categories.map((category: string) => (
                <span
                  key={category}
                  className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
                >
                  {category}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Article Content */}
      <div className="prose max-w-none">
        {documentToReactComponents(content as Document, richTextOptions)}
      </div>
    </article>
  )
}

// ✅ Fix generateMetadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }> // ✅ Awaiting params
}) {
  const { slug } = await params // ✅ Awaiting params before using slug
  const article = await getBlogPostBySlug(slug)

  if (!article) {
    return { title: 'Article Not Found' }
  }

  return {
    title: article.fields.blogTitle,
    description: article.fields.articlePreview || '',
    openGraph: {
      images: article.fields.thumbnail?.fields.file
        ? [`https:${article.fields.thumbnail.fields.file.url}`]
        : [],
    },
  }
}
