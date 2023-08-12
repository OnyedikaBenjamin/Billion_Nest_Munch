import React, { useState } from "react";
import { Parallax } from "react-parallax";
import Bottles from "../../assets/bottles.jpg";
import "./homeStyled.css";
import styles from "./home.module.scss";
import { Button, Text } from "@mantine/core";
import SideBarButton from "../../component/SideBarButton";
import Footer from "../footer/Footer";
import Logo from "../../assets/Logo.png";
import { Navigate, useHistory, useNavigate } from "react-router-dom";
import Lounge from "../../assets/Lounge.jpg";
import TheNest from "../../assets/The-Nest-Lounge.jpg";
import Nest from "../../assets/The nest.jpg";
import Bar from "../../assets/food.jpeg";
import Sparkle from "../../assets/sparkle.png";
import NavBar from "../../component/NavBar";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };
  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/reserve");
  }

  return (
    <>
      <Parallax strength={300} bgImage={TheNest} style={{ height: "100vh" }}>
        <NavBar />
      </Parallax>

      <Parallax strength={300} bgImage={Bottles}>
        <div className={styles.container2}>
          <header>
            <Text size={"24px"} mb={20}>
              Make Yourself at Home
            </Text>

            <div>
              <Text size={"44px"}>ENJOY PREMIUM DRAFT BEER, GOOD</Text>
              <Text size={"44px"}>WINES, AND OUR HEARTFUL DISHES</Text>
            </div>
          </header>
          <main>
            <div className={styles.up}>
              <div className={styles.div}>
                <Text w={"100%"} align="left">
                  Welcome to our Lounge!!! <br /> Weather you're planning a
                  casual hangout with friends or a special celebration,our
                  lounge offers the perfect ambiance for a memorable
                  experience.To ensure a seamless experience,we recommend
                  booking a table in advance.
                </Text>
                <Button
                  radius={0}
                  variant="outline"
                  color="dark"
                  size="lg"
                  onClick={handleSubmit}
                >
                  Book a table
                </Button>
              </div>
            </div>
            <div className={styles.down}>
              <div
                className={styles.bar}
                style={{
                  color: "rgb(225, 208, 182)",
                  paddingTop: "5%",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  paddingLeft: "6%",
                  fontWeight: "lighter",
                }}
              >
                <Text style={{ marginRight: "40%", fontSize: "22px" }}>
                  Hello, Neighbour
                </Text>
                <Text style={{ fontSize: "42px", marginTop: "15px" }}>
                  Happy Hour
                </Text>
                <Text style={{ marginTop: "10px" }}>
                  12PM-3PM Monday-Thursday
                </Text>
              </div>
            </div>
          </main>
        </div>
      </Parallax>
      <Parallax strength={300} bgImage={Bottles}>
        <div className={styles.container3}>
          <div className={styles.up}></div>
          <div className={styles.down}></div>
        </div>
      </Parallax>

      <div>
        <div className="bookatable">
          <div className="topoval">
            <img className="sparkle" src={Sparkle}></img>
            <div className="reservation-but">
              <a className="reserve-text" href="/Reserve">
                Book A Table
              </a>
            </div>
          </div>
          <div className="middlecilinder">
            <div className="address-div">Address</div>
            <text>1A, Hughes Avenue, Yaba Lagos.</text>
          </div>
          <div className="bottomoval"></div>
          <div className="opening-hours">
            <div className="heading">Opening Hours</div>
            <div className="open-time">Monday - Sunday 8am-1pm</div>
            <div>08012345678</div>
            <img className="down-sparkle" src={Sparkle}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
