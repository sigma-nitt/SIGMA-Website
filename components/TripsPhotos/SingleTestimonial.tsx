// import { Testimonial } from "@/types/trips";
// import Image from "next/image";
// import './testimonial.css';

// const SingleTestimonial = ({ review }: { review: Testimonial }) => {
//   const { image } = review;
//   return (
//     <div className="container rounded-lg bg-background p-9 pt-7.5 shadow-solid-9">
//       <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
//         <Image width={60} height={50} className="" src={image} alt='image' />
//       </div>
//     </div>
//   );
// };

// export default SingleTestimonial;

import { Testimonial } from "@/types/trips";
import Image from "next/image";
import './testimonial.css';

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { image } = review;
  return (
    <div className="container rounded-lg bg-background p-9 pt-7.5 shadow-solid-9">
      <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <Image className="object-cover" src={image} alt='image' />
      </div>
    </div>
  );
};

export default SingleTestimonial;
