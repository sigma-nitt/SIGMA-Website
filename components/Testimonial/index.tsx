// "use client";
// import { Autoplay, Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";

// import { motion } from "framer-motion";
// import SingleTestimonial from "./SingleTestimonial";
// import { testimonialData } from "./testimonialData";

// const Testimonial = () => {
//   return (
//     <>
//       <section>
//         <div className="bg-secondary-gradient bg-clip-text text-transparent text-5xl font-bold" style={{ textAlign: 'center' }}>
//             <p>Testimonials</p>
//         </div>

//         <motion.div
//           variants={{
//             hidden: {
//               opacity: 0,
//               y: -20,
//             },

//             visible: {
//               opacity: 1,
//               y: 0,
//             },
//           }}
//           initial="hidden"
//           whileInView="visible"
//           transition={{ duration: 1, delay: 0.1 }}
//           viewport={{ once: true }}
//           className="animate_top mx-auto mt-15 max-w-c-1235 px-4 md:px-8 xl:mt-20 xl:px-0"
//         >
//           <div className="swiper testimonial-01 mb-20 pb-22.5">
//             <Swiper
//               spaceBetween={50}
//               slidesPerView={2}
//               autoplay={{
//                 delay: 3500,
//                 disableOnInteraction: false,
//               }}
//               pagination={{
//                 clickable: true,
//               }}
//               modules={[Autoplay, Pagination]}
//               breakpoints={{
//                 0: {
//                   slidesPerView: 1,
//                 },
//                 768: {
//                   slidesPerView: 2,
//                 },
//               }}
//             >
//               {testimonialData.map((review) => (
//                 <SwiperSlide key={review?.id}>
//                   <SingleTestimonial review={review} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </motion.div>
//       </section>
//     </>
//   );
// };

// export default Testimonial;


"use client";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import SingleTestimonial from "./SingleTestimonial";
import { testimonialData } from "./testimonialData";
import './testimonial.css';

const Testimonial = () => {
  const backgroundImageStyle = {
    backgroundImage: 'url(./images/testiback.png)', // Replace with your image path
    backgroundSize: 'cover', // Ensures the image covers the container
    backgroundRepeat: 'repeat', // Repeats the image both horizontally and vertically
    backgroundPosition: 'center', // Center the image in the container
    backgroundAttachment: 'fixed', // Keeps the background fixed
  };

  return (
    <>
      <section className="mt-18">
        <div>
          <h1 className="text-center md:text-left md:ml-[102px] md:leading-none">
            <span className="gradient-textTest text-[25px] md:text-[38px]">TESTIMONIALS</span>
          </h1>
        </div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto mt-[24px] max-w-c-1235 px-4 md:px-8 xl:px-0"
        >
          <div className="swiper testimonial-01 mb-20 pb-22.5" style={backgroundImageStyle}>
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              {testimonialData.map((review) => (
                <SwiperSlide key={review?.id}>
                  <SingleTestimonial review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Testimonial;
