import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeroesForm from './components/HeroesForm';
import Home from './Home';
import Navbar from './layouts/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/add">
              <HeroesForm />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
