import React from 'react';
import './App.css';
import Menu from "./components/Menu"
import {withRouter} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header>
        <Menu/>
      </header>
    </div>
  );
}

export default withRouter(App);
