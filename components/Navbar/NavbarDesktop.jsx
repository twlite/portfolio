import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavbarDesktop({ email }) {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        const isDark = window.localStorage.getItem("theme") === "dark";
        setDarkMode(isDark);
    }, []);
    const toggleTheme = () => {
        window.localStorage.setItem("theme", darkMode ? "light" : "dark");
        window.document.documentElement.setAttribute("data-theme", !darkMode ? "dracula" : "light");
        setDarkMode(!darkMode);
    };

    return (
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
            <div className="px-2 mx-2 navbar-start">
                <Link href="/">
                    <h1 className="btn btn-ghost btn-md rounded-btn text-lg font-semibold">
                        {"</"}
                        <span className="text-info">Dev</span>
                        <span className="text-error">Andromeda</span>
                        {">"}
                    </h1>
                </Link>
            </div>
            <div className="hidden px-2 mx-2 navbar-center lg:flex">
                <div className="flex items-stretch">
                    <Link href="/">
                        <p className="btn btn-ghost btn-sm rounded-btn">Home</p>
                    </Link>
                    <Link href="/projects">
                        <p className="btn btn-ghost btn-sm rounded-btn">Projects</p>
                    </Link>
                    <Link href="https://github.com/DevAndromeda">
                        <p className="btn btn-ghost btn-sm rounded-btn">GitHub</p>
                    </Link>
                    <Link href="https://twitter.com/DevAndromeda7">
                        <p className="btn btn-ghost btn-sm rounded-btn">Twitter</p>
                    </Link>
                    {email ? (
                        <Link href={`mailto:${email}`}>
                            <p className="btn btn-ghost btn-sm rounded-btn">Contact</p>
                        </Link>
                    ) : null}
                </div>
            </div>
            <div className="navbar-end">
                <button onClick={toggleTheme} className="btn btn-square btn-ghost">
                    {!darkMode ? (
                        <svg className="inline-block w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon" viewBox="0 0 16 16">
                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                        </svg>
                    ) : (
                        <svg className="inline-block w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon" viewBox="0 0 16 16">
                            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
}
