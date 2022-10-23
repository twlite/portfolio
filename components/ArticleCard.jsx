import Image from "next/image";
import HeartIcon from "../components/icons/HeartIcon";
import CommentIcon from "../components/icons/CommentIcon";
import styles from "../styles/ArticleCard.module.css";

const ArticleCard = ({ article }) => {
    return (
        <a href={`https://blogs.dhunganakunjan.com.np/${article.slug}`} target="_blank" rel="noopener noreferrer" className={styles.container}>
            <Image src={article.coverImage} alt={article.title} width={200} height={100} layout="responsive" />
            <div className={styles.content}>
                <h3 className={styles.title}>{article.title}</h3>
                <p>{article.brief}</p>
            </div>
            <div className={styles.stats}>
                <div className={styles.stat}>
                    <HeartIcon className={styles.icon} /> {article.totalReactions}
                </div>
                <div className={styles.stat}>
                    <CommentIcon className={styles.icon} /> {article.responseCount}
                </div>
            </div>
        </a>
    );
};

export default ArticleCard;
