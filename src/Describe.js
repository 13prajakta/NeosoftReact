import React from 'react'

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
var align={
    textAlign:"left"
}
export default class Describe extends React.Component{
    componentDidMount() {
        this.test()
     }
     test(){
         alert("ok")
     }
    render()
    {
       
        return(
            <div>
                {/* <h3 className="alert alert-info">Cake Detail Section</h3>
                <div className="media" style={style}>
                    <img src={img}  className="align-self-start mr-3" alt="..." />
                    <div className="media-body" style={align}>
                        <h1 className="mt-0 text-center">{this.props.title}</h1>
                        <h6>INGRIDIENTS:</h6>
                        <ol style={{listStyle:"square"}}>
                            <li>{this.props.ingrident.name}</li>
                            <li>{this.props.ingrident1.name}</li>
                            <li>{this.props.ingrident2.name}</li>
                        </ol>
                        <img src={veg} style={sty}  className="align-self-start mr-3" alt="..." ></img><span style={{color:"green"}}>Pure veg</span><br></br><br></br>
                        <img src={tick} style={sty1}  className="align-self-start mr-3" alt="..." ></img><span>5 Kg</span><br></br><br></br>
                        <p>Chocolate layer cake – A cake made from stacked layers of cake held together by filling. Black Forest gateau – A chocolate sponge cake with a cherry filling. Chocolate soufflé cake – A baked egg-based dish using beaten egg whites to give an aerated texture. Devil's food cake – A moist, airy, rich chocolate layer cake.</p>
                        <p style={{display:"inline-block"}}>Only At</p> <h5 style={{display:'inline-block'}}>{this.props.price}</h5>
                        <button className="btn btn-success text-center" style={{display:"block"}}>Order Now</button>
                    </div>
                    </div> */}
                     <h3 className="alert alert-info">Cake Detail Section</h3>
                <div className="media" style={style}>
                    <img src={img}  className="align-self-start mr-3" alt="..." />
                    <div className="media-body" style={align}>
                        <h1 className="mt-0 text-center">THREE TIRE CHOCOTRUFFLE CAKE</h1>
                        <h6>INGRIDIENTS:</h6>
                        <ol style={{listStyle:"square"}}>
                            <li>Cake</li>
                            <li>Cream</li>
                            <li>choco Chips</li>
                        </ol>
                        <img src={veg} style={sty}  className="align-self-start mr-3" alt="..." ></img><span style={{color:"green"}}>Pure veg</span><br></br><br></br>
                        <img src={tick} style={sty1}  className="align-self-start mr-3" alt="..." ></img><span>5 Kg</span><br></br><br></br>
                        <p>Chocolate layer cake – A cake made from stacked layers of cake held together by filling. Black Forest gateau – A chocolate sponge cake with a cherry filling. Chocolate soufflé cake – A baked egg-based dish using beaten egg whites to give an aerated texture. Devil's food cake – A moist, airy, rich chocolate layer cake.</p>
                        <p style={{display:"inline-block"}}>Only At</p> <h5 style={{display:'inline-block'}}>Rs 2000 /-</h5>
                        <button className="btn btn-success text-center" style={{display:"block"}}>Order Now</button>
                    </div>
                    </div>
            </div>
        )
    }
}

// export default Describe