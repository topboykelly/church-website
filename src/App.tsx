import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import EventsPage from "./pages/EventsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
