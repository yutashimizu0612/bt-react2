import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import AppHeader from './components/AppHeader';
import CustomerInfo from './pages/CustomerInfo';
import Answer from './pages/Answer';
import Contact from './pages/Contact';

class App extends Component {
  render() {
    return (
      <>
        <AppHeader />
        <div className="content">
          <BrowserRouter>
            <Route path="/" component={CustomerInfo}></Route>
            <Route exact path="/contact/answer" component={Answer}></Route>
            <Route exact path="/contact/detail" component={Contact}></Route>
          </BrowserRouter>
        </div>
      </>
    );
  }
}

export default App;
