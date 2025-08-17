import React from "react";
import { Link } from "react-router-dom";
import { Wrench, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-900 p-2 rounded-lg">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Mind Engineering</h3>
                <p className="text-gray-400 text-sm">
                  LPG Bowser Manufacturing
                </p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leading manufacturer of high-quality LPG bowsers in Pakistan,
              delivering reliable and safe solutions for the energy sector.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                About Us
              </Link>
              <Link
                to="/products"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Our Products
              </Link>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-1 flex-shrink-0" />
                <p className="text-gray-400">
                  Bawe da kutya Lahore to Sheikhupura Road,
                  <br />
                  Opposite Fatima Fertilizer, Pakistan
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <p className="text-gray-400">+92 321 456 7890</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <p className="text-gray-400">info@mindengineering.pk</p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Business Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary-400" />
                <div>
                  <p className="text-gray-400">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-400">Sat: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-400">Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Mind Engineering. All rights reserved. | Designed
            for excellence in LPG bowser manufacturing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
