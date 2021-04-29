// import {applyMiddleware, createStore} from "redux"
// import demo from "./reducers"
// import {logger} from"./middlewares"
// import createSaga from "redux-saga"
// import{LoginSaga} from "./sagas"


// var sagaMiddleware=createSaga()
// //var store =createStore(demo)
// var middlewares= applyMiddleware(logger,sagaMiddleware)


// //var middlewares= applyMiddleware(FirdtMiddleware)
// // store.dispatch({
// //     type:"login"
// // })

// // console.log("...........",store.getState())

// // store.dispatch({
// //     type:"LOGIN",
// //     payload:{email:"13psathwane@gmail.com" , name:"prajakta"}
// // })//parameter action
// // // //action are plane js objects with key known as type
// //  console.log("............after login match",store.getState())

// export default createStore(demo,middlewares)
// sagaMiddleware.run(LoginSaga)


// //reducer

// var demo= function(state={
//     user:null
// }, action){
//     switch(action.type){
//         case "LOGIN":{
//             console.log("login started")
//             state = {...state}
//             state["isfetching"] =true
//             return state
//         }

//         case "LOGIN_SUCCESS":{
//             console.log("Here we have to write logic for login")
//             state = {...state}
//             state["isloggedin"] =true
//             state["user"]=action.payload
//             state["isfetching"] =false
//             state["isloginerr"] =false
//             return state
//         }

//         case "LOGIN_FAILURE":{
//             console.log("Here we have to write logic for login failure")
//             state = {...state}
//             state["isloggedin"] =false
//             state["isfetching"] =false
//             state["isloginerr"] =true
//             return state
//         }

//         case "LOGOUT":{
//             state = {...state}
//             localStorage.clear()
//            delete state["isloggedin"] 
//             delete state["user"]
//             return state
//         }
//         case "CHECK_USER":{
//             //console.log("Here we check user is presengt or not")
//             state = {...state}
//             state["isloggedin"] =true
//             state["user"]=action.payload
//             return state
//         }

//         case "CARTDETAIL":{
//             //console.log("Here we see cart details")
//             state = {...state}
//             //state["setcheckCart"]=true
//             state["cart"]=action.payload
//             return state
//         }

//         case "CARTUPDATE":{
//             //console.log("Here we remove cart details")
//             state = {...state}
//             state["setcheckCart"]=action.payload
//             return state
//         }
//         default :return state
//     }
// }
// export default demo


// //saga.js
// import axios from "axios"
// import {call,put ,takeEvery} from "redux-saga/effects"

// function login(action)
// {
//     return axios({
//         method:"post",
//         url:"https://apibyashu.herokuapp.com/api/login",
//         data:action.payload
//     })
// }

// function* LoginGenrator(action){
//     var result =yield call(login,action)

//     if(result.data.token){
//         yield put({type:'LOGIN_SUCCESS',payload:result.data})
//     }
//     else{
//         yield put({type:'LOGIN_FAILURE'})
//     }
// }

// export function* LoginSaga(){
//     yield takeEvery('LOGIN' , LoginGenrator)
// }



// import axios from "axios"
// import {useState , useEffect} from "react"
// import { connect } from "react-redux"
// import { Link ,withRouter} from "react-router-dom"

//  function Login(prop)
// {
//     console.log("login propsp",prop)
//     // useEffect(()=>{
//     //    // alert("mounted and updated")
//     // },[])
//     var user = {}
//     // var [error,setError] = useState()
//     // var[user , setUser] = useState({})
    
//     // let getEmail=(event)=>{
//     //     console.log(event)
//     //     setUser({

//     //         email:event.target.value,
//     //         password:user.password
//     //     })
//     //     user.email=event.target.value
        
//     // }
    
//     // let getPassword=(event)=>{
//     //     console.log(event)
//     //     setUser({

//     //         password:event.target.value,
//     //         email:user.email
//     //     })
//     //     user.password=event.target.value
//     // }
    
// //login.js



//     //form validate
//     const [email,setEmail]=useState("")
//     const [password,setPassword]=useState("")

//     const [emailErr,setEmailErr]=useState("")
//     const [passwordErr,setPasswordErr]=useState("")
    
//     const[respon,setRespons]=useState("")
//     const[invalidErr,setInvalid]=useState("")

//     const onSubmit=(e)=>{
//         e.preventDefault();
//         const isvalid=formValidaion();
//         var user={
//             email:email,
//             password:password
//         }
//         if(isvalid){
//             setEmail("");
//             setPassword("");


