import Link from "next/link";

export default function NavbarMobile({ email }) {
    return (
        <div className="lg:hidden sticky border-t-2 border-neutral-focus bottom-0 left-0">
            <div className="shadow-lg navbar bg-neutral text-neutral-content">
                <div className="flex mx-auto">
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
        </div>
    );
}
