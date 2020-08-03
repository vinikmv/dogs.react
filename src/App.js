import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import { UserStorage } from './UserContext';
import User from './components/user/User';
import ProtectedRoute from './Helper/ProtectedRoute';
import Photo from './components/photo/Photo';
import UserProfile from './components/user/UserProfile';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRoute path="account/*" element={<User />} />
            <Route path="photo/:id" element={<Photo />} />
            <Route path="profile/:user" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
