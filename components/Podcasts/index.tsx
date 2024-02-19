"use client"
import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {videos.map((video: Video, index: number) => (
        <div key={index} style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          marginTop: '150px', // Constant top margin
        }}>
          <div style={{ 
            border: '1px solid #ccc',
            borderRadius: '20px',
            padding: '20px',
            margin: '0 10%', // 10% margin on both left and right sides, 20px bottom margin for gap
            backgroundColor: '#f9f9f9', // background color for the box
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ marginRight: '50px' }}>
              <h2 style={{ fontWeight: 'bold', fontSize: '24px', textAlign: 'center' }}>{video.title}</h2>
              <p>{video.description}</p>
            </div>
            <div>
              <YouTube videoId={video.videoId} opts={{ width: 560, height: 315 }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YouTubePodcasts;
