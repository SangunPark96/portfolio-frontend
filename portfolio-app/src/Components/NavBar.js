import { Link } from "react-router-dom";
import logo from '../Images/pikachu-logo.jpeg'
import './NavBar.css'

export default function NavBar() {
    
    
    return(
        <nav className="nav-bar">

	        <div id="logo">   
                <Link className="nav-link" to="/">
                    <img className="pikachu" src={logo} alt='logo' width="125" height="125"></img> 
                </Link>
            </div> 

      <br></br>

                <Link className="project-link" to="/projects">
                    Projects
                </Link>

      <br></br>

                <Link className="interest-link" to="/interests">
                    Interests
                </Link>

      <br></br>

                <Link className="new-project-link" to="/projects/new">
                    New Project
                </Link>

      <br></br>

                <Link className="new-interest-link" to="/interests/new">
                    New Interest
                </Link>

      <br></br>

                <Link className="contact-link" to="/contact">
                    About Me
                </Link>

      <br></br>

    </nav>
    )
}