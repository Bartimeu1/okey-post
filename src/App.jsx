import React from "react";
import {Route, Routes} from 'react-router-dom';

import Layout from "./components/layout/layout";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
    <Routes>
      <Route  path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
