
import React, {Component} from 'react';
import logo from '../media/about_us.jpeg';
// import centerImage from './index.css';

export default class AboutUs extends Component{

    render() {
        return(
            <img src={logo} className="centerImage" alt="Logo" />
        )
    }
}

      