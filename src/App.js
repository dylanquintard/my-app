import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import './style/body.scss'
import Footer from './composants/footer';
import Navbar from './composants/Navbar';
import Locations from './pages/Locations';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Locations/:id' element={<Locations />} component={Locations} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
