import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import NavBar from './Components/Home/NavBar/NavBar';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
