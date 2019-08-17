import React, { Component } from 'react';
import './App.css';
import LoginComponent from './Components/LoginComponent/LoginComponent';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import HomeComponent from './Components/HomeComponent/HomeComponent';
import StudentComponent from './Components/StudentComponent/StudentComponent';

class App extends Component {

  state = {
    route: 'home',
    mainRoute: 'student'
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  }


  // isModalContent = (modalContent) => {
  //   this.setState({
  //     modalContent: modalContent
  //   })
  // }

  // isSignedInChange = (isSignedIn) => {
  //   this.setState({
  //     isSignedIn: isSignedIn
  //   })
  // }

  render() {

    const { route, mainRoute, submitMessage } = this.state;

    return (
      <div className="App">
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

      </div>
    );

  }

}

export default App;
