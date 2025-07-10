import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact – Rama Kata Babysitting Services",
  description: "Get in touch with Rama Kata for professional babysitting services. We're here to help with all your childcare needs.",
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-4567",
      description: "Call us anytime for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@ramakata.com",
      description: "Send us a message and we'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Service Area",
      details: "Local Community",
      description: "Serving families in our local area"
    },
    {
      icon: Clock,
      title: "Availability",
      details: "24/7 Service",
      description: "Emergency care available around the clock"
    }
  ];

  const faqs = [
    {
      question: "How do I book a babysitter?",
      answer: "You can book a babysitter by calling us, sending an email, or filling out our contact form. We'll discuss your needs and match you with the perfect caregiver."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We offer free cancellation up to 24 hours in advance. For emergency situations, we understand and work with you to reschedule."
    },
    {
      question: "Are your caregivers background-checked?",
      answer: "Yes, all our caregivers undergo thorough background checks and are certified in CPR and first aid. Your children's safety is our top priority."
    },
    {
      question: "Do you offer emergency babysitting?",
      answer: "Yes, we offer 24/7 emergency babysitting services. We understand that unexpected situations arise and we're here to help."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Get in <span className="text-pink-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to experience the Rama Kata difference? Contact us today to discuss your babysitting needs 
              and find the perfect caregiver for your family.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours. 
                We're here to answer any questions and help you find the perfect babysitting solution.
              </p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                We're here to help with all your childcare needs. Reach out to us through any of these channels.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-pink-100 p-3 rounded-full">
                      <info.icon className="h-6 w-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{info.title}</h3>
                      <p className="text-pink-500 font-medium mb-1">{info.details}</p>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-12 bg-gradient-to-br from-pink-50 to-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Emergency Care</span>
                    <span className="font-medium text-pink-500">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our babysitting services.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <MessageCircle className="h-5 w-5 text-pink-500 mr-3" />
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly serve families in our local community and surrounding areas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Primary Service Area</h3>
              <p className="text-gray-600">
                Downtown and surrounding neighborhoods within 15 miles of our location.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Extended Service Area</h3>
              <p className="text-gray-600">
                Additional areas within 25 miles, subject to availability and scheduling.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Special Arrangements</h3>
              <p className="text-gray-600">
                We can accommodate special requests for areas outside our normal service range.
              </p>
            </div>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="bg-white text-pink-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </a>
            <a
              href="mailto:hello@ramakata.com"
              className="border-2 border-white text-white hover:bg-white hover:text-pink-500 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>Send Email</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 