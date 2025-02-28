import { Asset } from 'contentful'
export const Resources = 'resources'
export interface Resources {
  //Resources
  /* The content here is written by Globelinkz staff and is meant to be articles that answer the questions in people's minds. */
  readonly article: { content: any; data: any; nodeType: string }
  readonly articleHeroImage?: Asset
  readonly articlePreview?: string
  readonly articleVideo?: Asset
  readonly blogTitle: string
  readonly category: ReadonlyArray<
    | 'Data Analysis'
    | 'Digital Marketing'
    | 'Web Application'
    | 'Web Development'
  >
  readonly slug: string
  readonly thumbnail: Asset
}
