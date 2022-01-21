import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import EmployeeListing from './components/EmployeeListing'
import EmployeeDetails from './components/EmployeeDetails'
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
          <Switch>
            <Route path="/" exact component={EmployeeListing}/>
            <Route path="/employee/:employeeId" exact component={EmployeeDetails}/>
            <Route path="/save/employee/" exact component={AddEmployee}/>
            <Route>404 Not Found!</Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
