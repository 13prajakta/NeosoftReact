import '../../css/Footer.css';
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedin, faDribbble } from '@fortawesome/free-brands-svg-icons'
function footer() {
  return (
    <div>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">prajaktacakeshopeee.herokuapp.com/ <i>CAKESHOPEE WANTS TO BE SIMPLE </i> is an initiative  to Order Cake online rather than to go to shop Physically. Cakeshoppe provides lots of cake product with simple hygin and on cheaper rate.we provide you delivery facility also with a protected and sanitised mode.</p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul class="footer-links">
                <li>Choclate Cake</li>
                <li>Vanila Cake</li>
                <li>Butterscotch Cake</li>
                <li>Blue Berry cake</li>
                <li>Red Velvate cake</li>
                <li>Fruit Cake</li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li><a href=""><Link to="/">Home</Link></a></li>
                <li><a href=""><Link to="/cart">My Cart</Link></a></li>
                <li><a href=""><Link to="/myorder">My Orders</Link></a></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by
         <a href="#"> CAKESHOPPE</a>.
            </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li><a class="facebook" href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li><a class="twitter" href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a class="dribbble" href="#"><FontAwesomeIcon icon={faDribbble} /></a></li>
                <li><a class="linkedin" href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default footer