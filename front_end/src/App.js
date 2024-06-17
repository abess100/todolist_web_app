import './App.css';
 import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './Pages/Dashbord/Dashboard';
import ListTache from './Pages/My task/ListTache';
import Login from './Pages/Sign/Login';
import Register from './Pages/Sign/Register';
import Categorie from './Pages/TaskCategory/Categorie';
import TaskDetail from './Pages/TaskDetail/TaskDetail';
import Navbar from './Component/Navbar/Navbar';
import Setting from './Pages/params/Setting';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/task" element={<ListTache/>}/>
        <Route path="/task/:id" element={<TaskDetail/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/category" element={<Categorie/>}/>
        <Route path="/setting" element={<Setting/>}/>
      </Routes>    

    </Router>
    </div>
  );
}

export default App;
