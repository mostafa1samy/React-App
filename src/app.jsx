
import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import About from './about';
import Home from './home';
import Login from './login';
import Movie from './movies';
import Navbar from './navbar';
import NotFound from './notfound';
import Out from './out';
import ProtectedRoute from './protectRoute';

import Register from './register';


class App extends Component {
    state = { 
        
             }
             

    render() { 
        return (
            <React.Fragment>
                <Navbar/>
                <div className='container'>
                    <Switch>
                        <ProtectedRoute path='/home' component={Home} />
                        <ProtectedRoute path='/about' component={About}/>
                        <ProtectedRoute path='/movie' component={Movie}/>
                        <ProtectedRoute path='/out' component={Out}/>
                        <Route path='/register' component={Register}/>
                        <Route path='/login' component={Login}/>
                        <Redirect from='/' exact to ='/register'/>
                        <Route path='/notfound' component={NotFound}/>
                        <Redirect to='/notfound'/>

                       
                        
                    </Switch>
                    
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;