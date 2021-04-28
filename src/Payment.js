import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart, faTruck } from "@fortawesome/free-solid-svg-icons"
import { connect } from "react-redux";
var visa="visa.jpg";

function Payment(prop)
{
    
    return(
        <div>
        <h1>payment</h1>
        {prop.loginstatus ?
        <div>
            
        <div className="alert alert-info">
            Soory! Currently We Have Not Any Payment Mode Available Except Cash On Delivery 
        </div>
        
        <div>
        <FontAwesomeIcon icon={faTruck} /> <p className="text-success" style={{display:"inline-block"}}> Cash On Delivery</p>
        </div>
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