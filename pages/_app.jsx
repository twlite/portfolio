import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const theme = window.localStorage.getItem("theme");
        if (!theme || !["dark", "light"].includes(theme)) window.localStorage.setItem("theme", "dark");

        window.document.documentElement.setAttribute("data-theme", window.localStorage.getItem("theme") === "dark" ? "dracula" : "light");
    }, []);
    return <Component {...pageProps} />;
}

export default MyApp;
