import React, { useEffect, useState } from 'react';
import './SubjectList.css';

const SubjectList = (props) => {
    const { list, breakTime } = props;
    let total = 0;
    let quantity = 0;
    for (const subject of list) {
        quantity = quantity + subject.quantity;
        total = total + subject.time * subject.quantity;
    }




    return (
        <div >
            <div>
                {/* {
                    // breakTime.map(time => <li>{time.Time} min</li>)
                    breakTime.map(time => console.log(time))
                } */}
                <li className='break-time' onClick={() => props.handleAddToBreak(10)}><span id='time'>10</span>min</li>
                <li className='break-time' onClick={() => props.handleAddToBreak(20)}><span id='time'>20</span>min</li>
                <li className='break-time' onClick={() => props.handleAddToBreak(30)}><span id='time'>30</span>min</li>
                <li className='break-time' onClick={() => props.handleAddToBreak(40)}><span id='time'>40</span>min</li>

            </div>
            <div className='cart'>
                <h4>List Summary</h4>
                <p>Selected Items: {quantity}</p>
                <p>Total Time: {total}</p>
                <p className='break-feild'>Break Time: {breakTime}</p>
            </div>
        </div>
    );
};

export default SubjectList;