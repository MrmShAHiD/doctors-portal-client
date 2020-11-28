import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HosHome from './Components/HosHome/HosHome/HosHome';
import NavBar from './Components/HosHome/NavBar/NavBar';
import AppHome from './Components/AppHome/AppHome/AppHome/AppHome';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HosHome/>
        </Route>
        <Route path="/home">
          <HosHome/>
        </Route>
        <Route path="/appHome">
          <AppHome/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
