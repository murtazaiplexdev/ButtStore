import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/home";

function App() {
  return (
    <div className="App container">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
