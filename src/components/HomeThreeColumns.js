import React, {Component} from 'react';
import ReactDOM from "react-dom";

class HomeThreeColumns extends Component{

    render() {
        return(
            <div className="three__columns--container">
                <div className="three__columns--box1 all__boxes">
                    <h1>10</h1>
                    <h2>ODDANYCH WORKÓW</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.</p>
                </div>
                <div className="three__columns--box2 all__boxes">
                    <h1>5</h1>
                    <h2>WSPARTYCH ORGANIZACJI</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.</p>
                </div>
                <div className="three__columns--box3 all__boxes">
                    <h1>7</h1>
                    <h2>ZORGANIZOWANYCH ZBIÓREK</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.</p>
                </div>
            </div>
        )
    }
}
export default HomeThreeColumns;