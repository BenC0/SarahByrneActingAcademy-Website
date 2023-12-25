import Link from "next/link";
import styles from './index.module.css';

export default function Hero() {
    return (
        <section id={styles.Hero} className='content-wrapper column'>
            <nav className={`content ${styles.navigation}`}>
                <div className={styles.linkContainer} has_sublinks="false">
                    <Link href="/" className={styles.active}>Home</Link>
                </div>
                <div className={styles.linkContainer} has_sublinks="true">
                    <Link href="/about">About</Link>
                    <div className={`content ${styles.sublinks}`}>
                        <Link href="/about/meet-the-team">Meet The Team</Link>
                        <Link href="/about/our-classes">Our Classes</Link>
                    </div>
                </div>
                <div className={styles.linkContainer} has_sublinks="false">
                    <Link href="/uniforms">Uniforms</Link>
                </div>
                <div className={styles.linkContainer} has_sublinks="false">
                    <Link href="/contact">Contact</Link>
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
