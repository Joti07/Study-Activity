import React from 'react';
import './SubjectList.css';

const SubjectList = (props) => {
    const { list } = props;
    let total = 0;
    let quantity = 0;
    for (const subject of list) {
        quantity = quantity + subject.quantity;
        total = total + subject.time * subject.quantity;
        // shipping = shipping + subject.shipping;
    }
    return (
        <div className='cart'>
            <h4>List Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Time: {total}</p>
            {/* <p>Total shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h3>Grand total: {(total + shipping + parseFloat(tax)).toFixed(2)}</h3> */}
        </div>
    );
};

export default SubjectList;