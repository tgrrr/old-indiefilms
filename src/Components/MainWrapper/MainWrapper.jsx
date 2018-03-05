import React from 'react';
import VideoList from './VideoList/VideoList';
import SearchBar from '../SearchBar/SearchBar';

const MainWrapper = () => (
  <div>
    <h2>Our MainWrapper component</h2>
    <SearchBar />
    <VideoList />
  </div>
);

export default MainWrapper;
// export default ({ name }) => <h1>Hello {name}!</h1>;
