import { Client } from '@/lib/utils'
import { gql } from 'graphql-request'
import Link from 'next/link'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { format, parseISO } from 'date-fns'

export const revalidate = 3600

const query = gql`
  {
    resourcesCollection {
      items {
        slug
        thumbnail {
          url
        }
        _id
        sys {
          publishedAt
        }
        category
        blogTitle
        articlePreview
      }
    }
  }
`
interface ContentfulResource {
  _id: string
  sys: {
    updatedAt: string
    publishedAt: string
  }
  slug: string
  thumbnail: {
    url: string
  }
  category: string[]
  blogTitle: string
  articlePreview: string
}

interface ResourcesQueryResponse {
  resourcesCollection: {
    items: ContentfulResource[]
  }
}

export default async function BlogPage() {
  const posts = await Client.request<ResourcesQueryResponse>(query)
  // console.log(JSON.stringify(posts))

  return (
    <div>
      <div className="text-4xl lg:text-5xl font-bold p-6">
        Resources for you
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
        {posts.resourcesCollection.items.map((post) => {
          return (
            <Link href={`/blog/${post.slug}`} key={post._id} className="h-full">
              <Card className="overflow-hidden h-full">
                <div
                  className="relative w-full aspect-[4/3] bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.thumbnail.url})` }}
                />
                <CardHeader>
                  <CardDescription>
                    {Array.isArray(post.category) && post.category.length > 0
                      ? post.category.join(', ')
                      : 'Uncategorized'}
                  </CardDescription>
                  <CardTitle className="text-2xl">
                    {post.blogTitle || 'Untitled'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{post.articlePreview || 'No preview available'}</p>
                </CardContent>
                <Separator className="my-2 bg-gray-800 mx-auto w-[95%]" />
                <CardFooter>
                  <Avatar>
                    <AvatarImage src="/staff/peace.jpg" alt="Author" />
                    <AvatarFallback>AN</AvatarFallback>
                  </Avatar>
                  <div className="ms-5">
                    <h4>Admin</h4>
                    <p>
                      {format(parseISO(post.sys.publishedAt), 'MMM d, yyyy')}
                    </p>
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
