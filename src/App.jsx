import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Repositories from "./pages/Home/Repositories.jsx";
import SignIn from "./pages/SignIn/SignIn";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Repositories />} />  {/* Default child route */}
          <Route path="signin" element={<SignIn />} />
          {/* <Route path="contact" element={<ContactPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
