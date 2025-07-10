import type { Metadata } from "next";
import Link from "next/link";
import { Baby, Heart, Shield, Clock, Star, ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Rama Kata Babysitting Services",
  description: "Professional, loving, and reliable babysitting services for families in our community.",
};

export default function HomePage() {
  const featuredServices = [
    {
      icon: Baby,
      title: "Regular Babysitting",
      description: "Reliable care for your little ones with flexible scheduling options.",
      price: "$15",
      features: ["Flexible hours", "Experienced caregivers", "Safe environment"]
    },
    {
      icon: Heart,
      title: "Overnight Care",
      description: "Peace of mind with overnight babysitting services for special occasions.",
      price: "$20",
      features: ["Overnight stays", "Emergency availability", "Comfort care"]
    },
    {
      icon: Shield,
      title: "Emergency Care",
      description: "Last-minute babysitting when you need it most.",
      price: "$18",
      features: ["24/7 availability", "Quick response", "Trusted caregivers"]
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "All our caregivers are background-checked and certified in CPR and first aid."
    },
    {
      icon: Heart,
      title: "Loving Care",
      description: "We treat every child like family, providing warm, nurturing care."
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Available when you need us, from early mornings to late nights."
    },
    {
      icon: Star,
      title: "Experienced Team",
      description: "Our caregivers have years of experience with children of all ages."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                Loving Care for Your
                <span className="text-pink-500"> Little Ones</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional, reliable, and caring babysitting services that give you peace of mind. 
                Your children&apos;s safety and happiness are our top priorities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center justify-center mb-6">
                  <Baby className="h-16 w-16 text-pink-400" />
                </div>
                <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                  Why Choose Rama Kata?
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-pink-100 p-2 rounded-full">
                        <feature.icon className="h-5 w-5 text-pink-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a range of babysitting services to meet your family's needs, 
              from regular care to emergency situations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 text-pink-500 hover:text-pink-600 font-semibold transition-colors duration-200"
            >
              <span>View All Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Parents Say
            </h2>
                           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                 Don&apos;t just take our word for it - hear from the families we&apos;ve had the pleasure of serving.
               </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
                             <blockquote className="text-gray-700 mb-4 italic">
                 &quot;Rama Kata has been a lifesaver for our family. The caregivers are so loving and professional. Highly recommend!&quot;
               </blockquote>
              <p className="font-semibold text-gray-800">- Sarah M.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
                             <blockquote className="text-gray-700 mb-4 italic">
                 &quot;We&apos;ve been using their services for over a year now. Always reliable and our kids love them!&quot;
               </blockquote>
              <p className="font-semibold text-gray-800">- Michael T.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
                             <blockquote className="text-gray-700 mb-4 italic">
                 &quot;The emergency care service is amazing. They&apos;ve helped us out of tight spots multiple times.&quot;
               </blockquote>
              <p className="font-semibold text-gray-800">- Jennifer L.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="inline-flex items-center space-x-2 text-pink-500 hover:text-pink-600 font-semibold transition-colors duration-200"
            >
              <span>Read More Testimonials</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Contact us today to discuss your babysitting needs and find the perfect caregiver for your family.
          </p>
          <Link
            href="/contact"
            className="bg-white text-pink-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Contact Us</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
