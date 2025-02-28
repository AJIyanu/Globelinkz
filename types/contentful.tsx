import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from 'contentful'

import { createClient, EntryCollection } from 'contentful'

type AssetFile = {
  url: string
  details: {
    size: number
    image?: {
      width: number
      height: number
    }
  }
  fileName: string
  contentType: string
}

export type Asset = {
  metadata: {
    tags: any[]
    concepts?: any[]
  }
  sys: {
    id: string
    type: 'Asset'
    createdAt: string
    updatedAt: string
    locale: string
  }
  fields: {
    title: string
    description?: string
    file: AssetFile
  }
}

export interface TypeResourcesFields {
  blogTitle: EntryFieldTypes.Symbol
  category: EntryFieldTypes.Array<
    EntryFieldTypes.Symbol<
      | 'Data Analysis'
      | 'Digital Marketing'
      | 'Web Application'
      | 'Web Development'
    >
  >
  slug: EntryFieldTypes.Symbol
  thumbnail: EntryFieldTypes.AssetLink
  articlePreview?: EntryFieldTypes.Text
  articleHeroImage?: EntryFieldTypes.AssetLink
  article: EntryFieldTypes.RichText
  articleVideo?: EntryFieldTypes.AssetLink
}

export type TypeResourcesSkeleton = EntrySkeletonType<
  TypeResourcesFields,
  'resources'
>
export type TypeResources<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeResourcesSkeleton, Modifiers, Locales>
export type TypeResourcesWithoutLinkResolutionResponse =
  TypeResources<'WITHOUT_LINK_RESOLUTION'>
export type TypeResourcesWithoutUnresolvableLinksResponse =
  TypeResources<'WITHOUT_UNRESOLVABLE_LINKS'>
export type TypeResourcesWithAllLocalesResponse<
  Locales extends LocaleCode = LocaleCode
> = TypeResources<'WITH_ALL_LOCALES', Locales>
export type TypeResourcesWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode
> = TypeResources<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>
export type TypeResourcesWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode
> = TypeResources<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
})

// Fetch all articles
export async function fetchArticles(): Promise<
  TypeResources<'WITHOUT_LINK_RESOLUTION'>[]
> {
  try {
    const response: EntryCollection<TypeResourcesSkeleton> =
      await client.getEntries<TypeResourcesSkeleton>({
        content_type: 'resources'
      })
    return response.items as TypeResources<'WITHOUT_LINK_RESOLUTION'>[]
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
}

// Fetch a specific article by slug
export async function fetchArticleBySlug(
  slug: string
): Promise<TypeResources<'WITHOUT_LINK_RESOLUTION'> | null> {
  try {
    const response: EntryCollection<TypeResourcesSkeleton> =
      await client.getEntries<TypeResourcesSkeleton>({
        content_type: 'resources',
        'fields.slug': slug,
        limit: 1
      })
    return response.items.length > 0
      ? (response.items[0] as TypeResources<'WITHOUT_LINK_RESOLUTION'>)
      : null
  } catch (error) {
    console.error(`Error fetching article with slug ${slug}:`, error)
    return null
  }
}
