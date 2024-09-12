"use client";
import React, { useRef } from 'react';
import { testimonialData } from "./testimonialData";
import SingleTestimonial from "./SingleTestimonial";
import './testimonial.css';

const Testimonial: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <div className="lg:ml-[74px] md:pt-1">
      <div>
        <h2 className="font-poppins text-[30px] lg:text-[38px] text-center lg:text-left lg:mt-[30px]">
          <span className="tstm leading-[92px]">TESTIMONIALS</span>
        </h2>
      </div>
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
