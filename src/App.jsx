import React from "react";
import "./App.css";

const reviews = [
         {
    name: "Marvin McKinney",
       image: "/assets/marvin.jpg",
    feedback:
         "Since switching to Swift Revel, I finally have peace of mind regarding my business finances. With their secure platform, I trust my data's protection completely.",
  },
  {
       name: "Jacob Jones",
    image: "/assets/jacob.jpg",
    feedback:
      "As a budding startup, we sought a financial solution that was simple, secure, and scalable. Swift Revel checked all the boxes, enabling focus on growth.",
  },
  {
    name: "Theresa Webb",
       image: "/assets/theresa.jpg",
    feedback:
      "Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure I'm always tax compliant.",
  },
  {
    name: "Ronald Richards",
image: "/assets/ronald.jpg",
    feedback:
      "We needed a payment gateway that could handle our diverse customer base. Swift Revel offers a wide range of payment options, making it easy for our clients to pay.",
  },
  {
    name: "Cody Fisher",
        image: "/assets/cody.jpg",
    feedback:
      "As a Freelancer, managing invoices and chasing payments was a constant headache. Now, with automated and secure payment I am getting paid on time, every time.",
        },
];

const App = () => {
  return (
    <section className="review-section">
  <div className="review-header">
             <h2 className="review-title">What Users Say</h2>
           <p className="review-subtitle" style={{ marginBottom: 70 }}>
        Testimonial that speak louder than words! Customer stories that light up
          our day.
        </p>
      </div>

      <div className="review-container">
              <div className="review-track">
          {[...reviews, ...reviews, ...reviews, ...reviews].map((user, index) => (
            <div
              key={index}
              className={`review-card ${
                index % 2 === 0 ? "review-card-even" : "review-card-odd"
              }`}
            >
       <div className="review-content">
                <img src={user.image} alt={user.name} className="review-avatar" />
                <h3>{user.name}</h3>
                <p style={{ textWrap: 'wrap' }}>{user.feedback}</p>
                   </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