//             console.log("user istrying to login" ,user)
//             prop.dispatch({
//                 type:"LOGIN",
//                 payload:user
//             })
//         }
//     }


//     const formValidaion=()=>
//     {
//         const emailErr={};
//         const passwordErr={};
       
//         let isValid=true;
//         var emailreg=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//         if(email.trim().length <1)
//         {
//             emailErr.emailee="Email is required";
//             isValid=false;
//             setEmail("")
//         }else if(!emailreg.test(email))
//         {
//             emailErr.emailee="Email is invalid";
//             isValid=false;
//             setEmail("")
//         }

//          if(password.trim().length <1)
//         {
//             passwordErr.passwordd="password is required";
//             isValid=false;
//             setPassword("");
//         }


//         setEmailErr(emailErr);
//         setPasswordErr(passwordErr);
//         return isValid;
//     }

//     console.log("login success",respon)


    
//     return(
//         <div>
//        <h2 className="alert alert-info" style={{marginTop:"20px"}}>Login Here</h2>
//        <form onSubmit={onSubmit}>
//           <div>{}</div>
      
//        <div className="row">
//            <div className="col-md-3"></div>
//        <div className="col-md-6">
//         <div className="form-group">
//             <label for="exampleInputEmail1">Email address</label>
//             <input  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
//             {/* { user && <label>{user.email}</label>} */}
//         </div>
//         <div className="form-error">
//                 {Object.keys(emailErr).map((key)=>{
//                     return <div className="form-error">{emailErr[key]}</div>
//                 })}
//             </div>
//         <div className="form-group">
//             <label for="exampleInputPassword1">Password</label>
//             <input  type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
//             {/* { user && <label>{user.password}</label>} */}
//         </div>
//         <div className="form-error">
//                 {Object.keys(passwordErr).map((key)=>{
//                     return <div className="form-error">{passwordErr[key]}</div>
//                 })}
//             </div>
//         <Link to="/signup"><a>Need help?Register</a></Link> <Link to="/forgot"><a class="text-danger">Forgot Password?</a></Link><br></br>
//         {prop.isloggedin ? prop.history.push("/") : <div className=""></div>}{
//             prop.isloginerr ? <div className="alert alert-danger">invalid credentials</div> : <div></div>
//         }
//         <button  className="btn btn-primary">Login</button>
//         </div> 
//         </div> 
//         </form>
//     </div>
//     )
// }

// Login = withRouter(Login)
// export default connect(function(state,prop){
//     return{
//         cartdetail:state?.cart,
//         isloggedin:state?.isloggedin,
//         isloginerr:state?.isloginerr
//     }
// })(Login)


// // address.js
// import {useEffect , useState} from "react";
// import { connect } from "react-redux"
// import axios from "axios"

// function Address(prop)
// {   

    
//     const [name,setName]=useState("")
//     const [phone,setPhone]=useState("")
//     const [address,setAddress]=useState("")
//     const [city,setCity]=useState("")
//     const [zip,setZip]=useState("")
//     //const [price,setPrice]=useState("")

//     const [nameErr,setNameErr]=useState("")
//     const [phoneErr,setPhoneErr]=useState("")
//     const [addressErr,setAddressErr]=useState("")
//     const [cityErr,setCityErr]=useState("")
//     const [zipErr,setZipErr]=useState("")

//     const onSubmit=(e)=>{
//         e.preventDefault();
//         const isvalid=formValidaion();
//         // if(isvalid){
//         //     setName("");
//         //     setPhone("");
//         //     setAddress("");
//         //     setCity("");
//         //     setZip("");
//         // }
       
//         var cake=[...prop.cartdetail];
    
//           //console.log("cake array",cake);
//           let total = 0;
//          const price=prop.cartdetail.map(item => {
            
//             return  (total= total+(item.price))           
//           })
          
//          //total= total+(prop.cartdetail?.price)
//           //console.log("price array",total)
//         var detail={
//             price:total,
//             name:name,
//             phone:phone,
//             address:address,
//             city:city,
//             pincode:zip,
//             cakes:cake   
//         }
//         console.log("addresss details",detail)
//         var token = localStorage.token
//         //console.log("addresss details",token)
//         let apii="https://apibyashu.herokuapp.com/api/addcakeorder"
//                 axios({
//                 url:apii,
//                 method:"post",
//                 data:detail,
//                 headers:{
//                     authtoken:token
//                   }
//             }).then((response)=>{
//                 console.log("response from  address  api" ,response.data)
//                 prop.dispatch({
//                     type:"ADDRESS",
//                     payload:response.data
//                 })
//                 //prop.history.push("/order")
//             },(error)=>{
//                 console.log("error from address api",error)
//             })
        
