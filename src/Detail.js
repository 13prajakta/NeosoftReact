import React from 'react'
import axios from 'axios'
import Cakes from './Data';
import Card from './Card';
import {useEffect , useState} from "react";
import { connect } from "react-redux";
import {useParams,Link} from "react-router-dom";
import { BrowserRouter as Router , Route ,Redirect ,Switch} from 'react-router-dom';


var img="cake.jpg";
var veg="veg.png";
var tick="tick.png";
var sty={
    width: "30px",
    height: "20px"
}
var sty1={
    width: "30px",
    height: "30px"
}
var style={
    padding: "20px",
    backgroundColor: "#e2e2e2"
}
var apgn={
    textApgn:"center"
}
 function Detail (prop){

    let [cakeDetails,setCakes]=useState([])
    let  params= useParams()
    console.log("params are" , params)
    
    var cartAdd = {}
    var[cartAdd , setAddcart] = useState({})
   
    
    // console.log("cake api details",allcakedetailapi)
            useEffect(()=>{
                let allcakedetailapi="https://apifromashu.herokuapp.com/api/cake/"+params.cakeid
                axios({
                url:allcakedetailapi,
                method:"get"
                
            }).then((response)=>{
                console.log("response from  cake details  api" ,response.data)
                setCakes(response.data.data)
            },(error)=>{
                console.log("error from cake details api",error)
            })
            },[])
          
            var addCart = function(){
               
                var cartdetail={
                    cakeid:cakeDetails.cakeid, 
                    image:cakeDetails.image,
                    name:cakeDetails.name,
                    price:cakeDetails.price, 
                    weight:cakeDetails.weight     
                }
                console.log("added cake details" ,cartdetail)
                var token = localStorage.token
                let cartapi="https://apifromashu.herokuapp.com/api/addcaketocart"
                axios({
                    url:cartapi,
                    method:"post",
                    data:cartdetail,
                    headers:{
                        authtoken:token
                      } 
                }).then((response)=>{
                    console.log("response from add to cart api" , response.data)
                    //alert(response.data)
                    //setAddcart(response.data.data)
                    prop.dispatch({
                        type:"CARTUPDATE",
                        payload:false
                    })
                   prop.history.push("/cart");

                    
                },(error)=>{
                    console.log("error from add to cart api" , error)
                })
            }
            
        return(
            <div>
                {/* <h3 className="alert alert-info">Cake Detail Section</h3>
                <div className="media" style={style}>
                    <img src={img}  className="apgn-self-start mr-3" alt="..." />
                    <div className="media-body" style={apgn}>
                        <h1 className="mt-0 text-center">{this.props.title}</h1>
                        <h6>INGRIDIENTS:</h6>
                        <ol style={{pstStyle:"square"}}>
                            <p>{this.props.ingrident.name}</p>
                            <p>{this.props.ingrident1.name}</p>
                            <p>{this.props.ingrident2.name}</p>
                        </ol>
                        <img src={veg} style={sty}  className="apgn-self-start mr-3" alt="..." ></img><span style={{color:"green"}}>Pure veg</span><br></br><br></br>
                        <img src={tick} style={sty1}  className="apgn-self-start mr-3" alt="..." ></img><span>5 Kg</span><br></br><br></br>
                        <p>Chocolate layer cake – A cake made from stacked layers of cake held together by filpng. Black Forest gateau – A chocolate sponge cake with a cherry filpng. Chocolate soufflé cake – A baked egg-based dish using beaten egg whites to give an aerated texture. Devil's food cake – A moist, airy, rich chocolate layer cake.</p>
                        <p style={{display:"inpne-block"}}>Only At</p> <h5 style={{display:'inpne-block'}}>{this.props.price}</h5>
                        <button className="btn btn-success text-center" style={{display:"block"}}>Order Now</button>
                    </div>
                    </div> */}
                     <h3 className="alert alert-info">Cake Detail Section</h3>
                <div className="media" style={style}>
                    <img src={cakeDetails.image} style={{height:"500px",width:"500px"}} className="apgn-self-start mr-3" alt="..." />
                    <div className="media-body" style={apgn}>
                        <h1 className="mt-0 text-center">{cakeDetails.name}</h1>
                        <h6>INGRIDIENTS:</h6>
                        <ol style={{pstStyle:"square"}}>
                            <p>Cake</p>
                            <p>Cream</p>
                            <p>choco Chips</p>
                        </ol>
                        <h5>Food type</h5>
                        <span style={{color:"green",fontStyle:"itapc"}}>Pure veg</span><br></br><br></br>
                        <h5>Weight</h5>
                        <span className="text-info">{cakeDetails.weight} Kg</span><br></br><br></br>
                        <h5>Type: <br></br>
                        <p className="text-warning" style={{fontStyle:"itapc"}}><b>{cakeDetails.type}</b></p></h5>
                        <p>{cakeDetails.description}</p>
                        <p> Only At <b> Rs {cakeDetails.price} /-</b></p>
                        {
                           prop.loginstatus ?
                        <div><button className="btn btn-success text-center" onClick={addCart}>ADD TO CART</button></div>
                    :<Link to="/login"><button className="btn btn-warning">Login For add To Cart</button></Link>}
                        </div>
                    </div>
            </div>
        )
  
}


export default connect(function(state,props){
    console.log("...........from detail add to cart page" , state)
    return {
        loginstatus:state?.isloggedin,
        cart:state?.cart  
    }
})(Detail)