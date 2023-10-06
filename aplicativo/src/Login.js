import React, { useState } from 'react';
import './AuthForm.css'; // Importe o arquivo de estilos
import Menu from './Menu'; // Importe o componente Menu

const Login = ({ onRegisterClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Lógica de autenticação aqui
    // Suponhamos que a autenticação seja bem-sucedida
    // Defina o estado para mostrar o Menu
    setIsLoggedIn(true);
    console.log('Login clicked:', email, password);
  };

  const handleLogout = () => {
    // Defina o estado para voltar ao Login
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    // Se estiver autenticado, renderize o Menu
    return <Menu onLogout={handleLogout} />;
  }

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button className="register-button" onClick={onRegisterClick}>
        Register
      </button>
    </div>
  );
};

export default Login;
