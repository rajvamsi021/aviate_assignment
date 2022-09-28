import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Faqs from './components/Faqs';
import TrackApplication from './components/Track Application/TrackApplication';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/faq' element={<Faqs />}/>
        <Route path='/application-status' element={<TrackApplication />}/>
      </Routes>
    </>
  );
}

export default App;
