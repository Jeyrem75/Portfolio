import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import School from "./School";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          {/* <ul className="header">
            <li><div className="icon"><i class="fa fa-home fa-2x" aria-hidden="true"></i></div><div className="titleMenu"><Link to="#home">Accueil</Link></div></li>
            <li><div className="icon"><i class="fa fa-info-circle fa-2x" aria-hidden="true"></i></div><div className="titleMenu"><Link to="#about">A Propos</Link></div></li>
            <li><div className="icon"><i class="fa fa-laptop fa-2x" aria-hidden="true"></i></div><div className="titleMenu"><Link to="#skills">Compétences</Link></div></li>
            <li><div className="icon"><i class="fa fa-briefcase fa-2x" aria-hidden="true"></i></div><div className="titleMenu"><Link to="#experience">Expériences</Link></div></li>
            <li><div className="icon"><i class="fa fa-graduation-cap fa-2x" aria-hidden="true"></i></div><div className="titleMenu"><Link to="#school">Formation</Link></div></li>
            <li><div className="icon"><i class="fa fa-picture-o fa-2x" aria-hidden="true"></i></div><div className="titleMenu"><Link to="#portfolio">Portfolio</Link></div></li>
            <li><div className="icon"><i class="fa fa-commenting fa-2x" aria-hidden="true"></i></div><div className="titleMenu"><Link to="#contact">Contact</Link></div></li>
          </ul> */}
          <ul className="header">
            <li><Link to="#home">Accueil</Link></li>
            <li><Link to="#about">A Propos</Link></li>
            <li><Link to="#skills">Compétences</Link></li>
            <li><Link to="#experience">Expériences</Link></li>
            <li><Link to="#school">Formation</Link></li>
            <li><Link to="#portfolio">Portfolio</Link></li>
            <li><Link to="#contact">Contact</Link></li>
          </ul>
          <div className="content">
            <Route path="/" component={Home}/>
            <Route path="/" component={About}/>
            <Route path="/" component={Skills}/>
            <Route path="/" component={Experience}/>
            <Route path="/" component={School}/>
            <Route path="/" component={Portfolio}/>
            <Route path="/" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
