import React from 'react';
import picture from '../assets/images/kim-possible.png';
import '../App.css';

const AboutPage = () =>{
    return (
        <div>
            <h1>About Page</h1>
            <img className="avatar" src={picture} alt="Kim Possible" />
            <p>Hey there. <br />How are you?</p>
        </div>
    );
};

export default AboutPage;