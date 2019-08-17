import React, { Component } from 'react';
import './LoginFormComponent.css';
import userIcon from '../../../assets/images/userIcon.png';
import passwordIcon from '../../../assets/images/passwordIcon.png';

class LoginFormComponent extends Component {

    render() {

        const { signInErrorMessage } = this.props;

        return (

            <div className="login_commponent__content--login--form">
                <span className="login__component__content--logo">
                    Logo
                </span>
                {(signInErrorMessage) ?
                    <div className="login__component--error--message">
                        <span>Incorrect username or password</span>
                    </div>
                    : null
                }
                <div className="login__component__content--main--form">
                    <form onSubmit={this.props.onSubmitForm}>
                        <div className="input--container" style={{ marginBottom: '60px' }}>
                            <img src={userIcon} alt="" />
                            <input type="text" className="login__component__content--input" onChange={(e) => this.props.onEmailChange(e)} placeholder="Type your student ID number" />
                        </div>
                        <div className="input--container">
                            <img src={passwordIcon} alt="" />
                            <input type="password" className="login__component__content--input" onChange={(e) => this.props.onPasswordChange(e)} placeholder="Type your password" />
                        </div>
                        <div className="input--container--text">
                            <span className="input--forgot--password">
                                Forgot Password?
                                            </span>
                            <span className="input--register">
                                Register
                                            </span>
                        </div>
                        <div className="input--container--button">
                            <button className="login__component__content--button">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginFormComponent;
