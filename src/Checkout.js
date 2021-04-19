import { Route } from "react-router";
import CartSummery from './CartSummery';
import Address from './Address';
import Payment from './Payment';
import Order from './Order';
import { Link ,useHistory,useRouteMatch} from "react-router-dom"
import './style.css';



function Checkout(){
    var route =useRouteMatch()
    var url = route.url
    var path =route.path
    console.log("......",route)
    
    return(
        

        
        <div className="row">
           
            <div className="col-4 aside">
                <ul>
                  <Link to={url}><li>Cart Summery</li></Link>
                  <Link to={url+"/address"}> <li>Address</li></Link>
                  <Link to={url+"/order"}> <li>Order</li></Link>
                  <Link to={url+"/payment"}> <li>Payment</li></Link>    
                </ul>
            </div>
            
            <div className="col-8">
                <Route exact path={path} component={CartSummery}></Route>
                <Route exact path={path+"/address"} component={Address}></Route>
                <Route exact path={path+"/order"} component={Order}></Route>
                <Route exact path={path+"/payment"} component={Payment}></Route>
            </div>
        </div>
        
    )
}
export default Checkout