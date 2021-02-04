import React from "react";
import { BrowserRouter, Route, Switch,useRouteMatch } from "react-router-dom";
import MenuHeader from "./components/MenuHeader/MenuHeader";
import About from "./routes/About/About";
import GamePage from "./routes/Game/Game";
import Homepage from "./routes/Home/Home";
import Contact from "./routes/Contact/Contact";
import Footer from "./components/Footer/Footer";
// import cn from "classnames";
// import s from "./App.module.css";

const Apppp = () => {
    const match = useRouteMatch('/');
  return (
    <BrowserRouter>
    //////////////////////////
    <MenuHeader bgActive={!match.isExact}/>
      <Switch>
          
          <div>
          <Route path="/" exact component={Homepage}/>
          <Route path="/home" component={Homepage}/>
          <Route path="/game" component={GamePage}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          </div>          
          
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
};

export default Apppp;
