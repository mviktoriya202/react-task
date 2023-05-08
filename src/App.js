import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {useRef} from "react";

function App() {
  const contactsRef = useRef();

  return (
    <Router>
      <div className="App">
        <Header contactsRef={contactsRef}/>
        <Routes>
          <Route path="/" element={<Home contactsRef={contactsRef}/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
