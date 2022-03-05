import "./Activity.css"
const Activity = (props) =>{
    return(
    <div className="activity-card">
        <h1 className="activity-name">{props.activity.activity}</h1>
        <div className="activity-details">
            <p>Number of participants: {props.activity.participants}</p>
            <p>Type of activity: {props.activity.type}</p>
        </div>
    </div>
    )
}

export default Activity;