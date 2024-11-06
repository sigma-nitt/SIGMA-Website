// "use client";
// import React, { useRef } from 'react';
// import { testimonialData } from "./testimonialData";
// import SingleTestimonial from "./SingleTestimonial";
// import './testimonial.css';

// const Testimonial: React.FC = () => {
//   const sliderRef = useRef<HTMLDivElement>(null);

//   return (
//     <div className="ml-4 lg:ml-[74px] md:pt-1">
//       <div>
//         <h2 className="font-poppins text-[30px] md:text-[38px] text-center lg:text-left lg:mt-[30px]">
//           <span className="tstm leading-[92px]">TESTIMONIALS</span>
//         </h2>
//       </div>
//       <div>
//         <div ref={sliderRef} className="flex overflow-x-scroll no-scrollbar">
//           {testimonialData.map((review) => (
//             <div key={review.id} className="testimonial-item">
//               <SingleTestimonial review={review} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;





"use client";
import React, { useState, useEffect, useRef } from 'react';
import SingleTestimonial from "./SingleTestimonial";
import './testimonial.css';
import Image from 'next/image';
import imageUrlBuilder from "@sanity/image-url";
import createClient from "@/sanityClient";

interface TestimonialData {
  name: string;
  description: string;
  imageTestimonial: { asset: { _ref: string } };
}

const builder = imageUrlBuilder(createClient);
const imageUrlFor = (source: any) => builder.image(source);

const Testimonial: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [testimonialData, setTestimonial] = useState<TestimonialData[]>([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch('/api/testimonials');
        if (!response.ok) {
          throw new Error('Failed to fetch resources');
        }
        const data = await response.json();
        setTestimonial(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching resources:', error);
        setError(true);
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
      </div>
    );
  }

  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <div className="ml-4 lg:ml-[74px] md:pt-1">
      <div>
        <h2 className="font-poppins text-[30px] md:text-[38px] text-center lg:text-left lg:mt-[30px]">
          <span className="tstm leading-[92px]">TESTIMONIALS</span>
        </h2>
      </div>
      <div>
        <div ref={sliderRef} className="flex overflow-x-scroll no-scrollbar">
          {testimonialData.map((review, index) => (
            <div key={index} className="testimonial-item">
              <SingleTestimonial review={review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
