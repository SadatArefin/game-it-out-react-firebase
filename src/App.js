import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import Credits from "./Components/Credits/Credits";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Registration from "./Components/Registration/Registration";
import Footer from "./Components/Footer/Footer";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Snake from "./Components/Snake/Snake";
import Space from "./Components/Space/Space";
import Dino from "./Components/Dino/Dino";
import Racing from "./Components/Racing/Racing";
import Flappy from "./Components/Flappy/Flappy";
import Typer from './Components/Typer/Typer';
import Arkanoid from './Components/Arkanoid/Arkanoid';
import PingPong from './Components/PingPong/PingPong';
import Pacman from './Components/Pacman/Pacman';
import Mario from './Components/Mario/Mario';
function App() {
  return (
    <div className="App bg-gray-700">
      <AuthProvider>
        <Router>
          <div>
            <NavBar></NavBar>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/credits">
                <Credits />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/registration">
                <Registration />
              </Route>
              {/* Games */}
              <PrivateRoute path="/snake">
                <Snake />
              </PrivateRoute>
              <PrivateRoute path="/space">
                <Space />
              </PrivateRoute>
              <PrivateRoute path="/dino">
                <Dino />
              </PrivateRoute>
              <PrivateRoute path="/racing">
                <Racing />
              </PrivateRoute>
              <PrivateRoute path="/flappy">
                <Flappy/>
              </PrivateRoute>
              <PrivateRoute path="/typer">
                <Typer/>
              </PrivateRoute>
              <PrivateRoute path="/arkanoid">
                <Arkanoid/>
              </PrivateRoute>
              <PrivateRoute path="/pingpong">
                <PingPong/>
              </PrivateRoute>
              <PrivateRoute path="/pacman">
                <Pacman/>
              </PrivateRoute>
              <PrivateRoute path="/mario">
                <Mario/>
              </PrivateRoute>
            </Switch>
          </div>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
