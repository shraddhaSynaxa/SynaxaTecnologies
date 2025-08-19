"use client";

import SectionTitle from "../Common/SectionTitle";
import { FaLightbulb, FaUsers, FaRocket } from "react-icons/fa";

export default function CompanyVision() {
  const highlights = [
    {
      icon: <FaLightbulb className="text-4xl text-primary mb-4" />,
      title: "Innovative Solutions",
      description:
        "We create digital tools that simplify business management and help companies grow efficiently."
    },
    {
      icon: <FaUsers className="text-4xl text-primary mb-4" />,
      title: "Customer-Centric Approach",
      description:
        "Every product is designed with real user needs in mind, ensuring meaningful impact and usability."
    },
    {
      icon: <FaRocket className="text-4xl text-primary mb-4" />,
      title: "Future-Ready Technology",
      description:
        "We leverage the latest technology to build scalable, flexible, and cutting-edge solutions for diverse industries."
    }
  ];

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-gray-dark">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Vision & Focus"
          paragraph="Building innovative solutions from day one to empower businesses and simplify operations."
          center
          mb="80px"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-white dark:bg-gray-dark rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {item.icon}
                <h3 className="mt-4 text-xl font-semibold text-black dark:text-white">{item.title}</h3>
                <p className="mt-2 text-body-color dark:text-body-color-dark">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
