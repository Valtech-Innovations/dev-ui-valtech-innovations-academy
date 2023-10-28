import React, { useState, useEffect } from "react";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Testimonial() {
  const [items, setItems] = useState(3); // Default number of items

  const initCarousel = () => {
    $('.testimonial-carousel').owlCarousel({
      items: items, // Use the state variable
      loop: true,
      margin: 5,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    });
  };

  useEffect(() => {
    const updateItems = () => {
      const newItems = window.innerWidth <= 991.98 ? 1 : 3;
      setItems(newItems);
    };

    // Initialize Owl Carousel after the component has mounted
    initCarousel();

    // Handle window resize to update the number of items
    window.addEventListener('resize', updateItems);

    // Clean up Owl Carousel and remove the event listener when the component unmounts
    return () => {
      $('.testimonial-carousel').trigger('destroy.owl.carousel');
      window.removeEventListener('resize', updateItems);
    };
  }, [items]);


  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
          <h1 className="mb-5">Our Students Say!</h1>
        </div>
        <div id="testimonial-carousel" className="owl-carousel testimonial-carousel position-relative">
          <div className="testimonial-item text-center">
            <a href="https://www.linkedin.com/posts/poorva-tiwari-934688237_frontenddevelopment-javascript-webdevelopment-activity-7118234622156566529-uPlN?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
              <img
                className="border rounded-circle p-2 mx-auto mb-3"
                src="img/poorva tiwari.png"
                style={{ width: "80px", height: "80px" }}
                alt=""
              />

              <h5 className="mb-0">Poorva Tiwari</h5>
              <p>Frontend Developer</p>
            </a>
            <div className="custom-bg testimonial-text  text-center p-4">
              <p className="mb-0">
                I want to express my gratitude to Valtechinnovations Academy  for providing top-notch guidance and ..<a href="https://www.linkedin.com/posts/poorva-tiwari-934688237_frontenddevelopment-javascript-webdevelopment-activity-7118234622156566529-uPlN?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>Read more</a>
              </p>
            </div>
          </div>

          {/* <div className="testimonial-item text-center">
            <img
              className="border rounded-circle p-2 mx-auto mb-3"
              src="img/mujjamil shaikh.jpeg"
              style={{ width: "80px", height: "80px" }}
              alt=""
            />
            <h5 className="mb-0">Mujjamil Shaikh</h5>
            <p>Frontend Developer</p>
            <div className="custom-bg testimonial-text  text-center p-4">
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
          </div> */}

          <div className="testimonial-item text-center">
            <img
              className="border rounded-circle p-2 mx-auto mb-3"
              src="img/mujjamil shaikh.jpeg"
              style={{ width: "80px", height: "80px" }}
              alt=""
            />
            <h5 className="mb-0">Mujjamil Shaikh</h5>
            <p>Frontend Developer</p>
            <div className="custom-bg testimonial-text  text-center p-4">
              <p className="mb-0">
                Thank you for the valuable opportunity to learn and grow. I'm truly grateful for the knowledge and...<a href="https://www.linkedin.com/posts/mujjamil-shaikh-2273a4187_certificate-activity-7118585259968933888-MeG1?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>Read more</a>
              </p>

            </div>
          </div>

          <div className="testimonial-item text-center">
            <img
              className="border rounded-circle p-2 mx-auto mb-3"
              src="img/palash sahare.jpg"
              style={{ width: "80px", height: "80px" }}
              alt=""
            />
            <h5 className="mb-0">Client Name</h5>
            <p>Profession</p>
            <div className="custom-bg testimonial-text  text-center p-4">
              <p className="mb-0">
                providing excellent guidance and resources throughout this learning adventure...<a href="https://www.linkedin.com/posts/palash-sahare-79788a291_backenddevelopment-nodejs-javascript-ugcPost-7121390318326837248-gcT3?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>Read more</a>
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
            <div className="custom-bg testimonial-text  text-center p-4"  >
              <p className=" mb-0">
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
