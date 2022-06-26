import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './AllComponent/HeaderFIle/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './AllComponent/HomeFile/Home';
import Login from './AllComponent/LoginFormFile/Login';
import Addevent from './AllComponent/AddEventFile/Addevent';
import VoluinterRegister from './AllComponent/VoluinteerRegisterFile/VoluinterRegister';
import Register from './AllComponent/LoginFormFile/Register';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="addevent" element={<Addevent></Addevent>}></Route>
        <Route path='registerVolunterr' element={<VoluinterRegister></VoluinterRegister>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
      </Routes>

    </div>
  );
}

export default App;
