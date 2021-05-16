import { Link ,useHistory} from "react-router-dom"
import {useState , useEffect} from "react"
import axios from 'axios'

function Forgot()
{
    
  //   var[email , setUser] = useState({})
  //   let getEmail=(event)=>{
  //       setUser({
  //           email:event.target.value,
  //       })     
  //   }

  //   var forgottt={
  //       email:email
  //   }
  //   console.log("forgot.......",forgottt)
  //   let forgotapi="https://apifromashu.herokuapp.com/api/recoverpassword"
  //  let forgoton=()=>{
  //               axios({
  //               url:forgotapi,
  //               method:"post",
  //               data:email
  //           }).then((response)=>{
  //               console.log("response from forgot password  api" ,response.data)
  //               //setcakes(response.data.data)
  //           },(error)=>{
  //               console.log("error from forgot password api",error)
  //           })
  //           }



  const [email,setEmail]=useState("")
    const [emailErr,setEmailErr]=useState("")
    const[user,setUser]=useState({})

    const onSubmit=(e)=>{
        e.preventDefault();
        const isvalid=formValidaion();
        var emaill={
            email:email,
        }
        if(isvalid){
            setEmail("");

            console.log("user istrying to login" ,emaill)
            let forgotapi=process.env.REACT_APP_BASE_URL+"/api/recoverpassword"
            
        axios({
          url:forgotapi,
          method:"post",
          data:emaill
            
        }).then((response)=>{
            console.log("response from forgot api" , response.data)
            // prop.informlogin("prajakta")
            setUser(response.data)
            
        },(error)=>{
            console.log("error from forgot api" , error)
            
        })
        }
    }


    const formValidaion=()=>
    {
        const emailErr={};
       
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

        setEmailErr(emailErr);
        return isValid;
    }




    return(
        <div>
            <div class="form-gap"></div>
            <div className="alert-info">{user.message}</div>
            <div class="container" style={{marginBottom:"50px",marginTop:"40px"}}>
	<div class="row">
        <div className="col-md-4"></div>
		<div class="col-md-4 col-md-offset-4" style={{border:"2px solid #f9d200",padding:"30px",borderRadius:"20px",backgroundColor: "#D3D3D3"}}>
            <div class="panel panel-default">
              <div class="panel-body">
                <div class="text-center">
                  <h3><i class="fa fa-lock fa-4x"></i></h3>
                  <h2 class="text-center">Forgot Password?</h2>
                  <p>You can reset your password here.</p>
                  <div class="panel-body">
    
                    <form onSubmit={onSubmit} >
                      
                      
                      <div class="form-group">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                          <input  type="text" id="email" name="email" placeholder="email address" class="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        </div>
                      </div>
                      <div className="form-error">
                {Object.keys(emailErr).map((key)=>{
                    return <div className="form-error">{emailErr[key]}</div>
                })}
            </div>
                      <div class="form-group">
                        <button class="btn btn-lg btn-primary btn-block">Reset Password</button>
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