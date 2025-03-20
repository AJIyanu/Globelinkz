import Hero from '@/sections/hero'
import WhyUs from '@/sections/whyus'
import Reviews from '@/sections/review'
import OurCompetence from '@/sections/services'
import CallToAction from '@/sections/cta'
import Footer from '@/sections/footer'
import React from 'react'
import { Client } from '@/lib/utils'
import { gql } from 'graphql-request'
import { ReviewData } from '@/dacomp/dataareviewclient'
import { StaffData } from '@/sections/ourteam'

const REVIEW_QUERY = gql`
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

const STAFF_QUERY = gql`
  {
    staffCollection(order: hierarchy_ASC) {
      items {
        lastName
        firstName
        middleName
        qualification
        portrait {
          url
        }
        role
        teamRole
        customerReview
      }
    }
  }
`

export default async function Home() {
  const [reviewData, teamMembers] = await Promise.all([
    Client.request<ReviewData>(REVIEW_QUERY),
    Client.request<StaffData>(STAFF_QUERY),
  ])

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <Hero />
      <OurCompetence />
      <WhyUs />
      <div className="hidden">about us</div>
      <div className="hidden">blog post</div>
      <Reviews reviewData={reviewData} staffData={teamMembers} />
      <div className="relative bg-black">
        <div className="absolute inset-0 hidden lg:block bg-[url(/footer.jpg)] bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <CallToAction />
          <Footer />
        </div>
      </div>
    </div>
  )
}
