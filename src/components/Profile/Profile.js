import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div>
            <h2 className='profile'>Profile</h2>
            <h3 className='name'>Name: Tanjila Joti</h3>
            <p className='loc'>Dhaka, Bangladesh</p>

            <div className='info'>
                <div className='personal-info'>
                    <h4>Weight: </h4>
                    <p>43 kg</p>
                </div>
                <div className='personal-info'>
                    <h4>Height: </h4>
                    <p>5.2</p>
                </div>
                <div className='personal-info'>
                    <h4>Age: </h4>
                    <p className='age'> 23 yrs</p>
                </div>
            </div>

        </div>
    );
};

export default Profile;