import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RoadMap from "./pages/Roadmap.jsx";
import LoginSignUp from './pages/Login-SignUp';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <section className="intro">
                  <h1 className="introHeading">Level Up Your <span>IELTS</span> Here.</h1>
                  <h2>Game-Like Exam Preparation With IELTS Skills.</h2>
                  <Link to="/roadmap" className="beginButton">BEGIN</Link>
                </section>
                <section className="about">
                  <div className="about-container">

                  </div>
                </section>
              </>
            } />
            <Route path="/roadmap" element={<RoadMap />} />
            <Route path="/login-signup" element={<LoginSignUp />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;