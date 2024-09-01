import './App.css';
import Letter from './components/Letter';
import Home from './components/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import InputForm from './components/Input';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credentials" element={<InputForm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
