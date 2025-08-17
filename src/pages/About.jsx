import React from "react";
import { productImages } from "../assets/images.js";
import {
  Shield,
  Award,
  Users,
  Target,
  CheckCircle,
  Factory,
} from "lucide-react";

const About = () => {
  const whyChooseUs = [
    {
      icon: Factory,
      title: "Advanced Manufacturing",
      description:
        "State-of-the-art facility with modern equipment and technology",
    },
    {
      icon: Shield,
      title: "Safety Standards",
      description: "Compliance with international safety and quality standards",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "Rigorous testing and quality control at every production stage",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced engineers and skilled technicians",
    },
    {
      icon: Target,
      title: "Customer Focus",
      description: "Customized solutions tailored to specific client needs",
    },
  ];

  const achievements = [
    { number: "500+", label: "LPG Bowsers Manufactured" },
    { number: "50+", label: "Satisfied Clients" },
    { number: "10+", label: "Years of Experience" },
    { number: "100%", label: "Quality Assurance" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-900 to-gray-800 text-white">
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Mind Engineering
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Pakistan's most trusted manufacturer of high-quality LPG bowsers,
            committed to excellence, safety, and innovation in industrial
            solutions.
          </p>
        </div>
      </section>

      {/* Company History & Mission */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-primary-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded in 2013, Mind Engineering emerged from a vision to
                revolutionize Pakistan's LPG bowser manufacturing industry.
                Starting as a small workshop with big dreams, we have grown into
                the country's leading manufacturer of premium LPG bowsers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our journey began with a commitment to bridge the gap between
                international quality standards and local manufacturing
                capabilities. Through continuous innovation and unwavering
                dedication to quality, we have earned the trust of clients
                across Pakistan and beyond.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">
                    Established in 2013 with a vision for excellence
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">
                    Continuous growth and technological advancement
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">
                    Recognition as industry leader in Pakistan
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={productImages.lpg5}
                alt="Mind Engineering Factory"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-primary-900/10 rounded-lg"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src={productImages.lpg7}
                alt="LPG Bowser Manufacturing"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 to-transparent rounded-lg"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-primary-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To be Pakistan's premier manufacturer of LPG bowsers by
                delivering innovative, safe, and reliable solutions that exceed
                customer expectations while contributing to the country's energy
                infrastructure development.
              </p>
              <h3 className="text-2xl font-semibold text-primary-900 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To establish Mind Engineering as the regional leader in LPG
                bowser manufacturing, recognized for our commitment to quality,
                innovation, and customer satisfaction across South Asia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and the trust
              our clients place in our capabilities.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
                  <h3 className="text-4xl font-bold text-primary-900 mb-2">
                    {achievement.number}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {achievement.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">
              Why Choose Mind Engineering?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence is reflected in every aspect of our
              operations, from design to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg card-hover">
                <div className="bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Manufacturing Excellence
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                Our manufacturing process combines traditional craftsmanship
                with modern technology to ensure every LPG bowser meets the
                highest standards of quality and safety.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="text-gray-200">
                    Computer-aided design and engineering
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="text-gray-200">
                    Advanced welding and fabrication techniques
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="text-gray-200">
                    Multi-stage quality testing and inspection
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="text-gray-200">
                    Final assembly and quality assurance
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6870318/pexels-photo-6870318.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Manufacturing Team"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Behind every quality LPG bowser is a team of dedicated
              professionals committed to excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Engineering Team"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 to-transparent rounded-lg"></div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary-900 mb-6">
                Engineering Excellence
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our team consists of experienced mechanical engineers, skilled
                welders, quality control specialists, and project managers who
                work together to deliver exceptional results.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">
                    Certified mechanical engineers
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">
                    Skilled welding and fabrication specialists
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">
                    Quality assurance professionals
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">
                    Dedicated customer service team
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
