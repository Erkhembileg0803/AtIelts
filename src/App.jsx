import Header from './components/header'
import './App.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PlayPage from './pages/playpage';
import Footer from './components/Footer'
import Test from './pages/test'
function App() {
  return (
    <Router/>
  );
}

function HomePage(){
  return <div className='homepage' onMouseDown={(e) => e.preventDefault()}>
      <div className="intro">
        <span className="textcontainer">
          <span className='text'>
          <h1><span>IELTS</span> ARCADE</h1>
          <p>Level up your IELTS skills through fun and challenging ways.</p>
          </span>
          <Link><i class="fa fa-angle-double-right"></i><span>Begin</span></Link>
        </span>
        <span className="images">
          <div className="image"></div>
          <div className="image"></div>
        </span>
      </div>
  </div>
}
function Router(){
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={
        <>
          <div className='App'>
        <Header/>
        <HomePage/>
        <Footer/>
         </div>
        </>
      }>
      </Route>
      <Route path='/play' element={<PlayPage/>}></Route>
      <Route path='/play/test' element={<Test/>}></Route>
      </Routes>    
  </BrowserRouter>
}
export default App;

