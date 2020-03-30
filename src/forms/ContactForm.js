import React, { useState } from 'react';

const ContactForm = (props) => {
    const [name, setName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleName(name)
        setName('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name.."
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input type="submit" value="Submit"/>
        </form>
    );
}
 
export default ContactForm;