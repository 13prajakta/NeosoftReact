var demo= function(state={
    user:null
}, action){
    switch(action.type){
        case "LOGIN":{
            console.log("Here we have to write logic for login")
            state = {...state}
            state["isloggedin"] =true
            state["user"]=action.payload
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
            console.log("Here we check user is presengt or not")
            state = {...state}
            state["isloggedin"] =true
            state["user"]=action.payload
            return state
        }

        case "CARTDETAIL":{
            console.log("Here we see cart details")
            state = {...state}
            state["setcheckCart"]=false
            state["cart"]=action.payload
            return state
        }

        case "REMOVECARTDETAIL":{
            console.log("Here we remove cart details")
            state = {...state}
            delete state["setcheckCart"]
           delete state["cart"]
            return state
        }
        default :return state
    }
}
export default demo