import React, {Component} from 'react';
import ReactDOM from "react-dom";
import ContactForm from "./ContactForm"
import ContactFooter from "./ContactFooter";
class Contact extends Component{

    render() {
        return(
            <div className="contact__container" id="contact">
            <ContactForm/>
            <ContactFooter/>
            </div>
        )
    }

}

export default Contact;