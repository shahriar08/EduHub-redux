import React, { useEffect, useState } from 'react';
import Courses from '../Courses/Courses';
const Course = (props) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("/fakeCourses.json")
            .then(res => res.json())
            .then(data => {
                const sliceData = data.slice(0, props.limit ?? 100)
                setCourses(sliceData);
            });
    }, []);
    return (
        <div className="row">
            {
                courses.map(course => <Courses key={course.id} course={course}></Courses>)
            }
        </div>
    );
};

export default Course;