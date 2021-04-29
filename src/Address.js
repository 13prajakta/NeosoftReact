import {useEffect , useState} from "react";
import { connect } from "react-redux"
import axios from "axios"
import { Link } from 'react-router-dom';

function Address(prop)
{   

    
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [address,setAddress]=useState("")
    const [city,setCity]=useState("")
    const [zip,setZip]=useState("")
    //const [price,setPrice]=useState("")

    const [nameErr,setNameErr]=useState("")
    const [phoneErr,setPhoneErr]=useState("")
    const [addressErr,setAddressErr]=useState("")
    const [cityErr,setCityErr]=useState("")
    const [zipErr,setZipErr]=useState("")

    const onSubmit=(e)=>{
        e.preventDefault();
        const isvalid=formValidaion();
        if(isvalid){
            // setName("");
            // setPhone("");
            // setAddress("");
            // setCity("");
            // setZip("");
        
       
        var cake=[...prop.cartdetail];
    
          //console.log("cake array",cake);
          let total = 0;
         const price=prop.cartdetail.map(item => {
            
            return  (total= total+(item.price))           
          })
          
         //total= total+(prop.cartdetail?.price)
          //console.log("price array",total)
        var detail={
            price:total,
            name:name,
            phone:phone,
            address:address,
            city:city,
            pincode:zip,
            cakes:cake   
        }
        console.log("addresss details",detail)
        prop.dispatch({
            type:"ADDRESS",
            payload:detail
        })
        
    }
}


    const formValidaion=()=>
    {
        const nameErr={};
        const phoneErr={};
        const addressErr={};
        const cityErr={};
        const zipErr={};
        let isValid=true;
        var namereg=/^[a-zA-Z_ ]*$/;
        var phonereg=/^[0-9]/;

        if(name.trim().length <3)
        {
            nameErr.nameee="Required & Name Should Be greater Than 3 Character";
            isValid=false;
            setName("")
        }else if(!namereg.test(name))
        {
            nameErr.nameee="Only Charachters allowed";
            isValid=false;
            setName("")
        }

        if(!phonereg.test(phone))
        {
            phoneErr.nameee="phone number is invalid";
            isValid=false;
            setPhone("");
        }else if(phone.trim().length >10)
        {
            phoneErr.nameee="phone number should not greater than 10";
            isValid=false;
            setPhone("");
        }


        if(address.trim().length <1)
        {
            addressErr.nameee="address is required";
            isValid=false;
            setAddress("");
        }
        if(city.trim().length <1)
        {
            cityErr.nameee="city is required";
            isValid=false;
            setCity("");
        }
        if(zip.trim().length <1)
        {
            zipErr.nameee="zip is required";
            isValid=false;
            setZip("");
        }else if(zip.trim().length >6)
        {
            zipErr.nameee="zip should not greater than 6 number";
            isValid=false;
            setZip("");
        }else if(!phonereg.test(zip))
        {
            zipErr.nameee="Only Numbers are allowed";
            isValid=false;
            setZip("");
        }

        setNameErr(nameErr);
        setPhoneErr(phoneErr);
        setAddressErr(addressErr);
        setCityErr(cityErr);
        setZipErr(zipErr);
        return isValid;
    }

    function myTime() {
        setTimeout(()=>
        { prop.history.push("/checkout/order") }
        , 2000);
      }
    
    return(
        <div>
        <h1>Address</h1>
        {/* {isaddress ? <div className="alert alert-success">Address Add Success</div> : <div></div>}
        {isaddErr ? <div></div> : <div className="alert alert-danger">Fail To Add Address</div>} */}
        {prop.loginstatus? 
        <div>
            
        <form id="addressform" onSubmit={onSubmit}>
        <div class="form-group">
                <label for="inputAddress">User Name</label>
                <input type="text" name="name" class="form-control" id="inputAddress" value={name} onChange={(e)=>{setName(e.target.value)}} />
            </div>
            <div className="form-error">
                {Object.keys(nameErr).map((key)=>{
                    return <div className="form-error">{nameErr[key]}</div>
                })}
            </div>
            <div class="form-row">
                <div class="form-group col-md-12">
                <label for="inputEmail4">Phone</label>
                <input name="phone" type="text" class="form-control" id="inputEmail4" value={phone} onChange={(e)=>{setPhone(e.target.value)}} />
                </div>
            </div>
            <div className="form-error">
            {Object.keys(phoneErr).map((key)=>{
                    return <div className="form-error">{phoneErr[key]}</div>
                })}
            </div>
            
            <div class="form-group">
                <label for="inputAddress2">Address </label>
                <input name="address" type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
            </div>
            <div className="form-error">
            {Object.keys(addressErr).map((key)=>{
                    return <div className="form-error">{addressErr[key]}</div>
                })}
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input name="city" type="text" class="form-control" id="inputCity" value={city} onChange={(e)=>{setCity(e.target.value)}} />
                <br></br>
            <div className="form-error">
            {Object.keys(cityErr).map((key)=>{
                    return <div className="form-error">{cityErr[key]}</div>
                })}
            </div>
                </div>
            
                <div class="form-group col-md-6">
                <label for="inputZip">Zip</label>
                <input name="zip" type="text" class="form-control" id="inputZip" value={zip} onChange={(e)=>{setZip(e.target.value)}} />
                <br></br>
            <div className="form-error">
            {Object.keys(zipErr).map((key)=>{
                    return <div className="form-error">{zipErr[key]}</div>
                })}
            </div>
                </div>
                
            </div>
    {prop.isadd ?<div className="alert alert-success">ORDER PLACED SUCCESSFULY</div> : null}
    {prop.isloadErr ? <div className="alert alert-danger">ORDER FAIL TO PLACE</div> : null}
    {prop.isadd ? myTime() : null}
    <button  class="btn btn-primary">Continue To Checkout</button> 
    </form>
    </div>
    :<div className="alert alert-danger">Your Session Has Been Expired !<b> Pleas Login Again</b></div>}
</div>
    )
} 
export default connect(function(state,prop){
    console.log("address state",state)
    return{
        cartdetail:state?.cart,
        loginstatus:state?.isloggedin,
        isaddress:state?.address,
        isaddErr:state?.isaddErr,
        isload:state?.isload,
        isadd:state?.isadd,
        isloadErr:state?.isloadErr
    }
})(Address)



