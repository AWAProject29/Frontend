import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';

export default function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/login" element={ <Login /> } />
      </Routes>
      <Search/>
    </div>
    </BrowserRouter>
  );
}
