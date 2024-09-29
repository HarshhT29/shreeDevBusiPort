import React, { useState } from 'react'
import ContentWrapper from '../components/contentWrapper/ContentWrapper';

const ContactUs = () => {
  return (
    <div className="main-container pt-24 mb-20">
      <ContentWrapper>

        <div className='text-center mb-10'>
          <h1 className='text-4xl font-bold text-gray-800 '>Contact Us</h1>
          <p className='mt-4 text-lg text-gray-600'>We'd love to hear from you. Get in touch with us!</p>
        </div>

        <div className="details mt-10 flex flex-col md:flex-row justify-between items-start gap-10">

          {/* Left Side - Location/Details */}
          <div className="location-info text-gray-600 text-base leading-relaxed md:w-1/2 ">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Office</h2>
            <p>1234 Business Avenue, Suite 100</p>
            <p>New York, NY 10001</p>
            <p className="mt-2">Phone: (123) 456-7890</p>
            <p>Email: contact@yourcompany.com</p>

            {/* Google Maps Iframe */}
            <div className="mt-6">
              <iframe
                title="company-location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.997585772669!2d-74.00597228459883!3d40.71277597933025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316ad02e51%3A0x9b048b2b9a3a8db7!2s1234%20Business%20Ave%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1627556814530!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form className="border border-gray-600 shadow-lg rounded-lg p-8 w-full md:w-1/2 bg-white">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Send us a Message</h2>

            <div className="mb-6 flex gap-4">
              <div className="w-1/2">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="first-name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out transform"
                  placeholder="First Name"
                />
              </div>

              <div className="w-1/2">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  name="last-name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out transform"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out transform "
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="phone-no" className="block text-sm font-medium text-gray-700 mb-2">
                Phone No<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone-no"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out transform "
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out transform "
                rows="4"
                placeholder="Write your message"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#f4f0ea] dark:text-[#271212] text-white px-6 py-2 rounded-md transition-all duration-200 ease-in-out transform hover:scale-110"
              >
                Send Message
              </button>
            </div>
          </form>

        </div>

      </ContentWrapper>
    </div>
  )
}

export default ContactUs
