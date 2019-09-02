import React, { Component } from 'react';
import './LoginComponent.css';
import LoginFormComponent from './LoginFormComponent/LoginFormComponent';
import LoginRightComponent from './LoginRightComponent/LoginRightComponent';
import AuthHelperMethods from '../Authentication/AuthHelperMethods';
// import axios from 'axios';

class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            signInEmail: '',
            signInPassword: '',
            signInErrorMessage: false
        }

    }

    Auth = new AuthHelperMethods();

    onEmailChange = (event) => {
        this.setState({
            signInEmail: event.target.value
        })
    }

    onPasswordChange = (event) => {
        this.setState({
            signInPassword: event.target.value
        })
    }

    onSubmitForm = async (e) => {
        e.preventDefault();
        // console.log(this.state.signInEmail, this.state.signInPassword);

        let data = JSON.stringify({
            username: this.state.signInEmail,
            password: this.state.signInPassword
        })

        await this.Auth.login(data).then(res => {
            if (res === false) {
                return alert("Sorry those credentials don't exist!");
            }
            this.props.history.replace('/');
        })
            .catch(err => {
                console.log(err);
            })


        // let url = 'https://backend-3tocorp.herokuapp.com/users/signin';
        // let url = 'http://localhost:3001/users/signin';

        // await axios.post(url, data, {
        //     headers: {
        //         'Content-Type': 'application/json;charset=UTF-8',
        //     }
        // })
        //     .then(res => {
        //         if (res.status === 200) {
        //             this.props.onRouteChange('home');
        //         }
        //         console.log(res.data.token);
        //     })
        //     .catch(error => {
        //         this.setState({
        //             signInErrorMessage: true
        //         })
        //         console.log(error);
        //     })
    }



    render() {

        const { signInErrorMessage } = this.state;

        return (
            <div className="login__component">
                <div className="container">
                    <div className="row">
                        <div className="login__component__content">
                            <LoginFormComponent
                                onEmailChange={this.onEmailChange}
                                onPasswordChange={this.onPasswordChange}
                                onSubmitForm={this.onSubmitForm}
                                signInErrorMessage={signInErrorMessage}
                            />
                            <LoginRightComponent />
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

export default LoginComponent;
