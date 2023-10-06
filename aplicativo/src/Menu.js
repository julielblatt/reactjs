import React from 'react';
import './Menu.css'; // Importe o arquivo de estilos

const Menu = ({ onMenu, onLogout }) => {
  const menuItems = [
    'Meu Perfil',
    'Cadastro de Bovinos',
    'Cadastro de Área',
    'Controle de Insumos',
    'Novidades do Agronegócio',
  ];

  return (
    <div className="menu">
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <button onClick={() => onMenu(item)}>{item}</button>
          </li>
        ))}
      </ul>
      <button className="logout-button" onClick={onLogout}>Sair</button>
    </div>
  );
};

export default Menu;
