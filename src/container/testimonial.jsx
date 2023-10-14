import React, { useEffect } from "react";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Testimonial() {
  useEffect(() => {
    // Initialize Owl Carousel after the component has mounted
    $('.testimonial-carousel').owlCarousel({
      items: 3,
      loop: true,
      margin: 5,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    });

    // Return a function to clean up Owl Carousel when the component unmounts
    return () => {
      $('.testimonial-carousel').trigger('destroy.owl.carousel');
    };
  }, []);

  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
          <h1 className="mb-5">Our Students Say!</h1>
        </div>
        <div className="owl-carousel testimonial-carousel position-relative">
          <div className="testimonial-item text-center">
            <img
              className="border rounded-circle p-2 mx-auto mb-3"
              src="img/testimonial-1.jpg"
              style={{ width: "80px", height: "80px" }}
              alt=""
            />
            <h5 className="mb-0">Client Name</h5>
            <p>Profession</p>
            <div className="testimonial-text bg-light text-center p-4">
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
          </div>
          <div className="testimonial-item text-center">
            <img
              className="border rounded-circle p-2 mx-auto mb-3"
              src="img/testimonial-2.jpg"
              style={{ width: "80px", height: "80px" }}
              alt=""
            />
            <h5 className="mb-0">Client Name</h5>
            <p>Profession</p>
            <div className="testimonial-text bg-light text-center p-4">
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
          </div>
          <div className="testimonial-item text-center">
            <img
              className="border rounded-circle p-2 mx-auto mb-3"
              src="img/testimonial-3.jpg"
              style={{ width: "80px", height: "80px" }}
              alt=""
            />
            <h5 className="mb-0">Client Name</h5>
            <p>Profession</p>
            <div className="testimonial-text bg-light text-center p-4">
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
          </div>
          <div className="testimonial-item text-center">
            <img
              className="border rounded-circle p-2 mx-auto mb-3"
              src="img/testimonial-4.jpg"
              style={{ width: "80px", height: "80px" }}
              alt=""
            />
            <h5 className="mb-0">Client Name</h5>
            <p>Profession</p>
            <div className="testimonial-text bg-light text-center p-4">
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
