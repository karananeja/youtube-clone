import React from 'react';
import VideoCard from './VideoCard';
import { data } from '../data';
import '../css/Videos.css';

const Videos = () => {
  return (
    <div className='videos'>
      <h2>Recommended</h2>
      <div className='videos__video'>
        {data.map(
          ({ title, channel, views, timestamp, image, channelImage }) => (
            <VideoCard
              title={title}
              channel={channel}
              views={views}
              timestamp={timestamp}
              image={image}
              channelImage={channelImage}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Videos;
