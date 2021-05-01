import axios from 'axios'
export function orderdetail(){
    let orderapi = "https://apifromashu.herokuapp.com/api/cakeorders"
    var token = localStorage.token
    return (dispatch) => {
        axios({
                    url:orderapi,
                    method:"post",
                    //data:cartremove,
                    headers:{
                        authtoken:token
                      } 
                }).then((response)=>{
                    console.log("response from order api" , response.data)
            		dispatch({
            			type:"ORDERS",
            			payload:response.data.cakeorders,
            		})
                },(error)=>{
                    console.log("error from order api" , error)
                })
    }
}
