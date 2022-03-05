import './Button.css'
const Button = (props) =>{
    return(
        <input className="btn" type="button" value={props.buttonText} onClick={props.handleClick} />
    )
}

export default Button;