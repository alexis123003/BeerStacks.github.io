'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const savedTheme = window.localStorage.getItem('beerstacks-theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
        document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
        setDark(isDark);
    }, []);

    function toggleTheme() {
        const nextDark = !dark;
        document.documentElement.dataset.theme = nextDark ? 'dark' : 'light';
        window.localStorage.setItem('beerstacks-theme', nextDark ? 'dark' : 'light');
        setDark(nextDark);
    }

    return <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}><span className={dark ? 'is-active' : ''}>●</span><span className={!dark ? 'is-active' : ''}>○</span></button>;
}