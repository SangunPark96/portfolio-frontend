import './Project.css'
import { Link } from 'react-router-dom'
import githubLogo from '../Images/github-logo.png'

export default function Project({ project, index}){
    return(
        <div className="ProjectCell">

            <aside className="ProjectInfo">
                
                <h1>{project.name}</h1>   
                
                
                <p><strong>Technologies Highlighted:</strong> {project.technology}</p> 
                
                
                <p>{project.description}</p>
                <p>Completed in Module {project.module} of Pursuit</p>
                
                
                <a href={project.repo_link} className="hvr-pulse-grow">  <img src={githubLogo} alt="githublogo"  width="70" height="70px" /> </a>
                <br/>
                <Link className='hvr-grow' to={`/projects/${project.id}`}> <h4>Click Here to see more </h4></Link> 
            </aside>
        </div>
    )
}