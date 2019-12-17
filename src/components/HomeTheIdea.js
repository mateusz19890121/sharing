import React, {Component} from 'react';
import ReactDOM from "react-dom";
import { Link as Link2, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import {Link as Link1} from "react-router-dom";

class HomeTheIdea extends Component{

    render() {
        return(
            <>
           <div className="idea__picture--container" id="theIdea">
               <h1>
                   Wystarczą 4 proste kroki
               </h1>
               <div className="idea__picture"></div>
           </div>
            <div className="idea__icons--container">
                <div className="idea_box1 idea__boxes">
                    <div className="icon1 icons"/>
                    <h3>Wybierz rzeczy</h3>
                    <div className="line line1"></div>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="idea_box2 idea__boxes">
                    <div className="icon2 icons"/>
                    <h3>Spakuj je</h3>
                    <div className="line"></div>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="idea_box3 idea__boxes">
                    <div className="icon3 icons"/>
                    <h3>Zdecyduj komu chcesz pomóc</h3>
                    <div className="line"></div>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="idea_box4 idea__boxes">
                    <div className="icon4 icons"/>
                    <h3>Zamów kuriera</h3>
                    <div className="line"></div>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="home__article--container">
                <div className="home__article--box">
                    <Link1 to="/logowanie">
                        <span className="home__article--box1 box idea__box5" style={{"display": "flex"}}>ODDAJ RZECZY</span>
                    </Link1>
                </div>
            </div>
           </>
        )
    }
}
export default HomeTheIdea;