import { Link ,useHistory} from "react-router-dom"
import {useState , useEffect} from "react"
import Search from "./Search";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Nav(prop){

    const history = useHistory();

   var searchdata={}
   var[searchdata , setSearch] = useState({})
    let[error,setError]=useState()
    function searchChange(evt) {
        console.log("new value", evt.target.value);
        setSearch({
            datasearch:evt.target.value
            
        })
        searchdata.searchh=evt.target.value
      }
      console.log("searchdatabbbbbb",searchdata)
    let search=function(event)
    {
        //increasecount++
        event.preventDefault()
        console.log("search going",event)
        alert("hello")
    }
   let logout=function(event){
        event.preventDefault()
        prop.dispatch({
            type:"LOGOUT"
        })
        
    }
    let searchbut=function(e){
        if(!searchdata){
            setError("please fill something")
        }
        else{
            setError("")
            
        }
    }
   
    return (
        <div>
        {/* {increasecount} */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/"><a class="navbar-brand" href="#">CAKE <span className="text-warning">SHOPPE</span></a>
            </Link><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <Link to="/"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></Link>
                </li>  
                
                <li class="nav-item">
                    {prop.user && 
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Welcome {prop.user}</a>
                     } </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text"  onChange={searchChange} placeholder="Search" aria-label="Search"></input>
                <br></br><p className="text-danger">{error}</p>
                <Link to={`/search?q=${searchdata.datasearch}`}> <button  class="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={searchbut}><FontAwesomeIcon icon={faSearch} /></button>
                </Link> {/* <button onClick={search} class="btn btn-outline-success my-2 my-sm-0">Search</button> */}
               {
               prop.loginstatus ?<div>
               <Link to="/cart"><button className="btn btn-warning"><FontAwesomeIcon icon={faShoppingCart} /></button></Link>
               <button className="btn btn-danger" onClick={logout}>Logout</button> </div> 
               :  <Link to="/login"><button className="btn btn-success">Login</button></Link>
               }
 
                </form>
                
            </div>
            </nav>
        </div>
    )
}
//mapstatetoprops
export default connect(function(state,props){
    console.log("............state initially" , state)
    return {
        user:state ?.user?.name,
        loginstatus:state?.isloggedin
    }
})(Nav)