import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import InputCustomerInfo from './components/InputCustomerInfo';
import InputAnswer from './components/InputAnswer';
import InputContact from './components/InputContact';

class App extends Component {
  render() {
    return (
      <>
        <AppHeader />
        <div className="content">
          <InputCustomerInfo />
          <InputAnswer />
          <InputContact />
        </div>
      </>
    );
  }
}

export default App;
