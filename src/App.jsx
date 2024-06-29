import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./page/login/index";
import Dashboard from "./page/dashboard/index";
import Navbar from "./component/navbar";
import Kategori from "./page/kategori";
import Alat_Keluar from "./page/monitoring/alat-keluar";
import Alat_Masuk from "./page/monitoring/alat-masuk";
import Dokumentasi from "./page/dokumentasi/index";
import Laporan from "./page/report";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={
          <>
            <Navbar />
            <Dashboard />
          </>
        } />
        <Route path='/kategori' element={
          <>
            <Navbar />
            <Kategori />
          </>
        } />
        <Route path='/alat-keluar' element={
          <>
            <Navbar />
            <Alat_Keluar />
          </>
        } />
        <Route path='/alat-masuk' element={
          <>
            <Navbar />
            <Alat_Masuk />
          </>
        } />
        <Route path='/documentation' element={
          <>
            <Navbar />
            <Dokumentasi />
          </>
        } />
        <Route path='/report' element={
          <>
            <Navbar />
            <Laporan />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;