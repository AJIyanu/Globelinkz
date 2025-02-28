// app/blog/page.tsx
import { fetchArticles } from '../../../types/contentful'
import Link from 'next/link'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

export const revalidate = 3600

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export default async function BlogPage() {
  const posts = await fetchArticles()

  return (
    <div>
      <div className="text-4xl lg:text-5xl font-bold p-6">
        Resources for you
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 p-6">
        {posts.map((post) => {
          const { slug, blogTitle, category, articlePreview } = post.fields
          // const thumbnailUrl =
          //   thumbnail && 'fields' in thumbnail && thumbnail.fields?.file?.url
          //     ? `url(https:${thumbnail.fields.file.url})`
          //     : 'url(/hero-bg.jpg)'
          return (
            <Link href={`/blog/${slug}`} key={post.sys.id} className="h-full">
              <Card className="overflow-hidden h-full">
                <div
                  className="relative w-full aspect-[4/3] bg-cover bg-center"
                  style={{ backgroundImage: '/hero-bg.jpg' }}
                />
                <CardHeader>
                  <CardDescription>
                    {Array.isArray(category) && category.length > 0
                      ? category.join(', ')
                      : 'Uncategorized'}
                  </CardDescription>
                  <CardTitle className="text-2xl">
                    {blogTitle || 'Untitled'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{articlePreview || 'No preview available'}</p>
                </CardContent>
                <Separator className="my-2 bg-gray-800 mx-auto w-[95%]" />
                <CardFooter>
                  <Avatar>
                    <AvatarImage src="/staff/peace.jpg" alt="Author" />
                    <AvatarFallback>AN</AvatarFallback>
                  </Avatar>
                  <div className="ms-5">
                    <h4>Admin</h4>
                    <p>{new Date(post.sys.updatedAt).toLocaleDateString()}</p>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
