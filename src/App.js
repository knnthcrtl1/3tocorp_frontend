import React, { Component } from 'react';
import './App.css';
import trainerImg from './assets/images/study.png';
import studentImg from './assets/images/strategy.png';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import AuthHelperMethods from './Components/Authentication/AuthHelperMethods';

//Our higher order component
import withAuth from './Components/Authentication/withAuth';

class App extends Component {

  Auth = new AuthHelperMethods();

  componentDidMount() {
    console.log('mounted');
  }

  onClickStudentMenu = () => {
    this.props.history.replace('/students');
  }

  render() {

    // console.log(route, true)
    console.log("Rendering Appjs!")

    return (
      <div className="App">
        <HeaderComponent />
        {/* <HomeComponent
          onClickStudentMenu={this.onClickStudentMenu}
        /> */}
        <div className="home__component">
          <div className="container">
            <div className="row">
              <div className="home__component__content">
                <div className="home__component__content--box">
                  <div className="home__component__content--inner--box" onClick={this.onClickStudentMenu}>
                    <div><img src={trainerImg} alt="" /></div>
                    <span className="inner__box--title">Student</span>
                  </div>
                  <div className="home__component__content--inner--box">
                    <div><img src={studentImg} alt="" /></div>
                    <span className="inner__box--title">Trainer</span>
                  </div>
                  <div className="home__component__content--inner--box">
                    <span className="inner__box--title">Admin</span>
                  </div>
                </div>
                <div className="home__component__content--box">
                  lorem ipsum
                            </div>
                <div className="home__component__content--box">
                  lorem ipsum
                            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }

}

export default withAuth(App);
