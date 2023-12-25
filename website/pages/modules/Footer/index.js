import styles from "./index.module.css"

export default function Footer() {
    return (
        <footer id="footer" className={`${styles.footer}`}>
            <div className={`${styles.logo}`}>
                <img src="/img/logo.webp" />
            </div>
        </footer>
    );
}
