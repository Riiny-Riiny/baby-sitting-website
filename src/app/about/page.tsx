import type { Metadata } from "next";
import { Heart, Shield, Users, Award, Baby, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "About – Rama Kata Babysitting Services",
  description: "Learn about Rama Kata's mission to provide loving, reliable babysitting services for families in our community.",
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Loving Care",
      description: "We treat every child like family, providing warm, nurturing care that makes them feel safe and loved."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "All our caregivers are background-checked, certified in CPR and first aid, and trained in child safety."
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Our caregivers have years of experience working with children of all ages and special needs."
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "We're committed to providing the highest quality babysitting services with attention to every detail."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Families" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Availability" },
    { number: "100%", label: "Background Checked" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              About <span className="text-pink-500">Rama Kata</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're passionate about providing families with reliable, loving, and professional babysitting services. 
              Your children's safety and happiness are our top priorities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Rama Kata, we believe every child deserves to be cared for with love, patience, and understanding. 
                Our mission is to provide families with peace of mind by offering reliable, professional babysitting services 
                that prioritize the safety, happiness, and well-being of every child in our care.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We understand that finding the right caregiver for your children is one of the most important decisions 
                a family can make. That's why we've built a team of experienced, certified, and loving caregivers 
                who are passionate about working with children.
              </p>
              <p className="text-lg text-gray-600">
                Whether you need regular childcare, overnight care, or emergency babysitting services, 
                we're here to support your family with the highest level of care and professionalism.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-blue-100 rounded-2xl p-8">
              <div className="flex items-center justify-center mb-6">
                <Baby className="h-16 w-16 text-pink-500" />
              </div>
              <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                Why Choose Us?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-pink-500 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Background-checked caregivers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-pink-500 p-2 rounded-full">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">CPR and first aid certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-pink-500 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Flexible scheduling options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-pink-500 p-2 rounded-full">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Experienced with all ages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and ensure we provide the best possible care for your children.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="bg-pink-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              By the Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has helped us serve hundreds of families in our community.
            </p>
          </div>
          
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

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who make Rama Kata the trusted choice for families in our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-pink-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sarah Johnson</h3>
              <p className="text-pink-500 font-medium mb-3">Lead Caregiver</p>
              <p className="text-gray-600">
                With over 8 years of experience working with children, Sarah leads our team with warmth and expertise.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-pink-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-10 w-10 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Maria Rodriguez</h3>
              <p className="text-pink-500 font-medium mb-3">Senior Caregiver</p>
              <p className="text-gray-600">
                Maria specializes in caring for infants and toddlers, bringing patience and love to every interaction.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-pink-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-10 w-10 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Emily Chen</h3>
              <p className="text-pink-500 font-medium mb-3">Certified Caregiver</p>
              <p className="text-gray-600">
                Emily is certified in early childhood education and brings creativity and learning to every session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the Rama Kata Difference?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Contact us today to learn more about our services and how we can support your family.
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