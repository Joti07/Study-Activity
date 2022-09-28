import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import './Activity.css'
import Subject from '../Subject/Subject';

const Activity = () => {
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setSubjects(data))

    }, []);
    return (

        <div>
            <div className='header'>
                <FontAwesomeIcon className='icon' icon={faBook} />
                <h2>Study-Active-Club</h2>

            </div>
            <h4>Select today's Subject to Study</h4>
            <div className='activity-container'>
                <div className='subjects-container'>
                    {
                        subjects.map(subject => <Subject
                            key={subject.id}
                            subject={subject}
                        ></Subject>)
                    }

                </div>
                <div className='profile-container'>


                </div>

            </div>



        </div>
    );
};

export default Activity;