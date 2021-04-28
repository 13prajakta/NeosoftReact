import React from 'react'
import axios from 'axios'
import {useEffect , useState} from "react";
import { Link ,withRouter} from "react-router-dom"
import { connect } from "react-redux";
import * as ReactBootstrap from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Cart(prop)
{
    let [loading,setLoading]=useState(false)
    function remove(cakeid){
     
        var cartremove={
            cakeid:cakeid,      
        }
       // console.log(" cake details" ,cartremove)
        var token = localStorage.token
        let cartapi="https://apibyashu.herokuapp.com/api/removecakefromcart"
        axios({
            url:cartapi,
            method:"post",
            data:cartremove,
            headers:{
                authtoken:token
              } 
        }).then((response)=>{
            console.log("response from remove item from cart api" , response.data)
            //alert(response.data)
            //setCart(response.data.data)
            prop.dispatch({
                type:"CARTUPDATE",
                payload:false
            })     
        },(error)=>{
            console.log("error from remove item from cart api" , error)
        });setLoading(true)
    }
    
    // function checkout(){
    //     prop.dispatch({
    //         type:"CARTDETAIL",
    //         payload:cartdetail
    //     })
    // }
  
    // let subtotal=(event)=>
    // {
    //     console.log("subtotal event >>>>>>>>>>>>>>>>>",event)
    //     // total:event.target.value
    // }
    let sum = 0;
    
    return(
        
         (prop.cartdetail?.length > 0) ? 
                <div class="container">
            
        <div class="row">
        
            <div class="col-sm-12 col-md-10 col-md-offset-1">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Product</th> 
                            <th>Quantity</th>
                            <th class="text-center">Price</th>
                            <th class="text-center">Subtotal</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    { prop.cartdetail?.length > 0 && prop.cartdetail.map((each, index)=>{
                        
                       
                        return (  
                           
                    <tr>
                            <td class="col-sm-8 col-md-6">
                            <div class="media">
                                <a class="thumbnail pull-left" href="#"> <img class="media-object" src={each.image} style={{width: "72px", height: "72px"}}/> </a>
                                <div class="media-body">
                                    <h4 class="media-heading"><a href="#">{each.name}</a></h4>
                                    <h5 class="media-heading"> Weight : <a href="#">{each.weight} kg</a></h5>
                                    <span>Status: </span><span class="text-success"><strong>In Stock</strong></span>
                                </div>
                            </div></td>
                            <td class="col-sm-1 col-md-1" style={{textAlign: "center" }}>
                            <input type="email" class="form-control" id="proquty"   value={each.quantity} />
                            </td>
                            <td class="col-sm-1 col-md-1 text-center"><strong >{each.price}/-</strong><input type="hidden" id="proprice" value={each.price}/></td>
                            <td class="col-sm-1 col-md-1 text-center"><strong>{each.price * each.quantity}/-</strong></td>
                           <input type="hidden" value={sum= sum+(each.price*each.quantity)}/>
                            <td class="col-sm-1 col-md-1">
                            <button type="button" class="btn btn-danger" onClick={() => remove(each.cakeid)}>
                            <FontAwesomeIcon icon={faTrash} />
                            </button></td>
                            {/* <input type="hidden" id="subtot"  value={each.price.reduce((a, b) => a + b, 0)} onBlur={subtotal}></input> */}
                        </tr>
                       
                        )
                        
                    })
                }  

                        <tr>
                            <td>   </td>
                            <td>   </td>
                            <td>   </td>
                            <td><h3>Total</h3></td>
                            <td class="text-right"><h5><strong>{sum} Rs/-</strong></h5></td>
                        </tr>
                        <tr>
                            <td>   </td>
                            <td>   </td>
                            <td>   </td>
                            <td>
                            <Link to="/">
                            <button type="button" class="btn btn-warning">
                                 Continue Shopping
                            </button></Link>
                            </td>
                            <td>
                                <Link to="/checkout">
                                    {
                                    prop.loginstatus?
                            <button type="button" class="btn btn-success" >
                                Checkout <span class="glyphicon glyphicon-play"></span>
                            </button>:<Link to="/login"><button className="btn btn-warning">Login For Add To Cart</button></Link>}
                            </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
       
    </div> : <div style={{marginTop:"30px"}}><p className="alert alert-danger">Your Cart empty</p></div>
    
    )
}
 Cart = withRouter(Cart)
export default connect(function(state,prop){
    console.log("from cart page state",state)
    return{
        loginstatus:state?.isloggedin,
        cartdetail:state?.cart,
        remove:state?.setcheckCart
    }
})(Cart)