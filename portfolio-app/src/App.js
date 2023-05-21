
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import ProjectIndex from './Pages/ProjectIndex';
import InterestIndex from './Pages/InterestIndex';
import Show from './Pages/Show';
import FourOFour from './Pages/FourOFour';
import New from './Pages/New';
import Edit from './Pages/Edit';
import ShowInterests from './Pages/ShowInterests';
import EditInterests from './Pages/EditInterests';
import NewInterest from './Pages/NewInterest';

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
      <Route path="/interests" element={<InterestIndex />} />
      <Route path="/projects/:id" element={<Show />} />
      <Route path="/interests/:id" element={<ShowInterests />} />
      <Route path="/projects/new" element={<New/>} />
      <Route path="/interests/new" element={<NewInterest/>} />
      <Route path="/projects/:id/edit" element={<Edit />} />
      <Route path="/interests/:id/edit" element={<EditInterests/>} />
      <Route path="*" element={<FourOFour/>}/>
      </Routes>
      </main>
     </Router>
    </div>
  );
}

export default App;
