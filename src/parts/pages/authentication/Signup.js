import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Signup extends React.Component {
    constructor() {
        super()
        this.state = {
            onLineUse: 0,
            fields: {},
            errors: {}

        }
    }


    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Name Cannot be empty";
        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z ]+$/)) {
                formIsValid = false;
                errors["name"] = "Only letters Allowed";
            }
        }

        //password
        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "Password Cannot be empty";
        }

        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Email Cannot be empty";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    contactSubmit(e) {
        e.preventDefault();
        let fields = this.state.fields;
        let errors = {};
        let formIsSubmit = true;

        if (this.handleValidation()) {

            console.log("signup validation after submittt", this.state.fields)
            let apiurl = process.env.REACT_APP_BASE_URL + "/api/register"
            axios({
                url: apiurl,
                method: "post",
                data: this.state.fields
            }).then((response) => {
                console.log("response from signup api", response.data)
                alert(response.data.message);
                if (response.data.message != "User Already Exists") {
                    alert("Go To Your Email and Verify The Link For Login")
                    this.props.history.push("/login")
                }
            }, (error) => {
                console.log("error from signup api", error)
            })

        } 

    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    

    render() {
        return (
            <div className="login">
                
                <h2 className="alert alert-info loginh2">Signup Here</h2>
                <form onSubmit={this.contactSubmit.bind(this)}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
                        <span className="error">{this.state.errors["email"]}</span>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} />
                        <span className="error">{this.state.errors["name"]}</span>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} />
                        <span className="error">{this.state.errors["password"]}</span>
                    </div>
                    {/* <div style={{color:"red"}}>
                    <p>{this.state.errorMsg}</p>
                </div> */}
                    <div className="form-group">
                        <Link to="/login"><a>login here?</a></Link>
                    </div>
                    <button className="btn btn-primary">Register</button>
                </form>
            </div>
        )
    }
}
export default Signup