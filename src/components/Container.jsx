import './Container.css';
import { useState } from 'react';

const Container = ({ title, children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`custom-container ${collapsed ? 'collapsed' : ''}`}>
      <h2 className="container-title" onClick={toggleCollapse}>
        {title}
      </h2>
      {!collapsed && <div className="container-content">{children}</div>}
    </div>
  );
};

export default Container;
