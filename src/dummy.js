import {applyMiddleware, createStore} from "redux"
import demo from "./reducers"
import {logger} from"./middlewares"
import createSaga from "redux-saga"
import{LoginSaga} from "./sagas"


var sagaMiddleware=createSaga()
//var store =createStore(demo)
var middlewares= applyMiddleware(logger,sagaMiddleware)


//var middlewares= applyMiddleware(FirdtMiddleware)
// store.dispatch({
//     type:"login"
// })

// console.log("...........",store.getState())

// store.dispatch({
//     type:"LOGIN",
//     payload:{email:"13psathwane@gmail.com" , name:"prajakta"}
// })//parameter action
// // //action are plane js objects with key known as type
//  console.log("............after login match",store.getState())

export default createStore(demo,middlewares)
sagaMiddleware.run(LoginSaga)




var demo= function(state={
    user:null
}, action){
    switch(action.type){
        case "LOGIN":{
            console.log("login started")
            state = {...state}
            state["isfetching"] =true
            return state
        }

        case "LOGIN_SUCCESS":{
            console.log("Here we have to write logic for login")
            state = {...state}
            state["isloggedin"] =true
            state["user"]=action.payload
            state["isfetching"] =false
            state["isloginerr"] =false
            return state
        }

        case "LOGIN_FAILURE":{
            console.log("Here we have to write logic for login failure")
            state = {...state}
            state["isloggedin"] =false
            state["isfetching"] =false
            state["isloginerr"] =true
            return state
        }

        case "LOGOUT":{
            state = {...state}
            localStorage.clear()
           delete state["isloggedin"] 
            delete state["user"]
            return state
        }
        case "CHECK_USER":{
            //console.log("Here we check user is presengt or not")
            state = {...state}
            state["isloggedin"] =true
            state["user"]=action.payload
            return state
        }

        case "CARTDETAIL":{
            //console.log("Here we see cart details")
            state = {...state}
            //state["setcheckCart"]=true
            state["cart"]=action.payload
            return state
        }

        case "CARTUPDATE":{
            //console.log("Here we remove cart details")
            state = {...state}
            state["setcheckCart"]=action.payload
            return state
        }
        default :return state
    }
}
export default demo



import axios from "axios"
import {call,put ,takeEvery} from "redux-saga/effects"

function login(action)
{
    return axios({
        method:"post",
        url:"https://apibyashu.herokuapp.com/api/login",
        data:action.payload
    })
}

function* LoginGenrator(action){
    var result =yield call(login,action)

    if(result.data.token){
        yield put({type:'LOGIN_SUCCESS',payload:result.data})
    }
    else{
        yield put({type:'LOGIN_FAILURE'})
    }
}

export function* LoginSaga(){
    yield takeEvery('LOGIN' , LoginGenrator)
}



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
    
    const[respon,setRespons]=useState("")
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
            prop.dispatch({
                type:"LOGIN",
                payload:user
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

    console.log("login success",respon)


    
    return(
        <div>
       <h2 className="alert alert-info" style={{marginTop:"20px"}}>Login Here</h2>
       <form onSubmit={onSubmit}>
          <div>{}</div>
      
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
        {prop.isloggedin ? prop.history.push("/") : <div className=""></div>}{
            prop.isloginerr ? <div className="alert alert-danger">invalid credentials</div> : <div></div>
        }
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
        isloggedin:state?.isloggedin,
        isloginerr:state?.isloginerr
    }
})(Login)