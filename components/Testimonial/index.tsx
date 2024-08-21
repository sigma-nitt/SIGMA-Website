"use client";
import React, { useRef } from 'react';
import { testimonialData } from "./testimonialData";
import SingleTestimonial from "./SingleTestimonial";
import './testimonial.css';

const Testimonial: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mb-[40px] md:pr-28 md:pl-28 md:pt-1">
      <div>
        <div ref={sliderRef} className="flex overflow-x-scroll no-scrollbar">
          {testimonialData.map((review) => (
            <div key={review.id} className="testimonial-item">
              <SingleTestimonial review={review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
