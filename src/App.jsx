import React from "react";
import {Route, Routes} from 'react-router-dom';

import Home from "./pages/Home/Home";
import Header from "./components/header/header";

function App() {
  return (
    <>
    <Header></Header>
    <Routes>
        <Route path='/' element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
