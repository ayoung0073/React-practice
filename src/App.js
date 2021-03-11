import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MainPage from './pages/MainPage'
import BoardWritePage from './pages/BoardWritePage'

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/write" component={BoardWritePage}/>
        {/* <Route exact path="/login" component={LoginPage}/> */}
        {/* <Route exact path="/register" component={RegisterPage}/> */}
      </Switch>
    </div>
  </Router>
  );
}

export default App;
