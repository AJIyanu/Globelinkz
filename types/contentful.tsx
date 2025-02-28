import { createClient } from "contentful";

import { Asset } from "contentful";

export interface BlogPost {
  metadata: {
    tags: string[];
    concepts: string[];
  };
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    revision: number;
  };
  fields: {
    blogTitle: string;
    category: string[];
    slug: string;
    thumbnail: Asset;
    articlePreview: string;
    article: {
      data: {};
      content: {
        data: {};
        content: {
          data: {};
          marks: any[];
          value: string;
          nodeType: string;
        }[];
        nodeType: string;
      }[];
      nodeType: string;
    };
  };
}

// Create Contentful client
const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

// Helper function to fetch all blog posts
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: "resources",
      order: ["-sys.updatedAt"],
    });

    return response.items as unknown as BlogPost[];
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: "resources",
      "fields.slug": slug,
      limit: 1,
    });

    return (response.items[0] as unknown as BlogPost) || null;
  } catch (error) {
    console.error("Error fetching blog post by slug:", error);
    return null;
  }
}
