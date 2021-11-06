import Hero from "../components/Hero/Hero";
import NavbarDesktop from "../components/Navbar/NavbarDesktop";
import NavbarMobile from "../components/Navbar/NavbarMobile";

export default function Home({ email }) {
    return (
        <div className="bg-base-200 h-screen">
            <NavbarDesktop email={email} />
            <Hero email={email} />
            <NavbarMobile email={email} />
        </div>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {
            email: process.env.CONTACT_EMAIL
        }
    };
}
