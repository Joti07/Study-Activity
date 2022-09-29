import React from 'react';
import './FAQ.css';

const FAQ = () => {
    return (
        <div className='FAQ'>
            <h1>FAQ</h1>
            <div>

                <h2>How does react works? </h2>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to
                    JavaScript functions as they accept arbitrary inputs called properties or props. Users can create a representation of a DOM node by
                    declaring the Element function in React. A React app usually has a single root DOM node. Rendering an element
                    into the DOM will change the user interface of the page
                </p>


            </div>
            <div >

                <h2>Difference between props and state </h2>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>


            </div>
            <div >

                <h2>What is the purpose of useEffect accept load data with API?</h2>
                <p>
                    1. useEffect() is for side-effects: A functional React component uses props and/or state to calculate the output. If the functional component makes calculations that don't target the output value, then these calculations are named side-effects. <br></br>
                    2. Dependencies argument: dependencies argument of useEffect(callback, dependencies) lets you control when the side-effect runs. <br />
                    3. Component lifecycle:useEffect(..., []) was supplied with an empty array as the dependencies argument. When configured in such a way, the useEffect() executes the callback just once, after initial mounting. <br></br>
                    4. Component did update: The useEffect(callback, [prop, state]) invokes the callback after the changes are being committed to DOM and if and only if any value in the dependencies array [prop, state] has changed. <br></br>
                    5. Side-effect cleanup: If the callback of useEffect(callback, deps) returns a function, then useEffect() considers this as an effect cleanup <br></br>
                </p>


            </div>
        </div>
    );
};

export default FAQ;