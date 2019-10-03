import React, { Component } from 'react';
import './StudentComponent.css';
import axios from 'axios';
import ModalComponent from '../ModalComponent/ModalComponent';
import StudentFormComponent from './StudentFormComponent';
import warningImage from '../../assets/images/exclamation-mark.png';
import closeImage from '../../assets/images/close.png';
import AlertMessageComponent from '../AlertMessageComponent/AlertMessageComponent';
import HeaderComponent from '../HeaderComponent/HeaderComponent';

import AuthHelperMethods from '../Authentication/AuthHelperMethods';

import withAuth from '../Authentication/withAuth';


class StudentComponent extends Component {

    Auth = new AuthHelperMethods();

    state = {
        students: [],
        showStudents: false,
        modalShow: false,
        modalContent: '',
        submitMessage: false,
        alertMessageTitle: 'Added Successfully!',
        alertMessageType: 'success',
        deleteConfirmation: false,
        willDeleteId: '',
        editStudentData: null,
        onSubmitStudentFormType: '',
        studentCount: 0,
        pageNo: 1,
        pageSize: 1
    }

    // Escape button / close all modal
    escFunction = (e) => {
        if (e.keyCode === 27) {
            this.setState({
                modalShow: false,
                submitMessage: false,
                deleteConfirmation: false
            })
        }
    }


    // fetch data
    async componentDidMount() {

        this.getStudents();

        console.log('mounted')

        await document.addEventListener("keydown", this.escFunction, false);

    }


    // confirm message when clicking delete button
    confirmMessage = (id) => {

        this.setState({
            deleteConfirmation: true,
            willDeleteId: id
        })

    }

    // close confirm message upon delete
    closeConfirmMessage = () => {
        this.setState({
            deleteConfirmation: false
        })
    }

