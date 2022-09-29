import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CurrencyExchange from './currencyExchange';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Footer from './footer';
import Navigation from './navbar';
import CurrencyConverter from './currencyConverter';

function App() {
  return (
      
    <Router basename="/currency-exchange">
        <Navigation />
            <Switch>
              <Route path="/" exact component={CurrencyExchange} />
              <Route path="/currencyconverter" component={CurrencyConverter} />
              <Route render={() => <h1>404 Not found</h1>} />
            </Switch>
        <Footer />
    </Router>
  );
}

export default App;