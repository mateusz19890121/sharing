import React, {Component} from 'react';
import {Link as Link1} from "react-router-dom";
import {Link as Link2} from "react-scroll";

class FormStep1NavLoggedIn extends Component{
    state = {

    };

    render() {
        return (
            <>

                <div className="home__login">
                    <nav>
                        <ul className="home__login--ul login__ul">
                            <li>Cześć {" " + this.props.login}</li>
                            <li className="login__li1">
                                <Link1 to={{pathname: '/logowanie'}}>Oddaj rzeczy</Link1>
                            </li>
                            <li className="login__li2">
                                <Link1 to="/rejestracja">Wyloguj</Link1>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="home__menu login__menu">
                    <nav>
                        <ul className="home__menu--ul">
                            <li>
                                <Link2 to="start" smooth={true} duration={2500}>Start</Link2>
                            </li>
                            <li>
                                <Link2 to="theIdea" smooth={true} duration={2500}>O co chodzi?</Link2>
                            </li>
                            <li>
                                <Link2 to="about" smooth={true} duration={2500}>O nas</Link2>
                            </li>
                            <li>
                                <Link2 to="foundations" smooth={true} duration={2500}>Fundacja i organizacje</Link2>
                            </li>
                            <li>
                                <Link2 to="contact" smooth={true} duration={2500}>Kontakt</Link2>
                            </li>
                        </ul>
                    </nav>
                </div>
            </>
        );
    }

}
export default FormStep1NavLoggedIn;