//sir methode

// function Address()
// {   
//     var[formerrors,setFormerrors] = useState({})
//     var validate=function(elements){
//         var errors={}
//             console.log("elements received for validation",elements ,elements.name)
//             var namereg=/^[a-zA-Z_ ]*$/;
//             if(!elements.name.value){
//                 errors.name="Name is Required"
//             }else if(elements.name.value.length <= 3)
//             {
//                 errors.name="Name greater than 3 character"
//             }else if(!namereg.test(elements.name.value))
//             {
//                 errors.name="Invalid Name Only Character Allow"
//             }
//         var errorkeys=Object.keys(errors)
//         if(errorkeys.length>0)
//         return errors
//         else
//         return false
        
//     }
//     var placeOrder=function()
//     {
//         var form= document.getElementById("addressform")
//         console.log("form element in this" , form.elements ,form.controls)
//         var errors = validate(form.elements)
//         if(errors){
//             setFormerrors(errors)
//         }
//         else{
//             setFormerrors({})
//         }
//     }
    
//     return(
//         <div>
//         <h1>Address</h1>
//         <form id="addressform">
//         <div class="form-group">
//                 <label for="inputAddress">User Name</label>
//                 <input type="text" name="name" class="form-control" id="inputAddress" />
//             </div>
//             <div className="form-error">
//                 {formerrors?.name && <div>{formerrors.name}</div>}
//             </div>
//             <div class="form-row">
//                 <div class="form-group col-md-12">
//                 <label for="inputEmail4">Phone</label>
//                 <input name="phone" type="text" class="form-control" id="inputEmail4"/>
//                 </div>
//             </div>
//             <div className="form-error">
                
//             </div>
            
//             <div class="form-group">
//                 <label for="inputAddress2">Address </label>
//                 <input name="address" type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
//             </div>
//             <div className="form-error">
                
//             </div>
//             <div class="form-row">
//                 <div class="form-group col-md-6">
//                 <label for="inputCity">City</label>
//                 <input name="city" type="text" class="form-control" id="inputCity"/>
//                 <br></br>
//             <div className="form-error">
                
//             </div>
//                 </div>
            
//                 <div class="form-group col-md-6">
//                 <label for="inputZip">Zip</label>
//                 <input name="zip" type="text" class="form-control" id="inputZip"/>
//                 <br></br>
//             <div className="form-error">
               
//             </div>
//                 </div>
            
//             </div>
//     </form>
//     <button  class="btn btn-primary" onClick={placeOrder}>Continue To Checkout</button>
// </div>
//     )
// }
// export default Address

//price,name,address,city,phone,pincode,cake addcakeorder methode post
//cakeorders post  headers only