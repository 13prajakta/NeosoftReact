var Carousal1 = "slide.jpg";
var Carousal2 = "slide2.jpg";
var Carousal3 = "slide3.jpg";
var Carousal4 = "slide4.jpg";

// var ss = {
//     height: "500px",
// };

function Carousal() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" classNameName="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active carousall">
                        <img src={Carousal1} className="d-block w-100" alt="..." />                    </div>
                    <div className="carousel-item">
                        <img src={Carousal2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Carousal3} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Carousal4} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Carousal