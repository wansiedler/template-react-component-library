
import "./Button.scss";
import React, {useEffect} from "react";
// import {Provider} from "react-redux";
// import {getStore} from "../UiWiWidget/store/RTKstore";

export interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    return   <>
        {/*<Provider store={getStore()}>*/}
            <button
            >{props.label}</button>
        {/*</Provider>*/}
    </>
};

export default Button;
