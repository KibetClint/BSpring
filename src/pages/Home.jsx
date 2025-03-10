// src/pages/Home.jsx (for example)

import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen w-full text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-green-700 mb-4">
              Brickspring Enterprises
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Revolutionizing the integration of weight scales and computers to
              help businesses thrive.
            </p>
            <a
              href="#about"
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            >
              Learn More
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Replace with your preferred hero image */}
            <img
              src="/src/images/beautiful-architecture-building.jpg"
              alt="Hero illustration"
              className="rounded-md shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 bg-gray-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Company Overview
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Brickspring Enterprises, we are a leading IT firm dedicated to
            revolutionizing the integration of technology in the fields of
            weight scales and computers. Established in 2023, our company stands
            at the forefront of innovation, offering cutting-edge solutions that
            empower businesses and individuals to optimize their operations
            efficiently.
          </p>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to provide innovative and reliable technology
                solutions tailored to the specific needs of our clients. We
                strive to enhance productivity and accuracy through our
                state-of-the-art computing solutions and precision scale
                technology, ensuring our clients achieve operational excellence.
              </p>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We envision a future where technology seamlessly integrates into
                various industries, improving processes and driving growth. Our
                vision is to be the go-to firm recognized for pioneering
                advancements in weight scale technology and computer systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-4 rounded shadow">
              <h4 className="font-bold text-green-600 mb-2">Quality</h4>
              <p className="text-sm text-gray-600">
                We are dedicated to delivering high-quality products and
                services that exceed industry standards.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded shadow">
              <h4 className="font-bold text-green-600 mb-2">
                Customer Satisfaction
              </h4>
              <p className="text-sm text-gray-600">
                Our clients are at the heart of everything we do, and their
                satisfaction is our top priority.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded shadow">
              <h4 className="font-bold text-green-600 mb-2">Innovation</h4>
              <p className="text-sm text-gray-600">
                We foster a culture of innovation, continually seeking new ways
                to enhance technology and improve user experiences.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded shadow">
              <h4 className="font-bold text-green-600 mb-2">Integrity</h4>
              <p className="text-sm text-gray-600">
                We operate with honesty, transparency, and integrity in all our
                dealings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services / Offerings */}
      <section className="py-12 bg-gray-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Our Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* IoT Tools */}
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                IoT-Connected Scale Solutions
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                We integrate scales and other sensors with a central platform
                for real-time data and analytics, enabling accurate inventory
                tracking and reduced errors.
              </p>
              <p className="text-sm text-gray-700">
                <strong>Customer Satisfaction:</strong> 94.43%<br />
                <strong>Gross Profit Projection:</strong> $192.1M
              </p>
            </div>
            {/* AI Solutions */}
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                AI-Driven Insights
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                Our AI algorithms provide predictive analytics and intelligent
                automation to help businesses forecast demand and optimize
                resources.
              </p>
              <p className="text-sm text-gray-700">
                <strong>Adoption Rate:</strong> 67%<br />
                <strong>Customer Satisfaction:</strong> 96.17%<br />
                <strong>Gross Profit Projection:</strong> $98.7M
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Footer */}
      <section className="bg-green-700 text-white py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Grow With Us?</h2>
          <p className="mb-6">
            Join the growing number of businesses leveraging Brickspring’s
            technology to streamline operations, cut costs, and embrace the
            future of integrated scale-computing solutions.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-3 bg-white text-green-700 font-semibold rounded-md hover:bg-gray-100 transition"
          >
            Get Started
          </a>
        </div>
      </section>
    </main>
  );
}
