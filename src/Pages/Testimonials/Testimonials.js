import { useEffect, useState } from "react";
import Testimonial from "../Testimonial/Testimonial";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("https://travel-agency-server-ru04.onrender.com/ratings")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div className=" mx-auto mt-5">
      <h1 className=" fw-bolder text-uppercase w-100 mt-5 text-center underline mt-2">
        What Our Client Says
      </h1>
      <br />

      {testimonials.length === 0 ? (
        <div className="spinner-border text-dark text-center" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {testimonials.map((testmonial) => (
            <Testimonial
              key={testmonial._id}
              testmonial={testmonial}
            ></Testimonial>
          ))}
        </div>
      )}
    </div>
  );
};

export default Testimonials;
