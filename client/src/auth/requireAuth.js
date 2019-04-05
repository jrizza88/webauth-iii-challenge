import React from 'react';
import axios from 'axios';

const baseURL = `S{process.env.API_URL}/api`

axios.defaults.baseURL = 'http://localhost:7000/api';

axios.interceptors.request.use(
    function(options) {
        options.headers.authorization = localStorage.getItem('jwt');

        return options;
    },

    function(error) {
        return Promise.reject(error)
    }
);

export default component => {
    return class Authenticated extends 
    React.Component {
        render() {
            const token = localStorage.getItem('jwt');

            const notLoggedIn = <div>Login to proceed </div>

            return 
            <> 
            {token > <Component {...this.props} /> : notLoggedIn }
            </>
        }
    }
}