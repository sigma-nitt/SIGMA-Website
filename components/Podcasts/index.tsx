"use client";
import React, { useState, useEffect, useRef } from 'react';
import createClient from "@/sanityClient";
import YouTube from 'react-youtube';
import './podcast.css';
import Image from 'next/image';
import imageUrlBuilder from "@sanity/image-url";

interface Video {
  videoId: string;
  title: string;
  description: string;
}

const builder = imageUrlBuilder(createClient);
const imageUrlFor = (source: any) => builder.image(source);

const YouTubePodcasts: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isIntroTextVisible, setIsIntroTextVisible] = useState<boolean[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/youtubeVideos');
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        const data = await response.json();
        setVideos(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setError(true);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const toggleIntroText = (index: number) => {
    if (window.innerWidth < 768) {
      const updatedVisibility = [...isIntroTextVisible];
      updatedVisibility[index] = !updatedVisibility[index];
      setIsIntroTextVisible(updatedVisibility);
    }
  };

  const handleMouseEnter = (index: number) => {
    if (window.innerWidth >= 768) {
      const updatedVisibility = [...isIntroTextVisible];
      updatedVisibility[index] = true;
      setIsIntroTextVisible(updatedVisibility);
    }
  };

  const handleMouseLeave = (index: number) => {
    if (window.innerWidth >= 768) {
      const updatedVisibility = [...isIntroTextVisible];
      updatedVisibility[index] = false;
      setIsIntroTextVisible(updatedVisibility);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Split the documents into two arrays
  const firstRowDocs = videos.slice(0, Math.ceil(videos.length / 2));
  const secondRowDocs = videos.slice(Math.ceil(videos.length / 2));

  return (
    <div className="containerDA">
      <div className="mb-8">
        <h1 className="h-[87px] text-center text-4xl pb-2 font-semibold lg:text-5xl md:text-4xl md:pr-10 md:leading-none">
          <span className="gradient-textDA font-poppins">
            Watch Our Podcasts!
          </span>
        </h1>
      </div>

      <div className="backgroundGradientDA  overflow-x-scroll no-scrollbar">
        <div className="w-[95%] lg:w-[90%] ml-[20px] md:ml-[80px]">
          <div
            ref={sliderRef}
            className="h-[1153px] md:h-[1323px] flex flex-col"
          >
            {/* First row */}
            <div className="da-wrapper flex w-[95%] h-[950px] mt-[40px] md:mt-[80px]">
              {firstRowDocs.map((video, index) => (
                
              <div
                key={index}
                className="relative mr-[20px] lg:mr-[80px] w-[290px] lg:w-[542px] h-[480px] lg:h-[548.9px] rounded-[17.13px] bg-[hsla(227,60%,17%,1)] mt-[20px] lg:mt-[7px] shadow-lg flex flex-col items-center"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => toggleIntroText(index)}
              >
                <div className="h-[150px] lg:h-[174.98px] w-[250px] lg:w-[500px] rounded-[17.13px] mt-[30px] lg:mt-[30px] object-cover">
                  <YouTube
                    videoId={video.videoId}
                    opts={{
                      width: '100%',
                      height: window.innerWidth >= 1024 ? 300 : 150,
                    }}
                  />
                </div>
                
                <div className="flex flex-col mt-[10px] lg:mt-[150px] w-[90%]">
                  <div>
                    <h2 className="font-poppins text-[14px] lg:text-[17.13px] font-bold">
                      {video.title}
                    </h2>
                  </div>
                  <div
                    className="text-[12px] lg:text-[13px] w-[265px] lg:w-[500px] leading-[12px] lg:leading-[14px] cursor-pointer mt-[15px] lg:mt-[10px]"
                  >
                    {isIntroTextVisible[index] ? (
                      <p className="introtext font-poppins">
                        {video.description || "Two lines about the project."}
                      </p>
                    ) : (
                      <div className="flex flex-col mt-[15px] gap-[15px] lg:gap-[14.07px]">
                        <div className="hamburger-line w-[95%] h-[5px] md:w-[276.54px] md:h-[6.73px] rounded-[10px]"></div>
                        <div className="hamburger-line w-[95%] h-[5px] md:w-[276.54px] md:h-[6.73px] rounded-[10px]"></div>
                        <div className="hamburger-line w-[50%] h-[5px] md:w-[138.27px] md:h-[6.73px] rounded-[10px]"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              ))}
            </div>

            {/* Second row */}
            <div className="da-wrapper flex w-[95%] h-[1000px]">
              {secondRowDocs.map((video, index) => (
                
              <div
                key={index}
                className="relative mr-[20px] lg:mr-[80px] w-[290px] lg:w-[542px] h-[480px] lg:h-[548.9px] rounded-[17.13px] bg-[hsla(227,60%,17%,1)] mt-[20px] lg:mt-[7px] shadow-lg flex flex-col items-center"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => toggleIntroText(index)}
              >
                <div className="h-[150px] lg:h-[174.98px] w-[250px] lg:w-[500px] rounded-[17.13px] mt-[30px] lg:mt-[30px] object-cover">
                  <YouTube
                    videoId={video.videoId}
                    opts={{
                      width: '100%',
                      height: window.innerWidth >= 1024 ? 300 : 150,
                    }}
                  />
                </div>
                
                <div className="flex flex-col mt-[10px] lg:mt-[150px] w-[90%]">
                  <div>
                    <h2 className="font-poppins text-[14px] lg:text-[17.13px] font-bold">
                      {video.title}
                    </h2>
                  </div>
                  <div
                    className="text-[12px] lg:text-[13px] w-[265px] lg:w-[500px] leading-[12px] lg:leading-[14px] cursor-pointer mt-[15px] lg:mt-[10px]"
                  >
                    {isIntroTextVisible[index] ? (
                      <p className="introtext font-poppins">
                        {video.description || "Two lines about the project."}
                      </p>
                    ) : (
                      <div className="flex flex-col mt-[15px] gap-[15px] lg:gap-[14.07px]">
                        <div className="hamburger-line w-[95%] h-[5px] md:w-[276.54px] md:h-[6.73px] rounded-[10px]"></div>
                        <div className="hamburger-line w-[95%] h-[5px] md:w-[276.54px] md:h-[6.73px] rounded-[10px]"></div>
                        <div className="hamburger-line w-[50%] h-[5px] md:w-[138.27px] md:h-[6.73px] rounded-[10px]"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Image
          className="mt-[32px] mb-[32px] w-[90px] h-[100px] md:w-[167px] md:h-[182px]"
          src="/images/sigma symbol.png"
          alt="logo"
          width={167}
          height={182}
          unoptimized={true}
          priority={false}
        />
      </div>
    </div>
  );
};

export default YouTubePodcasts;