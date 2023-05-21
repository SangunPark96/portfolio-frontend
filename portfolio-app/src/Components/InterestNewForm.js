import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '../Components/NewInterestForm.css'

export default function InterestNewForm() {

    const navigate = useNavigate();
    
    const [interest, setInterest] = useState({
        name: "",
        media_type: "",
        genre: "",
        still_enjoy: false,
        img_link: "",
        summary: "",
      });


    const handleTextChange = (event) => {
        setInterest({ ...interest, [event.target.id]: event.target.value });
      };
    
      const handleCheckboxChange = () => {
        setInterest({ ...interest, still_enjoy: !interest.still_enjoy });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        axios
        .post(`${process.env.REACT_APP_API_URL}/interests`, interest)
        .then(() => {
          navigate(`/interests`)
        })
        .catch((e) => {
          console.log(e)
        });
      };
    



return (
    <div>
        <h1>Add A New Interest</h1>
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
                <label htmlFor="media_type">Media Type:
                    <input
                    id="media_type"
                    type="text"
                    value={interest.media_type}
                    placeholder="Video Games, Movies, Tv, etc..."
                    onChange={handleTextChange}
                    />
                </label>
                <br/>
                <label htmlFor="genre">Genre:
                    <input
                    id="genre"
                    type="text"
                    value={interest.genre}
                    placeholder="Western, Sci-fi, Historical, etc..."
                    onChange={handleTextChange}
                    />
                </label>
                <br/>
                <label>Do you still enjoy this?:
                    <input
                    id="still_enjoy"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={!interest.still_enjoy}
                    />
                </label>
                <br/>
                <label htmlFor="img-link">Image URL:
                    <input
                    id="img_link"
                    type="url"
                    value={interest.img_link}
                    placeholder="Image URL"
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
                <Link to={`/interests`}>

                    <button className="NewBackButton">Back</button>

                </Link>
    </div>
    )
}