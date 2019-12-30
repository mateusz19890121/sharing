import React from "react";

const ContactForm = (props) => {
    return (
     <div className="contact__form--container">
     <h1>Skontaktuj się z nami</h1>
     <div className="idea__picture"/>
         <form action="" className="home__form">
             <div className= "input__container">
                 <div className="input1">
                     Wpisz swoję imię<br/>
                     <input type="text" placeholder="Krzysztof"/>
                 </div>
                 <div className="input2">
                     Wpisz swój email<br/>
                     <input type="text" placeholder="abc@xyz.pl"/>
                 </div>
             </div>
             <div>
             Wpisz swoją wiadomość<br/>
             </div>
             <textarea name="" id="" cols="30" rows="5" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
             <button>Wyślij</button>
         </form>
     </div>

    )
};
export default ContactForm;