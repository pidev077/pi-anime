import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Wishlist from './pages/Wishlist';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes><h1 className="text-4xl font-bold text-green-500">
  Nếu bạn thấy chữ xanh → Tailwind OK
</h1>

        <Route path="/" element={<Home />} />
        <Route path="/anime/:id" element={<Detail />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Router>
  );
}

export default App;
