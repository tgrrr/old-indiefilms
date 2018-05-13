import React from 'react';
import Videos from '../../Components/Video/Videos';
import SearchBar from '../../Components/SearchBar/SearchBar';

const Main = () => (
  <div>
    <h2>Our Main component</h2>
    <SearchBar />
    <Videos />
  </div>
);

export default Main;
// export default ({ name }) => <h1>Hello {name}!</h1>;
