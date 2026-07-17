import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const plans = [
  {
    title: "Starter",
    price: "₹4,999",
    popular: false,
    features: [
      "Up to 10,000 Emails",
      "Basic Automation",
      "Email Templates",
      "Campaign Reports",
      "Email Support",
    ],
  },
  {
    title: "Growth",
    price: "₹9,999",
    popular: true,
    features: [
      "Up to 50,000 Emails",
      "Advanced Automation",
      "A/B Testing",
      "Detailed Analytics",
      "Priority Support",
    ],
  },
  {
    title: "Premium",
    price: "₹14,999",
    popular: false,
    features: [
      "Unlimited Emails",
      "AI Email Personalization",
      "CRM Integration",
      "Advanced Analytics",
      "Dedicated Manager",
    ],
  },
];

const PlansPricing = () => {
  return (
    <section className="pricing-section">
      <div className="container">

        <h6 className="pricing-subtitle">
          PRICING PLANS
        </h6>

        <h2 className="pricing-title">
          Choose Your Perfect Plan
        </h2>

        <p className="pricing-description">
          Affordable pricing plans for businesses of every size.
        </p>

        <div className="row g-4">

          {plans.map((plan, index) => (
            <div className="col-lg-4 col-md-6" key={index}>

              <div className="pricing-card">

                {plan.popular && (
                  <div className="popular-badge">
                    MOST POPULAR
                  </div>
                )}

                <h3>{plan.title}</h3>

                <div className="price">
                  {plan.price}
                  <span>/month</span>
                </div>

                <ul>

                  {plan.features.map((item, i) => (
                    <li key={i}>
                      <FaCheckCircle className="check-icon" />
                      {item}
                    </li>
                  ))}

                </ul>

                <button className="pricing-btn">
                  Get Started
                  <FaArrowRight className="ms-2" />
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default PlansPricing;