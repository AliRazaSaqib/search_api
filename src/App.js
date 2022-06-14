/** @format */
import FindCountry from "./components/FindCountry";
import FindCountryNewVersion from "./components/FindCountryNewVersion";
import Layout from "./components/layouts/Layout";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import { Provider, useSelector } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <div>
      <Layout />
      <PersistGate persistor={persistor}>
        <Routes>
          <Route
            path="/"
            element={
              <ShouldBeLoggedOut>
                <Login />
              </ShouldBeLoggedOut>
            }
          />
          <Route
            path="/register"
            element={
              <ShouldBeLoggedOut>
                <SignUp />
              </ShouldBeLoggedOut>
            }
          />
          <Route
            path="/findcountry"
            element={
              <ShouldBeLoggedIn>
                <FindCountry />
              </ShouldBeLoggedIn>
            }
          />
          <Route
            path="/advance"
            element={
              <ShouldBeLoggedIn>
                <FindCountryNewVersion />
              </ShouldBeLoggedIn>
            }
          />
        </Routes>
      </PersistGate>
    </div>
  );
}

const ShouldBeLoggedIn = ({ children }) => {
  const location = useLocation();
  const token = useSelector((state) => state.token);

  if (token) {
    return children;
  } else {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
};

const ShouldBeLoggedOut = ({ children }) => {
  const location = useLocation();
  const token = useSelector((state) => state.token);
  if (!token) {
    return children;
  } else {
    return <Navigate to="/findcountry" state={{ from: location }} replace />;
  }
};

export default App;
