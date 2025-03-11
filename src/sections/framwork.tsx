import { Separator } from '@radix-ui/react-separator'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const dataFramework = [
  {
    trigger: 'Descriptive Analytics – Understand Your Past, Plan Your Future',
    content:
      'Imagine you’re reviewing your business’s performance over the last quarter. Descriptive analytics gathers all your historical data—like sales numbers, website traffic, or customer feedback—and presents it in an easy-to-understand format. For example, if you run an online store, you can quickly see which products sold the most and during which periods, giving you a clear picture of what happened. This insight helps you understand past trends so you can build on what works.',
  },
  {
    trigger: 'Diagnostic Analytics – Identify Root Causes and Improve',
    content:
      'Now, suppose you notice a sudden dip in your online sales. Diagnostic analytics digs deeper to uncover why that happened. You might explore whether a recent website update, a change in marketing strategy, or even external factors like market competition contributed to the drop. By analyzing these factors, you can pinpoint the root cause and address it directly, ensuring that you learn from the past to improve your future strategies.',
  },
  {
    trigger: 'Predictive Analytics – Anticipate Trends and Prepare Ahead',
    content:
      'Imagine being able to forecast future sales trends or customer behavior with confidence. Predictive analytics uses your historical data to create statistical models that estimate what might happen next. For instance, if you’re planning inventory for the upcoming season, predictive analytics can help you anticipate demand, ensuring you stock the right amount of products. This foresight empowers you to prepare for the future and make proactive decisions.',
  },
  {
    trigger:
      'Prescriptive Analytics – Turn Insights into Actionable Strategies',
    content:
      'Picture a scenario where you not only know what might happen but also get clear recommendations on how to act. Prescriptive analytics takes things a step further by simulating different strategies and suggesting the optimal course of action. For example, if your predictive models indicate a potential drop in sales, prescriptive analytics might recommend targeted promotions or adjustments in pricing strategies. This framework gives you actionable insights that help you turn data into decisions that drive your business forward.',
  },
]

export default function AnalyticFramework() {
  return (
    <div className="font-[rajdhani] text-blue-900 flex flex-col lg:flex-row-reverse xl:w-[80%] py-8 px-[5%] justify-between items-center bg-green-100 overflow-hidden">
      <div className="px-5 lg:w-[40%]">
        <div className="text-3xl xl:text-5xl font-bold flex lg:flex-row lg:items-start justify-center">
          <h2 className="me-3">OUR</h2>
          <h2 className="me-3">ANALYTIC</h2>
          <h2 className="me-3">FRAMEWORK</h2>
        </div>
        <Separator />
        <p className="text-1xl xl:text-2xl text-center lg:text-left">
          <span className="italic font-semibold">
            Every battle is won before it is ever fought.
          </span>
          <br />
          At Globelinkz, we leverage proven data analytics frameworks to preempt
          challenges and seize opportunities early. Our seasoned team knows
          exactly which approach to deploy, or even blend, for maximum impact.
        </p>
      </div>
      <div className="px-5 lg:w-[50%]">
        <Accordion type="single" collapsible className="w-full">
          {dataFramework.map((frameElement, idx) => (
            <AccordionItem key={idx} value={frameElement.trigger}>
              <AccordionTrigger className="hover:no-underline font-semibold text-1xl lg:text-2xl">
                {frameElement.trigger}
              </AccordionTrigger>
              <AccordionContent className="font-[500] text-1xl lg:text-2xl">
                {frameElement.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
