import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import githubLogo from "../Images/github-logo.png"
import '../Components/ProjectDetails.css'


export default function ProjectDetails() {
    
    const [project, setProject] = useState({})
    let { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}/projects/${id}`)
        .then((res) => {
          console.log(res)
          setProject(res.data[0]);
        }).catch((e) => {
          console.log(e);
          navigate("/not-found")
        });
      }, [id, navigate]);

      const handleDelete = () => {
        axios
        .delete(`${process.env.REACT_APP_API_URL}/projects/${id}`)
        .then(() => {
          navigate(`/projects`)
        })
      };

     

    
    return(
        <div className="ProjectDetails">
        <main className="hvr-grow">
            <h3>This {project.name} was created for Pursuit Cohort 9.3 in Module {project.module}.</h3>
            <p>The app was bootstrapped using REACT and Express.</p>
            <p>A new technology learned and utilized for the development was {project.technology}.</p>
            <p>Description: {project.description}</p>
            {project.revisit ? <p>I plan on revisiting this website to work on it with my new skills.</p> : <p>I do not plan on coming back to this project. <br/> I found it was a good start to learning the technology but i am ready to try a new application for the technology</p>}
            <a href={project.repo_link} className="hvr-pulse-grow">  <img src={githubLogo} alt="githublogo"  width="70" height="70px" /> </a>
        </main>
        <div className="btnSection">
        <div>
          <Link to={`/transactions`}>
            <button className="backBtn">Back</button>
          </Link>
        </div>

        <div>
          <Link to={`/projects/${id}/edit`}>
            <button className="editBtn">Edit</button>
          </Link>
        </div>
    
        <div>
            <button onClick={handleDelete} className="deleteBtn">Delete</button>
        </div>
        
        </div>
        </div>
    )
}