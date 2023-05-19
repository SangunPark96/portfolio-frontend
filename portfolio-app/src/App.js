
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import ProjectIndex from './Pages/ProjectIndex';
import Show from './Pages/Show';
import FourOFour from './Pages/FourOFour';
import New from './Pages/New';
import Edit from './Pages/Edit';

function App() {
  return (
    <div className="App">
     <Router>
      <NavBar/>
      <main className="App-header">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<ProjectIndex />} />
      <Route path="/projects/:id" element={<Show />} />
      <Route path="/projects/new" element={<New/>} />
      <Route path="/projects/:id/edit" element={<Edit />} />
      <Route path="*" element={<FourOFour/>}/>
      </Routes>
      </main>
     </Router>
    </div>
  );
}

export default App;
