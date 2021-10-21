import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import Credits from "./Components/Credits/Credits";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Registration from "./Components/Registration/Registration";
import Footer from "./Components/Footer/Footer";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Games from "./Components/Games/Games";
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
              <PrivateRoute path="/snake">
                <Games/>
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
