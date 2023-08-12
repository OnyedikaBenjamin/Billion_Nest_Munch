import React from "react";
import "./about.css";
import { Parallax } from "react-parallax";
import Bar from "../../assets/bar.jpg";
import Bottles from "../../assets/bottles.jpg";
import Lounge from "../../assets/Lounge.jpg";
import { styled } from "styled-components";
import NavBar from "../../component/NavBar";
import Footer from "../footer/Footer";

const About = () => {
  return (
    <Parallax bgImage={Bar} strength={300}>
      <AboutView>
        <NavBar />
        <div className="about">
          <div className="info">
            <h3>Our Story</h3>
            <h2>Pub & Eatry Est. 2035</h2>

            <p className="text">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <p className="text">
              This is a great space to write a long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </p>
          </div>

          <div>
            <h2>We Are Open for Private Events</h2>
          </div>
        </div>
      </AboutView>
    </Parallax>
  );
};

const AboutView = styled.div`
  color: rgb(225, 208, 182);

  .about {
    margin: 2rem 5rem;

    .info {
      .text {
        font-size: 1.6rem;
        padding: 1rem 0;
        width: 40%;
        text-align: start;
      }
    }
  }
`;

export default About;
