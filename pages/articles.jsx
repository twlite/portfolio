import ArticleCard from "../components/ArticleCard";
import styles from "../styles/ArticlesPage.module.css";

const ArticlesPage = ({ articles }) => {
    return (
        <>
            <h3>
                Recent Posts from{" "}
                <a href="https://blogs.dhunganakunjan.com.np" target="_blank" rel="noopener" className={styles.underline}>
                    Andromeda
                </a>
            </h3>
            <div className={styles.container}>{articles.length ? articles.map((article) => <ArticleCard key={article.id} article={article} />) : <p>No articles found!</p>}</div>
        </>
    );
};

export async function getStaticProps() {
    const res = await fetch("https://api.hashnode.com", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `
                query GetUserArticles($page: Int!) {
                    user(username: "archaeopteryx1") {
                        publication {
                            posts(page: $page) {
                                title
                                brief
                                slug
                                coverImage
                                totalReactions
                                responseCount
                            }
                        }
                    }
                }
            `,
            variables: { page: 0 }
        })
    });

    const data = await res.json();

    return {
        props: { title: "Articles", articles: data?.data?.user?.publication?.posts || [] },
        revalidate: 60
    };
}

export default ArticlesPage;
