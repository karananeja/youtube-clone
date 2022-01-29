import React from 'react';
import { Avatar } from '@mui/material';
import '../css/VideoCard.css';

const VideoCard = ({
  channel,
  title,
  timestamp,
  views,
  channelImage,
  image,
}) => {
  return (
    <div className='videoCard'>
      <img className='videoCard__thumbnail' src={image} alt='image' />
      <div className='videoCard__info'>
        <Avatar
          className='videoCard__avatar'
          alt={channel}
          src={channelImage}
        />
        <div className='videoCard__text'>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
