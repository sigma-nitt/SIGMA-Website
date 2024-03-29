"use client"

import { FC, useEffect } from "react"
import { stagger, useAnimate, useInView } from "framer-motion"
import Tilt from "react-parallax-tilt"

import { Avatar, AvatarFallback, AvatarImage } from "../avatar"
import { Card, CardContent, CardFooter } from "../card"
import { Icons } from "../icons"

import clsx from 'clsx';
export function cn(...inputs) {
  return clsx(inputs);
}

const testimonialData = [
  {
    id: 1,
    name: "Ishika Agarwal",
    avatar: "/images/testimonials/sara.webp",
    testimonial:
      "Scribbly has completely transformed my journaling experience!",
    linkedin: "ishika-agarwal-4a4054213"
  },
  {
    id: 2,
  },
  {
    id: 3,
    name: "Manan Bansal",
    avatar: "/images/testimonials/emily.webp",
    testimonial:
      "As an artist, Scribbly has become my go-to app for combining my sketches and thoughts in one place. ",
    linkedin: "manan-bansal-8b598621a"
    },
  {
    id: 4,
    
  },
  {
    id: 5,
    name: "Aman Patni",
    avatar: "/images/testimonials/lisa.webp",
    testimonial:
      "Scribbly has revolutionized the way I reflect on my daily life. ",
    linkedin: "aman-patni-33b07310a"
  },
  {
    id: 6,
    
  },
  {
    id: 7,
    name: "Gaurav Singh",
    avatar: "/images/testimonials/alex.webp",
    testimonial:
      "I've always struggled with consistency when it comes to journaling.",
    linkedin: "gauravsingh1921"
    },
  {
    id: 8,
    
  },
  {
    id: 9,
    name: "Subhash Shamuka",
    avatar: "/images/testimonials/alex.webp",
    testimonial:
      "I've always struggled with consistency when it comes to journaling.",
    linkedin: "subhash-shanmuka"
    },
]

interface TestimonialsProps {
  className?: string
}

const Testimonials: FC<TestimonialsProps> = ({ className }) => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true })

  useEffect(() => {
    if (isInView) {
      animate(
        "#reveal-anim",
        { opacity: [0, 1], y: [15, 0] },
        { duration: 0.5, ease: "easeIn", delay: stagger(0.2) }
      )
    }
  }, [animate, isInView])
  return (
    <div
      ref={scope}
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-5 ",
        className
      )}
    >
      {testimonialData.map((testimonial, index) => (
        <div key={testimonial.id} id="reveal-anim" style={{ visibility: [0,2,4,6,8].includes(index + 1) ? 'hidden' : 'visible' }}>
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareColor="#ffffff"
            glarePosition="all"
            glareBorderRadius="8px"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
          >
            <Card className="bg-transparent">
              <CardContent className="py-6">
                <p className="leading-relaxed text-muted-foreground">
                  {testimonial.testimonial}
                </p>
              </CardContent>
              <CardFooter className="flex w-full items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage
                      alt={testimonial.name}
                      src={testimonial.avatar}
                    />
                    <AvatarFallback>{testimonial.name}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
                {testimonial.linkedin && (
                  <a
                    href={`https://www.linkedin.com/in/${testimonial.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      viewBox="0 0 48 48"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path>
                      <path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path>
                      <path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path>
                      <path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
                    </svg>
                  </a>
                )}
              </CardFooter>
            </Card>
          </Tilt>
        </div>
      ))}
    </div>
  )
}

export default Testimonials