import axios from 'axios'
import { useEffect, useState } from "react";
import { MDBDataTable } from 'mdbreact';
import '../../../css/pagination.css';
import ReactPaginate from "react-paginate"
function Admin() {
  let [cakes, setcakes] = useState([])
  //console.log("admin",cakes);

  let [loading, setLoading] = useState(false)
  let allcakesapi = process.env.REACT_APP_BASE_URL + "/api/allcakes"
  console.log("my all cake api",allcakesapi)
  useEffect(() => {
    axios({
      url: allcakesapi,
      method: "get",
    }).then((response) => {
      console.log("response from all cakes  api", response.data)
      setcakes(response.data.data)
    }, (error) => {
      console.log("error from all cakes api", error)
    }); setLoading(true)
  }, [])
  const [pageNumber, setpageNumber] = useState(0)
  const cakesPerPage = 10
  const pagesVistited = pageNumber * cakesPerPage
  const displayCakes = cakes.slice(pagesVistited, pagesVistited + cakesPerPage)
    .map((cakes) => {
      return (
        <div className="container">

          <div class="media">
            <img src={cakes.image} class="align-self-center mr-3" alt="..." style={{ width: "200px", height: "200px" }} />
            <div class="media-body">
              <label>Cake Id</label>
              <h5 class="mt-0">{cakes.cakeid}</h5>
              <h5 class="mt-0">{cakes.name}</h5>

              <p>{cakes.price} rs/-</p>
            </div>
          </div>

        </div>
      );
    });

  const pageCount = Math.ceil(cakes.length / cakesPerPage)
  const changePage = ({ selected }) => {
    setpageNumber(selected)
  }
  return (
    <div className="container">
      {displayCakes}
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  )
  // return (
  //   <div className="App">
  //     <MDBDataTable striped bordered small data={data} />
  //   </div>
  // );
}
export default Admin