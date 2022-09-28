import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import './Activity.css'

const Activity = () => {
    const [sub, setSub] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setSub(data))

    }, []);
    return (

        <div className='activity-container'>
            <div>
                <FontAwesomeIcon icon={faBook} />
                <h2>Study-Active-Club</h2>
            </div>
            <h4>Select today's Subject to Study</h4>
            <div className='subjects-container'>
                {
                    sub.map(subject => console.log(subject.title))
                }

            </div>
            <div className='profile-container'>


            </div>


        </div>
    );
};

export default Activity;