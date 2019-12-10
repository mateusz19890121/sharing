import React, {Component} from 'react';
import ReactDOM from "react-dom";
import HomeHeader from './HomeHeader'
import {Link} from "react-router-dom";



class HomeNav extends Component{


    render() {
        return(
            <>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/logowanie">Zaloguj</Link>
                        </li>
                        <li>
                            <Link to="/rejestracja">Załóż Konto</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <nav>
                    <ul>
                        <li>Start</li>
                        <li>O co chodzi</li>
                        <li>O nas</li>
                        <li>Fundacja i organizacje</li>
                        <li>Kontakt</li>
                    </ul>
                </nav>
            </div>
            </>
        )
    }
}

export default HomeNav;