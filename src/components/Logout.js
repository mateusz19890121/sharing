import React, {Component} from 'react';
import HomeNav from "./HomeNav";
import {Link as Link} from 'react-router-dom';
class Logout extends Component{

    render() {
        return (
            <div className="login">
                <HomeNav/>
                <div className="idea__picture--container"/>
                <h1>
                    Wylogowanie nastąpiło<br/> pomyślnie!
                </h1>
                <div className="idea__picture"></div>
                <div className="home__menu logout__button--style">
                    <nav>
                <ul className="home__menu--ul">
                    <li><Link to={{pathname: '/'}}>Strona główna</Link></li>
                </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Logout;