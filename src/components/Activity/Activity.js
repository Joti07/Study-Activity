import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import './Activity.css'
import Subject from '../Subject/Subject';
import SubjectList from '../SubjectList/SubjectList';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Activity = () => {
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
                            handleAddToList={handleAddToList}
                            subject={subject}
                        ></Subject>)
                    }

                </div>
                <div className='profile-container'>
                    <SubjectList list={list}> </SubjectList>
                </div>

            </div>



        </div>
    );
};

export default Activity;