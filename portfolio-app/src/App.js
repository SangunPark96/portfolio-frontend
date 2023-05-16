
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
     <Router>
      <NavBar/>
      <main className="App-header">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>
     </Router>
    </div>
  );
}

export default App;
