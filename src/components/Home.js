import React, {Component} from 'react';
import ReactDOM from "react-dom";
import HomeHeader from './HomeHeader'
import HomeNav from "./HomeNav";


class Home extends Component{


    render() {
        return(
            <>
            <HomeNav/>
            <h1>Lubie placki</h1>
            <HomeHeader/>
            </>
        )
    }
}

export default Home;