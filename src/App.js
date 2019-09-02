import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import HomeComponent from './Components/HomeComponent/HomeComponent';
import AuthHelperMethods from './Components/Authentication/AuthHelperMethods';

//Our higher order component
import withAuth from './Components/Authentication/withAuth';

class App extends Component {

  Auth = new AuthHelperMethods();

  componentDidMount() {
    console.log('mounted');

    console.log(this.props.history);
  }

  render() {

    // console.log(route, true)
    console.log("Rendering Appjs!")

    return (
      <div className="App">
        <HeaderComponent />
        <HomeComponent />
      </div>
    );

  }

}

export default withAuth(App);
