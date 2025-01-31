import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import RoadMap from "./pages/Roadmap.jsx";
import LoginSignUp from './pages/Login-SignUp'
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
                  <h1 className="introHeading">Get Ready for Your <span>IELTS</span> here.</h1>
                  <h1>Exam Preparation With Practice Tests</h1>
                  <a>BEGIN</a>
                </section>
                <section className="about">
                  
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