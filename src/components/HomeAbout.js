import React, {Component} from 'react';
import ReactDOM from "react-dom";
import { Link as Link2, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import {Link as Link1} from "react-router-dom";

class HomeAbout extends Component{

    render() {
        return(
            <>
               <div className="about__container">
                   <div className="about__box1">
                       <h1>O nas</h1>
                       <div className="idea__picture"></div>
                       <p id="about">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                          Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                       <div className="signature"></div>
                   </div>
                   <div className="about__box2"></div>
               </div>
            </>
        )
    }
}
export default HomeAbout;