import Header from './components/header'
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className='App'>
    <Router/>
    </div>
  );
}

function HomePage(){
  return <div className='homepage'>
      <div className="intro">
        <span className="textcontainer">
          <span className='text'>
          <h1>Game-Like</h1>
          <p>Level up your <span>IELTS</span> skills through fun and challenging ways.</p>
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
        <Header/>
        <HomePage/>
        </>
      }>

      </Route>
      </Routes>    
  </BrowserRouter>
}
export default App;

