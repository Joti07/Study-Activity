import React, { useEffect, useState } from 'react';
import './SubjectList.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from '../Profile/Profile';

const SubjectList = (props) => {
    const { list, breakTime } = props;
    let total = 0;
    let quantity = 0;
    for (const subject of list) {
        quantity = quantity + subject.quantity;
        total = total + subject.time * subject.quantity;
    }

    const handleClick = () => {
        toast.success("Activity Completed !!", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false
        });
        localStorage.setItem('study-cart', JSON.stringify(' '));
        localStorage.setItem('break-time', 0);
        window.location.reload(false);
    }


    return (
        <div className='cart'>
            <Profile></Profile>
            <h2 className='profile'>Break Time</h2>
            <div >
                <li className='break-time' onClick={() => props.handleAddToBreak(10)}> 10 <small> min</small></li>
                <li className='break-time' onClick={() => props.handleAddToBreak(20)}> 20 <small> min</small></li>
                <li className='break-time' onClick={() => props.handleAddToBreak(30)}> 30 <small> min</small></li>
                <li className='break-time' onClick={() => props.handleAddToBreak(40)}> 40 <small> min</small></li>
                <li className='break-time' onClick={() => props.handleAddToBreak(50)}> 50 <small> min</small></li>

            </div>
            <div >
                <h2 className='profile'>Study Details</h2>
                {/* <p>Selected Items: {quantity}</p> */}
                <p>Study Time: {total}</p>
                <p className='break-feild'>Break Time: {breakTime}</p>
            </div>
            <button className='btn' onClick={handleClick}>Activity Complete</button>
            <ToastContainer />
        </div>
    );
};

export default SubjectList;