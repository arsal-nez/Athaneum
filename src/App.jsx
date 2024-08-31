import './App.css';
import Letter from './components/Letter';
import Home from './components/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letter" element={<Letter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
