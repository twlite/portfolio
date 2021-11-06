import NavbarDesktop from "../components/Navbar/NavbarDesktop";
import NavbarMobile from "../components/Navbar/NavbarMobile";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { projects } from "../config";

export default function Home({ email }) {
    return (
        <div className="bg-base-200 h-screen">
            <NavbarDesktop email={email} />
            {!projects.length ? (
                <h1 className="text-center text-2xl font-bold">No projects found!</h1>
            ) : (
                <>
                    <h1 className="text-center text-5xl text-primary font-bold select-none underline my-5">Projects</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
                        {projects.map((m, i) => {
                            return (
                                <ProjectCard
                                    key={i}
                                    title={m.title}
                                    description={m.description}
                                    l1={{
                                        link: m.source
                                    }}
                                    l2={{
                                        link: m.website
                                    }}
                                />
                            );
                        })}
                    </div>
                </>
            )}
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
