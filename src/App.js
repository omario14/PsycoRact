
import Nav from './Pages/Navigation/nav';
import Home from './Pages/home';
import About from './Pages/About/about';
import Footer from './Pages/Footer/footer';
import Seance from './Pages/Seance/seance';
import Doc from './Pages/Doctores/doc';
import Consult from './Pages/consultation/consult';

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './Pages/Sign in&up/Login';

const Main =()=>(
  <>
   <Nav/>
      <Home/>
      <About/>
      <Seance/>
      <Doc/>
      <Consult/>
      <Footer/>
  </>
)
 
 
function App() {
  
  return (
    <div className="App">
      <Router>


     <Routes>
       <Route  path="/login" element={<Login/>}/>
       <Route path="/" element={<Main/>}/>
     </Routes>
     
      </Router>

    </div>
  );
}

export default App;
