import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./global.css";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CollectPoint from "./pages/CollectPoint";
import About from "./pages/About";
import Book from "./pages/Book";

import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/collect_point" component={CollectPoint} />
          <Route exact path="/book" component={Book} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
