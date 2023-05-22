import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../Components/InterestEditForm.css'

export default function InterestEditForm() {
    let {id} = useParams();
    const navigate = useNavigate();
    const [interest, setInterest] = useState({
        name: "",
        media_type: "",
        genre: "",
        still_enjoy: false,
        img_link: "",
        summary: ""
      });

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/interests/${id}`).then((res) => {
          setInterest(res.data[0]);
        }).catch((e) => {
          console.log(e)
        })
      }, [id]);

    const handleTextChange = (event) => {
        setInterest({ ...interest, [event.target.id]: event.target.value });
      };
    

    const handleCheckboxChange = () => {
        setInterest({ ...interest, still_enjoy: !interest.still_enjoy });
      };
 

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`${process.env.REACT_APP_API_URL}/interests/${id}`, interest)
            .then((res) => {
                setInterest(res.data[0])
                navigate(`/interests/${id}`)
            }).catch((e) => {
        console.log(e)
    })
  };



    return (
        <div>
        <h1>Edit Interest</h1>
            <form onSubmit={handleSubmit} className="submission-form">
                <label htmlFor="name">Name:
                    <input
                    id="name"
                    type="text"
                    value={interest.name}
                    placeholder="Interest Name"
                    onChange={handleTextChange}
                    />
                </label>
                <br/>
                <label htmlFor="media_type">Media type:
                    <input
                    id="media_type"
                    type="text"
                    value={interest.media_type}
                    placeholder="Media Type"
                    onChange={handleTextChange}
                    />
                </label>
                <br/>
                <label htmlFor="genre">Genre:
                    <input
                    id="genre"
                    type="text"
                    value={interest.genre}
                    placeholder="Genre"
                    onChange={handleTextChange}
                    />
                </label>
                <br/>
                <label>Still Enjoy This?:
                    <input
                    id="still_enjoy"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={!interest.still_enjoy}
                    />
                </label>
                <br/>
                <label htmlFor="img_link">Image:
                    <input
                    id="repo_link"
                    type="url"
                    value={interest.img_link}
                    placeholder="Img URL"
                    onChange={handleTextChange}
                    />
                </label>
                <br/>
                <label htmlFor="summary">Quick Summary:
                    <textarea
                    id="summary"
                    type="text"
                    value={interest.summary}
                    placeholder="Quick Summary"
                    onChange={handleTextChange}
                    rows={10}
                    cols={50}
                    />
                </label>
                <br/>


                <input type='submit' value='Submit' className="submitBtn"/>
            </form>
                
                <Link to={`/projects`}>

                    <button className="NewBackButton">Back</button>

                </Link>
    </div>
    )
}