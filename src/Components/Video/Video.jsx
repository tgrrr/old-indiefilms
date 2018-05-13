import React from 'react';
import { Player } from 'video-react';
import PropTypes from 'prop-types';
import '../../../node_modules/video-react/dist/video-react.css';
import './Video.css';

const Video = ({ source }) => (
  <Player>
    <source src={source} className="video-react" />
  </Player>
);

Video.propTypes = {
  source: PropTypes.string
};
Video.defaultProps = {
  source: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
};

export default Video;
