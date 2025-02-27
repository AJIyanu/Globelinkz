import {
  Card,
  CardTitle,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const WhyUsContent = [
  {
    title: "Growth",
    content:
      "Is your business growth stagnating despite your best efforts? Often, fragmented efforts in design, analytics, and marketing can hinder sustainable expansion. Our comprehensive solutions integrate these essential services to empower your business with the skills and tools for scalability. We address key concerns like “How can I integrate digital strategies for growth?” and “What training can boost my team’s performance?” to ensure you stay competitive in today’s dynamic market.",
    footer: "Schedule a consultation now",
    lgDisplay: true,
  },
  {
    title: "Reach",
    content:
      "Wondering why your digital marketing isn’t driving the desired traffic? Many businesses are unaware that ineffective SEO and social media tactics can limit their reach. Our digital marketing services integrate cutting-edge SEO, content creation, and social media strategies to boost your online presence. We answer common questions such as “How do I increase my online visibility?” and “What digital strategies will generate more leads?” ensuring your message reaches the right audience.",
    footer: "Book a digital marketing audit to optimize your strategy.",
    lgDisplay: true,
  },
  {
    title: "Clarity",
    content:
      "Are ambiguous customer reviews or internal feedback causing confusion? Without proper qualitative data analysis, you may be missing the root causes behind your business challenges. Our service translates unstructured feedback into clear, actionable insights, answering questions like “How can I better understand customer needs?” and “What is causing miscommunication within my team?” This clarity helps refine strategies and improve overall performance",
    footer: "Request for a customized qualitative analysis proposal.",
    lgDisplay: true,
  },
  {
    title: "Visibility",
    content:
      "Is your website failing to attract the right customers? You might not know that outdated design and poor SEO can dramatically reduce your online visibility. Our Shopify and WordPress web design services revamp your site with modern aesthetics and robust SEO strategies, addressing common queries such as “How do I improve my site’s search ranking?” and “Why isn’t my website converting visitors?” This ensures a seamless user experience that drives organic traffic and higher conversions.",
    footer: "Request a comprehensive website audit now.",
    lgDisplay: true,
  },
  {
    title: "Insight",
    content:
      "Are you struggling to make sense of the raw numbers? Many businesses don’t realize that disorganized data can obscure key trends and opportunities. Without proper data analysis, you may be missing insights that drive strategic decisions and boost ROI. Our advanced data analytics service turns complex datasets into clear, actionable insights, answering questions like “How can I turn my data into a competitive advantage?” and “What trends am I overlooking?”",
    footer: "Schedule a free data consultation today",
    lgDisplay: false,
  },
  {
    title: "Identity",
    content:
      "Do you feel your brand is getting lost in the crowd? Many companies unknowingly suffer from inconsistent visual identity, which can dilute customer trust. Our branding and graphic design services create a compelling, cohesive brand image that resonates with your target audience. We tackle concerns like “How do I build a memorable brand?” and “What design elements can strengthen my market presence?” ensuring your brand stands out and remains top-of-mind.",
    footer: "Book your branding strategy session today",
    lgDisplay: false,
  },
];

export default function WhyUs() {
  return (
    <div className="flex flex-col w-[80%] items-center py-10">
      <div>
        <p className="text-left text-xs md:text-sm text-gray-600 font-semibold">
          Leverage
        </p>
        <Separator className="w-[30%] me-auto my-1 bg-gray-700" />
        <h1 className="text-3xl text-center md:text-5xl font-bold">
          Our Unique Edge
        </h1>
        <Separator className="w-[40%] ms-auto bg-gray-600 my-1" />
        <p className="text-right text-xs md:text-sm text-gray-700 font-semibold">
          for
        </p>
      </div>
      <div className="w-full lg:hidden">
        <Accordion type="single" collapsible className="w-full">
          {WhyUsContent.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent className="border border-lime-500 rounded p-2">
                <p>{item.content}</p>
                <Separator className="bg-lime-700 my-1" />
                <h3 className="font-semibold text-lime-900">Actionable:</h3>
                <p>{item.footer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="hidden lg:grid gap-9 lg:grid-cols-2 xl:grid-cols-3 mt-6">
        {WhyUsContent.map((item, idx) => (
          <Card
            key={idx}
            className={cn(!item.lgDisplay && "hidden md:block", "bg-blue-100")}
          >
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-justify">{item.content}</CardContent>
            <Separator className="mx-auto w-[90%] bg-gray-700" decorative />
            <CardFooter className="block pt-2">
              <h3 className="font-semibold text-gray-600">Actionable</h3>
              <p>{item.footer}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
