import './App.css';
import Home from "./Home";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Dogs from "./Dogs";
import Max from "./Max";
import Nav from "./Nav";
import Steve from "./Steve";
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route
        exact path="/dogs"
        render={() => <Dogs />} 
        />
        <Route 
        exact path="/max"
        render={() => <Max />}
        />
        <Route 
        exact path="/steve"
        render={() => <Steve />}
        />
        <Route exact path="" render={() => <Home name="Home" />} />
      </Switch>
    </div>
  );
}

export default App;
