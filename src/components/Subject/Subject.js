import React from 'react';
import './Subject.css';

const Subject = (props) => {
    const { title, img, time, Class } = props.subject;
    return (
        <div className='subject'>
            <img src={img} alt="" />
            <div className='subject-info'>
                <p >{title}</p>
                <p>Class: {Class}</p>
                <p><small>Time:  {time} min</small></p>

            </div>
            <button className='btn-list' onClick={() => props.handleAddToList(props.subject)} >
                <p className='btn-text'>Add to list</p>

            </button>

        </div>
    );
};

export default Subject;