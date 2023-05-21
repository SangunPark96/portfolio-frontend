import Projects from "../Components/Projects"
import "../Pages/ProjectIndex.css"

export default function ProjectIndex() {
  
    return(
        <div className="project-index">
            <h2>A collection of Projects built for Pursuit.</h2>
            <Projects/>
        </div>
    )
}