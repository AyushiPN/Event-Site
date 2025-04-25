import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-secondary-600 to-secondary-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3 mb-8 lg:mb-0 lg:pr-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
              Let's Create Your Perfect Event Together
            </h2>
            <p className="text-white/90 text-lg mb-6 max-w-2xl">
              Whether you're planning a wedding, corporate event, or birthday celebration, our team of experts will bring your vision to life with exceptional attention to detail.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center">
                <div className="bg-white/20 rounded-full p-1 mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span>Personalized event planning and coordination</span>
              </li>
              <li className="flex items-center">
                <div className="bg-white/20 rounded-full p-1 mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span>Curated selection of premium vendors and venues</span>
              </li>
              <li className="flex items-center">
                <div className="bg-white/20 rounded-full p-1 mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span>Bespoke decor and styling to match your vision</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3"
          >
            <div className="bg-white rounded-lg p-8 shadow-elegant">
              <h3 className="text-secondary-700 font-serif text-2xl font-semibold mb-4">
                Request a Consultation
              </h3>
              <p className="text-gray-600 mb-6">
                Take the first step toward your dream event. Our consultations are complimentary and come with no obligations.
              </p>
              <Link to="/contact">
                <Button variant="primary" fullWidth>
                  Schedule Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;