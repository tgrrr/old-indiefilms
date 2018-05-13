import React from 'react';
import { Player } from 'video-react';
import '../../../node_modules/video-react/dist/video-react.css';
import './Video.css';

const Video = ({ source }) => (
  <Player>
    <source src={source} className="video-react" />
  </Player>
);

export default Video;
