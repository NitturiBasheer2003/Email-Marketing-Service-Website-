import React from "react";
import {
  FaPaperPlane,
  FaUsers,
  FaChartLine,
  FaSmile,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaPaperPlane />,
    number: "500K+",
    title: "Emails Sent",
    desc: "Successful email deliveries",
  },
  {
    icon: <FaUsers />,
    number: "1200+",
    title: "Leads Generated",
    desc: "High-quality leads generated",
  },
  {
    icon: <FaChartLine />,
    number: "250%",
    title: "Average ROI",
    desc: "Average return on investment",
  },
  {
    icon: <FaSmile />,
    number: "150+",
    title: "Clients Served",
    desc: "Happy clients worldwide",
  },
];

const Results = () => {
  return (
    <section className="results-section">
      <div className="container">

        <h6 className="results-subtitle">
          RESULTS
        </h6>

        <h2 className="results-title">
          Our Success in Numbers
        </h2>

        <p className="results-description">
          Helping businesses grow with powerful email marketing campaigns
          and measurable results.
        </p>

        <div className="stats-bar">

          <div className="row g-0">

            {stats.map((item, index) => (
              <div className="col-lg-3 col-md-6" key={index}>

                <div
                  className={`stats-item ${
                    index !== stats.length - 1 ? "border-end-custom" : ""
                  }`}
                >
                  <div className="stats-icon">
                    {item.icon}
                  </div>

                  <div className="stats-content">
                    <h3>{item.number}</h3>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Results;