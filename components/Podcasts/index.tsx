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
    <div>
      {/* <div className="bg-white p-4 mb-8 mt-40">
        <h1 className="text-6xl text-center text-slate-500 " style={{ fontFamily: 'impact'}}> */}
      <div className="p-4 mb-8">
        <h1 className="bg-secondary-gradient-2 bg-clip-text text-transparent text-6xl text-center text-slate-500" style={{ fontFamily: 'impact'}}>
          WATCH OUR PODCASTS !
        </h1>
      </div>

      <div className="w-3/4 mx-auto mt-5">
        {videos.map((video: Video, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 5 }} // Adjust the duration here for initial fade-in
            whileHover={{ scale: 1.05, transition: { duration: 0.1 } }} // Adjust the duration here for hover
            className={`mt-${index === videos.length - 1 ? '5' : '20'} mb-${index === videos.length - 1 ? '10' : '5'} lg:flex items-center bg-gradient-to-r from-blue-200 to-blue-600 rounded-lg p-4 shadow-md`}
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
