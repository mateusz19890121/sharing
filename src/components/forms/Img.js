import React from "react";
const Img = (props) =>{

    return(
        <div className="idea__picture--container img__container">
            <h1>
                {props.formStep1} <br/> {props.formStep1a}
            </h1>
            <div className="form__picture"></div>
            <p>{props.formText}</p>
        </div>
    )
};
export default Img;