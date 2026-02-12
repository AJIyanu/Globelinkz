import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

export default function OurCompetence() {
  return (
    <div className="flex flex-col items-center space-y-10">
      <div className="text-center space-y-2">
        <div className="text-5xl text-brand-green font-bold">Our Services</div>
        <div className="text-lg max-w-lg font-semibold">
          We help business generate sales and grow revenue. From paid ads to
          SEO, we offer strategies that work. we help you boost your conversions
          and see real results.
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Card className="m-4 p-6 bg-brand-green text-white hover:scale-105 hover:shadow-lg transition-all duration-300 max-w-md">
          <CardContent className="flex flex-col space-y-2">
            {/* <CardHeader> */}
            <Avatar className="bg-brand-neon border-0 w-20 h-20 p-3">
              <AvatarImage src="/icons/strategy.png" />
            </Avatar>
            <div className="text-2xl font-bold mt-4">
              Sales Strategy & Positioning
            </div>
            {/* </CardHeader> */}
            <div>
              We clarify your offer so customers immediately understand why they
              should buy.
            </div>
          </CardContent>
        </Card>
        <Card className="m-4 p-6 bg-brand-neon text-navy hover:scale-105 hover:shadow-lg transition-all duration-300 max-w-md">
          <CardContent className="flex flex-col space-y-2">
            {/* <CardHeader> */}
            <Avatar className="bg-brand-green border-0 w-20 h-20 p-3">
              <AvatarImage src="/icons/conversion.png" />
            </Avatar>
            <div className="text-2xl font-bold mt-4">
              Conversion-Focused Websites
            </div>
            {/* </CardHeader> */}
            <div>
              We design websites that guide visitors toward action, not
              confusion.
            </div>
          </CardContent>
        </Card>
        <Card className="m-4 p-6 bg-brand-green text-white hover:scale-105 hover:shadow-lg transition-all duration-300 max-w-md">
          <CardContent className="flex flex-col space-y-2">
            {/* <CardHeader> */}
            <Avatar className="bg-brand-neon border-0 w-20 h-20 p-3">
              <AvatarImage src="/icons/advert.png" />
            </Avatar>
            <div className="text-2xl font-bold mt-4">
              Paid Advertising (Facebook, Instagram, TikTok)
            </div>
            {/* </CardHeader> */}
            <div>We run ads built to convert attention into sales.</div>
          </CardContent>
        </Card>
        <Card className="m-4 p-6 bg-brand-neon text-brand-navy hover:scale-105 hover:shadow-lg transition-all duration-300 max-w-md">
          <CardContent className="flex flex-col space-y-2">
            {/* <CardHeader> */}
            <Avatar className="bg-brand-green border-0 w-20 h-20 p-3">
              <AvatarImage src="/icons/optimize.png" />
            </Avatar>
            <div className="text-2xl font-bold mt-4">
              Funnel & Offer Optimization
            </div>
            {/* </CardHeader> */}
            <div>We improve how visitors move from interest to purchase.</div>
          </CardContent>
        </Card>
        <Card className="m-4 p-6 bg-brand-green text-white hover:scale-105 hover:shadow-lg transition-all duration-300 max-w-md">
          <CardContent className="flex flex-col space-y-2">
            {/* <CardHeader> */}
            <Avatar className="bg-brand-neon border-0 w-20 h-20 p-3">
              <AvatarImage src="/icons/trust.png" />
            </Avatar>
            <div className="text-2xl font-bold mt-4">
              Social Proof & Trust Systems
            </div>
            {/* </CardHeader> */}
            <div>
              We add credibility that helps customers buy with confidence.
            </div>
          </CardContent>
        </Card>
        <Card className="m-4 p-6 bg-brand-neon text-brand-navy hover:scale-105 hover:shadow-lg transition-all duration-300 max-w-md">
          <CardContent className="flex flex-col space-y-2">
            {/* <CardHeader> */}
            <Avatar className="bg-brand-green border-0 w-20 h-20 p-3">
              <AvatarImage src="/icons/content.png" />
            </Avatar>
            <div className="text-2xl font-bold mt-4">
              Content Marketing & Strategy
            </div>
            {/* </CardHeader> */}
            <div>
              We craft powerful content strtegies that engage your audience and
              drive conversions
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
