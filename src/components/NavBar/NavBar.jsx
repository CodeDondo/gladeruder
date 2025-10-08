import { NavLink } from "react-router-dom"
import Logo from '../../assets/Logo.svg'

export const NavBar = () => {
  return (
    <nav>
        <ul>
            <li><NavLink to="/"/><img src={Logo} alt="Logo" /></li>
        </ul>
        <ul>
          <li><NavLink to="/">Hjem</NavLink></li>
          <li><NavLink>Services</NavLink></li>
          <li><NavLink>Uforpligtende tilbud</NavLink></li>
          <li><NavLink>Om os</NavLink></li>
          {/* <li><NavLink></NavLink></li> */}
        </ul>
    </nav>
  )
}
