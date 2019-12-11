import React, {Component} from 'react';
import ReactDOM from "react-dom";
import HomeHeader from './HomeHeader'
import HomeNav from "./HomeNav";
import HomePicture from "./HomePicture";
import HomeArticle from "./HomeArticle";


class Home extends Component{


    render() {
        return(
            <>
            <div className="home__container">
            <HomePicture/>
            <div className="home__right--container">
            <HomeNav/>
            <HomeArticle/>
            </div>
            </div>
            </>
        )
    }
}

export default Home;