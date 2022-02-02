import responsive from "../images/responsive.png";
import twitter from "../images/twitter.png";
import airbnb from "../images/airbnb.png";
import redux from "../images/redux.png";
import movie from "../images/movie.png";
import mers from "../images/mers.png";
import spa from "../images/spa.png";

import reduxx from "../images/redux.svg";
import js from "../images/js-format.svg";
import html from "../images/html-5.svg";
import react from "../images/react.svg";
import css from "../images/css.svg";

export const works = [
  {
    id: 1,
    name: "Single page app",
    desc: "Single page app created with html css react",
    src: spa,
    git: "https://github.com/Bobur96",
    link: "https://spa-project.netlify.app/",
    aos: ["right", "left"],
  },
  {
    id: 2,
    name: "Twitter analog",
    desc: "twitter analog created with html css react",
    src: twitter,
    git: "https://github.com/Bobur96",
    link: "https://twitter-analog-app.netlify.app/",
    reverse: "row-reverse",
    aos: ["left", "right"],
  },
  {
    id: 3,
    name: "Redux project",
    desc: "Redux project created with html css react redux json-server",
    src: redux,
    git: "https://github.com/Bobur96",
    link: "https://redux-pro.netlify.app/",
    aos: ["right", "left"],
  },
  {
    id: 4,
    name: "Movie app",
    desc: "Movie app created with html css react",
    src: movie,
    git: "https://github.com/Bobur96",
    link: "https://react-movie-ap.netlify.app/",
    reverse: "row-reverse",
    aos: ["left", "right"],
  },
  {
    id: 5,
    name: "Mers project",
    desc: "Mers project created with html css js.",
    src: mers,
    git: "https://github.com/Bobur96",
    link: "https://mers-project.netlify.app",
    aos: ["right", "left"],
  },
  {
    id: 6,
    name: "Airbnb site",
    desc: "Airbnb site created with html css js",
    src: airbnb,
    git: "https://github.com/Bobur96",
    link: "https://b-airbnb-site.netlify.app/",
    reverse: "row-reverse",
    aos: ["left", "right"],
  },
  {
    id: 7,
    name: "Responsive template site",
    desc: "responsive template site created with html css js.",
    src: responsive,
    git: "https://github.com/Bobur96",
    link: "https://responsive-template-site.netlify.app/",
    aos: ["right", "left"],
  },
];

export const icons = [
  {
    id: "1",
    name: "Html",
    src: html,
    percent: "80%",
  },
  {
    id: "2",
    name: "Css",
    src: css,
    percent: "85%",
  },
  {
    id: "3",
    name: "JavaScript",
    src: js,
    percent: "85%",
  },
  {
    id: "4",
    name: "React",
    src: react,
    percent: "75%",
  },
  {
    id: "5",
    name: "Redux",
    src: reduxx,
    percent: "65%",
  },
  {
    id: "6",
    name: "Node",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    percent: "70%",
  },
];
