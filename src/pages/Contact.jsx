import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  User,
  Building,
  Award,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: [
        "Bawe da kutya Lahore to Sheikhupura Road",
        "Opposite Fatima Fertilizer",
        "Pakistan",
      ],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+92 321 456 7890"],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@mindengineering.pk"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Mon - Fri: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 4:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-900 to-gray-800 text-white">
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Ready to discuss your LPG bowser requirements? Get in touch with our
            expert team for personalized solutions and competitive pricing.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            {/* Main Contact Information */}
            <div className="bg-white p-8 lg:p-12 rounded-lg shadow-lg">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary-900 mb-4">
                  Get in Touch
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  We're here to help with all your LPG bowser needs. Whether you
                  need a standard model or a custom solution, our team is ready
                  to assist you.
                </p>
              </div>

              {/* Contact Information Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-3">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className="text-gray-600 leading-relaxed"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Section */}
            <div className="mt-12 bg-primary-900 p-8 lg:p-12 rounded-lg shadow-lg text-white">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">
                  Why Choose Mind Engineering?
                </h3>
                <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                  Your trusted partner for premium LPG bowser manufacturing
                  solutions
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg">
                    10+ years of manufacturing experience
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg">500+ LPG bowsers manufactured</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg">
                    International safety standards compliance
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg">24/7 customer support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg">Custom solutions available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg">
                    Competitive pricing guaranteed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">
              Visit Our Facility
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Located on Lahore to Sheikhupura Road opposite Fatima Fertilizer,
              our state-of-the-art manufacturing facility is equipped with
              modern machinery and operated by skilled professionals.
            </p>
          </div>

          <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.0123456789!2d74.1234567890123!3d31.6789012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDQwJzQ0LjAiTiA3NMKwMDcnMjQuMCJF!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus&q=Bawe+da+kutya+Lahore+to+Sheikhupura+Road+Opposite+Fatima+Fertilizer+Pakistan"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mind Engineering Location"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">
                Easy Access
              </h3>
              <p className="text-gray-600">
                Conveniently located on Lahore to Sheikhupura Road
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">
                Flexible Hours
              </h3>
              <p className="text-gray-600">
                Extended business hours to accommodate client visits
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Round-the-clock customer support for urgent needs
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
