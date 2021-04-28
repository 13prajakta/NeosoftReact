import { connect } from "react-redux";
function CartSummery(props)
{
    return(
        <div>
            <h2 style={{color:"#0c1241",fontStyle:"italic"}}>YOUR CART SUMMERY</h2>
        {props.loginstatus ?
            <div>
            { props.cart?.length > 0 ? props.cart.map((each, index)=>{
		          return (<div class="media">
            <img src={each.image}  class="mr-3" alt="..." style={{width:"150px",height:"100px"}}/>
            <div class="media-body">
                <h4 class="mt-0" style={{color:"#b9384f"}}>{each.name}</h4>
                <p class="mt-0" style={{color:"#f4c55c",fontWeight:"bold"}}>quantity : {each.quantity}</p>
                <p style={{color:"#329e72",fontWeight:"bold"}}>Price : {each.price}/-</p>
            </div>
            </div>
            )
        }):<div className="alert alert-danger">Ooops!<b>Your Cart Is Empty Please Add Something Before You Process</b></div>
    }
    </div>
    : <div className="alert alert-danger">Ooops!<b>Your Session Has Expired Please Login Again</b></div>}
        </div>
    )
}

export default connect(function(state,props){
    console.log(".........cart summery state" , state)
    return {
        cart:state?.cart ,
        loginstatus:state?.isloggedin,
        
    }
})(CartSummery)