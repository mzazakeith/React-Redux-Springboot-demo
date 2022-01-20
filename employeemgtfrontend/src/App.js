import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import EmployeeListing from './components/EmployeeListing'
import EmployeeDetails from './components/EmployeeDetails'

function App() {
  return (
    <div className="App">
      <div className='App'>
        <Router>
          <Header/>
          <Switch>
            <Route path="/" exact component={EmployeeListing}/>
            <Route path="/product/:productId" exact component={EmployeeDetails}/>
            <Route>404 Not Found!</Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
