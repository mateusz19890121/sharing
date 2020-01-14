import React, {Component} from 'react';
import HomeNav from "./HomeNav";
import {Link as Link2} from "react-scroll";

class LoginLayout extends Component{

    render() {
        return(
            <div className="login" id="logowanie">
            <HomeNav/>
            <div className="idea__picture--container"/>
            <h1>
            Zaloguj się
            </h1>
            <div className="idea__picture"></div>
                <form >
                    <label className="login__label1">
                        <div className="login__text">Email</div>
                        <input type="text"/>
                    </label>
                    <label className="login__label2">
                        <div className="login__text">Hasło</div>
                        <input type="text"/>
                    </label>
                </form>
                <div className="home__menu login__menu login__buttons">
                 <nav>
                     <ul className="home__menu--ul">
                         <li>
                             Załóż konto
                         </li>
                         <li>
                             Zaloguj się
                         </li>
                     </ul>
                 </nav>
             </div>
            </div>
        )
    }

}
export default LoginLayout;