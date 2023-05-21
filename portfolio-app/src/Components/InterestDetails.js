import { Link, useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";


export default function InterestDetails() {
   
    const [interest, setInterest] = useState({})
    let { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}/interests/${id}`)
        .then((res) => {
          console.log(res)
          setInterest(res.data[0]);
        }).catch((e) => {
          console.log(e);
          navigate("/not-found")
        });
      }, [id, navigate]);

      const handleDelete = () => {
        axios
        .delete(`${process.env.REACT_APP_API_URL}/interests/${id}`)
        .then(() => {
          navigate(`/interests`)
        })
      };

   
   
    return(
        <>
        <main>
            <h3>Name: {interest.name}</h3>
            <h5>Genre: {interest.genre}</h5>
            <h5>Media Type: {interest.media_type}</h5>
            
            {interest.still_enjoy ? <p>I still enjoy playing this and find new things to enjoy every time.</p> : <p>This monstrosity has taken it's toll on me and I can no longer play it.</p>}
            <img src={interest.img_link} alt="detailPhoto"  width="300" height="300px" /> 
            <h2>{interest.summary}</h2>
        </main>
        
        <div>
          <Link to={`/interests`}>
            <button>Back</button>
          </Link>
        </div>

        <div>
          <Link to={`/interests/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
    
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
        
        </>
    )
}