import './App.css';
import Home from './pages/Home.jsx'; // Import Home component
import Navbar from './pages/Navbar.jsx'

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Home />
      </div>
    </>
  );
};

export default App;
