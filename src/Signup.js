import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Signup extends React.Component{
    constructor()
    {
        super()
        this.state={
            onLineUse:0,
            fields: {},
            errors: {}
       
        }
    }


    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Name Cannot be empty";
        }
  
        if(typeof fields["name"] !== "undefined"){
           if(!fields["name"].match(/^[a-zA-Z ]+$/)){
              formIsValid = false;
              errors["name"] = "Only letters Allowed";
           }        
        }
        
        //password
        if(!fields["password"]){
            formIsValid = false;
            errors["password"] = "Password Cannot be empty";
         }

        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Email Cannot be empty";
        }
  
        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
       }  

       this.setState({errors: errors});
       return formIsValid;
   }
    
   contactSubmit(e){
        e.preventDefault();

        if(this.handleValidation()){
           
           console.log("signup validation after submittt",this.state.fields)
           let apiurl="https://apifromashu.herokuapp.com/api/register"
            axios({
                url:apiurl,
                method:"post",
                data:this.state.fields
            }).then((response)=>{
                console.log("response from signup api" ,response.data)
            },(error)=>{
                console.log("error from signup api",error)
            })
            alert("Form submitted");
            
        }else{
           //alert("Form has errors.")
        
        
        }
  
    }

    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
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
            
            // let apiurl="https://apifromashu.herokuapp.com/api/register"
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
                <form onSubmit= {this.contactSubmit.bind(this)}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                    <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input  type="text" className="form-control" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} />
                    <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input  type="password" className="form-control" id="exampleInputPassword1"  onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} />
                    <span style={{color: "red"}}>{this.state.errors["password"]}</span>
                </div>
                {/* <div style={{color:"red"}}>
                    <p>{this.state.errorMsg}</p>
                </div> */}
                <div className="form-group">
                   <Link to="/login"><a>login here?</a></Link>
                </div>
                <button  className="btn btn-primary">Register</button>
                </form> 
            </div>
        )
    }
}
export default Signup