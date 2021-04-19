import axios from 'axios'
import { Link } from "react-router-dom"
// import Cakes from './Data';
// import Card from './Card';
import {useEffect , useState} from "react";

var wei={
    width: "220px",
    height: "200px",
}
var foot={
        
    paddingTop:"50px",
    paddingBottom:"50px",
    paddingLeft:"40px"
}
function Card(props)
{
    
    return(
        <div>
            {/* <div style={foot}>
            <div className="row">
            { cakes?.length > 0 && cakes.map((each, index)=>{
                return (
                    
            <div className="card" >
            <img src={each.image} style={wei} className="card-img-top" alt="..." />
            <p><h3>{each.name}</h3></p>
            </div>
            )
        })
    }
    </div>
            </div> */}
            <div style={foot}>
            <div className="card" >
            <Link to={'/card/'+props.cakedata.cakeid}><img src={props.cakedata.image} style={wei} className="card-img-top" alt="..." /></Link>
            <p><h3>{props.cakedata.name}</h3></p>
            </div>
            </div>
            
            {/* <div className='footer' style={foot}>
                Copyright @prajakta 2021-22
            </div> */}
        </div>
    )
}

export default Card