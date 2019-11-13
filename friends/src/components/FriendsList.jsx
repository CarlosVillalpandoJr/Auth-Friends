import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = props => {
    const [friends, setFriends] = useState([])


    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then(response => {
                setFriends(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='friends-list'>
            <h1>Friend's List</h1>
            {friends.map(friend => {
                return (
                    <div className='friend-card' key={friend.id}>
                        <h4>{`${friend.name} is ${friend.age}`}</h4>
                        <p>{`Contact him at ${friend.email}`}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default FriendsList;
