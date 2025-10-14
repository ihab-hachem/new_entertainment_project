import { Card, CardContent } from "@/components/ui/card"
import { Heart, Cake, Briefcase, Music, Users, Sparkles } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Weddings",
    description:
      "Create the wedding of your dreams with our comprehensive planning services, from intimate ceremonies to grand celebrations.",
  },
  {
    icon: Cake,
    title: "Birthday Parties",
    description:
      "Celebrate another year with unforgettable birthday experiences for all ages, from kids to milestone celebrations.",
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    description:
      "Impress clients and motivate teams with professionally executed corporate gatherings, conferences, and team building events.",
  },
  {
    icon: Music,
    title: "Live Entertainment",
    description:
      "Elevate your event with curated entertainment options including DJs, live bands, performers, and more.",
  },
  {
    icon: Users,
    title: "Social Gatherings",
    description: "From anniversaries to reunions, we help you host memorable social events that bring people together.",
  },
  {
    icon: Sparkles,
    title: "Custom Experiences",
    description:
      "Have a unique vision? We specialize in creating bespoke events tailored to your specific needs and imagination.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            From intimate gatherings to grand celebrations, we bring your vision to life with meticulous attention to
            detail and creative flair
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
