import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import MenuHeader from "./components/MenuHeader/MenuHeader";
import About from "./routes/About/About";

import Homepage from "./routes/Home/Home";
import Contact from "./routes/Contact/Contact";
import Footer from "./components/Footer/Footer";
import cn from "classnames";
import s from "./App.module.scss";
import database from "./service/firebase";
import GamePage from "./routes/Game/routes/Game";
import { FireBaseContext } from "./service/firebaseContext";
import Firebase from "./service/firebase";


const App = () => {
  const match = useRouteMatch("/");
  return (
    <FireBaseContext.Provider value={ new Firebase()}>
      <Switch>
        <Route path="/404" render={() => <h1>404 Not Found!</h1>} />
        <Route>
          <Route>
            <MenuHeader bgActive={!match.isExact} />
            <div
              className={cn(s.wrap, {
                [s.isHomepage]: match.isExact,
              })}
            >
              <Switch>
                <Route path="/" exact component={Homepage} />
                {/* <Route path="/home" component={Homepage} /> */}
                <Route path="/game" component={GamePage} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route render={() => <Redirect to="/404" />} />
              </Switch>
            </div>
            <Footer />
          </Route>
        </Route>
      </Switch>
    </FireBaseContext.Provider>
  );
};

export default App;
