import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import image1 from "../Assests/Client-1.jpeg";
import image2 from "../Assests/client-2.webp";
import image3 from "../Assests/Client-3.png";
import image4 from "../Assests/Client-4.png";
import image5 from "../Assests/Client-5.png";
const reviews = [
  {
    image: image4,
    name: "John Smith",
    role: "CEO, TechSolutions",
    review:
      "The email campaigns created by MailBoost increased our sales by 300% in just 3 months. Highly recommended!",
  },
  {
    image: image2,
    name: "Sarah Johnson",
    role: "Marketing Manager",
    review:
      "Professional team with excellent email automation strategies. Great results and support.",
  },
  {
    image: image3,
    name: "Michael Brown",
    role: "Business Owner",
    review:
      "Our lead generation improved significantly after working with their email marketing experts.",
  },
  {
    image: image1,
    name: "Emily Davis",
    role: "Founder, StartupHub",
    review:
      "Amazing experience. The campaigns were beautifully designed and highly effective.",
  },
  {
    image: image5,
    name: "David Wilson",
    role: "Sales Director",
    review:
      "We saw measurable ROI within weeks. Their expertise made a huge difference.",
  },
];

const ClientReviews = () => {
  return (
    <section className="reviews-section">
      <div className="container">
        <h6 className="reviews-subtitle">TESTIMONIALS</h6>
        <h2 className="reviews-title">Our Client Reviews</h2>
        <div className="row g-4">
          {reviews.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="review-card">
                <FaQuoteLeft className="quote-icon" />
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="review-text">{item.review}</p>
                <div className="review-user">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="review-image"
                  />
                  <div>
                    <h5>{item.name}</h5>
                    <span>{item.role}</span>
                  </div>
                </div>
                <button className="review-btn">Get Started</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
