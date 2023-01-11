import { useEffect, useState } from "react";
import "./App.css";
import Signin from "./components/signin/Signin.js";
import WelcomePage from "./components/WelcomePage";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  // check if user has previously signed in if he is signed in
  // skip sign in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setAuthenticated(false);
    } else {
      setAuthenticated(true);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {!authenticated && (
            <Route
              path="/"
              element={
                <Signin
                  authenticated={authenticated}
                  setAuthenticated={setAuthenticated}
                />
              }
            />
          )}
          {authenticated && (
            <Route
              path="/welcome"
              element={
                <WelcomePage
                  authenticated={authenticated}
                  setAuthenticated={setAuthenticated}
                />
              }
            />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

const name = localStorage.getItem("age");
