import React from "react";

const ContactForm = (props) => {
    return (
     <div className="contact__form--container">
     <h1>Skontaktuj się z nami</h1>
     <div className="idea__picture"/>
         <form action="">
             Wpisz swoję imię<br/>
             <input type="text"/>
             Wpisz swój email<br/>
             <input type="text"/>
             Wpisz swoją wiadomość<br/>
             <textarea name="" id="" cols="30" rows="10"></textarea>
             <button>Wyślij</button>
         </form>
     </div>

    )
};
export default ContactForm;