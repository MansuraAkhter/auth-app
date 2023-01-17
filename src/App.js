import { useEffect, useState } from "react";
import "./App.css";
import Signin from "./components/signin/Signin.js";
import WelcomePage from "./components/WelcomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import { Provider } from "react-redux";
import store from "./Redux/store";
import {
  getByTestId,
  getElementError,
  renderHook,
} from "@testing-library/react";
import { keyboardImplementationWrapper } from "@testing-library/user-event/dist/keyboard";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signin />} />

            <Route
              path="/welcome"
              element={
                <ProtectedRoute>
                  <WelcomePage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
