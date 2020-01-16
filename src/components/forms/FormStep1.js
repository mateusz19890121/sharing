import React, {Component} from 'react';
import Img from "./Img";
import FormStep1NavLoggedIn from "./FormStep1NavLoggedIn";
import Squares from "./Squares";

class FormStep1 extends Component{
    state = {
        login: "mateusz@gmail.com"
    };

    render() {
        return (
            <div>
                <FormStep1NavLoggedIn
                    login = {this.state.login}
                />
                <Img
                    formStep1 ={"Oddaj rzeczy, których już nie chcesz"}
                    formStep1a ={"POTRZEBUJĄCYM"}
                    formText ={"Wystarczą 4 proste kroki"}
                />
                <Squares/>
            </div>
        );
    }

}
export default FormStep1;