//     }


//     const formValidaion=()=>
//     {
//         const nameErr={};
//         const phoneErr={};
//         const addressErr={};
//         const cityErr={};
//         const zipErr={};
//         let isValid=true;
//         var namereg=/^[a-zA-Z_ ]*$/;
//         var phonereg=/^[0-9]/;

//         if(name.trim().length <3)
//         {
//             nameErr.nameee="Required & Name Should Be greater Than 3 Character";
//             isValid=false;
//             setName("")
//         }else if(!namereg.test(name))
//         {
//             nameErr.nameee="Only Charachters allowed";
//             isValid=false;
//             setName("")
//         }

//         if(!phonereg.test(phone))
//         {
//             phoneErr.nameee="phone number is invalid";
//             isValid=false;
//             setPhone("");
//         }else if(phone.trim().length >10)
//         {
//             phoneErr.nameee="phone number should not greater than 10";
//             isValid=false;
//             setPhone("");
//         }


//         if(address.trim().length <1)
//         {
//             addressErr.nameee="address is required";
//             isValid=false;
//             setAddress("");
//         }
//         if(city.trim().length <1)
//         {
//             cityErr.nameee="city is required";
//             isValid=false;
//             setCity("");
//         }
//         if(zip.trim().length <1)
//         {
//             zipErr.nameee="zip is required";
//             isValid=false;
//             setZip("");
//         }else if(zip.trim().length >6)
//         {
//             zipErr.nameee="zip should not greater than 6 number";
//             isValid=false;
//             setZip("");
//         }else if(!phonereg.test(zip))
//         {
//             zipErr.nameee="Only Numbers are allowed";
//             isValid=false;
//             setZip("");
//         }

//         setNameErr(nameErr);
//         setPhoneErr(phoneErr);
//         setAddressErr(addressErr);
//         setCityErr(cityErr);
//         setZipErr(zipErr);
//         return isValid;
//     }
    
//     return(
//         <div>
//         <h1>Address</h1>
//         {/* {isaddress ? <div className="alert alert-success">Address Add Success</div> : <div></div>}
//         {isaddErr ? <div></div> : <div className="alert alert-danger">Fail To Add Address</div>} */}
//         {prop.loginstatus? <form id="addressform" onSubmit={onSubmit}>
//         <div class="form-group">
//                 <label for="inputAddress">User Name</label>
//                 <input type="text" name="name" class="form-control" id="inputAddress" value={name} onChange={(e)=>{setName(e.target.value)}} />
//             </div>
//             <div className="form-error">
//                 {Object.keys(nameErr).map((key)=>{
//                     return <div className="form-error">{nameErr[key]}</div>
//                 })}
//             </div>
//             <div class="form-row">
//                 <div class="form-group col-md-12">
//                 <label for="inputEmail4">Phone</label>
//                 <input name="phone" type="text" class="form-control" id="inputEmail4" value={phone} onChange={(e)=>{setPhone(e.target.value)}} />
//                 </div>
//             </div>
//             <div className="form-error">
//             {Object.keys(phoneErr).map((key)=>{
//                     return <div className="form-error">{phoneErr[key]}</div>
//                 })}
//             </div>
            
//             <div class="form-group">
//                 <label for="inputAddress2">Address </label>
//                 <input name="address" type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
//             </div>
//             <div className="form-error">
//             {Object.keys(addressErr).map((key)=>{
//                     return <div className="form-error">{addressErr[key]}</div>
//                 })}
//             </div>
//             <div class="form-row">
//                 <div class="form-group col-md-6">
//                 <label for="inputCity">City</label>
//                 <input name="city" type="text" class="form-control" id="inputCity" value={city} onChange={(e)=>{setCity(e.target.value)}} />
//                 <br></br>
//             <div className="form-error">
//             {Object.keys(cityErr).map((key)=>{
//                     return <div className="form-error">{cityErr[key]}</div>
//                 })}
//             </div>
//                 </div>
            
