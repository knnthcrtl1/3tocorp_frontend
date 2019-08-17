import React, { Component } from 'react';
import './HomeComponent.css';
import studentImg from '../../assets/images/study.png';
import trainerImg from '../../assets/images/strategy.png';

class HomeComponent extends Component {

    render() {

        return (
            <div className="home__component">
                <div className="container">
                    <div className="row">
                        <div className="home__component__content">
                            <div className="home__component__content--box">
                                <div className="home__component__content--inner--box">
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
        )
    }
}

export default HomeComponent;