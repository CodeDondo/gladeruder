import { Link } from 'react-router-dom'
import Facebook from '../../assets/Facebook.svg'
import Instagram from '../../assets/Instagram.svg'
import Mail from '../../assets/Mail.svg'
import Phone from '../../assets/Phone.svg'

export const TopHeader = () => {
    return (
        <section>
            <ul>
                <li><Link to="https://www.facebook.com/profile.php?id=61560398069308" target='blank_'><img src={Facebook} alt="facebook" /></Link></li>
                <li><Link to="https://www.instagram.com/glade.ruder/" target='blank_'><img src={Instagram} alt="instagram" /></Link></li>
            </ul>
            <ul>
                <li><Link to="mailto:Kontakt@gladeruder.dk"><img src={Mail} alt="Email" />Kontakt@gladeruder.dk</Link></li>
                <li><img src={Phone} alt="telefon nr." />+45 60 10 10 80</li>
            </ul>
        </section>
    )
}
