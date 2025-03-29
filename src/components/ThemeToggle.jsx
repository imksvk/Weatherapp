import { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode'); // ✅ Apply to body
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode'); // ✅ Remove from body
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <button 
            onClick={() => setDarkMode(!darkMode)} 
            style={{
                padding: "10px 15px",
                backgroundColor: darkMode ? "#ff9500" : "#1E90FF",
                color: darkMode ? "#000" : "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "0.3s"
            }}
        >
            {darkMode ? 'Light Mode ☀️' : 'Dark Mode 🌙'}
        </button>
    );
};

export default ThemeToggle;
