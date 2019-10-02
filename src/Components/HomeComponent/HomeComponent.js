<<<<<<< Updated upstream
import React, { Component } from 'react';
import './HomeComponent.css';
import { BrowserRouter as Link } from "react-router-dom";
import studentImg from '../../assets/images/study.png';
import trainerImg from '../../assets/images/strategy.png';
<<<<<<< Updated upstream
import AuthHelperMethods from '../Authentication/AuthHelperMethods';
=======
=======
// import React, { Component } from 'react';
// import './HomeComponent.css';
// import { BrowserRouter as Link } from "react-router-dom";
// import studentImg from '../../assets/images/study.png';
// import trainerImg from '../../assets/images/strategy.png';
// import AuthHelperMethods from '../Authentication/AuthHelperMethods';
// import withAuth from '../Authentication/withAuth';
>>>>>>> Stashed changes
>>>>>>> Stashed changes

// const HomeComponent = ({ onClickStudentMenu }) => {

<<<<<<< Updated upstream
    Auth = new AuthHelperMethods();

    // studentOnClick = (e) => {
    //     e.preventDefault();
    //     this.props.history.replace('/');
    // }

=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
    render() {

        return (
            <div className="home__component">
                <div className="container">
                    <div className="row">
                        <div className="home__component__content">
                            <div className="home__component__content--box">
                                <div className="home__component__content--inner--box" >
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
=======
//     return (
//         <div className="home__component">
//             <div className="container">
//                 <div className="row">
//                     <div className="home__component__content">
//                         <div className="home__component__content--box">
//                             <div className="home__component__content--inner--box" >
//                                 <div><img src={trainerImg} alt="" /></div>
//                                 <span className="inner__box--title" onClick={() => onClickStudentMenu()}>Student</span>
//                             </div>
//                             <div className="home__component__content--inner--box">
//                                 <div><img src={studentImg} alt="" /></div>
//                                 <span className="inner__box--title">Trainer</span>
//                             </div>
//                             <div className="home__component__content--inner--box">
//                                 <span className="inner__box--title">Admin</span>
//                             </div>
//                         </div>
//                         <div className="home__component__content--box">
//                             lorem ipsum
//                             </div>
//                         <div className="home__component__content--box">
//                             lorem ipsum
//                             </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default withAuth(HomeComponent);
>>>>>>> Stashed changes
