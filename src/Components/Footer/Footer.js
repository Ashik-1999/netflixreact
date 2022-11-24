import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div>
        
      <div className="footer">
      <hr/>
        
       
        <div className="contain">
       
        
          <div className="col">
            
            <ul>
              <li>FAQ</li>
              <li>Inverstor Relations</li>
              <li>Privacy</li>
              <li>Speed Test</li>
              
            </ul>
          </div>
          <div className="col">
          
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
              <li>Legal Notices</li>
              
            </ul>
          </div>
          <div className="col">
            
            <ul>
              <li>Account</li>
              <li>Ways to Watch</li>
              <li>Corporate Information</li>
              <li>Only on Netflix</li>
              
            </ul>
          </div>
          <div className="col">
          
            <ul>
              <li>Media Center</li>
              <li>Terms of Use</li>
              <li>WHOIS lookup</li>
              <li>Contact Us</li>
            </ul>
          </div> 
          <div className="clearfix"></div>
        </div>
        <hr />
        <div>
            <h5 style={{color:"white",textAlign:"center"}}>CopyrightⒸ Netflix India  </h5>
            <h5 style={{color:"white",textAlign:"left", padding:10}}>Questions? Call 000-800-040-1843</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
