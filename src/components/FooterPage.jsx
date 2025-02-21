import React from 'react'
import {Link} from 'react-router-dom';

   const Footer = () => {
   return (
    <footer >
      <div className="footerContainer">
        <div className="socialIcons">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-google-plus"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
        <div className="footerNav">
          <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/aboutus">About</Link></li>
            <li><Link to = "/certificate">Certificate</Link></li>
            <li><Link to = "/features">Features</Link></li>
            <li><Link to = "/reviews">Reviews</Link></li>
            <li><Link to = "/policy">Policy</Link></li>
            <li><Link to = "/contactus">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        <p>
          Copyright &copy;2025; Designed by <span className="designer">Creative learning</span>
        </p>
      </div>
    </footer>
  );
}

 export default Footer