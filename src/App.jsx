import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Wishlist from './pages/Wishlist';
import Header from './components/Header';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>

//         <Route path="/" element={<Home />} />
//         <Route path="/anime/:id" element={<Detail />} />
//         <Route path="/wishlist" element={<Wishlist />} />
//       </Routes>
//     </Router>
//   );
// }
function App() {
  return <h1 style={{ color: 'red' }}>React đang chạy không?</h1>;
}

export default App;
