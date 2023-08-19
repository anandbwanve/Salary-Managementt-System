import './App.css';
import {BrowserRouter as Router, Route, Switch, Navigate} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import R2 from './components/R2';
import Login from './components/Login';
import ListEmployeeComponent2 from './components/ListEmployeeComponent2';
import About from './components/about';
import AboutUs from './components/about';
import ContactUs from './components/contact';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className= "container">
          <Switch>
            <Route exact path = "/" component = {Login}></Route>
            <Route exact path = "/login" component = {Login}></Route>
              <Route exact path = "/register" component = {R2}></Route> 
              <Route exact path = "/contact" component = {ContactUs}></Route> 
              <Route path = "/employees" component = {ListEmployeeComponent}></Route>
              <Route path = "/employees2" component = {ListEmployeeComponent2}></Route>
              <Route path = "/add-employee" component = {AddEmployeeComponent} ></Route>
              <Route path = "/edit-employee/:id" component = {AddEmployeeComponent}></Route>
              <Route path = "/about" component = {AboutUs}></Route> 
              <Route path = "/home" component = {Home}></Route>       
            </Switch>
        </div>
        <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
