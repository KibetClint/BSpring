// src/pages/AboutPage.jsx
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Main content container */}
      <div className="container mx-auto px-4 py-12">
        {/* About us section with triangular image layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Left column with text */}
          <div className="pr-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-12">
              ABOUT US
            </h1>
            <div className="mb-12">
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Brickspring Enterprises, we are a leading IT firm dedicated
                to revolutionizing how weight scales and computers work
                together. Established in 2023, our company stands at the
                forefront of innovation, delivering cutting-edge solutions that
                empower businesses and individuals to optimize their operations
                with ease and efficiency.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-primary mb-4">
              About Our Company
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We believe seamless technology integration should be accessible,
              intuitive, and tailored to each client's needs. By unifying
              hardware, software, and data management into one cohesive system,
              we help organizations streamline workflows, reduce errors, and
              gain actionable insights. Our passionate team continually refines
              its methods to ensure that every solution is both forward-thinking
              and user-friendly, enabling our clients to stay ahead in a rapidly
              evolving market.
            </p>
          </div>

          {/* Right column with triangular images */}
          <div className="relative w-full h-auto">
            {/* Large top triangle */}
            <div
              className="w-full aspect-square relative overflow-hidden"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              }}
            >
              <img
                src="/src/images/beautiful-architecture-building.jpg"
                alt="City skyline at night"
                className="absolute w-full h-full object-cover"
              />
            </div>

            {/* Bottom-left triangle */}
            <div
              className="absolute bottom-0 left-0 w-1/2 aspect-square hidden md:block"
              style={{
                clipPath: 'polygon(0 100%, 100% 0, 100% 100%)',
              }}
            >
              <img
                src="/src/images/shiny-night-city.jpg"
                alt="Modern architecture"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Small dots pattern at bottom (centered) */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-gray-300 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
