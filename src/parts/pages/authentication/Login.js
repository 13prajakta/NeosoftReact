import { faSadCry, faSmile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useState, useEffect } from "react"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import { validate } from '../../../util/validate.js';

function Login(prop) {
    console.log("login propsp", prop)
    var user = {}
   
    let [errors, setErrors] = useState({})
    const onSubmit = (e) => {
        e.preventDefault();
        let fields=e.target.elements
        let error =validate(fields)
        if(Object.keys(error).length>0){
            setErrors(error)
        } 
       else {
            
            var user = {
                email: fields.email.value,
                password: fields.password.value
            }

            console.log("user istrying to login", user)
            prop.dispatch({
                type: "LOGIN",
                payload: user
            })
        }
    }

    function myLogin() {
        setTimeout(() => { prop.history.push("/") }
            , 2000);
    }


    return (
        <div className="login">
            <h2 className="alert alert-info loginh2">Login Here</h2>
            <form onSubmit={onSubmit}>


                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        {prop.isloggedin ? <div className="alert alert-success">Loging Successfull...!Happy Shopping <FontAwesomeIcon icon={faSmile} /> </div> : <div className=""></div>}{
                            prop.isloginerr ? <div className="alert alert-danger">invalid credentials <FontAwesomeIcon icon={faSadCry} /></div> : <div></div>
                        }
                        {prop.isloggedin ? myLogin() : null}
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="text" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            {/* { user && <label>{user.email}</label>} */}
                        </div>
                        <div className="form-error">
                        {errors.email ? <span className="text-danger">{errors.email}</span> : null}
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" name="password" id="exampleInputPassword1" />
                            {/* { user && <label>{user.password}</label>} */}
                        </div>
                        <div className="form-error">
                        {errors.password ? <span className="text-danger">{errors.password}</span> : null}
                        </div>
                        <Link to="/signup"><a>Need help?Register</a></Link> <Link to="/forgot"><a class="text-danger">Forgot Password?</a></Link><br></br>
                                <br></br>
                        <button className="btn btn-primary">Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

Login = withRouter(Login)
export default connect(function (state, prop) {
    return {
        cartdetail: state?.cart,
        isloggedin: state?.isloggedin,
        isloginerr: state?.isloginerr
    }
})(Login)