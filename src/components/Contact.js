import React, {Component} from 'react';
import ReactDOM from "react-dom";
import ContactForm from "./ContactForm";
class Contact extends React.Component{

    render() {
        return(
            <div className="contact__container">
            <ContactForm/>
            </div>
        )
    }

}

export default Contact;