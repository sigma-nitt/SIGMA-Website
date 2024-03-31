"use client"
import React, { useState, useEffect } from 'react';
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

  if (loading) return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
      {/* <p className="ml-2">Loading...</p> */}
    </div>
  )
  if (error) return <p>Error :(</p>;

  return (
    <div className="wholecont">
      <div className="p-4 mb-8">
        <h1 className="bg-secondary-gradient-2 bg-clip-text text-transparent text-4xl text-center font-bold md:text-6xl">
          WATCH OUR PODCASTS !
        </h1>
      </div>

      <div className="w-3/4 mt-5 mx-auto ">
        {videos.map((video: Video, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
            className={`mt-15 mb-15 lg:flex items-center bg-white rounded-lg p-4 shadow-md`}
            style={{borderRadius:'10px'}}
          >
            <div className="w-full lg:w-1/2 lg:mr-8 mb-4 lg:mb-0">
              <h2 className="font-bold text-3xl text-center lg:text-center text-black mb-6" style={{ fontFamily: 'tahoma'}}>{video.title.toUpperCase()}</h2>
              <p className="text-center lg:text-center text-black">{video.description}</p>
            </div>
            <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
              <YouTube videoId={video.videoId} opts={{ width: '100%', height: 315 }} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default YouTubePodcasts;
