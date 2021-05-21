import { Link, useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'
import { orderdetail } from "../../reduxstore/thunk";
import '../../css/commoncss.css';
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Nav(prop) {

    const history = useHistory();

    var searchdata = {}
    var [searchdata, setSearch] = useState({})
    let [error, setError] = useState()


    // let [cartdetail,setCart]=useState([])
    //var token = localStorage.token
    // var token = prop.tokenn
    // var tokennn = localStorage.token
    var token = {}
    if (prop.tokenn) {
        token = prop.tokenn
    } else {
        token = localStorage.token
    }
    console.log("login after login storage token", token)
    //console.log("login local storage token",tokennn)
    useEffect(() => {
        prop.dispatch(orderdetail())
        let allcartdetailapi = process.env.REACT_APP_BASE_URL + "/api/cakecart"

        axios({
            url: allcartdetailapi,
            method: "post",
            headers: {
                authtoken: token
            }
        }).then((response) => {
            console.log("response from  cart details  api", response.data)
            //setCart(response.data.data)
            prop.dispatch({
                type: "CARTDETAIL",
                payload: response.data.data
            })
            prop.dispatch({
                type: "CARTUPDATE",
                payload: true
            })
        }, (error) => {
            console.log("error from cart details api", error)
        })
    }, [prop.cartcheck, token, prop.isloading, prop.loginstatus])


    function searchChange(evt) {
        console.log("new value", evt.target.value);
        setSearch({
            datasearch: evt.target.value

        })
        searchdata.searchh = evt.target.value
    }
    console.log("searchdatabbbbbb", searchdata)
    let search = function (event) {
        //increasecount++
        event.preventDefault()
        console.log("search going", event)
        alert("hello")
    }
    let logout = function (event) {
        event.preventDefault()
        prop.dispatch({
            type: "LOGOUT"
        })

    }
    let searchbut = function (e) {
        if (!searchdata) {
            setError("please fill something")
        }
        else {
            setError("")

        }
    }
    //const leng = prop.cart?.length;
    //const length = array.length;
    //console.log("length of array",array)
    //console.log("length of array",array)
    return (
        <div>
            {/* {increasecount} */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/"><a class="navbar-brand logo" href="#">CAKE <span className="text-warning">SHOPPE</span></a>
                </Link><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        {/* <li class="nav-item active">
                    <Link to="/"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></Link>
                </li>   */}

                        <li class="nav-item">
                            {prop.user &&
                                <a class="nav-link disabled namee" href="#" tabindex="-1" aria-disabled="true" style={{ color: "#ff557f" }}>Welcome, {prop.user}</a>
                            } </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="text" onChange={searchChange} placeholder="Search" aria-label="Search"></input>
                        <br></br><p className="text-danger">{error}</p>
                        <Link to={`/search?q=${searchdata.datasearch}`}> <button class="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={searchbut}><FontAwesomeIcon icon={faSearch} /></button>&nbsp;
                </Link> {/* <button onClick={search} class="btn btn-outline-success my-2 my-sm-0">Search</button> */}
                        {
                            prop.loginstatus ? <div>
                                <Link to="/cart"><button className="btn btn-warning"><FontAwesomeIcon icon={faShoppingCart} /> <span class="badge badge-light">{prop.cart?.length}</span></button></Link>&nbsp;
               <Link to="/myorder"><button className="btn btn-info"><FontAwesomeIcon icon={faListAlt} /> My Orders <span class="badge badge-light">{prop.orders?.length}</span></button></Link>&nbsp;
               <button className="btn btn-danger" onClick={logout}>Logout</button> </div>
                                : <Link to="/login"><button className="btn btn-success">Login</button></Link>
                        }

                    </form>

                </div>
            </nav>
        </div>
    )
}
//mapstatetoprops
export default connect(function (state, props) {
    console.log("............navbar sttae", state)
    return {
        user: state?.user?.name,
        loginstatus: state?.isloggedin,
        cartcheck: state?.setcheckCart,
        cart: state?.cart,
        tokenn: state?.user?.token,
        isloading: state?.isloading,
        orders: state?.orders,
    }
})(Nav)