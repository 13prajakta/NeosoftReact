import axios from 'axios'
import {useEffect , useState} from "react";
import { MDBDataTable } from 'mdbreact';
function Admin(){
    let [cakes,setcakes]=useState([])

    const data = {
        columns: [
          {
            label: 'Image',
            field: 'image',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Cake Id',
            field: 'cakeid',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Name',
            field: 'name',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Price',
            field: 'price',
            sort: 'asc',
            width: 200
          },
         
        ],
        rows: [
          {
            image: "Cedric Kelly",
            name: "Senior Javascript Developer",
            cakeid: "Edinburgh",
            price: "2012/03/29",
          },
          {
            image: "Airi Satou",
            name: "Accountant",
            cakeid: "Edinburgh",
            price: "2008/11/28",
          },
          {
            image: "Brielle Williamson",
            name: "Integration Specialist",
            cakeid: "New York",
            price: "2012/12/02",
          },
          {
            image: "Brielle Williamson",
            name: "Integration Specialist",
            cakeid: "New York",
            price: "2012/12/02",
          },
          {
            image: "Brielle Williamson",
            name: "Integration Specialist",
            cakeid: "New York",
            price: "2012/12/02",
          },
          {
            image: "Brielle Williamson",
            name: "Integration Specialist",
            cakeid: "New York",
            price: "2012/12/02",
          },
          {
            image: "Brielle Williamson",
            name: "Integration Specialist",
            cakeid: "New York",
            price: "2012/12/02",
          },
          {
            image: "Brielle Williamson",
            name: "Integration Specialist",
            cakeid: "New York",
            price: "2012/12/02",
          },
          {
            image: "Brielle Williamson",
            name: "Integration Specialist",
            cakeid: "New York",
            price: "2012/12/02",
          },
          {
            image: "Brielle Williamson",
            name: "Integration Specialist",
            cakeid: "New York",
            price: "2012/12/02",
          },
          {
            image: "Brielle Williamson",
            name: "Integration Specialist",
            cakeid: "New York",
            price: "2012/12/02",
          },
          {
            image: "Brielle Williamson",
            name: "Integration Specialist",
            cakeid: "New York",
            price: "2012/12/02",
          },
          {
            image: "Brielle Williamson",
            name: "Integration Specialist",
            cakeid: "New York",
            price: "2012/12/02",
          },
          {
            image: "Brielle Williamson",
            name: "Integration Specialist",
            cakeid: "New York",
            price: "2012/12/02",
          },
          {
            image: "Brielle Williamson",
            name: "Integration Specialist",
            cakeid: "New York",
            price: "2012/12/02",
          },
          {
            image: "Brielle Williamson",
            name: "Integration Specialist",
            cakeid: "New York",
            price: "2012/12/02",
          },
          {
            image: "Brielle Williamson",
            name: "Integration Specialist",
            cakeid: "New York",
            price: "2012/12/02",
          },
          {
            image: "Brielle Williamson",
            name: "Integration Specialist",
            cakeid: "New York",
            price: "2012/12/02",
          },
          {
            image: "Brielle Williamson",
            name: "Integration Specialist",
            cakeid: "New York",
            price: "2012/12/02",
          },
          {
            image: "Brielle Williamson",
            name: "Integration Specialist",
            cakeid: "New York",
            price: "2012/12/02",
          },
          {
            image: "Brielle Williamson",
            name: "Integration Specialist",
            cakeid: "New York",
            price: "2012/12/02",
          },
        ]
      };
    


    let [loading,setLoading]=useState(false)
    let allcakesapi="https://apibyashu.herokuapp.com/api/allcakes"
            useEffect(()=>{
                axios({
                url:allcakesapi,
                method:"get",
            }).then((response)=>{
                console.log("response from all cakes  api" ,response.data)
                setcakes(response.data.data)
            },(error)=>{
                console.log("error from all cakes api",error)
            });setLoading(true)
            },[])
    // return(
    //     <div className="container">
    //         { cakes?.length > 0 && cakes.map((each, index)=>{
    //             return(
    //     <div class="media">
    //     <img src={each.image} class="align-self-center mr-3" alt="..." style={{width:"200px",height:"200px"}}/>
    //     <div class="media-body">
    //         <label>Cake Id</label>
    //     <h5 class="mt-0">{each.cakeid}</h5>
    //       <h5 class="mt-0">{each.name}</h5>
          
    //       <p>{each.price} rs/-</p>
    //     </div>
    //   </div>)
    //   })
    // }
    //   </div>
    // )
    return (
      <div className="App">
        <MDBDataTable striped bordered small data={data} />
      </div>
    );
}
export default Admin