import type { Metadata } from "next";
import TestimonialCard from "@/components/TestimonialCard";

export const metadata: Metadata = {
  title: "Testimonials – Rama Kata Babysitting Services",
  description: "Read what our happy families have to say about Rama Kata's babysitting services.",
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      comment: "Rama Kata has been a lifesaver for our family. The caregivers are so loving and professional. Our kids look forward to their visits!",
      date: "March 2024",
      children: "Mother of 2"
    },
    {
      name: "Michael T.",
      rating: 5,
      comment: "We've been using their services for over a year now. Always reliable and our kids love them! The emergency care service is especially amazing.",
      date: "February 2024",
      children: "Father of 3"
    },
    {
      name: "Jennifer L.",
      rating: 5,
      comment: "The emergency care service is amazing. They've helped us out of tight spots multiple times. Professional, caring, and trustworthy.",
      date: "January 2024",
      children: "Mother of 1"
    },
    {
      name: "David R.",
      rating: 5,
      comment: "Our regular babysitter from Rama Kata is like part of the family. She's been with us for 8 months and our daughter adores her.",
      date: "December 2023",
      children: "Father of 2"
    },
    {
      name: "Lisa K.",
      rating: 5,
      comment: "As a single parent, I was nervous about finding reliable childcare. Rama Kata exceeded my expectations. Highly recommend!",
      date: "November 2023",
      children: "Mother of 1"
    },
    {
      name: "Robert C.",
      rating: 5,
      comment: "The overnight care service is fantastic. We had a work trip and felt completely at ease knowing our kids were in good hands.",
      date: "October 2023",
      children: "Father of 2"
    },
    {
      name: "Amanda S.",
      rating: 5,
      comment: "Our son has special needs and Rama Kata's caregivers are incredibly patient and understanding. They truly go above and beyond.",
      date: "September 2023",
      children: "Mother of 1"
    },
    {
      name: "Thomas B.",
      rating: 5,
      comment: "The weekend care service is perfect for our busy schedule. The caregivers are always punctual and our kids have a great time.",
      date: "August 2023",
      children: "Father of 3"
    },
    {
      name: "Maria G.",
      rating: 5,
      comment: "We've tried many babysitting services, but Rama Kata is by far the best. Professional, caring, and always available when we need them.",
      date: "July 2023",
      children: "Mother of 2"
    }
  ];

  const stats = [
    { number: "4.9", label: "Average Rating" },
    { number: "500+", label: "Happy Families" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "5+", label: "Years of Service" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              What Parents <span className="text-pink-500">Say</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it - hear from the families we&apos;ve had the pleasure of serving. 
              Our commitment to excellence speaks through the experiences of our happy clients.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-pink-500 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Customer Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real families who trust Rama Kata with their children&apos;s care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-pink-100 to-blue-100 rounded-2xl p-12 text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, index) => (
                <svg key={index} className="h-8 w-8 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl text-gray-800 mb-8 italic">
              &quot;Rama Kata has transformed our family&apos;s life. As working parents, we needed reliable, loving childcare, and they delivered beyond our expectations. Our children are not just cared for—they&apos;re loved, educated, and happy. The caregivers are like family to us now.&quot;
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="bg-pink-500 p-3 rounded-full">
                <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-800 text-lg">The Johnson Family</p>
                <p className="text-gray-600">Long-term clients since 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Families Choose Rama Kata
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and love for children sets us apart from other babysitting services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-pink-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="h-8 w-8 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Loving Care</h3>
              <p className="text-gray-600">
                Our caregivers treat every child like family, providing warm, nurturing care that makes children feel safe and loved.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-pink-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="h-8 w-8 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Safety First</h3>
              <p className="text-gray-600">
                All our caregivers are background-checked, certified in CPR and first aid, and trained in child safety protocols.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-pink-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="h-8 w-8 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Reliability</h3>
              <p className="text-gray-600">
                We understand the importance of being there when you need us. Our caregivers are punctual, dependable, and always available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Happy Families
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Experience the Rama Kata difference and give your children the care they deserve.
          </p>
          <a
            href="/contact"
            className="bg-white text-pink-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-block"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
} 