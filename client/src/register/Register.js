
import React from 'react';
import axios from 'axios';

class Register extends React.Component {
    state = {
        username: "",
        password: "",
        department: ""
    }
    render() {
        return (
            <>
            <h2>Register New User</h2>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">username</label>
                        <input
                        placeholder="username"
                        name="username"
                        id="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        type="text"
                        />
                    <label htmlFor="password">password</label>
                        <input
                        placeholder="password"
                        name="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        type="text"
                        />
                    <label htmlFor="departmnet">department</label>
                        <input
                        placeholder="department"
                        name="department"
                        id="department"
                        value={this.state.department}
                        onChange={this.handleInputChange}
                        type="text"
                        />
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
            </>
        )
    }

    handleInputChange = e => {
        const {name, value} = e.target;
        this.setState({ [name]: value })
        console.log('target', e.target.value)
    }

    handleSubmit = e => {
        e.preventDefault();

        const endpoint = 'http://localhost:7000/api/auth/register';

        axios.post(endpoint, this.state)
        .then (res => {
            // localStorage.setItem('jwt', res.data.token)
            this.props.history.push('/users')
            console.log('response data: ', res.data)
        }).catch(e => {
            console.error(e);
        })
    };

    redirect = () => {
        localStorage.setItem('jwt');
        this.state.history.push('/login');
    }
}

export default Register;