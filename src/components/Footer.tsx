import { Baby, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-50 to-blue-50 border-t border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Baby className="h-8 w-8 text-pink-400" />
              <span className="text-xl font-semibold text-gray-800">Rama Kata</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Providing loving, reliable, and professional babysitting services for families in our community. 
              Your children's safety and happiness are our top priorities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-pink-400 hover:text-pink-500 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-pink-400 hover:text-pink-500 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-pink-400 hover:text-pink-500 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-pink-500 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-pink-500 transition-colors duration-200">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-600 hover:text-pink-500 transition-colors duration-200">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-pink-500 transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-pink-400" />
                <span className="text-gray-600">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-pink-400" />
                <span className="text-gray-600">hello@ramakata.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-pink-400" />
                <span className="text-gray-600">Local Area</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-pink-100 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © 2024 Rama Kata Babysitting Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 