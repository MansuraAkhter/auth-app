import { useEffect, useState } from "react";
import "./App.css";
import Signin from "./components/Signin";
import Layout from "./components/Layout";
import ProfilePage from "./components/ProfilePage";
import WelcomePage from "./components/WelcomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { checkToken } from "./Redux/actions";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./Redux/store";

function App() {
  // useEffect(() => {
  //   store.dispatch(checkToken());
  // }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Signin />} />
              <Route element={<Layout />}>
                <Route path="/welcome" element={<WelcomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
