import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    return (
        <div >
            <div className='header'>
                <FontAwesomeIcon className='icon' icon={faBook} />
                <h2>Study-Active-Club</h2>
            </div>

            <h4 className='selected'>Select today's Subject to Study</h4>
        </div>


    );
};

export default Header;