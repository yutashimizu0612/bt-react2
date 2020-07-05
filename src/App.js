import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import InputCustomerInfo from './components/InputCustomerInfo';
import InputAnswer from './components/InputAnswer';
import InputContact from './components/InputContact';
import PrimaryButton from './components/PrimaryButton';

class App extends Component {
  render() {
    return (
      <>
        <AppHeader />
        <div className="content">
          <InputCustomerInfo />
          <InputAnswer />
          <InputContact />
          <div className="buttons has-addons is-centered mt-5">
            <PrimaryButton />
          </div>
        </div>
      </>
    );
  }
}

export default App;
