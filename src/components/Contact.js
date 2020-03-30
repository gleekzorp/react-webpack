import React, { useState } from 'react';
import ContactForm from '../forms/ContactForm';

const Contact = (props) => {
    const [userName, setUserName] = useState('')
    const handleName = (name) => {
        setUserName(name)
    }
    return (
        <div>
            <h1>Contact</h1>
            {userName ? <div>Welcome, {userName}</div> : null}
            <ContactForm handleName={handleName}/>
        </div>
    );
}
 
export default Contact;