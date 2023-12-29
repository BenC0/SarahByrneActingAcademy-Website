import {useState} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from './index.module.css';

// export function toggleMobileMenu() {
//     useEffect(() => {
//         const sel = `.${styles.linkContainer}`
//         console.warn({sel})
//         const menu = document.querySelector(sel)
//         console.warn({menu})
//         menu.classList.contains("active") ? menu.classList.remove("active") : menu.classList.add("active")
//     })
// }

export default function Navigation() {
    const router = useRouter();
    const [isMobileActive, setisMobileActive] = useState(false);
    const isActive = href => router.pathname == href;
    const isMobileActiveClass = isMobileActive ? styles.active : ""
    return ( 
        <section id={styles.Navigation} className='content-wrapper column'>
            <nav className={`content ${styles.navigation}`}>
                <Link href="/" className={isActive("/") ? styles.active : ""} >Home</Link>
                <Link href="/about" className={isActive("/about") ? styles.active : ""} >About</Link>
                <Link href="/about/our-classes" className={isActive("/about/our-classes") ? styles.active : ""} >Our Classes</Link>
                <Link href="/about/meet-the-team" className={isActive("/about/meet-the-team") ? styles.active : ""} >Meet The Team</Link>
                <Link href="/uniforms" className={isActive("/uniforms") ? styles.active : ""} >Uniforms</Link>
                <Link href="/contact" className={isActive("/contact") ? styles.active : ""} >Contact</Link>
                <Link href="https://www.facebook.com/sarahbyrneactingacademy" target="_blank">
                    <img src="/img/fb-light.webp" alt="f" style={{
                        marginBottom: "-5px"
                    }}/>
                </Link>
                <Link href="hhttps://www.instagram.com/sarahbyrneacting/" target="_blank">
                    <img src="/img/insta-light.webp" alt="i" style={{
                        marginBottom: "-5px"
                    }}/>
                </Link>
            </nav>
            <nav className={`content ${styles.mobileNavigation}`}>
                <div className={`flex a-center ${styles.mobileNavigationBar}`}>
                    <Link href="/">
                        <img src="/img/logo.webp" className={styles.mobileNavigationLogo} />
                    </Link>
                    <div className={styles.hamburger} onClick={() => setisMobileActive(!isMobileActive)}>
                        <svg height="32px" viewBox="0 0 32 32" width="32px">
                            <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" fill="#FFFFFF" />
                        </svg>
                    </div>
                </div>
                <div className={`flex column a-center ${styles.linkContainer} ${isMobileActiveClass}`}>
                    <div className={styles.closeIcon} onClick={() => setisMobileActive(!isMobileActive)}>
                        <svg height="32px" viewBox="0 0 512 512" width="32px">
                                <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" fill="#FFFFFF"/>
                        </svg>
                    </div>
                    <Link href="/" className={isActive("/") ? styles.active : ""} >Home</Link>
                    <Link href="/about" className={isActive("/about") ? styles.active : ""} >About</Link>
                    <Link href="/about/our-classes" className={isActive("/about/our-classes") ? styles.active : ""} >Our Classes</Link>
                    <Link href="/about/meet-the-team" className={isActive("/about/meet-the-team") ? styles.active : ""} >Meet The Team</Link>
                    <Link href="/uniforms" className={isActive("/uniforms") ? styles.active : ""} >Uniforms</Link>
                    <Link href="/contact" className={isActive("/contact") ? styles.active : ""} >Contact</Link>
                    <div className="flex a-center">
                        <Link href="https://www.facebook.com/sarahbyrneactingacademy" target="_blank">
                            <img src="/img/fb-light.webp" alt="f" style={{
                                marginBottom: "-5px"
                            }}/>
                        </Link>
                        <Link href="hhttps://www.instagram.com/sarahbyrneacting/" target="_blank">
                            <img src="/img/insta-light.webp" alt="i" style={{
                                marginBottom: "-5px"
                            }}/>
                        </Link>
                    </div>
                </div>
            </nav>
        </section>
    );
}
