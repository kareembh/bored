import './Button.css'
const Button = (props) =>{
    return(
        <div className="btn" onClick={props.handleClick}>
            <p className="btn-text">{props.buttonText}</p>
        </div>
    )
}

export default Button;