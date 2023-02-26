import React from "react";

export default function Contact() {
  return (
    <>
      <div className="container-fluid" style={{backgroundColor:"#1f243d"}}>
        <h2 className="text-center p-5 fs-1 fw-bold text-light">Contact page</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217898.05622262493!2d73.08930095!3d31.423571499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f88932671c6!2sFaisalabad%2C%20Punjab!5e0!3m2!1sen!2s!4v1676472892123!5m2!1sen!2s"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div style={{backgroundColor:"#1f242b"}}>
      <div className="container pt-3" >
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 p-3 text-center">
            <form className="p-4">
              <input
                type="text"
                placeholder="username"
                name="username"
                required
                autoComplete="off"
                className="form-control"
              />

              <input
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                required
                className="form-control"
              />

              <textarea
                name="Message"
                cols="30"
                rows="10"
                required
                autoComplete="off"
                placeholder="Enter you message"
                className="form-control"
              ></textarea>

              <button className="btn btn-outline-light w-25 mt-4">Submit</button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
