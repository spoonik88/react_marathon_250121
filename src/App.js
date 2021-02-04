import React, { useState } from "react";
import "./App.css";
import GamePage from "./routes/Game/Game";
import Homepage from "./routes/Home/Home";

const App = () => {
  const [page, setPage] = useState("app");

  const handleChangePage = (page) => {    
    
    setPage(page)
  }

  switch (page) {
    case "app":
      return <Homepage onChangePage={handleChangePage} />;
    case "game":
      return <GamePage onChangePage={handleChangePage}/>;
      default:
        return <Homepage/>
  }
};

export default App;
