import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StickyHeader from "./Components/header";
import FeedbackForm from "./Components/form";
import Submissions from "./Components/submissions";

function App() {
  return (
    <div className="App" style={{ background: "#6a1b9a", minHeight: "100vh" }}>
      <BrowserRouter>
        <StickyHeader />
        <div
          className="container py-4 fade-in"
          style={{
            backgroundColor: "#6a1b9a", // Dark overlay for better contrast
            color: "#1fbf8",
          }}
        >
          {/* Card with background image */}
          <div className="p-4">
            <Routes>
              <Route path="/" element={<FeedbackForm />} />
              <Route path="/submissions" element={<Submissions />} />
              <Route path="/submission/:id" element={<Submissions />} />{" "}
              {/* Updated route for dynamic id */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
