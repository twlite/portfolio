const AboutPage = () => {
    return (
        <>
            <h3>About Me</h3>
            <p>I am a full stack developer {"&"} a student, active since mid August of 2018.</p>
        </>
    );
};

export async function getStaticProps() {
    return {
        props: { title: "About" }
    };
}

export default AboutPage;
