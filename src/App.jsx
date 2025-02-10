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
  return <main>
      
  </main>
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

