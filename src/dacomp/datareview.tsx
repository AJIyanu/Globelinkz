import { Client } from '@/lib/utils'
import { gql } from 'graphql-request'
import DataAReviewClient, { ReviewData } from './dataareviewclient'

export const REVIEW_QUERY = gql`
  {
    reviewCollection(where: { ratingFor: "Data Analysis" }) {
      items {
        rating
        content
        dateOfReview
        reviewVerificationLink
        reviewPlatform
        subject
      }
    }
  }
`

export default async function DataReview() {
  const reviewData: ReviewData = await Client.request<ReviewData>(REVIEW_QUERY)

  return <DataAReviewClient reviewData={reviewData} />
}
