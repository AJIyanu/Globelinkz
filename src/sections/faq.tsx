import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Image from 'next/image'
import { Client } from '@/lib/utils'
import { gql } from 'graphql-request'

interface FAQItem {
  question: string
  answer: string
}

interface FAQCollection {
  items: FAQItem[]
}

interface FAQData {
  faqCollection: FAQCollection
}

const query = gql`
  {
    faqCollection(where: { featured: true }) {
      items {
        question
        answer
      }
    }
  }
`

export default async function FreqAQ() {
  const results = await Client.request<FAQData>(query)
  //   console.log(JSON.stringify(results))

  return (
    <div className="w-full flex flex-col items-center py-9 px-5">
      <h1 className="text-4xl font-bold mb-5 mx-auto text-center">
        Frequently Asked Questions (FAQ)
      </h1>
      <h2 className="text-2xl font-semibold">Your Questions answered here</h2>
      <div className="flex w-full items-center justify-around">
        <div className="hidden lg:block">
          <Image
            src="/ConfusingAnalysis.gif"
            width={800}
            height={800}
            alt="faq"
          />
        </div>
        <div className=" w-[90%] lg:w-[50%]">
          <Accordion type="single" collapsible className="w-full lg:w-[80%]">
            {results.faqCollection.items.map((_, idx) => (
              <AccordionItem value={_.question} key={idx}>
                <AccordionTrigger className="text-xl font-semibold">
                  {_.question}
                </AccordionTrigger>
                <AccordionContent className="text-xl">
                  {_.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
