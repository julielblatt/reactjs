import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Menu from './Menu';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleRegisterClick = () => {
    setIsLogin(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return <Menu onLogout={handleLogout} />;
  }

  return (
    <div className="App">
      {isLogin ? (
        <Login onRegisterClick={handleRegisterClick} onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Register handleLogin={handleLoginSuccess} onExit={handleLoginClick} />
      )}
    </div>
  );
};

export default App;
