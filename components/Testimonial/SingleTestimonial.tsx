import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import createClient from "@/sanityClient";
import './testimonial.css';

interface TestimonialData {
  name: string;
  description: string;
  imageTestimonial: { asset: { _ref: string } };
  designation?: string;
}

const builder = imageUrlBuilder(createClient);
const imageUrlFor = (source: any) => builder.image(source);

const SingleTestimonial = ({ review }: { review: TestimonialData }) => {
  const { name, description, imageTestimonial, designation } = review;

  // const imageUrl = imageUrlFor(imageTestimonial.asset._ref).url();
  const imageUrl = imageTestimonial && imageTestimonial.asset
    ? imageUrlFor(imageTestimonial.asset._ref).url()
    : '';

  return (
    <div className="testimonial">
      <div className="group-1">
        <div className="frame-10">
          <div className="rectangle"></div>
          <div className="mask-group"></div>
          <div className="rectangle-5"></div>
          <div className="vector"></div>
          <div className="president">{designation || 'Alumni'}</div>
          <div className="testimonial-content">{description}</div>
          <br />
          <br />
          <div className="name">{name}</div>
          <div className="ellipse-2">
            <Image src={imageUrl} alt="Profile Image" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
