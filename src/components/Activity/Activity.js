import React, { useEffect, useState } from 'react';

import './Activity.css'
import Subject from '../Subject/Subject';
import SubjectList from '../SubjectList/SubjectList';
import { addToDb, getStoredCart, getBreakTime } from '../../utilities/fakedb';
import Header from '../Header/Header';

const Activity = () => {

    // add subject 
    const [subjects, setSubjects] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setSubjects(data))

    }, []);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedSubject = subjects.find(subject => subject.id === id);
            if (addedSubject) {
                const quantity = storedCart[id];
                addedSubject.quantity = quantity;
                savedCart.push(addedSubject);
            }
        }
        setList(savedCart);
    }, [subjects]);

    const handleAddToList = (SelectedSubject) => {
        let newCart = [];
        const exists = list.find(product => product.id === SelectedSubject.id);
        if (!exists) {
            SelectedSubject.quantity = 1;
            newCart = [...list, SelectedSubject];
        }
        else {
            const rest = list.filter(subject => subject.id !== SelectedSubject.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setList(newCart);
        addToDb(SelectedSubject.id);
    };
    //-------------------------------------------------------------------------------------------------------
    // for break time
    let [breakTime, setBreakTime] = useState([]);
    const handleAddToBreak = (value) => {
        // console.log(value);
        breakTime = value;
        localStorage.setItem('break-time', JSON.stringify(breakTime));
        setBreakTime(breakTime);

    }
    useEffect(() => {
        const storedCart = localStorage.getItem('break-time');
        //console.log(storedCart);
        setBreakTime(storedCart);
    }, [breakTime]);



    return (




        <div className='activity-container'>

            <div className='subjects-container'>
                {
                    subjects.map(subject => <Subject
                        key={subject.id}
                        handleAddToList={handleAddToList}
                        subject={subject}
                    ></Subject>)
                }

            </div>
            <div className='profile-container'>
                <SubjectList
                    list={list}
                    breakTime={breakTime}
                    handleAddToBreak={handleAddToBreak}

                > </SubjectList>
            </div>

        </div>




    );
};

export default Activity;