
import React from 'react';
import axios from 'axios';

// import requireAuth from '../auth/requireAuth';

class Users extends React.Component {
    state = {
        users: []
    };
    render() {
        return (
            <>
            <h2>Users List</h2>
            <ul>
                {this.state.users.map(user => (
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
            </>
        )
    }

    // componentDidMount() {
    //     axios.get('/users')
    //     .then(res => {
    //         this.setState({ users: res.data });
    //     }).catch(e => {
    //         console.error(e);
    //     });
    // }

    componentDidMount(){
        const headers = { authorization: localStorage.getItem('jwt') };
        const endpoint = "http://localhost:7000/api/users";
        axios.get(endpoint, {headers})
        .then( res => {
            this.setState({ users: res.data });
        })
        .catch( e => {
            console.error(e)
        });
    }
}

// export default requireAuth(Users);
export default Users;