import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo" styles={{fontSize: '50px'}}>🍺 Breweries</h2>
      <nav>
        <ul>
          <li><button>🏠 Home</button></li>
          <li><button>🔍 Search</button></li>
          <li><button>ℹ️ About</button></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
