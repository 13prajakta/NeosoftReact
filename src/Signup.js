import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Signup extends React.Component{
    constructor()
    {
        super()
        this.state={
            onLineUse:0
       
        }
    }
    user={}
    email=(event)=>{
        this.user.email=event.target.value
    }
    getName=(event)=>{
        this.user.name=event.target.value
    }
    password=(event)=>{
        this.user.password=event.target.value
    }
    getemail=(event)=>{
        console.log('event value' , event.target.value)
    }
    register=()=>{
        if(!this.user.email || !this.user.password || !this.user.name)
        {
            this.setState({
                errorMsg:"Please Fill All details"
            })
        }
        else{
            // let apiurl="https://apibyashu.herokuapp.com/api/register"
            // axios({
            //     url:apiurl,
            //     method:"post",
            //     data:this.user
            // }).then((response)=>{
            //     console.log("response from signup api" ,response.data)
            // },(error)=>{
            //     console.log("error from signup api",error)
            // })
            
        }
        console.log("...user details" , this.user)
    }
    goOnline=()=>{
        this.setState({
            onLineUse:this.state.onLineUse+1
        })
    }
    
    render(){
        return(
            <div>
                {/* hey users {this.state.onLineUse}
                <input onChange={this.getemail}></input>
                <button onClick={this.goOnline}>Go button</button> */}
                
                <h2 className="alert alert-info" style={{marginTop:"20px"}}>Signup Here</h2>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input onChange={this.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input  type="text" className="form-control" onChange={this.getName} />
                   
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input  type="password" className="form-control" id="exampleInputPassword1"  onChange={this.password} />
                </div>
                <div style={{color:"red"}}>
                    <p>{this.state.errorMsg}</p>
                </div>
                <div className="form-group">
                   <Link to="/login"><a>login here?</a></Link>
                </div>
                <button  className="btn btn-primary" onClick={this.register}>Register</button>
                
            </div>
        )
    }
}
export default Signup