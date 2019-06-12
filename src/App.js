import React, { Fragment, Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import User from './components/users/Users';
class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <User />
        </div>
      </div>
    );
  }
}

export default App;
