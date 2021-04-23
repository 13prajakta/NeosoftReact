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
    // var [error,setError] = useState()
    // var[user , setUser] = useState({})
    
    // let getEmail=(event)=>{
    //     console.log(event)
    //     setUser({

    //         email:event.target.value,
    //         password:user.password
    //     })
    //     user.email=event.target.value
        
    // }
    
    // let getPassword=(event)=>{
    //     console.log(event)
    //     setUser({

    //         password:event.target.value,
    //         email:user.email
    //     })
    //     user.password=event.target.value
    // }
    

    //form validate
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const [emailErr,setEmailErr]=useState("")
    const [passwordErr,setPasswordErr]=useState("")
    
    const[invalidErr,setInvalid]=useState("")

    const onSubmit=(e)=>{
        e.preventDefault();
        const isvalid=formValidaion();
        var user={
            email:email,
            password:password
        }
        if(isvalid){
            setEmail("");
            setPassword("");


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
                alert("invalid credentials Please Try Again")
                
                
            }
        },(error)=>{
            console.log("error from login api" , error)
        })
        }
    }


    const formValidaion=()=>
    {
        const emailErr={};
        const passwordErr={};
       
        let isValid=true;
        var emailreg=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(email.trim().length <1)
        {
            emailErr.emailee="Email is required";
            isValid=false;
            setEmail("")
        }else if(!emailreg.test(email))
        {
            emailErr.emailee="Email is invalid";
            isValid=false;
            setEmail("")
        }

         if(password.trim().length <1)
        {
            passwordErr.passwordd="password is required";
            isValid=false;
            setPassword("");
        }


        setEmailErr(emailErr);
        setPasswordErr(passwordErr);
        return isValid;
    }








    // let login = function(){
    //     // if(user.email=="13psathwane@gmail.com" && user.password=="123" && user.name=='prajakta sathwane')
    //     // {
    //     //     setError("login successfull")
    //     // }
    //     // else{
    //     //     setError("Invalid Login")
    //     // }
    //     console.log("user istrying to login" ,user)
    //     let loginapi="https://apibyashu.herokuapp.com/api/login"
    //     axios({
    //         url:loginapi,
    //         method:"post",
    //         data:user
            
    //     }).then((response)=>{
    //         console.log("response from login api" , response.data)
    //         // prop.informlogin("prajakta")
    //         if(response.data.token){
    //             localStorage.token= response.data.token
    //             localStorage.email= response.data.email
    //             prop.dispatch({
    //                 type:"LOGIN",
    //                 payload:response.data
    //             })
                
    //             prop.history.push("/")
                
    //         }
    //         else{
    //             alert("invalid credentials")
    //         }
    //     },(error)=>{
    //         console.log("error from login api" , error)
    //     })
    // }


    
    return(
        <div>
       <h2 className="alert alert-info" style={{marginTop:"20px"}}>Login Here</h2>
       <form onSubmit={onSubmit}>
       
       <div className="row">
           <div className="col-md-3"></div>
       <div className="col-md-6">
        <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            {/* { user && <label>{user.email}</label>} */}
        </div>
        <div className="form-error">
                {Object.keys(emailErr).map((key)=>{
                    return <div className="form-error">{emailErr[key]}</div>
                })}
            </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input  type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            {/* { user && <label>{user.password}</label>} */}
        </div>
        <div className="form-error">
                {Object.keys(passwordErr).map((key)=>{
                    return <div className="form-error">{passwordErr[key]}</div>
                })}
            </div>
        <Link to="/signup"><a>Need help?Register</a></Link> <Link to="/forgot"><a class="text-danger">Forgot Password?</a></Link><br></br>
        <button  className="btn btn-primary">Login</button>
        </div> 
        </div> 
        </form>
    </div>
    )
}

Login = withRouter(Login)
export default connect(function(state,prop){
    return{
        cartdetail:state?.cart,
    }
})(Login)