    // fetch all students
    getStudents = async () => {

        const { pageNo, pageSize } = this.state;

        let url = `https://backend-3tocorp.herokuapp.com/students?pageNo=${pageNo}&size=${pageSize}`;
        await axios.get(url, {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': this.Auth.getToken()
            }
        })
            .then(res => {
                const students = res.data.message;
                const studentCount = res.data.pages
                this.setState({
                    students: students,
                    showStudents: true,
                    studentCount: studentCount
                })

                console.log(res.data);
            })
            .catch(e => console.log(e));

    }

    // confirmed delete student
    confirmDeleteStudent = async () => {

        const { willDeleteId } = this.state;

        const token = localStorage.getItem('id_token');

        let url = `https://backend-3tocorp.herokuapp.com/students/${willDeleteId}`;
        axios.delete(url, { headers: { 'Authorization': token } })
            .then(res => {
                console.log(res);

                // set delete confirmation, alert message, title and submit message
                this.setState({
                    deleteConfirmation: false,
                    alertMessageTitle: 'Deleted Successfully!',
                    alertMessageType: 'success',
                    submitMessage: true
                })

                // refrehs data
                this.getStudents();

                // show alert message success
                this.alertMessageTimeOut(true);

            })
            .catch(e => console.log(e));
    }

    // unmountcomponent remove all data
    async componentWillUnmount() {

        this.setState({
            students: [],
            showStudents: false
        })

        await document.removeEventListener("keydown", this.escFunction, false);

    }


    // show student add modal
    onClickAddStudentModalShow = () => {

        this.setState({
            modalShow: true,
            editStudentData: {},
            onSubmitStudentFormType: 'add-student',
        });

    }

    // show student edit modal
    onClickEditStudentModalShow = (student) => {

        this.setState({
            modalShow: true,
            editStudentData: student,
            onSubmitStudentFormType: 'edit-student'
        });


    }

    //close modal
    onCloseModal = () => {
        this.setState({
            modalShow: false,
        })

    }

    // set value of alert message
    onSubmitMessage = async (submitMessage, alertMessageTitle, alertMessageType) => {

        this.setState({
            submitMessage: await submitMessage,
            alertMessageTitle: await alertMessageTitle,
            alertMessageType: await alertMessageType
        })

        this.alertMessageTimeOut(submitMessage);

    }

    // alert message pop up with set time out 3seconds
    alertMessageTimeOut = async (submitMessage) => {
        if (submitMessage) {
            setTimeout(() => {
                this.setState({
                    submitMessage: !submitMessage,
                    alertMessageTitle: '',
                    alertMessageType: ''
                })
            }, 3000)
        }
    }

    // close alert message
    closeSubmitMessage = () => {
        this.setState({ submitMessage: false })
    }

    paginateOnClick = async (paginateNo) => {

        await this.setState({
            pageNo: paginateNo
        })

        await this.getStudents();

    }

    onClickNextData = async (paginateNo) => {
        await this.setState({
            pageNo: paginateNo
        })
        await this.getStudents();
    }

    onClickPrevData = async (paginateNo) => {
        await this.setState({
            pageNo: paginateNo
        })
        await this.getStudents();
    }

    render() {

        const { students, showStudents, modalShow, submitMessage, deleteConfirmation, alertMessageTitle, alertMessageType, editStudentData, onSubmitStudentFormType, studentCount } = this.state;

        return (
            <div>
                <HeaderComponent />
                <div className="student__component">
                    <div className="container">
                        <div className="row">
                            <div className="student__component--container">
                                <div className="student__component--student--option">
                                    <div className="student__option--search">
                                        {/* <form>
                                        <label>
                                            Search: <input type="text" placeholder="search by id, firstname and lastname..." alt="search by id, firstname and lastname..." />
                                        </label>
                                    </form> */}
                                    </div>
                                    <div className="student__option--add--button">
                                        <button className="add_button--student" onClick={this.onClickAddStudentModalShow}>Add Student</button>
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
                                                <th>Options</th>
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
                                                        <td>{student.middlename}</td>
                                                        <td>{student.lastname}</td>
                                                        <td>{student.address}</td>
                                                        <td>{student.age}</td>
                                                        <td>{student.birthday}</td>
                                                        <td>{student.mobile_number}</td>
                                                        <td>{student.telephone}</td>
                                                        <td>{student.gender}</td>
                                                        <td>{student.email}</td>
                                                        <td>{student.marital_status}</td>
                                                        <td>
                                                            <span className="data__table--edit" onClick={() => this.onClickEditStudentModalShow(student)}>Edit</span>
                                                            <span> | </span>
                                                            <span className="data__table--delete" onClick={() => this.confirmMessage(student._id)}>Delete</span>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                    <div>
                                        {
                                            <StudentPagination
                                                studentCount={studentCount}
                                                paginateOnClick={this.paginateOnClick}
                                                pageNo={this.state.pageNo}
                                                onClickNextData={this.onClickNextData}
                                                onClickPrevData={this.onClickPrevData}
                                            />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        (modalShow) ?
                            <ModalComponent
                                onCloseModal={this.onCloseModal}>
                                <StudentFormComponent
                                    onCloseModal={this.onCloseModal}
                                    onSubmitMessage={this.onSubmitMessage}
                                    students={students}
                                    onSubmitForm={this.onSubmitForm}
                                    editStudentData={editStudentData}
                                    onSubmitStudentFormType={onSubmitStudentFormType}
                                    getStudents={this.getStudents}
                                />
                            </ModalComponent>
                            : null
                    }
                    {
                        (deleteConfirmation) ?
                            <div className="delete__confirmation">
                                <div className="delete__confirmation--title">
                                    <span>Confirm </span>
                                    <span className="delete_-confirmation--close"><img src={closeImage} alt="" onClick={this.closeConfirmMessage} /></span>
                                </div>
                                <div className="delete__confirmation--description">
                                    <div className="delete__confirmation__desription--image">
                                        <img src={warningImage} alt="" />
                                    </div>
                                    <div className="delete__confirmation__description--title">
                                        <div><span>Are you sure you want to delete this file.</span></div>
                                        <div><span>You can't undo this action.</span></div>
                                    </div>
                                </div>
                                <div className="delete__confirmation--buttons">
                                    <button className="delete__confirmation--button--no" onClick={this.closeConfirmMessage}>No</button>
                                    <button className="delete__confirmation--button--yes" onClick={this.confirmDeleteStudent}>Yes</button>
                                </div>
                            </div>
                            : null
                    }
                    {
                        (submitMessage) ?
                            <AlertMessageComponent
                                alertMessageType={alertMessageType}
                                alertMessageTitle={alertMessageTitle}
                                closeSubmitMessage={this.closeSubmitMessage}
                            />
                            : null
                    }
                </div>
            </div>
        )
    }
}

const StudentPagination = ({ studentCount, paginateOnClick, pageNo, onClickNextData, onClickPrevData }) => {

    let count = [];

    for (let index = 1; index < studentCount + 1; index++) {
        count.push(index);
    }

    let prev = (pageNo) <= 1;
    let next = (pageNo) < studentCount;

    return (
        <div className="paginate__container">
            <div><span className={`paginat--prev ${(prev) ? 'active-prev-next' : null}`} onClick={() => prev ? null : onClickPrevData(pageNo - 1)}>Prev </span></div>
            <div className="paginate__number">
                {
                    count.map(i => (
                        <span style={(pageNo) === i ? { backgroundColor: '#3D76CC', color: '#ffffff' } : null} onClick={() => paginateOnClick(i)} key={i}>{i}</span>
                    ))
                }
            </div>
            <div><span onClick={() => next ? onClickNextData(pageNo + 1) : null} className={(next) ? null : 'active-prev-next'}> Next</span></div>
        </div>
    )

}

export default withAuth(StudentComponent);