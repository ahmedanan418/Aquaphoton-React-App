import Navbar from "./Navbar";
import Home from "./Home";
import Display from "./Display"

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFound from "./NotFound";
import About from "./About";
import UpImage from "./UpImage";
import Frame from "./Frame";

function App() {
  const logo = process.env.PUBLIC_URL + '/Aqua_logo1.png';
  
  return (
  <Router>
    <div className="App">
      <Navbar />
      <div className="content">
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/Display">
                <Display />
              </Route>
              <Route exact path="/About">
                <About />
              </Route>
              <Route exact path="/Upload">
                <Frame />
              </Route>
              <Route exact path="/Video">
                <UpImage />
              </Route>
              <Route exact path="/*">
                <NotFound />
              </Route>
            </Switch>

      </div>
      <img src={logo} alt="Aqua Logo" className="logo-image" />
    </div>

  </Router>
    
  );
}

export default App;
