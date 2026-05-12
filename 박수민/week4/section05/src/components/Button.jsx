import { Children } from "react";

const onClickButton = (e) => {
    console.log(e);
    console.log(text);
}
const Button = (props) => {
    console.log(props);
    return (
    // <button
    //     onClick={()=>{
    //         console.log(text)
    //     }}
    // style={{ color: color}}>
    //     {text} - {color.toUpperCase()}
    //     {Children}
    // </button>
    );
};

Button.defaultProps = {
    color: "black",
};

export default Button;