import React from "react";
import "./footer.css";
import { Parallax } from "react-parallax";

const Footer = () => {
  return (
    <Parallax strength={300} className="container">
      <div className="upper-div">
        <div className="one">The Whale's Tail</div>
        <div className="two">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Yelp</li>
        </div>
        <div className="three">
          <p>
            info@mysite.com <br />
            123-456-7890
          </p>
          <p>
            500 Terry Francis Street <br /> San Francisco, CA 94158
          </p>
        </div>
      </div>
      <div className="lower-div">
        <div className="four"></div>
        <div className="five">
          <p className="sub">
            Subscribe and get notified <br />
            about special events
          </p>
          <form action="">
            <label htmlFor="email">Email*</label>
            <br />
            <br />
            <input type="text" className="email-input" />
          </form>
          <button className="sub-button">Subscribe</button>
        </div>
        <div className="six">
          <div className="copyright">
            &copy;2035 by The Whale's Tale. <br />
            Powered and secured by <span>Wix</span>
          </div>
        </div>
        <div className="seven"></div>
      </div>
    </Parallax>
  );
};

export default Footer;
