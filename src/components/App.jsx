import React from "react";
import WatchListContextProvider from "../contexts/TaskListContext";
import WatchList from "./WatchList";
import WatchForm from "./WatchForm";

import "../App.css";
import Header from "./Header";

const App = () => {
  return (
    <WatchListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <WatchForm />
            <WatchList />
          </div>
        </div>
      </div>
    </WatchListContextProvider>
  );
};

export default App;
