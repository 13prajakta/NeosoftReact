import { Route } from "react-router";
import { connect } from "react-redux";
import CartSummery from './CartSummery';
import Address from './Address';
import Payment from './Payment';
import Order from './Order';
import { Link, useHistory, useRouteMatch } from "react-router-dom"
import '../../../css/style.css';
import '../../../css/commoncss.css';


function Checkout(prop) {
  var route = useRouteMatch()
  var url = route.url
  var path = route.path
  console.log("......", route)

  return (

    <div className="row checkout">

      <div className="col-4 aside">
        <ul>
          <Link to={url}><li>Cart Summery</li></Link>
          <Link to={url + "/address"}> <li>Address</li></Link>
          {prop.updateaside ?
            <Link to={url + "/payment"}> <li>Payment</li></Link>
            : <Link to={url + "/payment"} style={{ pointerEvents: "none" }}> <li className="checkoutli">Payment</li></Link>
          }
          {prop.updateaside ?
            <Link to={url + "/order"}> <li>Order</li></Link>
            : <Link to={url + "/order"} style={{ pointerEvents: "none" }}> <li className="checkoutli">Order</li></Link>
          }

        </ul>
      </div>



      {prop.route ?
        <div className="col-8">
          <Route exact path={path} component={CartSummery}></Route>
          <Route exact path={path + "/address"} component={Address}></Route>
          <Route exact path={path + "/payment"} component={Payment}></Route>
          <Route exact path={path + "/order"} component={Order}></Route>
        </div>
        : prop.history.push("/")}



    </div>

  )
}

export default connect(function (state, props) {
  console.log(".........checkout state", state)
  return {
    cartdetail: state?.cart,
    isload: state?.isload,
    loginstatus: state?.isloggedin,
    route: state?.route,
    updateaddress: state?.updateaddress,
    updateaside: state?.updateaside
  }
})(Checkout)