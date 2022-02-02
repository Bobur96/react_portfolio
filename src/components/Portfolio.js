import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import gitt from "../assets/images/github1.png";
import linkk from "../assets/images/link.png";
import { works } from "../assets/data/data";

function Portfolio() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="portfolio">
      <h1 class="rang"> My Works</h1>
      {works.map((el) => (
        <div class="box lightbox" style={{ flexDirection: el.reverse }}>
          <div
            data-aos={`fade-${el.aos[0]}`}
            data-aos-duration="700"
            class="project"
          >
            <h1>{el.name}</h1>
            <p>{el.desc}</p>
            <div class="btn">
              <a href={el.git}>
                <button class="m1">
                  Source <img src={gitt} alt="" />
                </button>
              </a>
              <a href={el.link}>
                <button class="yellow">
                  Link <img src={linkk} alt="" />
                </button>
              </a>
            </div>
          </div>
          <div
            data-aos={`fade-${el.aos[1]}`}
            data-aos-duration="700"
            class="rasm"
          >
            <img src={el.src} alt="rasm" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
