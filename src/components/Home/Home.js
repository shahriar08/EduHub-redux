import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './Home.css'
import Course from '../Course/Course';
const Home = (props) => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("/fakeCourses.json")
            .then(res => res.json())
            .then(data => {
                const sliceData = data.slice(0, props.limit ?? 100)
                setCourses(sliceData);
            });
    }, [])

    return (
        <div>
            <Header headerClass="homeHeader">
                <h1 className="header-title d-flex align-items-center justify-content-center mt-5">Learn a new skill online on your time </h1>
            </Header>
            <button type="button" className="btn btn-danger header-btn">Find Your Courses</button>
            <Course limit={4} />
        </div>
    );
};

export default Home;