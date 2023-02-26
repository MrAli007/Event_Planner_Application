import React from "react";
import "../../../scss/about.scss";
import cardimg from "../../../images/card.jpg";

export default function Company() {
  return (
    <>
    <div style={{backgroundColor:"#1f242b"}}>
      <div className="card-about text-light">
        <h2 className="text-center">About Us</h2>
        <p>
          Welcome to Saylani Event Managment Website, the premier destination
          for all your event planning needs. Our team of experienced event
          planners is dedicated to creating unforgettable experiences for our
          clients, no matter the occasion. From intimate gatherings to
          large-scale events, we have the expertise, creativity, and attention
          to detail to make your vision a reality. With our user-friendly
          website, you can browse our services, view our portfolio, and connect
          with us to start planning your next event. We offer a range of
          services, including event design, vendor coordination, logistics
          management, and more. Our team is committed to providing exceptional
          customer service and working closely with you to ensure every detail
          is perfect. We pride ourselves on our ability to create unique and
          personalized events that reflect your style, preferences, and budget.
          Let us take the stress out of event planning and turn your dream event
          into a reality. Contact us today to learn more about our services and
          how we can help make your event one to remember.
        </p>
      </div>
      <div className="container text-light">
        <div className="row">
          <div className="col-6">
            <div className="card-about">
              <h2 className="text-center">Our Mission</h2>
              <p>
                Our mission is to provide our clients with exceptional event
                planning services that exceed their expectations. We take the
                time to understand our clients' vision and work tirelessly to
                ensure that every detail is perfect, from the venue to the decor
                to the entertainment.
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className="card-about">
              <h2 className="text-center">Our Team</h2>
              <p>
                Our team is made up of experienced event planners who are
                passionate about what they do. We have a diverse range of skills
                and backgrounds, and we work together to ensure that every event
                is a success. Whether you need help with a small private
                gathering or a large corporate event.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
