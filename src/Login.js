import axios from "axios"
import {useState , useEffect} from "react"
import { connect } from "react-redux"
import { Link ,withRouter} from "react-router-dom"

 function Login(prop)
{
    console.log("login propsp",prop)
    // useEffect(()=>{
    //    // alert("mounted and updated")
    // },[])
    var user = {}
    var [error,setError] = useState()
    var[user , setUser] = useState({})
    
    let getEmail=(event)=>{
        console.log(event)
        setUser({

            email:event.target.value,
            password:user.password
        })
        user.email=event.target.value
        
    }
    
    let getPassword=(event)=>{
        console.log(event)
        setUser({

            password:event.target.value,
            email:user.email
        })
        user.password=event.target.value
    }

    let login = function(){
        // if(user.email=="13psathwane@gmail.com" && user.password=="123" && user.name=='prajakta sathwane')
        // {
        //     setError("login successfull")
        // }
        // else{
        //     setError("Invalid Login")
        // }
        console.log("user istrying to login" ,user)
        let loginapi="https://apibyashu.herokuapp.com/api/login"
        axios({
            url:loginapi,
            method:"post",
            data:user
            
        }).then((response)=>{
            console.log("response from login api" , response.data)
            // prop.informlogin("prajakta")
            if(response.data.token){
                localStorage.token= response.data.token
                localStorage.email= response.data.email
                prop.dispatch({
                    type:"LOGIN",
                    payload:response.data
                })
                
                prop.history.push("/")
                
            }
            else{
                alert("invalid credentials")
            }
        },(error)=>{
            console.log("error from login api" , error)
        })
    }
    return(
        <div>
       <h2 className="alert alert-info" style={{marginTop:"20px"}}>Login Here</h2>
       <div className="row">
           <div className="col-md-3"></div>
       <div className="col-md-6">
        <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input onChange={getEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ></input>
            { user && <label>{user.email}</label>}
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        
        <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input onChange={getPassword} type="password" className="form-control" id="exampleInputPassword1" />
            { user && <label>{user.password}</label>}
        </div>
        <div style={{color:"red"}}>
            <p>{error}</p>
        </div>
        <Link to="/signup"><a>Need help?Register</a></Link> <Link ><a class="text-danger">Forgot Password?</a></Link><br></br>
        <button  className="btn btn-primary" onClick={login}>Login</button>
        </div> 
        </div> 
    </div>
    )
}

Login = withRouter(Login)
export default connect(function(state,prop){
    return{
        cartdetail:state?.cart,
    }
})(Login)