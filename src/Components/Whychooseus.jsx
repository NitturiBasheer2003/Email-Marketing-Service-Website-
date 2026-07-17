import React from "react";
import {
  FaChartBar,
  FaArrowTrendUp,
  FaRegStar,
  FaUserTie,
} from "react-icons/fa6";

const chooseUs = [
  {
    icon: <FaChartBar />,
    color: "#2563EB",
    title: "High Open Rates",
    desc: "We create emails that get opened, read, and acted upon.",
  },
  {
    icon: <FaArrowTrendUp />,
    color: "#F97316",
    title: "Proven ROI",
    desc: "Our strategies deliver measurable results and high ROI.",
  },
  {
    icon: <FaRegStar />,
    color: "#10B981",
    title: "Industry Experience",
    desc: "Experience across multiple industries and business verticals.",
  },
  {
    icon: <FaUserTie />,
    color: "#8B5CF6",
    title: "Automation Experts",
    desc: "We build smart automation that saves time and increases revenue.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="whychoose-section">
      <div className="container">

        <h6 className="whychoose-subtitle">
          WHY CHOOSE US
        </h6>

        <h2 className="whychoose-title">
          Why Businesses Choose Us
        </h2>

        <div className="row g-4">

          {chooseUs.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>

              <div className="why-card">

                <div
                  className="why-icon"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>

                <div className="why-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;