import React, {Component} from 'react';
import ReactDOM from "react-dom";
import HomeHeader from './HomeThreeColumns'
import HomeNav from "./HomeNav";
import HomePicture from "./HomePicture";
import HomeArticle from "./HomeArticle";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeTheIdea from "./HomeTheIdea";
import HomeAbout from "./HomeAbout";
import HomeFoundations from "./HomeFoundations";
import Contact from "./Contact";
import FormStep1 from "./forms/FormStep1";

class Home extends Component{


    render() {
        return(
            <div>
            <div className="home__container">
                <HomePicture/>
            <div className="home__right--container">
                <HomeNav/>
                <HomeArticle/>
            </div>

            </div>
                <HomeThreeColumns/>
                <HomeTheIdea/>
                <HomeAbout/>
                <HomeFoundations/>
                <Contact/>
                <FormStep1/>
            </div>
        )
    }
}

export default Home;