import React from "react";
import Slide from "react-reveal/Slide";
import { icons } from "../assets/data/data";

function About({ theme }) {
  console.log(icons);
  return (
    <Slide bottom cascade>
      <div className="about">
        <h1 class="rang">About me</h1>
        <div class="ab">
          <div class="second">
            <p style={theme}>
              Greetings, I'm Bobur I'm 25 years old and, I have experienced in
              the field of frontend as a website developer.I have been coding
              for couples of years in series of jobs.I worked as a frontend
              programmer for 3 month.
            </p>
            <br />
            <h1 class="fgh">My favourity languages</h1>
            <p id="ref" style={theme}>
              This is my favourity langugages and freamworks that i use every
              day in most of my projects
            </p>
            <div class="iconka">
              {icons.map((el) => (
                <img src={el.src} alt={el.name} title={el.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
