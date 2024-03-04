import React from 'react'
import Signin from './pages/Signin'
import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './pages/ph-en'
import Signup from './pages/Signup'
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/ph-en" />} />
        <Route path='/signin' element={<Signin />}/>
        <Route path='/ph-en' element={<Main />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
