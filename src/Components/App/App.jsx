import React from "react";
import MainWrapper from "../MainWrapper/MainWrapper";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./App.css";
require("dotenv").config();

const App = () => (
  <div className="App">
    <Header />
    <MainWrapper />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    <Footer />
  </div>
);

export default App;
