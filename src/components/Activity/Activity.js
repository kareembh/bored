const Activity = (props) =>{
    return(
    <div>
        <h1>{props.activity.activity}</h1>
        <p>Accessibility: {props.activity.accessibility}</p>
        <p>Number of participants: {props.activity.participants}</p>
        <p>Type of activity: {props.activity.type}</p>
    </div>
    )
}

export default Activity;