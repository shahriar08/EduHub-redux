import './App.css';
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import About from './components/About/About'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Course from './components/Course/Course';
import Layout from './components/Layout/Layout';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/home">
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/courses">
            <Layout>
              <Course></Course>
            </Layout>
          </Route>
          <Route path="/about">
            <Layout>
              <About></About>
            </Layout>
          </Route>
          <Route path="/contact">
            <Layout>
              <Contact></Contact>
            </Layout>
          </Route>
          <Route path="*">
            <Layout>
              <NotFound></NotFound>
            </Layout>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
