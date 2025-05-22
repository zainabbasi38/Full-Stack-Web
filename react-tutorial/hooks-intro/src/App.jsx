import React, { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.background = darkMode ? '#111' : '#fff';
    document.body.style.color = darkMode ? '#fff' : '#000';
  }, [darkMode]);

  return (
    <div className="p-4">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 bg-gray-800 text-white rounded"
      >
        Toggle Dark Mode
      </button>
      <div>My name is zain</div>
      <div>I am learning react js</div>
    </div>
  );
}

export default DarkModeToggle;
