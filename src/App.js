
import Nav from './Pages/Navigation/nav';
import Home from './Pages/home';
import About from './Pages/About/about';
import Footer from './Pages/Footer/footer';
import Seance from './Pages/Seance/seance';
import Doc from './Pages/Doctores/doc';
import Consult from './Pages/consultation/consult';

import './App.css';

function App() {
  
  return (
    <div className="App">
      
      <Nav/>
      <Home/>
      <About/>
      <Seance/>
      <Doc/>
      <Consult/>
      <Footer/>
     

    </div>
  );
}

export default App;
