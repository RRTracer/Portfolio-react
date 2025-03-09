import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import NotFound from "./Pages/NotFound.jsx";
import SignPage from "./Pages/SignPage.jsx";
import ProtectedRoutes from "./Security/ProtectedRoutes.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import CVE from "./Pages/FromDashboard/CVE.jsx";

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
