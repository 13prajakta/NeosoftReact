import { useEffect, useState } from "react";
import { connect } from "react-redux"
import axios from "axios"
import { Link } from 'react-router-dom';
import { validate } from '../../../util/validate.js';

function Address(prop) {
    let [updateaddress, setUpdateAddress] = useState(true)
    let [errors, setErrors] = useState({})

    const onSubmit = (e) => {
        e.preventDefault();
        let fields=e.target.elements
        let error =validate(fields)
        if(Object.keys(error).length>0){
            setErrors(error)
        }
        else{
            let total = 0;
            const price = prop.cartdetail.map(item => {

                return (total = total + (item.price))
            })

            var detail = {
                price: total,
                name: fields.name.value,
                phone: fields.phone.value,
                address: fields.address.value,
                city: fields.city.value,
                pincode: fields.pincode.value,
            }
            console.log("addresss details", detail)
            prop.dispatch({
                type: "PERMADD",
                payload: detail
            }); setUpdateAddress(false);
            alert("ADDRESS ADDED SUCCESSFULY")

            prop.dispatch({
                type: "UPDATEADDRESS",
                payload: updateaddress
            })
        }
        
    }


    
    function myAddress() {
        setTimeout(() => {
            prop.history.push("/checkout/payment");
            prop.dispatch({
                type: "UPDATEADDRESS",
                payload: false
            })
            prop.dispatch({
                type: "UPDATEASIDE",
                payload: true
            })
        }, 1000)
    }
    return (
        <div>
            <h1>Address</h1>
            {prop.loginstatus ?
                <div>

                    <form id="addressform" onSubmit={onSubmit}>
                        <div class="form-group">
                            <label for="inputAddress">User Name</label>
                            <input type="text" name="name" class="form-control" id="inputAddress"  />
                        </div>
                        {errors.name ? <span  className="text-danger">{errors.name}</span> : null}
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="inputEmail4">Phone</label>
                                <input name="phone" type="text" class="form-control" id="inputEmail4"  />
                            </div>
                        </div>
                        {errors.phone ? <span  className="text-danger">{errors.phone }</span> : null}

                        <div class="form-group">
                            <label for="inputAddress2">Address </label>
                            <input name="address" type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"  />
                        </div>
                        {errors.address ? <span  className="text-danger">{errors.address }</span> : null}
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputCity">City</label>
                                <input name="city" type="text" class="form-control" id="inputCity"  />
                                <br></br>
                                {errors.city ? <span  className="text-danger">{errors.city }</span> : null}
                            </div>

                            <div class="form-group col-md-6">
                                <label for="inputZip">Zip</label>
                                <input name="pincode" type="text" class="form-control" id="inputZip"  />
                                <br></br>
                                {errors.pincode ? <span  className="text-danger">{errors.pincode }</span> : null}
                            </div>
                        </div>
                        {prop.updateaddress ? <div className="alert alert-success">ADDRESS ADDED SUCCESSFULY</div> : null}
                        {prop.updateaddress ? myAddress() : null}
                        <button class="btn btn-primary">Continue To Checkout</button>
                    </form>
                </div>
                : <div className="alert alert-danger">Your Session Has Been Expired !<b> Pleas Login Again</b></div>}
        </div>
    )
}
export default connect(function (state, prop) {
    console.log("address state", state)
    return {
        cartdetail: state?.cart,
        loginstatus: state?.isloggedin,
        isaddress: state?.address,
        isaddErr: state?.isaddErr,
        isload: state?.isload,
        isadd: state?.isadd,
        isloadErr: state?.isloadErr,
        updateaddress: state?.updateaddress,
        isloading: state?.isloading
    }
})(Address)

