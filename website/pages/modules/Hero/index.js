import styles from './index.module.css';

export default function Hero() {
    return (
        <section id={styles.Hero} className='content-wrapper column'>
            <nav className={`content ${styles.navigation}`}>
                <div className={styles.linkContainer} has_sublinks="false">
                    <a href="" className={styles.active}>Home</a>
                </div>
                <div className={styles.linkContainer} has_sublinks="true">
                    <a href="">About</a>
                    <div className={`content ${styles.sublinks}`}>
                        <a href="">Meet The Team</a>
                        <a href="">Our Classes</a>
                    </div>
                </div>
                <div className={styles.linkContainer} has_sublinks="false">
                    <a href="">Uniforms</a>
                </div>
                <div className={styles.linkContainer} has_sublinks="false">
                    <a href="">Contact </a>
                </div>
            </nav>
            <div className={styles.logo}>
                <img src="/img/logo.webp" />
            </div>
            <div className={styles.background}>
                <img src="/img/homepage-hero.webp" />
            </div>
        </section>
    );
}
