import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import './testimonial.css'

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content } = review;
  return (
    <div className="container rounded-lg bg-black p-9 pt-7.5 shadow-solid-9">
      <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <div>
          <h3 className="mb-1.5 text-metatitle3 text-white dark:text-white">
            {name}
          </h3>
          <p className="text-white">{designation}</p>
        </div>
        <Image width={60} height={50} className="" src={image} alt={name} />
      </div>

      <p className="text-muted-foreground">{content}</p>
    </div>
  );
};

export default SingleTestimonial;
