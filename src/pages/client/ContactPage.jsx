import React from "react";

const ContactPage = () => {
  return (
    <div>
      <div className="container py-5">
        {/* Title & Breadcrumb */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Liên Hệ</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="/">Trang Chủ</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Liên Hệ
              </li>
            </ol>
          </nav>
        </div>

        {/* Form & Info */}
        <div className="row mb-5">
          {/* Contact Form */}
          <div className="col-md-7 mb-4">
            <h4 className="fw-bold">Drop Us A Line</h4>
            <p className="text-muted">
              Use the form below to get in touch with our team.
            </p>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name *"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email *"
                    required
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    placeholder="Your Message *"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-dark px-4">
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-5">
            <h5 className="fw-bold">Our Store</h5>
            <p>
              2163 Phillips Gap Rd, West Jefferson, North Carolina, United
              States
            </p>
            <p>
              <strong>Phone:</strong> +1 666 8888
            </p>
            <p>
              <strong>Email:</strong> hi.avitex@gmail.com
            </p>

            <h5 className="fw-bold mt-4">Open Hours</h5>
            <ul className="list-unstyled">
              <li>Mon - Fri: 7:30am – 8:00pm PST</li>
              <li>Saturday: 8:00am – 6:00pm PST</li>
              <li>Sunday: 9:00am – 5:00pm PST</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Google Map */}
      <div className="w-100" style={{ height: "500px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.1024140570785!2d105.7256114751052!3d21.0285877806208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x838936f7130173b5%3A0xad8c5740e51b5222!2zQ8O0bmcgdHkgQ-G7lSBwaOG6p24gQ8O0bmcgbmdo4buHIHbDoCBHacOhbyBk4bulYyBDb2RlRmFybQ!5e0!3m2!1svi!2s!4v1750927336926!5m2!1svi!2s"
          style={{ border: 0, width: "100%", height: "100%" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
