import React, { Component } from 'react';
import './App.css';
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
import LoginComponent from './Components/LoginComponent/LoginComponent';
>>>>>>> Stashed changes
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import HomeComponent from './Components/HomeComponent/HomeComponent';
import AuthHelperMethods from './Components/Authentication/AuthHelperMethods';

//Our higher order component
import withAuth from './Components/Authentication/withAuth';

<<<<<<< Updated upstream
class App extends Component {
=======
  onRouteChange = (route) => {
    this.setState({ route: route });
=======
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
>>>>>>> Stashed changes
  }
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
        <HeaderComponent />
        <HomeComponent />
=======
<<<<<<< Updated upstream
        {(route) === 'signin' ?
          <LoginComponent
            onRouteChange={this.onRouteChange}
          />
          : (route) === 'home' ?
            <div>
              <HeaderComponent
                onRouteChange={this.onRouteChange}
              />
              {(mainRoute) === 'home' ?
                <HomeComponent />
                : (mainRoute) === 'student' ?
                  <StudentComponent
                    onClickModalShow={this.onClickModalShow}
                  />
                  : null
              }
            </div>
            : null
        }

=======
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
>>>>>>> Stashed changes
>>>>>>> Stashed changes
      </div>
    );

  }

}

export default withAuth(App);
