"use client";

import SectionTitle from "../Common/SectionTitle";

export default function CompanyJourneyFlow() {
  const journeySteps = [
    {
      year: "Before 2025",
      title: "Real Estate Expertise",
      description:
        "Our founders gained extensive experience in the real estate industry, understanding business operations, client needs, and property management solutions."
    },
    {
      year: "2025",
      title: "Company Founded",
      description:
        "Leveraging our real estate background, we founded the company to deliver digital solutions that simplify business management and operations."
    },
    {
      year: "2025 Q3",
      title: "Initial Product Development",
      description:
        "Started designing software tools to streamline real estate workflows, property management, and client engagement."
    },
    {
      year: "2025 Q4",
      title: "Beta Launch",
      description:
        "Launching our first product beta for select clients, collecting feedback to refine and scale our solutions."
    },
    {
      year: "2026",
      title: "Official Launch",
      description:
        "Preparing for a full-scale launch, expanding offerings, and bringing innovative business solutions to multiple industries."
    }
  ];

  return (
    <section className="relative z-10 py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-dark">
      <div className="container">
        <SectionTitle
          title="Our Journey"
          paragraph="From a strong foundation in real estate to pioneering innovative software solutions."
          center
          mb="80px"
        />

        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {journeySteps.map((step, index) => (
            <div key={index} className="relative flex-1 flex flex-col items-center text-center md:text-left">
              {/* Dot */}
              <div className="w-6 h-6 rounded-full bg-primary z-10"></div>

              {/* Line connecting dots */}
              {index !== journeySteps.length - 1 && (
                <div className="hidden md:block absolute top-3 left-1/2 w-full h-1 bg-primary/30 z-0"></div>
              )}

              {/* Step content */}
              <div className="mt-4 max-w-xs">
                <span className="text-primary font-bold text-lg">{step.year}</span>
                <h3 className="mt-2 text-xl font-semibold text-black dark:text-white">{step.title}</h3>
                <p className="mt-2 text-body-color dark:text-body-color-dark">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
