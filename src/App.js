import './App.css';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import Credits from './Components/Credits/Credits';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
function App() {
  return (
    <div className="App">
      
      <Router>
      <div>
      <NavBar></NavBar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/credits">
            <Credits/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
