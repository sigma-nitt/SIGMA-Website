"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import YouTube from 'react-youtube';
import './podcast.css';

interface Video {
  videoId: string;
  title: string;
  description: string;
}

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

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += event.deltaY;
      }
    };

    const sliderElement = sliderRef.current;
    if (sliderElement) {
      sliderElement.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener("wheel", handleScroll);
      }
    };
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
    return <p>Error :(</p>;
  }

  return (
    <div className="containerPodcast">
      <div className="mb-8">
        <h1 className="h-[87px] text-center text-4xl pb-2 font-semibold lg:text-5xl md:text-4xl md:pr-10 md:leading-none">
          <span className="gradient-textPodcasts font-poppins">
            Watch Our Podcasts!
          </span>
        </h1>
      </div>

      <div className="backgroundGradient">
        <div className="w-[95%] lg:w-[90%] ml-[20px] md:ml-[80px]">
          <div
            ref={sliderRef}
            className="h-[500px] lg:h-[927px] flex overflow-x-scroll no-scrollbar"
          >
            <div className="video-wrapper flex mt-[35px] lg:mt-[87px] w-[95%]">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="relative mr-[10px] lg:mr-[40px] w-[290px] lg:w-[559px] h-[400px] lg:h-[752px] rounded-[28px] bg-[hsla(227,60%,17%,1)] mt-[20px] lg:mt-[7px] shadow-lg flex flex-col items-center"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  onClick={() => toggleIntroText(index)}
                >
                  <div className="w-[90%] lg:w-[456px] mt-[30px] lg:mt-[60px] object-cover mb-4">
                    <YouTube
                      videoId={video.videoId}
                      opts={{
                        width: '100%',
                        height: window.innerWidth >= 1024 ? 300 : 150,
                      }}
                    />
                  </div>

                  <div className="flex flex-col mt-[-10px] lg:ml-[48px] lg:mt-[30px]">
                    <div className="w-[90%] lg:w-full ml-[15px] lg:ml-[0px]">
                      <h2 className="text-center lg:text-left font-poppins text-[15px] lg:text-[20px] font-bold lg:leading-[30px]">
                        {video.title}
                      </h2>
                    </div>
                    <div
                      className="text-[10px] lg:text-[13px] mt-[5px] w-[90%] lg:w-[456px] lg:mt-[10px] ml-[15px] lg:ml-[0px] cursor-pointer"
                    >
                      {isIntroTextVisible[index] ? (
                        <p className="font-poppins leading-[10px] lg:leading-[28.5px]">
                          {video.description || "Two lines about the project."}
                        </p>
                      ) : (
                        <div className="flex flex-col items-center lg:items-left mt-[23px] gap-[15px] lg:gap-[23px]">
                          <div className="hamburger-line w-[90%] lg:w-[452px] h-[8px] md:h-[11px] rounded-[10px]"></div>
                          <div className="hamburger-line w-[90%] lg:w-[452px] h-[8px] md:h-[11px] rounded-[10px]"></div>
                          <div className="hamburger-line w-[90%] lg:w-[452px] h-[8px] md:h-[11px] rounded-[10px]"></div>
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
        <img
          className="mt-[32px] mb-[32px]"
          src="/images/sigma symbol.png"
          alt="logo"
          width={167}
          height={182}
        />
      </div>
    </div>
  );
};

export default YouTubePodcasts;
