// src/TestimonialCarousel.js

import React, { useState, useEffect } from 'react';

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
    title: 'Management Consultant,Tata Motors',
    quote: "The Institute of National Repute is now all set and ready to be the innovative learning Centre of World Repute. NIT Jamshedpur is surrounded by World Class industries and World Class Professionals, Faculties and above all - World class students.",
    image: 'data:image/jpeg;base64,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',
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
    <div className="max-w-lg mx-auto p-8">
      <div className="relative bg-black p-6 rounded-lg shadow-lg text-center mr-20">
        <img
          className="w-20 h-20 rounded-full mx-auto mb-4"
          src={testimonials[current].image}
          alt={testimonials[current].name}
        />
        <p className="italic mb-4">"{testimonials[current].quote}"</p>
        <h4 className="font-bold text-lg text-red-600">{testimonials[current].name}</h4>
        <p className="text-red-600">{testimonials[current].title}</p>

        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full focus:outline-none"
          onClick={prevTestimonial}
        >
          &#8592;
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full focus:outline-none"
          onClick={nextTestimonial}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
