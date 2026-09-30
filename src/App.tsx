import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import EventsPage from "./pages/EventsPage";
import StatementOfFaithPage from "./pages/StatementOfFaithPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventsPage />} />
          <Route
            path="/statement-of-faith"
            element={<StatementOfFaithPage />}
          />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
