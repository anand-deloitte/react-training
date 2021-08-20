import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Home from './Page/home';
// import About from './Page/about';
import Users from './Page/users';
import Hooks from './Componet/Hooks';
import Vdom from './Vdom';
import Greeting from './ClassComponent';
import Event from './Componet/Event';
import Greeting1 from './Componet/functionalComponent';
import Context from './Componet/context';

function App() {
  return (
    <div className="App">
     
      <Router>
      <div>
      <header className="App-header">
        <nav>
        <img src={logo} className="App-logo" alt="logo" />
        </nav>
        <nav className="font">
        
              <span><Link to="/Vdom" className="App-link">V-DOM</Link></span> |
              <span><Link to="/" className="App-link">Class Comp</Link></span> |
              <span><Link to="/Greeting1" className="App-link">Functional Comp</Link></span>
              |
              <Link to="/event" className="App-link">Events</Link>
              |
              <Link to="/hooks" className="App-link">Hooks</Link>
              |
              <Link to="/context" className="App-link">Context</Link>
             
        </nav>
      </header>
      

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Vdom">
            <div className="vdom">
              <Vdom />
            </div> 
          </Route>
          <Route path="/Greeting1">
          <Greeting1 name="Doe"></Greeting1>
          </Route>
          <Route path="/event">
            <Event />
          </Route>
          <Route path="/Hooks">
            <Hooks />
          </Route>   
          <Route path="/context">
            <Context />
          </Route>
          
          <Route path="/">
            <Greeting  name="John">
               <Greeting1 name="Doe"></Greeting1>
            </Greeting>
          </Route>

          
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
