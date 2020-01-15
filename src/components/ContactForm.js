import React, {Component} from 'react';

class ContactForm extends Component {
    state = {
      name: "",
      nameError: "",
      email: "",
      emailError: "",
      textarea: "",
      textareaError: "",
      fetchError: "",
      success: false
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
     };
    validateEmail = (email) => {
         const re = /\S+@\S+\.\S+/;
         return re.test(email);
     };
    formSubmit = e => {
         e.preventDefault();
         const {name, email, textarea} = this.state;
         let error = false;

         this.setState({
           nameError: "",
           emailError: "",
           textareaError: "",
           fetchError: "",
           success: false
         });
         if (name.length === 0) {
           this.setState({
             nameError: "Podane imię jest nieprawidłowe!"
           });
           error = true;
         }
         if (!this.validateEmail(email)) {
           this.setState({
             emailError: "Podany email jest nieprawidłowy!"
           });
           error = true;
         }
         if (textarea.length < 120) {
           this.setState({
             textareaError: "Wiadomość musi mieć conajmniej 120 znaków!"
           });
           error = true;
         }

         if (error) {
           return false;
         }
         fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
           method: 'POST',
           body: JSON.stringify({
             name,
             email,
             message: textarea
           }),
           headers: new Headers({
             "Content-Type": "application/json"
           })
         }).then(resp => resp.json()).then(data => {
           if (data.status === "error") {
             this.setState({
               fetchError: data.errors.map((msg ,idx) => {
                 return <p key={idx}>{msg.msg}</p>
               })
             });
             return false;
           }

           if (data.status === "success") {
             this.setState({
               success: true,
               name: "",
               email: "",
               textarea: ""
             });
             return false;
           }
           this.setState({
             fetchError: "Message can't be sent. We are fixing problem now. Please Try again later."
           })
         }).catch(error => {
           this.setState({
             fetchError: error
           })
         });
       };

    render(){
    const {name, nameError, email, emailError, textarea, textareaError, success, fetchError} = this.state;

    return (
     <div className="contact__form--container">
     <h1>Skontaktuj się z nami</h1>
     <div className="idea__picture"/>
         {success ? <div className={"success"}>Wiadomość została wysłana! Wkrótce się skontaktujemy.</div> : null}
         {fetchError ? <div className={"success"} style={{color: "rgba(255,0,0,.7)"}}>{fetchError}</div> : null}
         <form onSubmit={this.formSubmit} className="home__form">
             <div className= "input__container">
                <div className="input2">
                 <label>
                     Wpisz swoję imię<br/>
                     <input type={"text"}
                            placeholder={"Krzysztof"}
                            name={"name"}
                            value={name}
                            onChange={this.handleChange}
                            style={nameError ? {borderBottom: "1px solid rgba(255,0,0,.7)"} : null}
                            />
                            {nameError ? <p>{nameError}</p> : null}
                 </label>
                </div>
                 <div className="input2">
                  <label>
                     Wpisz swój email<br/>
                     <input type={"text"}
                            placeholder={"abc@xyz.pl"}
                            name={"email"}
                            value={email}
                            onChange={this.handleChange}
                            style={emailError ? {borderBottom: "1px solid rgba(255,0,0,.7)"} : null}
                            />
                            {emailError ? <p>{emailError}</p> : null}
                  </label>
                 </div>
             </div>
             <div className="message">
             Wpisz swoją wiadomość<br/>
             </div>
             <textarea name={"textarea"}
                       cols="30"
                       rows="5"
                       placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing
                       elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                       nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                       value={textarea}
                       onChange={this.handleChange}
                       style={textareaError ? {borderBottom: "1px solid rgba(255,0,0,.7)"} : null}
                       ></textarea>
             {textareaError ? <p className="alert">{textareaError}</p> : null}
             <button>Wyślij</button>
         </form>
     </div>
    )
    }
}

export default ContactForm;
