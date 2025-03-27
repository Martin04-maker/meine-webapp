import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importiere Routes statt Switch
import Page2 from "./Page2"; // Importiere Page2
import Schramerhof from "./Schramerhof"; // Importiere Schramerhof-Seite
import Apfelbluete from "./Apfelblüte"; // Importiere Apfelblüte-Seite
import Blau from "./Blau"; // Importiere die Blau-Seite

function App() {
  return (
    <Router>
      <div
        style={{
          backgroundColor: "#f5f5dc",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Routes>
          {/* Route für die erste Seite */}
          <Route
            path="/"
            element={
              <div style={{ textAlign: "center" }}>
                <h1>Willkommen auf der ersten Seite</h1>
                <p>Das ist die erste Seite mit einem Button!</p>
                <button
                  onClick={() => window.location.href = '/page2'}
                  style={{
                    padding: "20px 40px",        // Button größer machen
                    backgroundColor: "#6b8e23", // Oliv-mattgrüne Farbe
                    color: "white",
                    border: "none",
                    borderRadius: "15px",       // Abgerundete Ecken
                    cursor: "pointer",
                    fontSize: "18px",           // Größere Schrift
                    transition: "all 0.3s ease",// Für die Animation beim Hover
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}  // Button wird vergrößert
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}     // Normalgröße wieder herstellen
                >
                  Zu Seite 2
                </button>
              </div>
            }
          />

          {/* Route für die zweite Seite */}
          <Route path="/page2" element={<Page2 />} />

          {/* Route für Schramerhof */}
          <Route path="/schramerhof" element={<Schramerhof />} />

          {/* Route für Apfelblüte */}
          <Route path="/apfelbluete" element={<Apfelbluete />} />

          {/* Route für Blau */}
          <Route path="/blau" element={<Blau />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
