import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = props => {
    const [inputs, setInputs ] = useState({
        username: '',
        password: ''
    })
    
    const handleChange = event => {
        setInputs({ ...inputs, [event.target.name]: event.target.value })
    }

    const handleLogin = event => {
        event.preventDefault();
        axiosWithAuth()
            .post('/login', inputs)
            .then(response => {
                console.log(response)
                sessionStorage.setItem('token', response.data.payload)
                props.history.push('/protectedFriendsList')
            })
            .catch(error => console.log(error))
        }

    
    return (
        <div className='login-container'>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input 
                name='username'
                placeholder='Enter Username'
                onChange={handleChange}
                value={inputs.username}
                />
                <input 
                name='password'
                type='password'
                placeholder='Enter Password'
                onChange={handleChange}
                value={inputs.password}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;
