import React, { Component } from 'react';
import Main from '../../Pages/Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';

require('dotenv').config();

class App extends Component {

  const action = type => store.dispatch({type})

  componentDidMount(){
    this.action('PRINT');
  }

  render(){
    return(
      <div className="App">
    <Header />
    <Main />
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
    <Footer />
  </div>
    );
  }
}

export default App;
