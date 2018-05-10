import React from 'react';
import YouTube from 'react-youtube';

const youtubePlaceholderId = 'uUT0K3TtKIk';

class Video extends React.Component {
  _onReady (event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render () {
    const opts = {
      height: '170',
      width: '340',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YouTube videoId={youtubePlaceholderId} opts={opts} onReady={this._onReady} />
    );
  }
}

export default Video;
