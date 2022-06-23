import Banner from "./images/Banner.jpg"
import "./Landingpage.css"
// import Postview from "./Postview"
// import {useHistory} from "react-router-dom"
// import Link from "react-router-dom"
import React from "react"
import {Link} from "react-router-dom"



const LandingPage =()=>{

    // let history = useHistory();

    // const change = ()=>{
    //     history.push("./Postview.js")
    // }
    return(
        <>
        <div className="Landing-container">
            <img src={Banner} className="Landing_Banner" alt=""></img>
            <h1>
                10x Team 04
            </h1>
            {/* <button className="button" onClick={change()}>Enter</button> */}
            <div>
            <Link to="/Postview"><button className="button">Enter</button></Link>
            </div>
        </div>
        
        </>
    )
}
export default LandingPage;