import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Pages/Footer/Footer';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/buynow/:id">
            <ServiceDetails></ServiceDetails>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
