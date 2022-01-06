import React from 'react';
import './NotFound.css'
import notFound from './notFound.jpg'
const NotFound = () => {
    return (
        <div className="d-flex justify-content-center pt-5">
            <div className="card row" style={{ width: "46rem" }}>
                <img className="card-img-top" src={notFound} alt="not found img" />
                <div className="card-body">
                    <h4 className="card-text text-center">Sorry, Page Not Found!</h4>
                </div>
                
            </div>
        </div>
    );
};

export default NotFound;