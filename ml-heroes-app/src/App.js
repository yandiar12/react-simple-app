import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeroesForm from './components/HeroesForm';
import HeroesDetails from './components/HeroesDetails';
import HeroesContextProvider from './contexts/HeroesContext';
import Home from './Home';
import Navbar from './layouts/Navbar';

function App() {
  return (
    <HeroesContextProvider>
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
              <Route path="/hero/:id">
                <HeroesDetails />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </HeroesContextProvider>
  );
}

export default App;
