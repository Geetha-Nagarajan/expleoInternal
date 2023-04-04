import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./app/pages/Login";
import Signup from './app/pages/Signup';
import Dashboard from "./app/pages/Dashboard";
import DrawerAppBar from "./app/components/AppBar";

function App() {
  return (
    <Router>
    <DrawerAppBar/>
      <Routes>
        <Route  path="/" element={<Login/>}/>
        <Route  path="/signup" element={<Signup/>}/>
        <Route  path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
