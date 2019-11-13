import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/protectedFriendsList'>Friend's List</Link>
        </li>
        <li>
          <Link to='/protectedAddFriend'>Add Friend</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/protectedFriendsList' component={FriendsList}  />
        <PrivateRoute exact path='/protectedAddFriend' component={AddFriend}  />
      </Switch>
    </div>
  );
}

export default App;
