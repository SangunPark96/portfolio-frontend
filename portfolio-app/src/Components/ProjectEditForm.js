import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProjectEditForm() {
    let {id} = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState({
        name: "",
        technology: "",
        module: 0,
        description: "",
        revisit: false,
        repo_link: "",
      });

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/projects/${id}`).then((res) => {
          setProject(res.data[0]);
        }).catch((e) => {
          console.log(e)
        })
      }, [id]);

    const handleTextChange = (event) => {
        setProject({ ...project, [event.target.id]: event.target.value });
      };
    

    const handleCheckboxChange = () => {
        setProject({ ...project, revisit: !project.revisit });
      };
 

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`${process.env.REACT_APP_API_URL}/projects/${id}`, project)
            .then((res) => {
                setProject(res.data[0])
                navigate(`/projects/${id}`)
            }).catch((e) => {
        console.log(e)
    })
  };



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
                    type="text"
                    value={project.repo_link}
                    placeholder="Github Repository URL"
                    onChange={handleTextChange}
                    />
                </label>
                <br/>


                <input type='submit' value='Submit'/>
            </form>
                
                <Link to={`/projects`}>

                    <button className="NewBackButton">Back</button>

                </Link>
    </div>
    )
}