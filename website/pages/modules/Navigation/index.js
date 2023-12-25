import Link from "next/link";
import { useRouter } from "next/router";
import styles from './index.module.css';

export default function Navigation() {
    const router = useRouter();
    const isActive = href => router.pathname == href;
    return ( 
        <section id={styles.Navigation} className='content-wrapper column'>
            <nav className={`content ${styles.navigation}`}>
                <Link href="/" className={isActive("/") ? styles.active : ""} >Home</Link>
                <Link href="/about" className={isActive("/about") ? styles.active : ""} >About</Link>
                <Link href="/about/our-classes" className={isActive("/about/our-classes") ? styles.active : ""} >Our Classes</Link>
                <Link href="/about/meet-the-team" className={isActive("/about/meet-the-team") ? styles.active : ""} >Meet The Team</Link>
                <Link href="/uniforms" className={isActive("/uniforms") ? styles.active : ""} >Uniforms</Link>
                <Link href="/contact" className={isActive("/contact") ? styles.active : ""} >Contact</Link>
                <Link href="https://www.facebook.com/sarahbyrneactingacademy">
                    <img src="/img/fb-light.webp" alt="f" style={{
                        marginBottom: "-5px"
                    }}/>
                </Link>
                <Link href="hhttps://www.instagram.com/sarahbyrneacting/">
                    <img src="/img/insta-light.webp" alt="i" style={{
                        marginBottom: "-5px"
                    }}/>
                </Link>
            </nav>
        </section>
    );
}
