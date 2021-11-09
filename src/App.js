import './App.css';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
    </div>
    </BrowserRouter>
  );
}
