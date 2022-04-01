import React from 'react';
import "./contact.scss"
import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e)=> {
        e.preventDefault();
        setMessage(true);
    }


    return (
        <div className="contact" id="contact">
            <div className="left">
           < img src="https://user-images.githubusercontent.com/71200950/161159730-35e89d9b-e7af-46ce-9362-2d1059b1ce77.jpg" alt="Contact Me" />
           </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Name"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thank you for reaching out to me. I will be in touch soon.</span>}
                </form>
            </div>

        </div>
    );
}

export default Contact;