//                 <div class="form-group col-md-6">
//                 <label for="inputZip">Zip</label>
//                 <input name="zip" type="text" class="form-control" id="inputZip" value={zip} onChange={(e)=>{setZip(e.target.value)}} />
//                 <br></br>
//             <div className="form-error">
//             {Object.keys(zipErr).map((key)=>{
//                     return <div className="form-error">{zipErr[key]}</div>
//                 })}
//             </div>
//                 </div>
                
//                 {/* { prop.cartdetail?.length > 0 && prop.cartdetail.map((each, index)=>{
                   
//                        <div> <input type="hidden" value={price=(each.price)} /></div>
                        
                   
//                     })
//                 }
//                  { prop.cartdetail?.length > 0 && prop.cartdetail.map((each, index)=>{
                   
                   
//                     <input type="text" value={cake=(each.name)} />
               
//                 })
//             } */}
//             </div>
   
//     <button  class="btn btn-primary">Continue To Checkout</button>
//     </form>
//     :<div className="alert alert-danger">Your Session Has Been Expired !<b> Pleas Login Again</b></div>}
// </div>
//     )
// }
// export default connect(function(state,prop){
//     return{
//         cartdetail:state?.cart,
//         loginstatus:state?.isloggedin,
//         isaddress:state?.isaddress,
//         isaddErr:state?.isaddErr
//     }
// })(Address)



// //sir methode

// // function Address()
// // {   
// //     var[formerrors,setFormerrors] = useState({})
// //     var validate=function(elements){
// //         var errors={}
// //             console.log("elements received for validation",elements ,elements.name)
// //             var namereg=/^[a-zA-Z_ ]*$/;
// //             if(!elements.name.value){
// //                 errors.name="Name is Required"
// //             }else if(elements.name.value.length <= 3)
// //             {
// //                 errors.name="Name greater than 3 character"
// //             }else if(!namereg.test(elements.name.value))
// //             {
// //                 errors.name="Invalid Name Only Character Allow"
// //             }
// //         var errorkeys=Object.keys(errors)
// //         if(errorkeys.length>0)
// //         return errors
// //         else
// //         return false
        
// //     }
// //     var placeOrder=function()
// //     {
// //         var form= document.getElementById("addressform")
// //         console.log("form element in this" , form.elements ,form.controls)
// //         var errors = validate(form.elements)
// //         if(errors){
// //             setFormerrors(errors)
// //         }
// //         else{
// //             setFormerrors({})
// //         }
// //     }
    
// //     return(
// //         <div>
// //         <h1>Address</h1>
// //         <form id="addressform">
// //         <div class="form-group">
// //                 <label for="inputAddress">User Name</label>
// //                 <input type="text" name="name" class="form-control" id="inputAddress" />
// //             </div>
// //             <div className="form-error">
// //                 {formerrors?.name && <div>{formerrors.name}</div>}
// //             </div>
// //             <div class="form-row">
// //                 <div class="form-group col-md-12">
// //                 <label for="inputEmail4">Phone</label>
// //                 <input name="phone" type="text" class="form-control" id="inputEmail4"/>
// //                 </div>
// //             </div>
// //             <div className="form-error">
                
// //             </div>
            
// //             <div class="form-group">
// //                 <label for="inputAddress2">Address </label>
// //                 <input name="address" type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
// //             </div>
// //             <div className="form-error">
                
// //             </div>
// //             <div class="form-row">
// //                 <div class="form-group col-md-6">
// //                 <label for="inputCity">City</label>
// //                 <input name="city" type="text" class="form-control" id="inputCity"/>
// //                 <br></br>
// //             <div className="form-error">
                
// //             </div>
// //                 </div>
            
// //                 <div class="form-group col-md-6">
// //                 <label for="inputZip">Zip</label>
// //                 <input name="zip" type="text" class="form-control" id="inputZip"/>
// //                 <br></br>
// //             <div className="form-error">
               
// //             </div>
// //                 </div>
            
// //             </div>
// //     </form>
// //     <button  class="btn btn-primary" onClick={placeOrder}>Continue To Checkout</button>
// // </div>
// //     )
// // }
// // export default Address

// //price,name,address,city,phone,pincode,cake addcakeorder methode post
// //cakeorders post  headers only

// {prop.updateaddress? <div className="alert alert-success">ADDRESS ADDED SUCCESSFULY</div>:null}  
//               {prop.updateaddress? myAddress():null} 
//               function myAddress()
//               {
//                   setTimeout(()=>
//                   {
//                       prop.history.push("/checkout/payment")
//                   },1500)
//               }