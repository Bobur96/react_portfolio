import React from "react";
import { icons } from "../assets/data/data";

function Skills({ theme }) {
  return (
    <div class="skills" data-aos="fade-up" data-aos-duration="1000">
      <h1 class="rang">My Skills </h1>
      <div class="inbox">
        <div class="birs">
          {icons.map((el) => (
            <div class="skil wow animate__animated animate__fadeInLeft animate__delay-2s">
              <div class="progres">
                <h3 style={theme}>{el.name}</h3>
                <div class={`line${el.id}`}></div>
              </div>
              <p class="percent" style={theme}>
                {el.percent}
              </p>
            </div>
          ))}
        </div>

        <div class="ikkis">
          <div class="lk">
            <div class="progress-circle over50 p77 wow animate__animated animate__tada animate__delay-2s">
              <span>77%</span>
              <div class="left-half-clipper">
                <div class="first50-bar"></div>
                <div class="value-bar"></div>
              </div>
            </div>
            <center>
              <p style={theme}>Communication</p>
            </center>
          </div>

          <div class="lk">
            <div class="progress-circle over50 p50 wow animate__animated animate__tada animate__delay-2s">
              <span>50%</span>
              <div class="left-half-clipper">
                <div class="first50-bar"></div>
                <div class="value-bar"></div>
              </div>
            </div>
            <center>
              <p style={theme}>Teamwork</p>
            </center>
          </div>

          <div class="lk">
            <div class="progress-circle over50 p70 wow animate__animated animate__tada animate__delay-2s">
              <span>70%</span>
              <div class="left-half-clipper">
                <div class="first50-bar"></div>
                <div class="value-bar"></div>
              </div>
            </div>
            <center>
              <p style={theme}>Creativity</p>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
