import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CurrencyExchange from './currencyExchange';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Footer from './footer';
import BasicExample from './Navbar';

function App() {
  return (

    <Router>

      <BasicExample />
      <CurrencyExchange />
      <Footer />
    </Router>
  );
}

export default App;