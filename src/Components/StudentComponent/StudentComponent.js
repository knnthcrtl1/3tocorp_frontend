import React, { Component } from 'react';
import './StudentComponent.css';
import axios from 'axios';
import ModalComponent from '../ModalComponent/ModalComponent';
import StudentFormComponent from './StudentFormComponent';
import successImage from '../../assets/images/checked.png';


class StudentComponent extends Component {

    state = {
        students: [],
        showStudents: false,
        modalShow: false,
        modalContent: '',
        submitMessage: false

    }

    async componentDidMount() {

        let url = 'https://backend-3tocorp.herokuapp.com/students/';
        await axios.get(url)
            .then(res => {
                const students = res.data.message;
                this.setState({
                    students: students,
                    showStudents: true
                })
            })
            .catch(e => console.log(e));

        console.log('mounted')

    }

    async componentWillUnmount() {

        this.setState({
            students: [],
            showStudents: false
        })

        console.log('unmounted')

    }

    onClickModalShow = () => {

        this.setState({
            modalShow: true
        })

        // if (modalContent === 'student') {
        //     this.setState({ modalContent: modalContent })
        // }

    }

    onCloseModal = () => {
        this.setState({
            modalShow: false
        })
    }

    onSubmitMessage = async (submitMessage) => {

        this.setState({
            submitMessage: await submitMessage
        })

        if (submitMessage) {
            await setTimeout(() => {
                this.setState({ submitMessage: !submitMessage })
            }, 3000)
        }

    }


    render() {

        const { students, showStudents, modalShow, submitMessage } = this.state;


        return (
            <div className="student__component">
                <div className="container">
                    <div className="row">
                        <div className="student__component--container">
                            <div className="student__component--student--option">
                                <div className="student__option--search">
                                    <form>
                                        <label>
                                            Search: <input type="text" placeholder="search by id, firstname and lastname..." alt="search by id, firstname and lastname..." />
                                        </label>
                                    </form>
                                </div>
                                <div className="student__option--add--button">
                                    <button className="add_button--student" onClick={this.onClickModalShow}>Add Student</button>
                                </div>
                            </div>
                            <div className="student__component--data--table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Firstname</th>
                                            <th>Surname</th>
                                            <th>Lastname</th>
                                            <th>Address</th>
                                            <th>Age</th>
                                            <th>Birthday</th>
                                            <th>Mobile Number </th>
                                            <th>Telephone</th>
                                            <th>Gender</th>
                                            <th>Email</th>
                                            <th>Marital Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(!showStudents) ?
                                            <tr>
                                                <td nowrap="nowrap" colSpan="11" style={{ padding: '8px', textAlign: 'center' }} >Loading...</td>
                                            </tr>
                                            :
                                            students.map((student) => (
                                                <tr key={student._id}>
                                                    <td>{student.firstname}</td>
                                                    <td>{student.surname}</td>
                                                    <td>{student.lastname}</td>
                                                    <td>{student.address}</td>
                                                    <td>{student.age}</td>
                                                    <td>{student.birthday}</td>
                                                    <td>{student.mobile_number}</td>
                                                    <td>{student.telephone}</td>
                                                    <td>{student.gender}</td>
                                                    <td>{student.email}</td>
                                                    <td>{student.marital_status}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {(modalShow) ?
                    <ModalComponent
                        onCloseModal={this.onCloseModal}
                    >
                        <StudentFormComponent
                            onCloseModal={this.onCloseModal}
                            onSubmitMessage={this.onSubmitMessage}
                            students={students}
                            onSubmitForm={this.onSubmitForm}
                        />
                    </ModalComponent>
                    : null
                }
                {
                    (submitMessage) ?
                        <div className="submit__message">
                            <div className="submit__message--container">
                                <div className="submit__message--image">
                                    <img src={successImage} alt="" />
                                </div>
                                <span className="submit__message--title">
                                    Successfully Added
                      </span>
                            </div>
                        </div>
                        : null
                }
            </div>
        )

    }
}

export default StudentComponent;