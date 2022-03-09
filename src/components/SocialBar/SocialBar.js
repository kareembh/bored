import './SocialBar.css'
import InstagramIcon from './../../assets/icons/instagram.svg'
import LinkedinIcon from './../../assets/icons/linkedin.svg'
import MediumIcon from './../../assets/icons/medium.svg'
import GithubIcon from './../../assets/icons/github.svg'
const SocialBar = () =>{
    return(
        <div className="social-icons top-right">
            <ul>
                <a href="https://www.instagram.com/kareemave/">
                    <img className="social-icon" src={InstagramIcon} alt='instagram icon' />
                </a>
                <a href="https://github.com/kareembh">
                    <img className="social-icon" src={GithubIcon} alt='linkedin icon' />
                </a>
                <a href="https://medium.com/@kareembhenry">
                    <img className="social-icon" src={MediumIcon}  alt='medium icon' />
                </a>
                <a href="https://www.linkedin.com/in/kareem-brathwaite-henry-399262a1/">
                    <img className="social-icon" src={LinkedinIcon} alt='linkedin icon' />
                </a>
            </ul>
        </div>
    )
}

export default  SocialBar;