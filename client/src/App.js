import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Router exact path="/" component={Search} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
