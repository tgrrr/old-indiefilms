import React from 'react';
import Video from './Video';
import './Video.css';

const videos = [
  {
    id: 1,
    source: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
  },
  {
    id: 2,
    source: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
  }
];

const Videos = () => (
  <ul>
    {videos.map(video => (
      <li className="video-wrapper" key={video.id}>
        <Video source={video.source} />
      </li>
    ))}
  </ul>
);

export default Videos;
