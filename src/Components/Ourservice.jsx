import React from "react";
import {
  FaEnvelope,
  FaPaperPlane,
  FaCog,
  FaRegNewspaper,
  FaUsers,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const services = [
  {
    icon: <MdEmail />,
    color: "#2563EB",
    title: "Email Campaign Setup",
    desc: "Professional email campaign setup that drives maximum engagement.",
  },
  {
    icon: <FaPaperPlane />,
    color: "#F97316",
    title: "Bulk Email Marketing",
    desc: "Reach your audience with high-deliverability bulk email campaigns.",
  },
  {
    icon: <FaCog />,
    color: "#10B981",
    title: "Automation (Funnels)",
    desc: "Automated email workflows that nurture leads and boost conversions.",
  },
  {
    icon: <FaRegNewspaper />,
    color: "#8B5CF6",
    title: "Newsletter Design",
    desc: "Beautiful, responsive newsletter designs that represent your brand.",
  },
  {
    icon: <FaUsers />,
    color: "#06B6D4",
    title: "Lead Nurturing",
    desc: "Nurture your leads with targeted emails and turn them into customers.",
  },
  {
    icon: <FaEnvelope />,
    color: "#EC4899",
    title: "Cold Email Outreach",
    desc: "Effective cold email outreach to generate leads and business opportunities.",
  },
];

const Ourservice = () => {
  return (
    <section className="services-section">
      <div className="container">

        <h6 className="services-subtitle">
          OUR SERVICES
        </h6>

        <h2 className="services-title">
          Our Email Marketing Services
        </h2>

        <div className="row g-4">

          {services.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="service-card">

                <div
                  className="service-icon"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>

                <div className="service-content">
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

export default Ourservice;