"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"dark-theme" | "light-theme">("dark-theme");

    useEffect(() => {
        // Read theme from document.body on mount
        const hasLightClass = document.body.classList.contains("light-theme");
        const initialTheme = hasLightClass ? "light-theme" : "dark-theme";
        setTheme(initialTheme);
        
        // Also sync local storage if not already there
        const savedTheme = localStorage.getItem("theme") as "dark-theme" | "light-theme" | null;
        if (savedTheme) {
            document.body.classList.remove("dark-theme", "light-theme");
            document.body.classList.add(savedTheme);
            setTheme(savedTheme);
        } else {
            document.body.classList.add("dark-theme");
        }
    }, []);

    const toggleTheme = () => {
        const nextTheme = theme === "dark-theme" ? "light-theme" : "dark-theme";
        
        document.body.classList.remove("dark-theme", "light-theme");
        document.body.classList.add(nextTheme);
        localStorage.setItem("theme", nextTheme);
        setTheme(nextTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle"
            id="theme-btn"
            aria-label="Toggle Theme"
        >
            {/* Sun Icon */}
            <svg
                className="sun-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            {/* Moon Icon */}
            <svg
                className="moon-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
        </button>
    );
}
