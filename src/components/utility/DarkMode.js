import React from 'react'
import './DarkMode.css'

function DarkMode() {
    let cLickedClass = 'clicked';
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = 'dark'
    let theme;

    if (localStorage) {
        theme = localStorage.getItem('theme');
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);
    } else {
        body.classList.add(lightTheme);
    }

    const switchTheme = (e) => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(cLickedClass);
            localStorage.setItem('theme', 'light');
            theme = lightTheme;    
        } else {
            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.add(cLickedClass);
            localStorage.setItem('theme', 'dark');
            theme = darkTheme;
        }
    }

  return (
    <button
        className={theme === "dark" ? cLickedClass : ""}
        id="darkMode"
        onClick={(e) => switchTheme(e)}
    ></button>
  )
}

export default DarkMode