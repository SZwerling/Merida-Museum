import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Events from './components/Events';
import Visit from './components/Visit';
import Members from './components/Members';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    return (
        <div>
            <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/visit' component={Visit} />
                    <Route path='/events' component={Events} />
                    <Route path='/members' component={Members} />
                    <Redirect to='/home' />
                </Switch>   
            <Footer />
        </div>
    
    )
}

export default withRouter(connect(null, null)(App));
