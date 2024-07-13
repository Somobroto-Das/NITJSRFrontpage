import React, { useState, useEffect } from 'react';
import img from "../assets/download.jpg"; // Ensure this path is correct

const testimonials = [
  {
    id: 1,
    name: 'R.K.Behera (1967-1972)',
    title: 'Founder and Chairman of The RSB Group',
    quote: 'Started his entrepreneurial journey in Jamshedpur in 1975 along with his brother SK Behera. Together, they established International Auto Products, which eventually merged with RSB Transmissions (I) Ltd in 2009.',
    image: 'https://www.nitjsr.ac.in/static/media/rk.cf950598.jpg',
  },
  {
    id: 2,
    name: 'Prof. Chandreshwar Khan(1969)',
    title: 'Management Consultant, Tata Motors',
    quote: "The Institute of National Repute is now all set and ready to be the innovative learning Centre of World Repute. NIT Jamshedpur is surrounded by World Class industries and World Class Professionals, Faculties and above all - World class students.",
    image: img,
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 3000); // Change testimonial every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [current]);

  return (
    <div className="max-w-xl mx-auto p-8">
      <div className="relative bg-black p-6 rounded-lg shadow-lg text-center">
        <img
          className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4"
          src={testimonials[current].image}
          alt={testimonials[current].name}
        />
        <p className="italic mb-4 text-white">"{testimonials[current].quote}"</p>
        <h4 className="font-bold text-lg text-red-600">{testimonials[current].name}</h4>
        <p className="text-red-600">{testimonials[current].title}</p>

        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            className="transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full focus:outline-none"
            onClick={prevTestimonial}
          >
            &#8592;
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            className="transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full focus:outline-none"
            onClick={nextTestimonial}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
