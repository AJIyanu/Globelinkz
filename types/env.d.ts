declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CONTENTFUL_SPACE_ID: string
      CONTENTFUL_ACCESS_TOKEN: string
      CONTENTFUL_PREVIEW_ACCESS_TOKEN?: string
      CONTENTFUL_ENVIRONMENT?: string
      GRAPHCMS_ENDPOINT: string
    }
  }
}

export {}
