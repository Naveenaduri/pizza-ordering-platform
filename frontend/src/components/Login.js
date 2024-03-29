import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect,withRouter} from 'react-router-dom'
class Login extends Component {
    
   
    render() {
        return (
                <h2 align='center'>
                    Login Form
                </h2>
                
        )
    }
}

export default withRouter( Login);