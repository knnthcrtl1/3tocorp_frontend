import React, { Component } from 'react';
import './LoginRightComponent.css';
import loginImg from '../../../assets/images/loginImg.png';

class LoginRightComponent extends Component {
    render() {
        return (
            <div className="login__component__content--image">
                <span className="login__component__content--title">
                    Language School
                                </span>
                <span className="login__component__content--sub--title  ">
                    please make sure your account is secure
                                </span>
                <div className="login__component__content--login--image">
                    <img src={loginImg} alt="" />
                </div>
            </div>
        );
    }
}

export default LoginRightComponent;
