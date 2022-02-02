import { BrowserRouter, Route, Switch } from "react-router-dom";
import { darkTheme, lightTheme } from "./components/Theme";
import Portfolio from "./components/Portfolio";
import mon from "./assets/images/moon.png";
import sun from "./assets/images/sun.png";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Skills from "./components/Skills";
import About from "./components/About";
import Error from "./components/Error";
import Home from "./components/Home";
import { useState } from "react";
import "./index.css";

function App() {
  const [image, setImage] = useState(sun);
  const [theme, setTheme] = useState(darkTheme);
  const [moon, setMoon] = useState(true);
  const changeColor = () => {
    setMoon(!moon);
    moon ? setImage(mon) : setImage(sun);
    moon ? setTheme(lightTheme) : setTheme(darkTheme);
  };
  return (
    <BrowserRouter>
      <div className="app" style={theme}>
        <Header changeColor={changeColor} theme={theme} image={image} />
        <main className="main" style={theme}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/about">
              <About theme={theme} />
            </Route>
            <Route path="/skills">
              <Skills theme={theme} />
            </Route>
            <Route path="*" component={Error} />
          </Switch>
        </main>
        <Footer theme={theme} />
      </div>
    </BrowserRouter>
  );
}

export default App;
