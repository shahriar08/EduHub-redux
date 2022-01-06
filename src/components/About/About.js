import React from 'react';
import './About.css'
import image from './about-us.jpg'
const About = () => {
    return (
        <div className="container">
            <div>
                <h2 className="d-flex justify-content-center text-danger fw-bolder">About us</h2>
                <h4 className="d-flex justify-content-center">Changing learning for the better</h4>
                <p className="d-flex justify-content-center" >
                    Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.</p>
            </div>
            <div className="d-flex justify-content-center">
                <img className='w-50' src={image} alt="" />
            </div>
            <div>

            </div>
        </div>

    );
};

export default About;