import React ,{ Suspense} from "react"
import logo from './logo.svg';
import './App.css';
import Nav from './Navbar';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Forgot from './Forgot';
import Carousal from './Carousal';
import Card from './Card';
import Cakes from './Data';
import Describe from './Describe';
import Detail from './Detail';
import Search from './Search';
import Error from './error';
import Cart from './Cart';
import ErrorBoundary from './ErrorBoundary';
//import Myorder from './Myorder';
import Checkout from './Checkout';
import { useState } from 'react';
import { BrowserRouter as Router , Route ,Redirect ,Switch} from 'react-router-dom';
import axios from "axios"
import { connect } from "react-redux"
import * as ReactBootstrap from 'react-bootstrap'
import { MDBSpinner } from 'mdbreact';

var SuspendedAdmin = React.lazy(()=>import('./Admin'))
var SuspendedMyorder = React.lazy(()=>import('./Myorder'))

var obj={
  name:'raju',
  image:'per.jpg'
}
var objj={
  name:'lalu',
  image:'img3.jpg'
}
var objjj={
  name:'kaju',
  image:'img2.jpg'
}
var objjjj={
  name:'modi',
  image:'img1.jpg'
}
var ing={
  name:'Cake'
}

var ing1={
  name:'Cream'
}

var ing2={
  name:'choco Chips'
}

function App(props) {
  if(localStorage.token && !props.user){
    var token = localStorage.token
    console.log("mean user is already logged in")
    axios({
      url:'https://apifromashu.herokuapp.com/api/getuserdetails',
      method:"get",
      headers:{
        authtoken:token
      }      
  }).then((response)=>{
      console.log("response from details api" , response.data)
          props.dispatch({
              type:"LOGIN_SUCCESS",
              payload:response.data
          })
          props.dispatch({
            type:"ADDRESS_SUCC",
            payload:response.data
        })
                  
  },(error)=>{
      console.log("error from detail api" , error)
  })
  }
  var [user,setUser]=useState()
  var [loginStatus, setloginStatus] =useState({show:false})
  function LoginDone(data){
    setUser(data)
    setloginStatus(true)
  }
  return (
    
    <div className="App">
      <ErrorBoundary>
      <Router>
        <Nav />
      <div >
        <div className="container-fluid">
        <Switch>
        <Route path="/" exact  component={Home} />
        <Route path="/login"  exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/search" exact component={Search} />
        {props.loginstatus?
        <Route path="/cart" exact component={Cart} />:null
      }
        <Route path="/checkout" component={Checkout} />
        <Route path="/forgot" component={Forgot} />
        {/* <Route path="/myorder" component={Myorder} /> */}
        <Route path="/admin" exact>
          <Suspense fallback={<div><ReactBootstrap.Spinner variant="primary" animation ="border"/></div>}>
            <SuspendedAdmin />
          </Suspense>
        </Route>
        <Route path="/myorder" exact>
          <Suspense fallback={<div><ReactBootstrap.Spinner variant="primary" animation ="border"/></div>}>
            <SuspendedMyorder />
          </Suspense>
        </Route>
        <Route path="/Card/:cakeid" exact component={Detail} />
        <Route path="/*">
          <Redirect to=""> exact component={Error}</Redirect>
        </Route>
        </Switch>
        </div>
      {/* <Nav loginstatus={loginStatus} user={user} />
      <Signup />
      <Login informlogin={LoginDone}/>
      <Carousal />
      <Home />
      <Search /> */}
      {/* <Card /> */}
      {/* <Describe title="THREE TIRE CHOCOTRUFFLE CAKE" ingrident={ing} ingrident1={ing1} ingrident2={ing2} price="Rs. 2000/-" /> */}
      </div>
      </Router>
      </ErrorBoundary>
    </div>
    
  );
}

export default connect(function(state,props){
  console.log("app js file state",state)
  return{
    loginstatus:state?.isloggedin,
    user:state?.user
  }
})(App)
