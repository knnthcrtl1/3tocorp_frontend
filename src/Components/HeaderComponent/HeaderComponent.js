import React, { Component } from 'react';
import './HeaderComponent.css';

export default class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <div className="header__component">
                    <div className="container">
                        <div className="row">
                            <div className="header__component__content">
                                <div className="header__component__content--logo--content">
                                    <span className="header__component__content--logo">Logo</span>
                                </div>
                                <div className="header__component__content--user--info">
                                    <span className="header__component__content--id--number">13001011300</span>
                                    <span className="header__component__content--username">Kenneth Cartel</span>
                                    <span className="header__component__content--usertype" onClick={() => this.props.onRouteChange('signin')} style={{ cursor: 'pointer' }}>Logout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sub__header__component">
                    <div className="container">
                        <div className="row">
                            <div className="sub__header__component--content">
                                <span className="sub__header__component--button">lorem</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
