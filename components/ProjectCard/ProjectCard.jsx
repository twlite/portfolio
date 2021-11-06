export default function ProjectCard({ title, description, l1 = {}, l2 = {} }) {
    return (
        <div className="card bordered bg-base-300">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <a href={l1.link || "/"} target="_blank" className="btn btn-primary">
                        {l1.label || "GitHub"}
                    </a>
                    <a href={l2.link || "/"} target="_blank" className="btn btn-neutral btn-outline">
                        {l2.label || "Website"}
                    </a>
                </div>
            </div>
        </div>
    );
}
