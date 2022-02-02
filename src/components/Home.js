import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import youtobe from "../assets/images/linkedin.png";
import telegram from "../assets/images/telegram.png";
import instagram from "../assets/images/instagram.png";
import github from "../assets/images/github.png";
import Reveal from "react-reveal/Reveal";
import Bounce from "react-reveal/Bounce";

function Home({ theme }) {
  return (
    <div class="home" style={theme}>
      <div class="left">
        <Reveal effect="animText" duration="1000">
          <h1 style={{ color: "yellow" }}>Hello,I'm Bobur</h1>
          <p>
            25 y.o Frontend Developer from Uzbekistan, Namangan region. Welcome
            to my simple website
          </p>
        </Reveal>
        <div class="fk">
          <a href="https://github.com/Bobur96">
            <button className="whitebutton">About Me</button>
          </a>

          <Link to="/portfolio">
            <button class="yellow">Portfolio</button>
          </Link>
        </div>

        <div class="icon">
          <a href="https://github.com/Bobur96">
            <img id="first" src={github} alt="" />
          </a>
          <a href="https://www.instagram.com/usmonkhujayev_oo1/">
            <img src={instagram} alt="" />
          </a>
          <a href="https://t.me/usmonkhujayev_ooo1">
            <img src={telegram} alt="" />
          </a>
          <a href="#!">
            <img id="last" src={youtobe} alt="" />
          </a>
        </div>
      </div>

      <Bounce>
        <div class="right">
          <div class="rasm"></div>
        </div>
      </Bounce>
    </div>
  );
}

export default Home;
