import styles from "../styles/ContactCode.module.css";

const contactItems = [
    {
        social: "website",
        link: "dhunganakunjan.com.np",
        href: "https://dhunganakunjan.com.np"
    },
    {
        social: "email",
        link: "contact@dhunganakunjan.com.np",
        href: "mailto:contact@dhunganakunjan.com.np"
    },
    {
        social: "github",
        link: "Archaeopteryx1",
        href: "https://github.com/Archaeopteryx1"
    },
    {
        social: "linkedin",
        link: "dhungana-k",
        href: "https://www.linkedin.com/in/dhungana-k"
    },
    {
        social: "twitter",
        link: "Archaeopteryx17",
        href: "https://www.twitter.com/Archaeopteryx17"
    },
    {
        social: "discord",
        link: "Andromeda#1000",
        href: "https://discord.com/users/916316955772862475"
    }
];

const ContactCode = () => {
    return (
        <div className={styles.code}>
            <p className={styles.line}>
                <span className={styles.className}>.socials</span> &#123;
            </p>
            {contactItems.slice(0, 8).map((item, index) => (
                <p className={styles.line} key={index}>
                    &nbsp;&nbsp;&nbsp;{item.social}:{" "}
                    <a href={item.href} target="_blank" rel="noopener">
                        {item.link}
                    </a>
                    ;
                </p>
            ))}
            {contactItems.slice(8, contactItems.length).map((item, index) => (
                <p className={styles.line} key={index}>
                    &nbsp;&nbsp;{item.social}:{" "}
                    <a href={item.href} target="_blank" rel="noopener">
                        {item.link}
                    </a>
                    ;
                </p>
            ))}
            <p className={styles.line}>&#125;</p>
        </div>
    );
};

export default ContactCode;
