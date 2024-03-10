import React from 'react';
import Signin from './pages/Signin';
import { Route, Routes, Navigate } from 'react-router-dom';
import Phen from './pages/ph-en';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import Book from './pages/Book';
import History from './pages/History';
import ForgotPassword from './pages/forgot-password/Forgot-pass';
import PassVerifyCode from './pages/forgot-password/PassVerifyCode';
import NewPassword from './pages/forgot-password/NewPassword';


function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/shadala" element={<Navigate to="/ph-en" replace />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/ph-en" element={<Phen />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/book" element={<Book />} />
        <Route path="/history" element={<History />} />
        <Route path="/forgot-pass" element={<ForgotPassword />} />
        <Route path="/forgot-pass/verification-code" element={<PassVerifyCode />} />
        <Route path="/forgot-pass/new-password" element={<NewPassword />} />

      </Routes>
      {loading && <LoadingSpinner color="#36d7b7" />}
      {!loading && <Footer />}
    </div>
  );
}

export default App;
