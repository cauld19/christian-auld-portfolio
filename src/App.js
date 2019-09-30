import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main"
import {Route, Link} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import './App.css';

function App() {


  return (



    <div className="App">
      <Header />
      <Route exact path="/" component={Main} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact}/>
        
        
    </div>
  );
}

export default App;
