// import './App.css';
// import Main from './Page/Main/Main';
import Navbar from './Page/Shared/Navbar';
import {Routes,Route} from "react-router-dom";
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Login from './Page/Login/Login';
import Appointment from './Page/Appointment/Appointment';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
     <Navbar></Navbar>
     <Routes>
      <Route path='/'element={<Home></Home>}></Route>
      <Route path='about' element={<About></About>}></Route>
      <Route path='appointment' element={<Appointment></Appointment>}></Route>
      <Route path='login' element={<Login></Login>}></Route>
     </Routes>
    </div>
  );
}
export default App;
