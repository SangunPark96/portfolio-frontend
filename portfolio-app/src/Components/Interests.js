import { useState, useEffect } from "react"
import axios from "axios"
import Interest from "./Interest"
import '../Components/Interests.css'

export default function Interests() {

    const [interestList, setInterestList] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/interests`).then((res) => {
            setInterestList(res.data)
        }).catch((e) => {
            console.log({ error: {e}})
        })
    }, []);

    return(
        <div className="ProjectList">
            
                <div className="InterestsMap">
                    {interestList.map((interest, index) => {
                        return <Interest key={index} interest={interest} index={index}/>;
                    })}
                </div>
           
        </div>
    )
}