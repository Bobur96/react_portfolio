import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Reveal from "react-reveal/Reveal";
import { useState } from "react";
import "../index.css";

function Header({ theme, image, changeColor }) {
  const [mmenu, setMmenu] = useState(false);
  const [mobil, setMobil] = useState("");
  const [change, setChange] = useState("");
  const changeMenu = () => {
    mmenu ? setMobil("") : setMobil(" show");
    mmenu ? setChange("") : setChange(" change");
    setMmenu(!mmenu);
    console.log(change);
  };
  return (
    <div class="header" style={theme}>
      <nav>
        <Reveal effect="animText1" duration="1000">
          <h2 style={theme}>
            Usmonxo'jayev <span>B</span>
          </h2>
        </Reveal>

        <div class="moden">
          <img
            onClick={changeColor}
            className="mode mob"
            src={image}
            alt={theme}
          />
          <div class={`menubar ${change}`} onClick={changeMenu}>
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
        </div>

        <Reveal effect="animText1" duration="1000">
          <ul>
            <li>
              <Link to="/" style={theme}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/portfolio" style={theme}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/about" style={theme}>
                About
              </Link>
            </li>
            <li>
              <Link to="/skills" style={theme}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="#" id="fq">
                FAQs
              </Link>
            </li>
            <img
              onClick={changeColor}
              className="mode"
              src={image}
              alt={theme}
            />
          </ul>
        </Reveal>
      </nav>
      <div class={`mmenu${mobil}`}>
        <ul>
          <li>
            <Link to="/" style={theme}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/portfolio" style={theme}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/about" style={theme}>
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" style={theme}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="#" id="fq">
              FAQs
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
