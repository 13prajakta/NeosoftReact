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
            width: 150
          },
          {
            label: 'Detail',
            field: 'detail',
            sort: 'asc',
            width: 270
          },
         
        ],
        rows: [
          {
              image:cakes.image,
              detail:cakes.name
          }
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
    return(
        <div className="container">
            { cakes?.length > 0 && cakes.map((each, index)=>{
                return(
        <div class="media">
        <img src={each.image} class="align-self-center mr-3" alt="..." style={{width:"200px",height:"200px"}}/>
        <div class="media-body">
            <label>Cake Id</label>
        <h5 class="mt-0">{each.cakeid}</h5>
          <h5 class="mt-0">{each.name}</h5>
          
          <p>{each.price} rs/-</p>
        </div>
      </div>)
      })
    }
      </div>
    )
    return (
        <MDBDataTable
          striped
          bordered
          small
          data={data}
        />
      );
}
export default Admin