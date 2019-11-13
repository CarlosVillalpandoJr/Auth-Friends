import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddFriend = props => {
    const [ friend, setFriend ] = useState({
        name: '',
        age: '',
        email: ''
    })
    
    const handleChange = event => {
        setFriend({ 
            ...friend, 
            [event.target.name]: event.target.value
        })
    }

    const handleLogin = event => {
        event.preventDefault();
        axiosWithAuth()
            .post('/login', inputs)
            .then(response => {
                console.log(response)
                sessionStorage.setItem('token', response.data.payload)
            })
            .catch(error => console.log(error))
        }

    
    return (
        <div className='login-container'>
            <h1>Add a Friend!</h1>
                <form onSubmit={handleLogin}>
                <input 
                name='name'
                placeholder='Enter Name'
                onChange={handleChange}
                value={friend.name}
                />
                <input 
                name='age'
                type='text'
                placeholder='Enter Age'
                onChange={handleChange}
                value={friend.age}
                />
                <input 
                name='email'
                type='email'
                placeholder='Enter Email'
                onChange={handleChange}
                value={friend.email}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default AddFriend;
