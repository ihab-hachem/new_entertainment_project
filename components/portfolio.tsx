"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

const portfolioItems = [
  {
    type: "image",
    src: "/elegant-wedding-ceremony-with-beautiful-floral-dec.jpg",
    alt: "Elegant wedding ceremony",
    category: "Weddings",
  },
  {
    type: "image",
    src: "/colorful-birthday-party-celebration-with-balloons-.jpg",
    alt: "Birthday party celebration",
    category: "Birthdays",
  },
  {
    type: "image",
    src: "/professional-corporate-event-with-stage-and-lighti.jpg",
    alt: "Corporate event",
    category: "Corporate",
  },
  {
    type: "image",
    src: "/outdoor-wedding-reception-with-string-lights-at-su.jpg",
    alt: "Outdoor wedding reception",
    category: "Weddings",
  },
  {
    type: "image",
    src: "/live-band-performing-at-event-with-crowd-dancing.jpg",
    alt: "Live entertainment",
    category: "Entertainment",
  },
  {
    type: "image",
    src: "/elegant-table-setting-for-formal-dinner-event.jpg",
    alt: "Formal dinner event",
    category: "Corporate",
  },
]

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Our Portfolio
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            Explore our collection of memorable events and celebrations we've brought to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden cursor-pointer border-0 shadow-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-background transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-2">
                      {item.category}
                    </span>
                    <p className="text-lg font-medium">{item.alt}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
