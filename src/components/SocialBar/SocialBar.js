import './SocialBar.css'
const SocialBar = () =>{
    return(
        <div className="social-icons top-right">
            <ul>
                <a href="https://www.instagram.com/kareemave/">
                    <img className="social-icon" src="../../assets/icons/icons8-instagram.svg" alt="" />
                </a>
                <a href="https://medium.com/@kareembhenry">
                    <img className="social-icon" src="../../assets/icons/icons8-medium.svg"  alt="" />
                </a>
                <a href="https://www.youtube.com/channel/UCQqRwZ85wC3cXxW4UeZvYhQ">
                    <img className="social-icon" src="../../assets/icons/icons8-youtube.svg" alt="" />
                </a>
            </ul>
        </div>
    )
}

export default  SocialBar;