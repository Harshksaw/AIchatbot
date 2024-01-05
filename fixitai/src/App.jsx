
import './App.css';
import HeroSection from './components/HeroSection';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>

    <Router>
      <div className="app-wrapper">
        <Navbar className="fixed top-0 left-0 w-full z-10" /> {/* Fixed navbar with Tailwind classes */}
        <div className="overflow-y-auto"> {/* Scrollable content wrapper */}
          <Routes>
            <Route path="/" element={<HeroSection />} />
            {/* <Route path="/" element={<LowerHero />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
