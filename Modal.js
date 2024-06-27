import React, { useState, useEffect } from 'react';
import './Modal.css';


const Modal = () => {
    // Here you can render any content you want for the modal based on shapeType
    return (
      <div className="modal">
        <div className="modal-content">
          <h2>Shape Details</h2>
          <p>Shape Type:</p>
        </div>
      </div>
    );
  };