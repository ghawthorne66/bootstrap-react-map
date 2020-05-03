import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Home from './pages/Home'
import News from './pages/News'
import Contacts from './pages/Contacts'
import Details from './pages/Details'
import NotFound from './pages/NotFound'
import './App.css';

class App extends Component {
  render() {

    return (
      <div>
        <NavBar />
       
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/news" component={News}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/details" component={Details}/>
          <Route component={NotFound}/>
        </Switch>

        <Footer />
      </div>
    );

  }
}

export default App;
