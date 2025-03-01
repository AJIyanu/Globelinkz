import React from 'react'
import Image from 'next/image'
// import ReactPlayer from 'react-player'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import {
  BLOCKS,
  Document,
  INLINES,
  MARKS,
  Node,
} from '@contentful/rich-text-types'
import { format, parseISO } from 'date-fns'
import { Client } from '@/lib/utils'
// import { EntryFieldTypes } from 'contentful'
import { gql } from 'graphql-request'

interface ResourceItem {
  sys: {
    publishedAt: string
  }
  article: { json: Document }
  blogTitle: string
  articleHeroImage: null | {
    url?: string
  }
  articleVideo: null | {
    url?: string
  }
  category: string[]
}

interface ResourcesQueryResponse {
  resourcesCollection: {
    items: ResourceItem[]
  }
}

interface ResourceMetadata {
  blogTitle: string
  articleHeroImage: null | {
    url: string
  }
  articlePreview: string
}

interface ResourcesMetadataResponse {
  resourcesCollection: {
    items: ResourceMetadata[]
  }
}

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

export default async function ArticlePage(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const { slug } = params
  const query = gql`
    {
      resourcesCollection(where: { slug:
      
      "${slug}" }) {
        items {
          blogTitle
          article {
            json
          }
          articleHeroImage {
            url
          }
          articleVideo {
            url
          }
          sys {
            publishedAt
          }
          category
        }
      }
    }
  `
  const article = await Client.request<ResourcesQueryResponse>(query)
  // console.log(JSON.stringify(article))

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

  const { blogTitle, category, articleHeroImage, articleVideo, sys } =
    article.resourcesCollection.items[0]
  const createdAt = sys.publishedAt
    ? format(parseISO(sys.publishedAt), 'MMMM dd, yyyy')
    : ''

  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      {articleHeroImage && (
        <div className="mb-6 relative w-full h-96">
          <Image
            src={`${articleHeroImage.url}`}
            alt={blogTitle}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      )}

      <h1 className="text-4xl font-bold text-gray-900 mb-4">{blogTitle}</h1>

      <div className="flex items-center mb-8">
        <div>
          <p className="text-sm text-gray-600">Published on {createdAt}</p>
          {Array.isArray(category) && category.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {category.map((cat: string) => (
                <span
                  key={cat}
                  className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Article Content */}
      <div className="prose max-w-none">
        {documentToReactComponents(
          article.resourcesCollection.items[0].article.json,
          richTextOptions
        )}
      </div>
      {articleVideo && (
        <video
          src={articleVideo.url}
          controls={true}
          width="100%"
          height="auto"
        />
      )}
    </article>
  )
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const { slug } = params
  const query = gql`
    {
      resourcesCollection(where: { slug: "${slug}" }) {
        items {
          blogTitle
          articleHeroImage {
            url
          }
          articlePreview
        }
      }
    }
  `
  const article = await Client.request<ResourcesMetadataResponse>(query)

  if (!article) {
    return { title: 'Article Not Found' }
  }

  return {
    title: article.resourcesCollection.items[0].blogTitle,
    description: article.resourcesCollection.items[0].articlePreview || '',
    openGraph: {
      images: article.resourcesCollection.items[0].articleHeroImage
        ? [`${article.resourcesCollection.items[0].articleHeroImage.url}`]
        : [],
    },
  }
}
