import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/lpg2.jpg";
import image2 from "../assets/lpg4.jpg";
import { productImages } from "../assets/images.js";
import {
  Shield,
  Award,
  Users,
  Wrench,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Advanced safety systems and compliance with international standards.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Premium materials and rigorous quality control processes.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Experienced engineers and skilled craftsmen dedicated to excellence.",
    },
    {
      icon: Wrench,
      title: "Custom Solutions",
      description:
        "Tailored LPG bowser solutions to meet specific client requirements.",
    },
  ];

  const products = [
    {
      name: "Standard LPG Bowser",
      capacity: "5,000L",
      image: productImages.lpg6,
      specs: [
        "High-grade steel construction",
        "Advanced safety valves",
        "GPS tracking system",
      ],
    },
    {
      name: "Heavy-Duty LPG Bowser",
      capacity: "10,000L",
      image: productImages.lpg8,
      specs: [
        "Reinforced chassis",
        "Digital monitoring",
        "Emergency shut-off systems",
      ],
    },
    {
      name: "Compact LPG Bowser",
      capacity: "3,000L",
      image: productImages.lpg3,
      specs: [
        "Space-efficient design",
        "Easy maneuverability",
        "Cost-effective solution",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-primary-900 to-gray-800">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(${productImages.lpg1})`,
          }}
        />
        <div className="relative z-10 text-center text-white container-max px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Mind Engineering
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Pakistan's premier manufacturer of high-quality LPG bowsers,
            delivering safety, reliability, and innovation to the energy sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center"
            >
              Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/products" className="btn-secondary">
              View Our Products
            </Link>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary-900 mb-6">
                Leading LPG Bowser Manufacturing
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With over a decade of experience in industrial manufacturing,
                Mind Engineering has established itself as Pakistan's most
                trusted name in LPG bowser production.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment to quality, safety, and innovation drives us to
                deliver superior products that meet international standards
                while serving local needs.
              </p>
            </div>
            <div className="relative">
              <img
                src={image1}
                alt="LPG Bowser Manufacturing"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-primary-900/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">
              Why Choose Mind Engineering?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with traditional craftsmanship
              to deliver exceptional LPG bowsers that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg card-hover text-center"
              >
                <div className="bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={image2}
                alt="Manufacturing Process"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 to-transparent rounded-lg"></div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-primary-900 mb-6">
                Our Manufacturing Excellence
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                State-of-the-art manufacturing facility equipped with modern
                machinery and operated by skilled professionals ensures every
                LPG bowser meets the highest quality standards.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">
                    ISO certified manufacturing processes
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">
                    Advanced welding and fabrication techniques
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">
                    Rigorous quality testing at every stage
                  </span>
                </div>
              </div>
              <Link
                to="/about"
                className="btn-primary inline-flex items-center"
              >
                Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">
              Our LPG Bowser Range
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of LPG bowsers designed to meet
              diverse industry requirements with uncompromising quality and
              safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden card-hover"
              >
                <div className="relative h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.capacity}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-900 mb-4">
                    {product.name}
                  </h3>
                  <ul className="space-y-2">
                    {product.specs.map((spec, specIndex) => (
                      <li
                        key={specIndex}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="btn-primary inline-flex items-center"
            >
              View All Products <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Partner with Pakistan's LPG Bowser Experts?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get in touch with our team today to discuss your LPG bowser
            requirements and receive a customized solution that fits your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary">
              Get Quote Today
            </Link>
            <Link
              to="/products"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
