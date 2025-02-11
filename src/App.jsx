import Header from './components/header'
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PlayPage from './pages/playpage';
function App() {
  return (
    <Router/>
  );
}

function HomePage(){
  return <div className='homepage'>
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
         </div>
        </>
      }>
      </Route>
      <Route path='/play' element={<PlayPage/>}></Route>
      </Routes>    
  </BrowserRouter>
}
export default App;

