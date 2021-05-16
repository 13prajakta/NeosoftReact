import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart, faTruck } from "@fortawesome/free-solid-svg-icons"
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {useEffect , useState} from "react"
var visa="visa.jpg";

function Payment(prop)
{
    useEffect(()=>{
        prop.dispatch({
            type:"UPDATEPAYMENT",
            payload:true
        },[localStorage.token])
    })
    return(
        <div>
        <h1>payment</h1>
        {prop.loginstatus ?
        <div>
           {prop.cart?.length>0 ? 
        <div>
            
        <div className="alert alert-info">
            Soory! Currently We Have Not Any Payment Mode Available Except Cash On Delivery 
        </div>
        
        <div>
        <FontAwesomeIcon icon={faTruck} /> <p className="text-success" style={{display:"inline-block"}}> Cash On Delivery</p>
        </div>
        <div>
           <Link to="/checkout/order"> <button className="btn btn-warning">Proceed To Place Order</button></Link>
        </div>
        </div>
        :<div className="alert alert-danger">Oops!! Your Cart Is Empty Plese Select Some cakes</div>}
        {prop.cartdetail?.length<1 ?<Link to="/"><button className="btn btn-warning">Click To Continue Shopping</button></Link>:null}
        </div>
        : <div className="alert alert-danger">Ooops!<b>Your Session Has Expired Please Login Again</b></div>}
        </div>
    )
}
export default connect(function(state,props){
    console.log(".........checkout state" , state)
    return {
        cart:state?.cart ,
        loginstatus:state?.isloggedin,
        
    }
})(Payment)