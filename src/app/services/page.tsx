import DataReview from '@/dacomp/datareview'
import FreqAQ from '@/sections/faq'
import HeroHeader from '@/sections/heroheader'
import ServiceOverview from '@/sections/serviceoverview'

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <HeroHeader />
      {ourservicesarray.map((_, idx) => (
        <ServiceOverview
          key={idx}
          {..._}
          direction={idx % 2 == 0 ? 'reversed' : 'normal'}
        />
      ))}
      <DataReview />
      <FreqAQ />
    </div>
  )
}

const ourservicesarray = [
  {
    name: 'Data Analysis',
    desc: 'Imagine having a clear, insightful narrative of your business performance, one that goes beyond simple numbers. We delve into the heart of your data, discovering the hidden patterns and trends that illuminate your path to growth. Our process translates raw data into strategic insights, empowering you to make informed decisions. We offer a tailored approach, crafting customer segmentations that highlight your most valuable clients, performance reports that visually showcase your progress, and predictive analyses that forecast future trends. Whether it’s optimizing campaigns through A/B testing or creating clear visualizations, we equip you with the knowledge to drive real, sustainable results.',
    img: '/resources/graph.gif',
    lnk: '/digital-analysis',
  },
  {
    name: 'Digital Marketing',
    desc: "What if your marketing campaigns could be precisely aligned with your ideal customer? We make that a reality. By leveraging the power of data, we create targeted digital strategies that resonate and convert. From enhancing your online visibility through SEO to driving traffic with strategic PPC, and building brand loyalty through engaging social media and email campaigns, we ensure your message reaches the right people at the right time. Our content marketing focuses on delivering value, and every campaign is continuously refined, backed by detailed analytics, to maximize your return on investment. We don't just market; we build connections, guided by the insights your data provides.",
    img: '/digitMarket.gif',
    lnk: '#',
  },
  {
    name: 'Web Design',
    desc: "Your website isn't just a digital storefront; it's a dynamic tool for growth. We design and develop websites that are not only visually engaging but also intuitively structured to guide visitors toward your desired outcomes. We start by understanding user behavior, ensuring a seamless and responsive experience across all devices. From user-centric design to conversion rate optimization, we focus on transforming visitors into loyal customers. Whether you need an e-commerce platform that drives sales or a website that integrates seamlessly with analytics, we build digital experiences that deliver results. We continuously refine and improve based on user interaction data, ensuring your website remains a powerful asset for your business.",
    img: '/webdev.gif',
    lnk: '#',
  },
]
