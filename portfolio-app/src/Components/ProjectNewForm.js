import { useState } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import '../Components/ProjectNewForm.css'

export default function ProjectNewForm() {

    const navigate = useNavigate();
    
    const [project, setProject] = useState({
        name: "",
        technology: "",
        module: 0,
        description: "",
        revisit: false,
        repo_link: "",
      });


    const handleTextChange = (event) => {
        setProject({ ...project, [event.target.id]: event.target.value });
      };
    
      const handleCheckboxChange = () => {
        setProject({ ...project, revisit: !project.revisit });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        axios
        .post(`${process.env.REACT_APP_API_URL}/projects`, project)
        .then(() => {
          navigate(`/projects`)
        })
        .catch((e) => {
          console.log(e)
        });
      };
    



return (
    <div>
        <h1>Add A New Project</h1>
            <form onSubmit={handleSubmit} className="submission-form">
                <label htmlFor="name">Name:
                    <input
                    id="name"
                    type="text"
                    value={project.name}
                    placeholder="Project Name"
                    onChange={handleTextChange}
                    />
                </label>
                <br/>
                <label htmlFor="technology">Technology Used:
                    <input
                    id="technology"
                    type="text"
                    value={project.technology}
                    placeholder="Technology Used"
                    onChange={handleTextChange}
                    />
                </label>
                <br/>
                <label htmlFor="module">Module:
                    <input
                    id="module"
                    type="number"
                    value={project.module}
                    placeholder="0"
                    onChange={handleTextChange}
                    />
                </label>
                <br/>
                <label htmlFor="description">Description:
                    <input
                    id="description"
                    type="text"
                    value={project.description}
                    placeholder="Quick Summary"
                    onChange={handleTextChange}
                    />
                </label>
                <br/>
                <label>Will you revisit this?:
                    <input
                    id="revisit"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={!project.revisit}
                    />
                </label>
                <br/>
                <label htmlFor="github-link">Github:
                    <input
                    id="repo_link"
                    type="url"
                    value={project.repo_link}
                    placeholder="Github Repository URL"
                    onChange={handleTextChange}
                    />
                </label>
                <br/>


                <input type='submit' value='Submit' id="submitBtn"/>
            </form>
                <Link to={`/projects`}>

                    <button className="NewBackButton">Back</button>

                </Link>
    </div>
    )
}