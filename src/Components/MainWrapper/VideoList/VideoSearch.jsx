import React, { Component } from "react";
import YTSearch from "youtube-api-search";
require("dotenv").config();

// const YTSearch({ key: API_KEY, term: "Ethiopia" }, videos => {
//     this.setState({ videos });
//   });

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

const Video = () => (
  <div>
    <h1 />
    {console.log(YOUTUBE_API_KEY)}
    {/*<SearchBar /> */}
  </div>
);

export default Video;
