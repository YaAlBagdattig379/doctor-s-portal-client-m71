// import './App.css';
// import Main from './Page/Main/Main';
import Navbar from './Page/Shared/Navbar';
import {Routes,Route,Link} from "react-router-dom";
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Login from './Page/Login/Login';

function App() {
  return (
    <div className="App">
     <h2>Hello Rabiul</h2>
     <Navbar></Navbar>
     <Routes>
      <Route path='/'element={<Home></Home>}></Route>
      <Route path='about' element={<About></About>}></Route>
      <Route path='login' element={<Login></Login>}></Route>
     </Routes>
    </div>
  );
}
export default App;
