// src/components/LeftSidebar.js
import React from 'react';
import './LeftSidebar.css';

const LeftSidebar = ({ onShapeSelect }) => {
  return (
    <div className="left-sidebar">
      <h2>왼쪽 사이드바</h2>
      <ul>
        <li onClick={() => onShapeSelect('square')}>Left Item 1</li>
        <li onClick={() => onShapeSelect('circle')}>Left Item 2</li>
        <li onClick={() => onShapeSelect('triangle')}>Left Item 3</li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
