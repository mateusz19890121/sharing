import React, {Component} from 'react';
import HomeNav from "./HomeNav";

class RegisterLayout extends Component{
    state = {
        email: "",
        emailError: "",
        password: "",
        passwordError: "",
        password2: "",
        password2Error: ""
    };

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
        const {password, email, password2} = this.state;
        let error = false;

        this.setState({
            email: "",
            emailError: "",
            password: "",
            passwordError: "",
            password2: "",
            password2Error: ""
        });
        if (password.length < 6) {
            this.setState({
                passwordError: "Podane hasło jest za krótkie!"
            });
            error = true;
        }
        if (password2.length > 6){
            this.setState({
                password2Error: "Podane hasło jest za krótkie!"
            });
            error = true;
        }
        if (password2 !== password){
            this.setState({
                password2Error: "Podane hasła muszą być takie same"
            });
            error = true;
        }
        if (!this.validateEmail(email)) {
            this.setState({
                emailError: "Podany email jest nieprawidłowy!"
            });
            error = true;
        }
        if (error) {
            return false;
        }
    };

    render() {
        const {email, emailError, password, passwordError, password2, password2Error} = this.state;
        return(
            <div className="login">
                <HomeNav/>
                <div className="idea__picture--container"/>
                <h1>
                    Zaloguj się
                </h1>
                <div className="idea__picture"></div>
                <form className="register__layout--form" onSubmit={this.formSubmit}>
                    <label className="login__label1">
                        <div className="login__text">Email</div>
                        <input type={"text"}
                               name={"email"}
                               value={email}
                               onChange={this.handleChange}
                               style={emailError ? {borderBottom: "1px solid rgba(255,0,0,.7)"} : null}
                        />
                        {emailError ? <p>{emailError}</p> : null}
                    </label>
                    <label className="login__label2">
                        <div className="login__text">Hasło</div>
                        <input type={"text"}
                               name={"password"}
                               value={password}
                               onChange={this.handleChange}
                               style={passwordError ? {borderBottom: "1px solid rgba(255,0,0,.7)"} : null}
                        />
                        {passwordError ? <p>{passwordError}</p> : null}
                    </label>
                    <label className="login__label3">
                        <div className="login__text">Powtórz hasło</div>
                        <input type={"text"}
                               name={"password2"}
                               value={password2}
                               onChange={this.handleChange}
                               style={password2Error ? {borderBottom: "1px solid rgba(255,0,0,.7)"} : null}
                        />
                        {password2Error ? <p>{password2Error}</p> : null}
                    </label>

                <div className="home__menu login__menu login__buttons">
                    <nav>
                        <ul className="home__menu--ul login__buttons--position">
                            <li>
                                <button>Załóż konto</button>
                            </li>
                            <li>
                                <button disabled>Zaloguj się</button>
                            </li>
                        </ul>
                    </nav>
                </div>
                </form>
            </div>
        )
    }
}
export default RegisterLayout;