import React, {Component} from 'react';
import ReactDOM from "react-dom";
import HomeHeader from './HomeHeader'
import {Link} from "react-router-dom";



class HomeNav extends Component{


    render() {
        return(
            <>

            <div className="home__login">
                <nav>
                    <ul className="home__login--ul">
                        <li>
                            <Link to="/logowanie">Zaloguj</Link>
                        </li>
                        <li>
                            <Link to="/rejestracja">Załóż Konto</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="home__menu">
                <nav>
                    <ul className="home__menu--ul">
                        <li>
                            <Link to="start" smooth={true} duration={3000}>Start</Link>
                        </li>
                        <li>
                            <Link to="theIdea" smooth={true} duration={3000}>O co chodzi</Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={3000}>O nas</Link>
                        </li>
                        <li>
                            <Link to="foundations" smooth={true} duration={3000}>Fundacja i organizacje</Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={3000}>Kontakt</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            </>
        )
    }
}

export default HomeNav;