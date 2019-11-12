import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='protectedFriendsList' component={FriendsList} />
      </Switch>
    </div>
  );
}

export default App;
