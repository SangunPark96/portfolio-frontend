import '../Components/Interest.css'
import { Link } from 'react-router-dom'

export default function Interest({ interest, index}){
    return(
        <div className="InterestCell">
            
            <aside className="InterestInfo">
                
                <h1>{interest.name}</h1>   
                
                
                <p><strong>Media Type:</strong> {interest.media_type}</p> 
                
                
                <p>{interest.genre}</p>
                {interest.still_enjoy ? <p>I am still enjoying this</p> : <p>I don't enjoy this</p>}
                
                
                  <img src={interest.img_link} alt="interestImg"  width="100" height="100px" /> 
                <br/>
                <Link className='seeMore' to={`/interests/${interest.id}`}> Click Here to see more </Link> 
            </aside>
        </div>
    )
}