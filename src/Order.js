import './order.css'
import axios from 'axios'
import {useEffect , useState} from "react";
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import { orderdetail } from "./reduxstore/thunk";
import * as ReactBootstrap from 'react-bootstrap'
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"></link>

function Order(prop)
{
    let [orders,setOrders]=useState({})
	let [loading,setLoading]=useState(false)
	console.log("order details",orders)
    var today = new Date(),
    date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
    let token=localStorage.token
    let orderapi="https://apibyashu.herokuapp.com/api/cakeorders"
    useEffect(()=>{ 
		

	prop.dispatch(orderdetail(loading))
		
    // axios({
    //         url:orderapi,
    //         method:"post",
    //         //data:cartremove,
    //         headers:{
    //             authtoken:token
    //           } 
    //     }).then((response)=>{
    //         console.log("response from order api" , response.data)
    //         setOrders(response.data.cakeorders)
	// 		prop.dispatch({
	// 			type:"ORDERS",
	// 			payload:response.data.cakeorders
	// 		})
    //     },(error)=>{
    //         console.log("error from order api" , error)
    //     })
				
    },[token])

	
	return(
        <div>
        <h1>payment</h1>
        {prop.loginstatus ?
        <div>
            
        <div className="alert alert-info">
            THANK YOU FOR SHOPPING WITH US !! 
        </div>
        
        <div>
        <Link to="/"><button className="btn btn-warning">Click To Continue Shopping</button></Link>
        </div>
        </div>
        : <div className="alert alert-danger">Ooops!<b>Your Session Has Expired Please Login Again</b></div>}
        </div>
    )
}

  
//   export default connect(
// 	mapDispatchToProps
//   )(Order);

export default connect(function(state,prop){
	console.log("state of orders",state)
    return{
        user:state?.user,
		loginstatus:state?.isloggedin,
		orders:state?.orders,
		isload:state?.isload,
		rounder:state?.rounder
    }
})(Order)