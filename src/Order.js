import './order.css'
import axios from 'axios'
import {useEffect , useState} from "react";
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import { orderdetail } from "./reduxstore/thunk";
import * as ReactBootstrap from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"></link>

function Order(prop)
{
    var today = new Date(),
    date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
    let token=localStorage.token
    const detail={
        price:prop.peradd?.price,
        name:prop.peradd?.name,
        phone:prop.peradd?.phone,
        address:prop.peradd?.address,
        city:prop.peradd?.city,
        pincode:prop.peradd?.pincode,
        cakes:prop.cartdetail  
    }
    console.log(">>>>>>>>>>>>>",detail)
    const onClick=(e)=>{
        e.preventDefault();
        prop.dispatch({
            type:"ADDRESS",
            payload:detail
        })
    }

	
	return(
        <div>
        <h1 style={{fontStyle:"italic"}}>Order</h1>
        {prop.loginstatus ?
        <div>
            {prop.cartdetail?.length>0 ?
            <div>
        <div className="alert alert-info">
            THANK YOU FOR SHOPPING WITH US........
            HAPPY SHOPPING!!!! <FontAwesomeIcon icon={faSmile}/>
        </div>
        
        <div>
        {prop.cartdetail?.length>0 ?  <button className="btn btn-success" onClick={onClick}>Place Order</button>:
        <Link to="/"><button className="btn btn-warning">Click To Continue Shopping</button></Link>}
        </div>
        {prop.isadd ?<div className="alert alert-success">ORDER PLACED SUCCESSFULY</div>: null}
    {prop.isloadErr ? <div className="alert alert-danger">ORDER FAIL TO PLACE</div> : null}
        </div>
        :<div className="alert alert-info">CURRENTLY YOUR CART IS EMPTY ...SHOP MORE TO PLACE ORDER AGAIN</div>}
        {prop.cartdetail?.length<1 ?<Link to="/"><button className="btn btn-warning">Click To Continue Shopping</button></Link>:null}
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
		rounder:state?.rounder,
        cartdetail:state?.cart,
        isaddress:state?.address,
        isaddErr:state?.isaddErr,
        isload:state?.isload,
        isadd:state?.isadd,
        isloadErr:state?.isloadErr,
        peradd:state?.permantaddress,
        updateaddress:state?.updateaddress
    }
})(Order)