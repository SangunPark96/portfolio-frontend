import { useState, useEffect } from "react"
import axios from "axios"
import Project from "./Project"
import '../Components/Projects.css'

export default function Projects() {

    const [projectList, setProjectList] = useState([])
    const API = process.env.REACT_APP_API_URL

    useEffect(() => {
        axios.get(`${API}/projects`).then((res) => {
            setProjectList(res.data)
        }).catch((e) => {
            console.log({ error: {e}})
        })
    }, []);

    return(
        <div className="ProjectList">
            
                <div className="ProjectsMap">
                    {projectList.map((project, index) => {
                        return <Project key={index} project={project} index={index}/>;
                    })}
                </div>
           
        </div>
    )
}