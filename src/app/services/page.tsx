import type { Metadata } from "next";
import { Baby, Heart, Shield, Clock, Star, Users, Calendar, Phone } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services – Rama Kata Babysitting Services",
  description: "Explore our comprehensive babysitting services including regular care, overnight care, and emergency services.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: Baby,
      title: "Regular Babysitting",
      description: "Reliable, scheduled childcare for your family's routine needs. Perfect for working parents, date nights, or regular appointments.",
      price: "$15",
      features: [
        "Flexible scheduling options",
        "Experienced caregivers",
        "Safe and nurturing environment",
        "Activity planning and engagement",
        "Meal preparation and feeding",
        "Basic housekeeping (child-related)"
      ]
    },
    {
      icon: Heart,
      title: "Overnight Care",
      description: "Peace of mind with overnight babysitting services for special occasions, work trips, or when you need extended care.",
      price: "$20",
      features: [
        "Overnight stays (8+ hours)",
        "Emergency availability",
        "Comfort and bedtime routines",
        "Night feeding and care",
        "Early morning care",
        "24/7 support line"
      ]
    },
    {
      icon: Shield,
      title: "Emergency Care",
      description: "Last-minute babysitting when you need it most. Available 24/7 for unexpected situations and urgent care needs.",
      price: "$18",
      features: [
        "24/7 availability",
        "Quick response time",
        "Trusted emergency caregivers",
        "Flexible cancellation policy",
        "Same-day booking",
        "Priority scheduling"
      ]
    },
    {
      icon: Users,
      title: "Special Needs Care",
      description: "Specialized care for children with special needs, disabilities, or medical requirements. Our caregivers are trained and experienced.",
      price: "$20",
      features: [
        "Specialized training",
        "Medical condition experience",
        "Therapeutic activities",
        "Medication administration",
        "Communication with parents",
        "Individualized care plans"
      ]
    },
    {
      icon: Calendar,
      title: "Weekend & Holiday Care",
      description: "Extended care during weekends, holidays, and school breaks. Perfect for busy families and special occasions.",
      price: "$16",
      features: [
        "Weekend availability",
        "Holiday coverage",
        "Extended hours",
        "Special event care",
        "Activity planning",
        "Flexible scheduling"
      ]
    },
    {
      icon: Star,
      title: "Premium Care Package",
      description: "Our most comprehensive service including educational activities, meal preparation, light housekeeping, and detailed reporting.",
      price: "$25",
      features: [
        "Educational activities",
        "Meal preparation",
        "Light housekeeping",
        "Detailed daily reports",
        "Photo updates",
        "Activity planning"
      ]
    }
  ];

  const additionalServices = [
    {
      title: "Transportation",
      description: "Safe transportation to and from school, activities, or appointments.",
      price: "$5/hour additional"
    },
    {
      title: "Homework Help",
      description: "Educational support and homework assistance for school-age children.",
      price: "$3/hour additional"
    },
    {
      title: "Meal Preparation",
      description: "Healthy meal preparation and feeding for children of all ages.",
      price: "$2/hour additional"
    },
    {
      title: "Light Housekeeping",
      description: "Child-related housekeeping tasks to keep your home tidy.",
      price: "$3/hour additional"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Our <span className="text-pink-500">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of babysitting services to meet your family&apos;s unique needs. 
              From regular care to emergency situations, we&apos;re here to support you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of professional babysitting services designed to meet your family&apos;s needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your babysitting experience with these additional services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <div className="text-pink-500 font-semibold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Pricing & Policies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing and flexible policies to meet your family&apos;s needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Pricing Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Base Rate (per hour)</span>
                  <span className="font-semibold text-pink-500">$15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Overnight Care (8+ hours)</span>
                  <span className="font-semibold text-pink-500">$20/hour</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Emergency Care</span>
                  <span className="font-semibold text-pink-500">$18/hour</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Special Needs Care</span>
                  <span className="font-semibold text-pink-500">$20/hour</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Premium Package</span>
                  <span className="font-semibold text-pink-500">$25/hour</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Policies</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-pink-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Flexible Scheduling</h4>
                    <p className="text-gray-600 text-sm">Book as needed or set up regular schedules</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-pink-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Safety First</h4>
                    <p className="text-gray-600 text-sm">All caregivers are background-checked and certified</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-5 w-5 text-pink-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Cancellation Policy</h4>
                    <p className="text-gray-600 text-sm">Free cancellation up to 24 hours in advance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-pink-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">24/7 Support</h4>
                    <p className="text-gray-600 text-sm">Always available for questions and emergencies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Book Your Service?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Contact us today to discuss your needs and find the perfect service for your family.
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