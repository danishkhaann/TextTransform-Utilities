import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = (currentMode) => {
    setDarkMode(currentMode);
  };

  return (
    <Router>
      <div className={darkMode ? "dark" : "light"}>
        <Navbar mode={toggleMode} />
        <Switch>
          <Route path="/">
            <InputBox />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
