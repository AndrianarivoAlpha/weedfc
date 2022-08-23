import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Navbar from "./Components/Navbar/Navbar"

function App() {
  return (
    <Router>
      <Navbar />
      <LandingPage />
    </Router>
  );
}

export default App;