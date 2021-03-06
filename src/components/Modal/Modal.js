import Button from '../Button/Button';
import './Modal.css'

const Modal = (props) =>{
    return(
        <div className="modal">
            <p className="modal-text">{props.modalText}</p>
            <Button
                className='close-modal-button'
                handleClick={props.closeModal}
                buttonText="Close"
            /> 
        </div>
    )
}

export default Modal;