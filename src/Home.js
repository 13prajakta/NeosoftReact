import axios from 'axios'
import Cakes from './Data';
import Card from './Card';
import Carousal from './Carousal';
import {useEffect , useState} from "react";
import React from "react"
import { Link } from "react-router-dom"
import * as ReactBootstrap from 'react-bootstrap'

//export const DiscountContext = React.createContext()

function Home(){
    let [cakes,setcakes]=useState([])
    let [loading,setLoading]=useState(false)
    let allcakesapi=process.env.REACT_APP_BASE_URL+"/api/allcakes"
            useEffect(()=>{
                axios({
                url:allcakesapi,
                method:"get",
            }).then((response)=>{
                console.log("response from all cakes  api" ,response.data)
                setcakes(response.data.data)
            },(error)=>{
                console.log("error from all cakes api",error)
            });setLoading(true)
            },[])
            //console.log("data from all cakes",cakes)
    return (
        
        <div>
            <Carousal />
        <h2 className="alert alert-info" style={{marginTop:"20px"}}>All Cakes</h2>
        
        {loading ?
	    <div className="row">
		    { cakes?.length > 0 && cakes.map((each, index)=>{
		        //   return <DiscountContext.provider value="only 2%">
                return( <Card cakedata={each} key={index}/>)
		        //</DiscountContext.provider>
                })
		    }
	   </div> :<ReactBootstrap.Spinner animation ="border"/>
       }
	</div>
    )
}

export default Home