import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import NotFound from "./Pages/NotFound.jsx";
function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<LandingPage />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
