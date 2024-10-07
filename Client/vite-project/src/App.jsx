import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Landingpage/Navbar';
import Home from './components/Landingpage/Home';
import SignIn from './components/Landingpage/SignIn';
import SignUp from './components/Landingpage/SignUp';
import Welcome from './components/Dashboard/Welcome';
import Dashnav from './components/Dashboard/Dashnav';
import { AuthProvider, useAuth } from './context/Authcontext';
import VendorApplicationForm from './components/Dashboard/vendorapplicationform';
import EventCategory from './components/Dashboard/EventCategory'; // Correct import

function App() {
  return (
    <AuthProvider>
      <Router>
        <AuthLayout />
      </Router>
    </AuthProvider>
  );
}

function AuthLayout() {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <>
      {isLoggedIn ? <Dashnav onLogout={logout} /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn onLogin={login} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/welcome" element={isLoggedIn ? <Welcome /> : <Navigate to="/" />} />
        <Route path="/dashboard/vendorapplicationform" element={<VendorApplicationForm />} />
        <Route path="/dashboard/eventcategory" element={<EventCategory />} /> {/* Route for event categories */}
      </Routes>
    </>
  );
}

export default App;
