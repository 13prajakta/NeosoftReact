import '../../../css/order.css'
import axios from 'axios'
import { useEffect, useState } from "react";
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import { orderdetail } from "../../../reduxstore/thunk";
import * as ReactBootstrap from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';
{/* <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"></link> */ }

function Myorder(prop) {

	var today = new Date(),
		date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()


	return (

		<div class="container bootstrap snippets bootdeys forgot">
			<h2 className="cartsumh2">ORDER DETAILS</h2>

			<div>
				{prop.loginstatus ?

					<div class="container">
						{prop.orders?.length > 0 ?
							<table id="cart" class="table table-hover table-condensed" >
								<thead>
									<tr className="myorder">
										<th className="myorder">Sr.no</th>
										<th className="myorder">Product</th>
										<th className="myorder1">Detail</th>
										<th className="myorder2">Quantity</th>
										<th className="myorder3 text-center">Subtotal</th>
										<th className="myorder1">Status</th>
									</tr>
								</thead>
								<tbody>
									{prop.orders?.length > 0 && prop.orders.map((each, index) => {
										return (

											<tr>
												<td key={index}>{index + 1}</td>
												<td data-th="Product" >
													<div class="row">

														<div class="col-sm-10">
															{each.cakes?.length > 0 && each.cakes.map((each, index) => {
																return (<span className="myord">{each.name},</span>
																)
															})}
														</div>
													</div>
												</td>
												<td data-th="Detail"><h5 className="text-warning">{each.name}</h5><h6 className="text-success">{each.phone}</h6><h6 className="text-primary">{each.email}</h6><h6 className="text-info">{each.address},{each.city}</h6><h6 className="text-info">{each.pincode}</h6></td>
												<td data-th="Quantity">
													<input type="number" class="form-control text-center" value="1" />
												</td>
												<td data-th="Subtotal" class="text-center">{each.price} Rs/-</td>
												<td class="actions" data-th="">
													{each.pending ? <button class="btn btn-info btn-sm" disabled> pending </button> : <button class="btn btn-info btn-sm"> Ordered </button>}

												</td>
											</tr>)
									})
									}
								</tbody>
								<tfoot>

									<tr>
										<Link to="/"><td><button className="btn btn-sm btn-warning">Continue Shopping</button></td></Link>
										<td colspan="2" class="hidden-xs"></td>

									</tr>
								</tfoot>
							</table>
							: <div className="alert alert-info">NO ORDER DETAILS <FontAwesomeIcon icon={faSadTear} /> NO ORDER PLACED YET...</div>}
					</div>
					: <div className="alert alert-danger">Your Session Has Been Expired !<b> Pleas Login Again</b></div>
				}
			</div>
		</div>

	)
}


//   export default connect(
// 	mapDispatchToProps
//   )(Order);

export default connect(function (state, prop) {
	console.log("state of orders", state)
	return {
		user: state?.user,
		loginstatus: state?.isloggedin,
		orders: state?.orders,
		isload: state?.isload,
	}
})(Myorder)