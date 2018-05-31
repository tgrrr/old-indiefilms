import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as videoActions from '../../actions/actions';

class videoList extends React.Component {
  componentWillMount () {
    this.props.videoActions.fetchVideo();
  }

  renderData (item) {
    return <div key={item.id}>{item.name}</div>;
  }

  render () {
    if (!this.props.video) {
      return (
        <div>
          Loading Stuff...
        </div>
      );
    }
    return (
      <div className="">
        {
          this.props.video.map((item, index) => (
            this.renderData(item)
          ))
        }
      </div>
    );
  }
}

videoList.propTypes = {
  videoActions: PropTypes.object,
  videos: PropTypes.array
};

function mapStateToProps (state) {
  return {
    videos: state.videos
  };
}
function mapDispatchToProps (dispatch) {
  return {
    videoActions: bindActionCreators(videoActions, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(videoList);

// import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as videoActions from '../../actions/actions';
// import Video from './Video';
// import './Video.css';
//
// const videos = [
//   {
//     id: 1,
//     source: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
//   },
//   {
//     id: 2,
//     source: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
//   }
// ];
//
// const Videos = () => (
//   <ul>
//     {videos.map(video => (
//       <li className="video-wrapper" key={video.id}>
//         <Video source={video.source} />
//       </li>
//     ))}
//   </ul>
// );
//
// function mapStateToProps (state) {
//   return {
//     videos: state.videos
//   };
// }
//
// function mapDispatchToProps (dispatch) {
//   return {
//     videoActions: bindActionCreators(videoActions, dispatch)
//   };
// }
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(actions);
