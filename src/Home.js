import axios from 'axios'
import Cakes from './Data';
import Card from './Card';
import Carousal from './Carousal';
import {useEffect , useState} from "react";
import { Link } from "react-router-dom"

function Home(){
    let [cakes,setcakes]=useState([])
    let allcakesapi="https://apibyashu.herokuapp.com/api/allcakes"
            useEffect(()=>{
                axios({
                url:allcakesapi,
                method:"get",
            }).then((response)=>{
                console.log("response from all cakes  api" ,response.data)
                setcakes(response.data.data)
            },(error)=>{
                console.log("error from all cakes api",error)
            })
            },[])
    return (
        
        <div>
            <Carousal />
        <h2 className="alert alert-info" style={{marginTop:"20px"}}>All Cakes</h2>
	    <div className="row">
		    { cakes?.length > 0 && cakes.map((each, index)=>{
		          return (<Card cakedata={each} key={index}/>)
		        })
		    }
	   </div>
	</div>
    )
}

export default Home