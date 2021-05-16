import axios from 'axios'
import Cakes from '../home/Data';
import Card from '../cart/Card';
import {useEffect , useState} from "react";
import { useLocation } from "react-router-dom";
import queryString from 'query-string'

function Search()
{
    let searchdata =useLocation()
    let name=queryString.parse(searchdata.search)
    console.log("location data",searchdata)
    console.log("location data name",name.q)
    let cakename=name.q

       let [cakesearch,setCakes]=useState([])
       let apisearchurl=process.env.REACT_APP_BASE_URL+"/api/searchcakes?q="+cakename
       
        useEffect(() => {
            axios({
                url:apisearchurl,
                method:"get",
            }).then((response)=>{
                console.log("response from search api" ,response.data)
                setCakes(response.data.data)
            },(error)=>{
                console.log("error from search api",error)
            })
        }, [apisearchurl])
        console.log(" search api",apisearchurl)
    return (
        
            
        <div style={{marginBottom:"50px"}}>
            <h3 className="alert alert-info">Search Result</h3>
            <div className="row">
            { cakesearch?.length > 0 ? cakesearch.map((each, index)=>{
		          return <Card cakedata={each} key={index}/>
		        }) : <div className="alert alert-danger"> No result found</div>
		    }
            </div>
        </div>
    )
}
export default Search