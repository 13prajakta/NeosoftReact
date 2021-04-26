import './order.css'
import axios from 'axios'
import {useEffect , useState} from "react";
import { connect } from "react-redux"
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"></link>

function Order(prop)
{
    let [orders,setOrders]=useState({})
    var today = new Date(),
    date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
    var token = localStorage.token
    let orderapi="https://apibyashu.herokuapp.com/api/cakeorders"
    useEffect(()=>{   
    axios({
            url:orderapi,
            method:"post",
            //data:cartremove,
            headers:{
                authtoken:token
              } 
        }).then((response)=>{
            console.log("response from order api" , response.data)
            setOrders(response.data)
        },(error)=>{
            console.log("error from order api" , error)
        })
    },[token])

    return(
        
<div class="container bootstrap snippets bootdeys">
<h2 style={{color:"#0c1241",fontStyle:"italic"}}>ORDER DETAILS</h2>
{prop.loginstatus ? 
<div class="row">
  <div class="col-sm-12">
	  	<div class="panel panel-default invoice" id="invoice">
		  <div class="panel-body">
			<div class="invoice-ribbon"><div class="ribbon-inner">PAID</div></div>
		    <div class="row">

				<div class="col-sm-6 top-left">
					<i class="fa fa-rocket"></i>
				</div>

				<div class="col-sm-6 top-right">
						<h3 class="marginright">INVOICE-1234578</h3>
						<span class="marginright">{date}</span>
			    </div>

			</div>
			<hr/>
			<div class="row">

				<div class="col-md-6 from">
					<p class="lead marginbottom">From : CAKESHOPEE</p>
					<p>16 PRAGATI NAGAR</p>
					<p>JANHIT SOCIETY </p>
					<p>NAGPUR, 440036</p>
					<p>Phone: 909676922</p>
					<p>Email: 13psathwane@gmail.com</p>
				</div>

				<div class="col-md-6 to">
					<p class="lead marginbottom">To : {orders.name}</p>
					<p>{orders.address}</p>
					<p>{orders.city}, {orders.zip}</p>
					<p>Phone: {orders.phone}</p>
					{/* <p>Email: {prop.user.email}</p> */}

			    </div>

			    {/* <div class="col-xs-4 text-right payment-details">
					<p class="lead marginbottom payment-info">Payment details</p>
					<p>Date: 14 April 2014</p>
			    </div> */}

			</div>

			<div class="row table-row">
				<table class="table table-striped">
			      <thead>
			        <tr>
			          <th class="text-center" style={{width:"5%"}}>#</th>
			          <th style={{width:"5%"}}>Item</th>
			          <th class="text-right" style={{width:"5%"}}>Quantity</th>
			          <th class="text-right" style={{width:"5%"}}>Unit Price</th>
			          <th class="text-right" style={{width:"5%"}}>Total Price</th>
			        </tr>
			      </thead>
			      <tbody>
			        <tr>
			          <td class="text-center"></td>
			          <td></td>
			          <td class="text-right"></td>
			          <td class="text-right"></td>
			          <td class="text-right"></td>
			        </tr>
			        
			       </tbody>
			    </table>

			</div>

			<div class="row">
			<div class="col-md-6 margintop">
				<p class="lead marginbottom">THANK YOU!</p>

				<button class="btn btn-success" id="invoice-print"><i class="fa fa-print"></i> Print Invoice</button>
				<button class="btn btn-danger"><i class="fa fa-envelope-o"></i> Mail Invoice</button>
			</div>
			<div class="col-md-6 text-right pull-right invoice-total">
					  <p>Subtotal : </p>
			          <p>Discount (10%) :  </p>
			          <p>VAT (8%) :  </p>
			          <p>Total :  </p>
			</div>
			</div>

		  </div>
		</div>
	</div>
</div>
:<div className="alert alert-danger">Your Session Has Been Expired !<b> Pleas Login Again</b></div>
}
</div>

    )
}
export default connect(function(state,prop){
    return{
        user:state?.user,
		loginstatus:state?.isloggedin,
    }
})(Order)