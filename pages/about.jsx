import Image from "next/image";

const AboutPage = () => {
    return (
        <>
            <h3>About Me</h3>
            <p>I am a full stack developer {"&"} a student, active since mid August of 2018.</p>
            <div>
                <h3>Holopin Badges</h3>
                <a href="https://www.holopin.io/@archaeopteryx" about="_blank" rel="noopener">
                    <Image src={"https://holopin.me/archaeopteryx"} alt={"holopin"} width={500} height={200} layout="responsive" />
                </a>
            </div>
        </>
    );
};

export async function getStaticProps() {
    return {
        props: { title: "About" }
    };
}

export default AboutPage;
