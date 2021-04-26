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
        case "ADDRESS":{
            console.log("Here we have to write logic for address details")
            state = {...state}
            //state["isaddress"] =true
            state["address"]=action.payload
            return state
        }
        // case "ADDRESS_SUCCESS":{
        //     console.log("Here we have to write logic for address success")
        //     state = {...state}
        //     state["isaddress"] =true
        //     state["address"]=action.payload
        //     state["isaddErr"] =false
        //     return state
        // }

        // case "ADDRESS_FAILURE":{
        //     console.log("Here we have to write logic for address failure")
        //     state = {...state}
        //     state["isaddress"] =false
        //     state["isloggedin"] =false
        //     state["isaddErr"] =true
        //     return state
        // }
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
        default :return state
    }
}
export default demo