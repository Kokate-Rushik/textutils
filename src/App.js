import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, alertType) => {
    setAlert({
      message: msg,
      type: alertType,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const handleautClick = () => {
    let ref = prompt(">>>");
    if (ref) console.log(ref + " is Rushik, C-12");
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#001027";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "primary");
      // document.title = document.title + " | Dark";
    } else {
      setMode("light");
      document.body.style.backgroundColor = `white`;
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "primary");
      // document.title = "TextUtils | Home";
    }
  };

  return (
    <div className="d-flex flex-column">
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        li1="Home"
        li2="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my3">
        {/* <Routes>
            <Route
              exact
              path="/"
              element={ */}
        <Textform
          heading="Enter the text to analyze."
          mode={mode}
          showAlert={showAlert}
        />
        {/* }
            />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes> */}
      </div>
      {/* </Router> */}
      <div className="aut">
        <button
          className="HPs"
          style={{
            backgroundColor: mode === "dark" ? "#001027" : "white",
          }}
          onClick={handleautClick}
        >
          i
        </button>
      </div>
    </div>
  );
}

export default App;
