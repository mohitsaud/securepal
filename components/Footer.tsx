import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Bot,
  Cloud,
  Shield,
  Server,
  HelpCircle,
  FileText,
  Clock,
  Instagram,
} from 'lucide-react';
import Logo from '@/components/Logo';
import { contactNumber } from '@/constants/phone';
import { FaLinkedin, FaTiktok } from 'react-icons/fa';
import { trackConversion } from '@/lib/analytics';

export default function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-14 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 xl:gap-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo size="md" className="text-white" />
            <p className="max-w-xs text-sm leading-6 text-white/80">
              Managed IT, cybersecurity, Microsoft 365 and practical AI
              automation for Australian businesses.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61574213761720"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Facebook"
                target="_blank"
              >
                <Facebook className="h-5 w-5" />
              </Link>

              <Link
                href="https://www.tiktok.com/@securepal"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Tiktok"
                target="_blank"
              >
                <FaTiktok className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/securepal/"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
                target="_blank"
              >
                <FaLinkedin className=" h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/services/it-support"
                  className="flex items-center text-sm text-white/80 transition-colors hover:text-white"
                >
                  <HelpCircle className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>Managed IT Support</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cybersecurity"
                  className="flex items-center text-sm text-white/80 transition-colors hover:text-white"
                >
                  <Shield className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>Cybersecurity</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud-solutions"
                  className="flex items-center text-sm text-white/80 transition-colors hover:text-white"
                >
                  <Cloud className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>Microsoft 365 &amp; Cloud</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-solutions"
                  className="flex items-center text-sm text-white/80 transition-colors hover:text-white"
                >
                  <Bot className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>AI &amp; Automation</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/data-backup"
                  className="flex items-center text-sm text-white/80 transition-colors hover:text-white"
                >
                  <Server className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>Backup &amp; Business Continuity</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="flex items-center text-sm text-white/80 transition-colors hover:text-white"
                >
                  <FileText className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>View all services</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="flex items-center text-sm text-white/80 transition-colors hover:text-white"
                >
                  <FileText className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="flex items-center text-sm text-white/80 transition-colors hover:text-white"
                >
                  <FileText className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>Testimonials</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/our-work"
                  className="flex items-center text-sm text-white/80 transition-colors hover:text-white"
                >
                  <FileText className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>Our Work</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="flex items-center text-sm text-white/80 transition-colors hover:text-white"
                >
                  <FileText className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center text-sm text-white/80 transition-colors hover:text-white"
                >
                  <Mail className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="flex items-center text-sm text-white/80 transition-colors hover:text-white"
                >
                  <FileText className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="flex items-center text-sm text-white/80 transition-colors hover:text-white"
                >
                  <FileText className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/trust-centre"
                  className="flex items-center text-sm text-white/80 transition-colors hover:text-white"
                >
                  <Shield className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>Trust Centre</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <Phone className="mr-3 h-5 w-5 flex-shrink-0 mt-0.5 text-white/90" />
                <div>
                  <a
                    href={'tel:' + contactNumber}
                    onClick={() => trackConversion('phone_click')}
                    className="text-sm text-white transition-colors hover:underline"
                  >
                    {contactNumber}
                  </a>

                  <p className="text-sm text-white/70 mt-1">Mon-Fri: 9am-6pm</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 h-5 w-5 flex-shrink-0 mt-0.5 text-white/90" />
                <div>
                  <a
                    href="mailto:info@securepal.com.au"
                    className="text-sm text-white transition-colors hover:underline"
                  >
                    info@securepal.com.au
                  </a>
                  <p className="text-sm text-white/70 mt-1">
                    We&apos;ll respond promptly
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 flex-shrink-0 mt-0.5 text-white/90" />
                <div>
                  <p className="text-sm leading-6 text-white">
                    Address: 133 10 park road, Hurstville NSW 2220
                  </p>
                  <p className="text-sm text-white/70 mt-1">
                    Visit during business hours
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="mr-3 h-5 w-5 flex-shrink-0 mt-0.5 text-white/90" />
                <div>
                  <p className="text-sm text-white">Business Hours</p>
                  <p className="text-sm text-white/70 mt-1">Mon-Fri: 9am-6pm</p>
                  <p className="text-sm text-white/70">Sat: 10am-2pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">
              &copy; {new Date().getFullYear()} SecurePal. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/trust-centre"
                className="hover:text-white transition-colors"
              >
                Trust Centre
              </Link>
            </div>
          </div>
          <p className="text-sm text-white/70 text-center mt-2 mb-5 md:mb-auto">
            ABN: 36685653258
          </p>
        </div>
      </div>
    </footer>
  );
}
