import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import EmployeeListing from './components/EmployeeListing'
import EmployeeDetails from './components/EmployeeDetails'

function App() {
  return (
    <div className="App">
          <Header/>
    </div>
  );
}

export default App;
