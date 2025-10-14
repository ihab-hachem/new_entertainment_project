import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-4">Celebrate Events</h3>
            <p className="text-background/80 leading-relaxed">
              Creating unforgettable moments and extraordinary celebrations since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-background/80 hover:text-background transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-background/80 hover:text-background transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-background/80">
              <li>123 Celebration Avenue</li>
              <li>New York, NY 10001</li>
              <li>
                <a href="tel:+1234567890" className="hover:text-background transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a href="mailto:hello@celebrateevents.com" className="hover:text-background transition-colors">
                  hello@celebrateevents.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/80 text-sm flex items-center gap-2">
            © {currentYear} Celebrate Events. Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for
            unforgettable moments.
          </p>
          <div className="flex gap-6 text-sm text-background/80">
            <a href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
