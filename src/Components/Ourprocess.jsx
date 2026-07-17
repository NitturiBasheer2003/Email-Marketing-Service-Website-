import React from "react";
import {
  FaSearch,
  FaBullseye,
  FaPencilAlt,
  FaCog,
  FaChartBar,
} from "react-icons/fa";

const processSteps = [
  {
    number: "1",
    color: "#2563EB",
    icon: <FaSearch />,
    title: "Understand Your Business",
    desc: "We learn about your business, goals, and target audience.",
  },
  {
    number: "2",
    color: "#F97316",
    icon: <FaBullseye />,
    title: "Build Email Strategy",
    desc: "We create a custom email marketing strategy for your business.",
  },
  {
    number: "3",
    color: "#14B8A6",
    icon: <FaPencilAlt />,
    title: "Design Campaigns",
    desc: "We design engaging emails that match your brand and resonate with your audience.",
  },
  {
    number: "4",
    color: "#8B5CF6",
    icon: <FaCog />,
    title: "Automation Setup",
    desc: "We set up automated workflows to nurture leads and save time.",
  },
  {
    number: "5",
    color: "#2563EB",
    icon: <FaChartBar />,
    title: "Track & Improve Performance",
    desc: "We track results and continuously optimize for better performance.",
  },
];

const OurProcess = () => {
  return (
    <section className="process-section">
      <div className="container">

        <h6 className="process-subtitle">
          OUR PROCESS
        </h6>

        <h2 className="process-title">
          Our Proven Process
        </h2>

        <div className="process-wrapper">
       
          <div className="process-line"></div>

          <div className="row g-4">
            {processSteps.map((item, index) => (
              <div className="col-lg col-md-4 col-12" key={index}>
                <div className="process-card">
                  <div
                    className="step-number"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.number}
                  </div>

                  <div className="process-icon">
                    <span style={{ color: item.color }}>
                      {item.icon}
                    </span>
                  </div>

                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurProcess;