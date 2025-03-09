import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import NotFound from "./Pages/Notfound/NotFound.jsx";
import SignPage from "./Pages/SignPage.jsx";
import ProtectedRoutes from "./Security/ProtectedRoutes.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import CVE from "./Pages/FromDashboard/CVE.jsx";
import Features from "./Pages/Features.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/sign" element={<SignPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoutes element={Dashboard} />}
          />
          <Route path="/features" element={<Features />} />
          <Route
            path="/cve-pages"
            element={<ProtectedRoutes element={CVE} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
