// src/components/CursorSparkleTrail.jsx
import React, { useEffect } from 'react';

const CursorSparkleTrail = () => {
  useEffect(() => {
    const createSparkle = (x, y) => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 800); // Match animation duration
    };

    const handleMouseMove = (e) => {
      createSparkle(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      for (let touch of e.touches) {
        createSparkle(touch.clientX, touch.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return null;
};

export default CursorSparkleTrail;
