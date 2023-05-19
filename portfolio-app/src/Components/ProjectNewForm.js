import { useState } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";

export default function ProjectNewForm() {

    const navigate = useNavigate();
    let { id } = useParams();

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
    


    const [project, setProject] = useState({
        name: "",
        technology: "",
        module: 0,
        description: "",
        revisit: false,
        repo_link: "",
      });

return (
    <div>
        <h1>Add A New Project</h1>
            <form onSubmit={handleSubmit}>
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
                <input type='submit' value='Submit'/>
            </form>
    </div>
    )
}