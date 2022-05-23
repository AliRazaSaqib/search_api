/** @format */
import FindCountry from "./components/FindCountry";
import FindCountryNewVersion from "./components/FindCountryNewVersion";
import Layout from "./components/layouts/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={<FindCountry />} />
        <Route path="/advance" element={<FindCountryNewVersion />} />
      </Routes>
    </div>
  );
}

export default App;
