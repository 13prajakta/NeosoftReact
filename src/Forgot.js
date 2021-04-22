import { Link ,useHistory} from "react-router-dom"
import {useState , useEffect} from "react"
import axios from 'axios'

function Forgot()
{
    
    var[email , setUser] = useState({})
    let getEmail=(event)=>{
        setUser({
            email:event.target.value,
        })     
    }

    var forgottt={
        email:email
    }
    console.log("forgot.......",forgottt)
    let forgotapi="https://apibyashu.herokuapp.com/api/recoverpassword"
   let forgoton=()=>{
                axios({
                url:forgotapi,
                method:"post",
                data:email
            }).then((response)=>{
                console.log("response from forgot password  api" ,response.data)
                //setcakes(response.data.data)
            },(error)=>{
                console.log("error from forgot password api",error)
            })
            }

    return(
        <div>
            <div class="form-gap"></div>
            <div class="container">
	<div class="row">
        <div className="col-md-4"></div>
		<div class="col-md-4 col-md-offset-4">
            <div class="panel panel-default">
              <div class="panel-body">
                <div class="text-center">
                  <h3><i class="fa fa-lock fa-4x"></i></h3>
                  <h2 class="text-center">Forgot Password?</h2>
                  <p>You can reset your password here.</p>
                  <div class="panel-body">
    
                    <form id="register-form" role="form" autocomplete="off" class="form" method="post" >
    
                      <div class="form-group">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                          <input id="email" name="email" placeholder="email address" class="form-control" onChange={getEmail} type="email" />
                        </div>
                      </div>
                      <div class="form-group">
                        <input name="recover-submit" class="btn btn-lg btn-primary btn-block" value="Reset Password" onClick={forgoton}/>
                      </div>
                      <div class="form-group">
                      <Link to="/login">  <button name="recover-submit" class="btn btn-lg btn-danger btn-block"  type="button">Back To Login</button></Link>
                      </div>
                      <input type="hidden" class="hide" name="token" id="token" value=""/> 
                    </form>
    
                  </div>
                </div>
              </div>
            </div>
          </div>
	</div>
</div>
        </div>
    )
}

export default Forgot