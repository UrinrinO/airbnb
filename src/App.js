import './App.css';
import Header from './Header';
import Home from './Home';
import SearchPage from './SearchPage';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
