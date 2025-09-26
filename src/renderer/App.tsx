import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPageAntd from './LoginPageAntd';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPageAntd />} />
      </Routes>
    </Router>
  );
}
