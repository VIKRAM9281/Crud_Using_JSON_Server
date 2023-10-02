import './App.css';
import { Routes,Route} from "react-router-dom" //dependence 

//Components
import Home from './Components/Home';
import DashBoard from './Components/DashBoard';
import CreateEmployee from './Components/CreateEmployee';
import Employeelist from './Components/Employeelist';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Dashboard' element={<DashBoard/>} />
        <Route path='/CreateEmployee' element={<CreateEmployee/>} />
        <Route path='/Employeelist' element={<Employeelist/>} />
        <Route path='/Portfolio' element={<Portfolio/>} />
      </Routes>
    </div>
  );
}

export default App;
