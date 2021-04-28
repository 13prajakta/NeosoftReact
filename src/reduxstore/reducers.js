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
        case "ADDRESS":{
            console.log("address started loading")
            state = {...state}
            state["isloading"] =true
            state["isadd"]=true
            return state
        }
        case "ADDRESS_SUCC":{
            console.log("Here we address details success")
            state = {...state}
            state["isloading"] =false
            state["address"]=action.payload
            state["isadd"]=false
            state["isload"] =true
            state["isloadErr"] =false
            return state
        }
        case "ADDRESS_FAILC":{
            console.log("Here we address details fails")
            state = {...state}
            state["isloading"] =false
            state["isload"] =false
            state["isloadErr"] =true
            return state
        }
        case "ORDERS":{
            console.log("Here we orders details")
            state = {...state}
            state["orders"]=action.payload
            return state
        }
        default :return state
    }
}
export default demo