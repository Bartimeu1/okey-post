import React from "react";
import {Route, Routes} from 'react-router-dom';

import Home from "./pages/Home/Home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
    <Header></Header>
    <Routes>
        <Route path='/' element={<Home />} />
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
