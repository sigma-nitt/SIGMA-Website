"use client"
import { FC, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { animateScroll as scroll } from "react-scroll";
import { Card, CardContent } from "../card";

interface FeaturesProps {}

const features = [
  {
    id: "editor",
    title: `Data Analytics`,
    description: `We, the Analytics domain at Sigma, specialize in transforming data into compelling narratives that unveil business truths. We engage in Hackathons and competitions to hone our skills and showcase our prowess in handling data. Collaborating within our club, we work on projects involving Machine Learning models and Analytics tools to unlock profound insights from datasets.`,
    thumbnail: "/images/features/editor.webp",
    demo: "/images/ds.mp4",
  },
  {
    id: "reminder",
    title: `Case Studies`,
    description: ` At Case Studies, we analyze real-world problems and understand the business notions behind those problems. We focus on different topics such as economics, finance, marketing, supply chain & business happenings in and around the world. We also participate in various case study competitions & conduct regular fun interaction sessions to enhance our knowledge and skill set.`,
    thumbnail: "/images/features/reminder.webp",
    demo: "/images/cs.mp4",
  },
];

const Features: FC<FeaturesProps> = () => {
  const [inViewRef, inView] = useInView({ triggerOnce: true });
  const featuresRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (inView && featuresRef.current) {
      scroll.scrollTo(featuresRef.current.offsetTop, { duration: 500, smooth: true });
    }
  }, [inView]);

  return (
    <div ref={inViewRef} className="grid grid-cols-1 gap-10 py-16 md:grid-cols-2" id="features">
      {features.map((feature) => (
        <Card className="container overflow-hidden" key={feature.id} ref={featuresRef}>
          <CardContent className="space-y-10 p-0">
            <div className="space-y-5 px-6 py-8">
              <h3 className="text-center font-heading text-2xl font-bold leading-normal tracking-tight bg-secondary-gradient-2 bg-clip-text text-transparent lg:text-3xl">
                {feature.title.toUpperCase()}
              </h3>
              <p className="text-center text-muted-foreground text-sm lg:text-lg">{feature.description}</p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -top-1 left-9 z-0 rounded-md bg-primary-gradient" />
              <video
                autoPlay
                loop
                muted
                width={800}
                height={600}
                poster={feature.thumbnail}
                className="relative z-10 ml-10 rounded-md object-cover"
              >
                <source src={feature.demo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Features;
