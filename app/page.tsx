import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Instagram, Music, Sparkles, Calendar, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-pink-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO.PNG-qAuyWUdmPXTXzdCGSC8fooXUOfz718.jpeg"
              alt="SkyDance Entertainment Logo"
              width={60}
              height={60}
              className="object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-purple-900">SkyDance</h1>
              <p className="text-sm text-purple-600">Entertainment & Events</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </a>
            <Button asChild>
              <a href="#contact">Book Now</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO.PNG-qAuyWUdmPXTXzdCGSC8fooXUOfz718.jpeg"
                alt="SkyDance Entertainment"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
              Creating Magical Moments for Every Celebration
            </h2>
            <p className="text-xl text-gray-600 mb-8 text-pretty">
              Professional entertainment and event planning services in Lebanon. From weddings to corporate events, we
              bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#contact">Get Started</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#services">View Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive entertainment and event planning solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Music className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Wedding Planning</h3>
                <p className="text-gray-600">Complete wedding coordination and entertainment services</p>
              </CardContent>
            </Card>

            <Card className="border-pink-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Special Events</h3>
                <p className="text-gray-600">Birthday parties, anniversaries, and celebrations</p>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Corporate Events</h3>
                <p className="text-gray-600">Professional entertainment for business gatherings</p>
              </CardContent>
            </Card>

            <Card className="border-pink-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Holiday Events</h3>
                <p className="text-gray-600">Festive celebrations and seasonal entertainment</p>
              </CardContent>
            </Card>
          </div>

          {/* Featured Event Images */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Wedding Service Card */}
            <Card className="overflow-hidden border-purple-200">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src="./public/outdoor-wedding-reception-with-string-lights-at-su.jpg"
                    alt="Wedding Planning Services - SkyDance Entertainment"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50">
                  <h3 className="text-2xl font-bold mb-2">Wedding Planning</h3>
                  <p className="text-gray-700">
                    We create dream weddings with elegant coordination, beautiful decorations, and unforgettable
                    entertainment. From intimate ceremonies to grand celebrations, we handle every detail with care and
                    professionalism.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Christmas Event Card */}
            <Card className="overflow-hidden border-purple-200">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/christmas_event.PNG-dhDHUALHgxGLbvAKHIH1W7EA5hNwRx.jpeg"
                    alt="Christmas Event - SkyDance Entertainment"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50">
                  <h3 className="text-2xl font-bold mb-2">Holiday Entertainment</h3>
                  <p className="text-gray-700">
                    We specialize in creating unforgettable holiday experiences for children and families. Our Christmas
                    events bring joy, laughter, and magical memories to communities across Lebanon.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About SkyDance</h2>
            <p className="text-lg text-gray-700 mb-6 text-pretty">
              SkyDance Entertainment is Lebanon's premier event planning and entertainment service. With years of
              experience creating memorable celebrations, we specialize in weddings, corporate events, and special
              occasions throughout the Bekaa region and beyond.
            </p>
            <p className="text-lg text-gray-700 text-pretty">
              Our dedicated team works tirelessly to ensure every event is executed flawlessly, bringing creativity,
              professionalism, and passion to every celebration we touch.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-600">Ready to plan your next event? Contact us today!</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-purple-100">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-purple-600 mt-1" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <a href="tel:71707665" className="text-gray-600 hover:text-purple-600">
                          71707665
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-purple-600 mt-1" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <a href="mailto:jerdyriwa@gmail.com" className="text-gray-600 hover:text-purple-600">
                          jerdyriwa@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-purple-600 mt-1" />
                      <div>
                        <p className="font-semibold">Address</p>
                        <p className="text-gray-600">Lebanon, Bekaa, Taalabaya</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Instagram className="w-5 h-5 text-purple-600 mt-1" />
                      <div>
                        <p className="font-semibold">Instagram</p>
                        <a
                          href="https://www.instagram.com/sky.danceentertainment?igsh=bGp4dXB5Z2lxdm56"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-purple-600"
                        >
                          @sky.danceentertainment
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-pink-100">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Tell us about your event..."
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO.PNG-qAuyWUdmPXTXzdCGSC8fooXUOfz718.jpeg"
                alt="SkyDance Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <div>
                <p className="font-semibold">SkyDance Entertainment</p>
                <p className="text-sm text-gray-400">Creating Magical Moments</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/sky.danceentertainment?igsh=bGp4dXB5Z2lxdm56"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a href="tel:71707665" className="hover:text-purple-400 transition-colors">
                <Phone className="w-6 h-6" />
              </a>
              <a href="mailto:jerdyriwa@gmail.com" className="hover:text-purple-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} SkyDance Entertainment. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
