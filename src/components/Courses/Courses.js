import React from 'react';
import './Courses.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
const Courses = (props) => {

    const { image, author, coursePrice, rating, enroll, courseInfo } = props.course;

    return (
        <div className='col-md-6 col-lg-4 col-sm-12'>
            <div className="card d-flex justify-content-center align-items-center">
                <img src={image} className="card-img-top course-img" alt="..."></img>
                <div className="card-body">        
                    <p className="card-text text-center"><span className="fw-bolder">Course Name:</span> {courseInfo}$</p>
                    <p className="card-text text-center"><span className="fw-bolder">Author Name:</span> {author}</p>
                    <p className="card-text text-center fs-6"><span className="fw-bolder">User Rating:</span> {rating}</p>
                    <p className="card-text text-center fs-6"><span className="fw-bolder">User Enroll:</span> {enroll}</p>
                    <p className="card-text text-center fs-6"><span className="fw-bolder">Course Price:</span> {coursePrice}$</p>
                    <Link to="/courses" className="items fs-6 d-flex justify-content-center "><span className="rounded-3 fw-bolder p-2 mb-2 bg-danger text-white">Buy Now</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Courses;