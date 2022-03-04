import Button from '../Button/Button';
import './Modal.css'

const Modal = (props) =>{
    return(
        <div className="btn" onClick={props.getActivities}>
            <p className="btn-text">{props.buttonText}</p>
            <Button 
                onClick={props.closeModal}
                buttonText="Close"
            /> 
        </div>
    )
}

export default Modal;