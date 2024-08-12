// import { Testimonial } from "@/types/testimonial";
// import Image from "next/image";
// import './testimonial.css'

// const SingleTestimonial = ({ review }: { review: Testimonial }) => {
//   const { name, designation, image, content } = review;
//   return (
//     <div className="container">
//       <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
//         <div>
//           <h3 className="mb-1.5 text-metatitle3 text-white dark:text-black">
//             {name}
//           </h3>
//           <p className="text-black">{designation}</p>
//         </div>
//         <Image width={60} height={50} className="" src={image} alt={name} />
//       </div>

//       <p className="text-muted-foreground">{content}</p>
//     </div>
//   );
// };

// export default SingleTestimonial;


import Image from "next/image";
import { Testimonial } from "@/types/testimonial";
import './testimonial.css';

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content } = review;
  return (
    <div className="testimonial">
      <div className="group-1">
        <div className="frame-10">
          <div className="rectangle"></div>
          <div className="mask-group"></div>
          <div className="rectangle-5"></div>
          <div className="vector"></div>
          <div className="president">Alumni</div>
          <div className="testimonial-content">{content}</div>
          <br></br>
          <br></br>
          <div className="name">{name}</div>
          <div className="ellipse-2">
            <Image src={image} alt="Profile Image" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;

