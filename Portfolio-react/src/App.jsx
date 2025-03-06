import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import NotFound from "./Pages/NotFound.jsx";
import SignPage from "./Pages/SignPage.jsx";
import ProtectedRoutes from "./Security/ProtectedRoutes.jsx"
import Dashboard from "./Pages/Dashboard.jsx";

const  App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/sign" element={<SignPage/>} />
          <Route path="/" element={<ProtectedRoutes element={LandingPage} />} />
          <Route path="/dashboard" element={<ProtectedRoutes element={Dashboard} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
