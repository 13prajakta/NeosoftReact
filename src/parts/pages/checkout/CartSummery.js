import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import '../../../css/commoncss.css';

function CartSummery(props) {
    return (
        <div>
            <h2 className="cartsumh2">YOUR CART SUMMERY</h2>
            {props.loginstatus ?
                <div>
                    {props.cart?.length > 0 ? props.cart.map((each, index) => {
                        return (<div class="media cartsum">
                            <img src={each.image} class="mr-3" alt="..."  />
                            <div class="media-body">
                                <h4 class="mt-0">{each.name}</h4>
                                <p class="mt-0 cartsumquant">quantity : {each.quantity}</p>
                                <p>Price : {each.price}/-</p>

                            </div>

                        </div>


                        )
                    }) : <div className="alert alert-danger">Ooops!<b>Your Cart Is Empty Please Add Something Before You Process</b></div>
                    }
                    {props.cartdetail?.length < 1 ? <Link to="/"><button className="btn btn-warning">Click To Continue Shopping</button></Link> : null}
                </div>

                : <div className="alert alert-danger">Ooops!<b>Your Session Has Expired Please Login Again</b></div>}
            <Link to="/checkout/address"> <button className="btn btn-warning">Proceed For Address</button></Link>
        </div>
    )
}

export default connect(function (state, props) {
    console.log(".........cart summery state", state)
    return {
        cart: state?.cart,
        loginstatus: state?.isloggedin,

    }
})(CartSummery)