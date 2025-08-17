import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Shield, Gauge, Wrench, ArrowRight } from "lucide-react";
import { productImages } from "../assets/images.js";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Standard LPG Bowser",
      capacity: "5,000L",
      image: productImages.lpg6,
      description:
        "Perfect for medium-scale distribution operations with optimal balance of capacity and maneuverability.",
      specifications: [
        "Tank Capacity: 5,000 Liters",
        "Material: High-grade steel construction",
        "Safety: Advanced pressure relief valves",
        "Monitoring: Digital display system",
        "Chassis: Reinforced steel frame",
        "Compliance: International safety standards",
      ],
      features: [
        "GPS tracking system",
        "Emergency shut-off mechanisms",
        "Anti-static protection",
        "Leak detection system",
        "Temperature monitoring",
        "Pressure gauges",
      ],
    },
    {
      id: 2,
      name: "Heavy-Duty LPG Bowser",
      capacity: "10,000L",
      image: productImages.lpg8,
      description:
        "Industrial-grade solution for large-scale LPG distribution with maximum capacity and advanced safety features.",
      specifications: [
        "Tank Capacity: 10,000 Liters",
        "Material: Premium alloy steel",
        "Safety: Multi-layer safety systems",
        "Monitoring: Advanced digital controls",
        "Chassis: Heavy-duty reinforced frame",
        "Certification: International compliance",
      ],
      features: [
        "Real-time GPS tracking",
        "Automated safety systems",
        "Remote monitoring capability",
        "Advanced leak detection",
        "Temperature control system",
        "Digital flow meters",
      ],
    },
    {
      id: 3,
      name: "Compact LPG Bowser",
      capacity: "3,000L",
      image: productImages.lpg3,
      description:
        "Space-efficient design ideal for urban distribution and smaller operations without compromising on safety.",
      specifications: [
        "Tank Capacity: 3,000 Liters",
        "Material: Quality steel construction",
        "Safety: Essential safety features",
        "Monitoring: Basic digital system",
        "Chassis: Compact reinforced frame",
        "Standards: Local safety compliance",
      ],
      features: [
        "Easy maneuverability",
        "Cost-effective solution",
        "Essential safety features",
        "Compact design",
        "Efficient loading system",
        "Basic monitoring",
      ],
    },
    {
      id: 4,
      name: "Custom LPG Bowser",
      capacity: "Variable",
      image: productImages.lpg11,
      description:
        "Tailored solutions designed to meet specific client requirements with customizable features and capacity.",
      specifications: [
        "Tank Capacity: As per requirement",
        "Material: Client-specified grade",
        "Safety: Customized safety systems",
        "Monitoring: As per specifications",
        "Chassis: Custom design",
        "Features: Client requirements",
      ],
      features: [
        "Customizable capacity",
        "Tailored safety features",
        "Bespoke monitoring systems",
        "Custom chassis design",
        "Specialized attachments",
        "Client-specific requirements",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-900 to-gray-800 text-white">
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our LPG Bowser Range
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive range of high-quality LPG bowsers engineered for
            safety, reliability, and optimal performance in diverse industrial
            applications.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="space-y-16">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-row-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="rounded-lg shadow-xl w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 to-transparent rounded-lg"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-900 text-white px-4 py-2 rounded-full text-lg font-semibold">
                        {product.capacity}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className={
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }
                >
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-primary-900 mb-4">
                      {product.name}
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Specifications */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-primary-900 mb-4 flex items-center">
                        <Gauge className="h-5 w-5 mr-2" />
                        Technical Specifications
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {product.specifications.map((spec, specIndex) => (
                          <div
                            key={specIndex}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">
                              {spec}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-primary-900 mb-4 flex items-center">
                        <Shield className="h-5 w-5 mr-2" />
                        Key Features
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {product.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-2"
                          >
                            <Wrench className="h-4 w-4 text-primary-600 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="btn-primary inline-flex items-center"
                    >
                      Get Quote <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">
              Quality Assurance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every LPG bowser undergoes rigorous testing and quality control to
              ensure it meets our high standards and client expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Safety Testing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive safety testing including pressure tests, leak
                detection, and emergency system validation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Quality Control
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Multi-stage quality control process ensuring every component
                meets international standards and specifications.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gauge className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Performance Testing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Thorough performance testing to verify operational efficiency,
                durability, and reliability under various conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need a Custom LPG Bowser Solution?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Our engineering team can design and manufacture LPG bowsers tailored
            to your specific requirements and operational needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary">
              Request Custom Quote
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Learn About Our Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
