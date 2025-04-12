import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <main style={{ marginLeft: '200px', padding: '2rem', flex: 1 }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;

