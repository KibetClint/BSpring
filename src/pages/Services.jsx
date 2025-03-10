// src/pages/Services.jsx

import { Link } from "react-router-dom";

const Services = () => {
  // Services data
  const services = [
    {
      id: "01",
      title: "Automated Scale Integration",
      description:
        "Implemented a system that automatically captures weight data from multiple scales, reducing manual errors and giving teams instant, reliable insights for faster decision-making.",
    },
    {
      id: "02",
      title: "Real-Time Inventory Tracking",
      description:
        "Linked specialized scales to a central platform, allowing businesses to track stock levels in real time, avoid stockouts, and improve order fulfillment efficiency.",
    },
    {
      id: "03",
      title: "Custom POS Development",
      description:
        "Created a point-of-sale solution that syncs scale readings with product databases and sales records, streamlining checkout and enhancing financial oversight.",
    },
    {
      id: "04",
      title: "Warehouse Data Analytics",
      description:
        "Built an analytics dashboard that consolidates warehouse metrics, such as weight measurements and item counts, enabling more accurate demand forecasting and resource planning.",
    },
    {
      id: "05",
      title: "E-Commerce Integration",
      description:
        "Developed a seamless link between online storefronts and inventory systems, ensuring every digital transaction updates stock levels in real time and triggers scale-based verifications.",
    },
    {
      id: "06",
      title: "Scalable Network Infrastructure",
      description:
        "Designed and deployed a robust computer network to handle high data volumes from scales, POS terminals, and other devices, ensuring stable performance and future-ready scalability.",
    },
  ];

  return (
    <div className="min-h-screen bg-cream-50 relative overflow-hidden">
      {/* Main content container */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        {/* Services section heading */}
        <div className="mb-16 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-primary border-2 border-primary inline-block px-4 py-2">
            OUR SERVICES
          </h1>
        </div>

        {/* Right-side triangular background image (now visible on all screen sizes) */}
        <div
          className="block absolute top-0 right-0 w-1/2 md:w-1/3 h-full z-0"
          style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
        >
          <img
            src="/src/images/shiny-night-city.jpg"
            alt="City skyline"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Green triangle corner at bottom right (also visible on all screens) */}
        <div
          className="block absolute bottom-0 right-0 w-1/3 md:w-1/4 h-1/4 bg-primary z-0"
          style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
        ></div>

        {/* Services grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex items-start bg-white shadow-md rounded p-4"
            >
              {/* Numbered box */}
              <div className="flex-shrink-0 mr-4">
                <div className="w-16 h-16 bg-primary text-white flex items-center justify-center text-2xl font-bold">
                  {service.id}
                </div>
              </div>

              {/* Service content */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
