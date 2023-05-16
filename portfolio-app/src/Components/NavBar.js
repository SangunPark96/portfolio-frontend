import { Link } from "react-router-dom";
import logo from '../Images/pikachu-logo.jpeg'

export default function NavBar() {
    
    
    return(
        <nav className="nav" id="nav">
	            <div id="logo">   
                <Link className="nav-link" to="/">
                    <img src={logo} alt='logo' width="125" height="125"></img> 
                </Link>
                </div> 
      <br></br>
      <Link className="nav-link" to="/projects">
        Projects
      </Link>
      <br></br>
      <Link className="nav-link" to="/interests">
        Interests
      </Link>
      <br></br>
      <Link className="nav-link" to="/projects/new">
        New Project
      </Link>
      <br></br>
      <Link className="nav-link" to="/interests/new">
        New Interest
      </Link>
      <br></br>
    </nav>
    )
}