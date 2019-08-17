import React, { Component } from 'react';
import './StudentFormComponent.css';
import axios from 'axios';

class StudentFormComponent extends Component {

    state = {
        firstname: '',
        middlename: '',
        lastname: '',
        address: '',
        age: '',
        birthday: '',
        mobile_number: '',
        telephone: '',
        gender: '',
        email: '',
        marital_status: ''
    }

    onhandleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitForm = async (e) => {
        e.preventDefault();


        const { firstname, middlename, lastname, address, birthday, age, email, telephone, mobile_number, gender, marital_status } = this.state;

        let data = JSON.stringify({
            firstname: firstname,
            middlename: middlename,
            lastname: lastname,
            address: address,
            age: age,
            birthday: birthday,
            mobile: mobile_number,
            telephone: telephone,
            gender: gender,
            email: email,
            marital_status: marital_status
        });

        const { students } = this.props;

        let url = 'https://backend-3tocorp.herokuapp.com/students/create';

        await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
        })
            .then(async res => {
                console.log(res);

                await this.props.onCloseModal();
                await this.props.onSubmitMessage(true);

            })
            .catch(error => {
                this.setState({
                    signInErrorMessage: true
                })
                console.log(error);
            })


    }

    render() {

        return (
            <div className="student__form__component">
                <form onSubmit={this.onSubmitForm} >
                    <div className="student__form__component--container--form" >
                        <div className="student__form__component--left">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" id="sfirstname" name="firstname" onChange={(e) => this.onhandleChange(e)} placeholder="firstname.." />

                            <label htmlFor="middlename">Middle Name</label>
                            <input type="text" id="smiddlename" name="middlename" onChange={(e) => this.onhandleChange(e)} placeholder="middlename.." />

                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" id="slastname" name="lastname" onChange={(e) => this.onhandleChange(e)} placeholder="lastname.." />

                            <label htmlFor="address">Address</label>
                            <input type="text" id="saddress" name="address" onChange={(e) => this.onhandleChange(e)} placeholder="address.." />

                            <label htmlFor="age">age</label>
                            <input type="number" id="sage" name="age" onChange={(e) => this.onhandleChange(e)} placeholder="age.." />

                            <label htmlFor="birthday">Birthday</label>
                            <input type="date" id="sbirthday" name="birthday" onChange={(e) => this.onhandleChange(e)} placeholder="birthday.." />

                        </div>

                        <div className="student__form__component--left">

                            <label htmlFor="mobilenumber">Moble Number</label>
                            <input type="number" id="smobileNumber" name="mobile_number" onChange={(e) => this.onhandleChange(e)} placeholder="mobile number.." />

                            <label htmlFor="telephone">Telephone</label>
                            <input type="number" id="stelephone" name="telephone" onChange={(e) => this.onhandleChange(e)} placeholder="telephone.." />

                            <label htmlFor="gender">Gender</label>
                            <select id="gender" name="gender" onChange={(e) => this.onhandleChange(e)}>
                                <option value="" defaultValue></option>
                                <option value="male" >Male</option>
                                <option value="female">Female</option>
                            </select>

                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" onChange={(e) => this.onhandleChange(e)} placeholder="email.." />

                            <label htmlFor="marital_status">Civil Status</label>
                            <select id="marital_status" name="marital_status" onChange={(e) => this.onhandleChange(e)}>
                                <option value="" defaultValue></option>
                                <option value="single" >Single</option>
                                <option value="married">Married</option>
                            </select>

                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div >
        )
    }
}

export default StudentFormComponent;