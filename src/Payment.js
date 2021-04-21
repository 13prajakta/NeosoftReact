import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart, faTruck } from "@fortawesome/free-solid-svg-icons"

var visa="visa.jpg";

function Payment()
{
    
    return(
        <div>
        <h1>payment</h1>
        <div className="alert alert-info">
            Soory! Currently We Have Not Any Payment Mode Available Except Cash On Delivery 
        </div>
        
        <div>
        <FontAwesomeIcon icon={faTruck} /> <p className="text-success" style={{display:"inline-block"}}> Cash On Delivery</p>
        </div>
        </div>
    )
}
export default Payment