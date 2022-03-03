const Button = (props) =>{
    return(
    <div onClick={props.getActivities}>
        <h1>{props.buttonText}</h1>
    </div>
    )
}

export default Button;