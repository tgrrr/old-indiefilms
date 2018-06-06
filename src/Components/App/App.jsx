import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from '../../Pages/Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { testAction } from '../../actions/actions';
import './App.css';

require('dotenv').config();

class App extends Component {
  componentDidMount(){
    this.props.testAction();
  }

  render(){
    console.log(this.props);
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

const mapStateToProps = ({ video }) => ({
  video: video,
});

export default connect(mapStateToProps, { testAction })(App);
