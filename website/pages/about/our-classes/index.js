import Head from 'next/head';
import Layout from '../../layouts'
import styles from "./index.module.css";
import Footer from "../../modules/Footer";
import ContentTitle from '../../modules/ContentTitle';

export default function AboutOurClasses() {
    return (
        <Layout>
            <Head>
                <title>Sarah Byrne Acting Academy | About | Our Classes</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ContentTitle
                title = "Classes"
                accentTitle = "Our"
            />
            <section className='content-wrapper' style={{
                marginTop: `-2em`
            }}>
                <div className='content column'>
                    <img src="/img/classes/Classes-timetable.webp" />
                    <img src="/img/gallery/7.jpg" />
                </div>
            </section>
            <ContentTitle
                title = "FREE Trial"
                accentTitle = "Book Your"
            />
            <section className='content-wrapper'>
                <div className='content column'>
                    <div className={styles.classRow}>
                        <div class={`${styles.classDetails} flex column`}>
                            <h3>Manchester</h3>
                            <p className={styles.accent}>Secure your FREE trial place at our Manchester Class</p>
                        </div>
                        <div className="flex a-center j-center">
                            <a href="mailto:academy@sarahbyrneactingacademy.co.uk?subject=SBAA Manchster Class." className='btn primary'>Book Now</a>
                        </div>
                    </div>
                    <div className={styles.classRow}>
                        <div class={`${styles.classDetails} flex column`}>
                            <h3>Oldham</h3>
                            <p className={styles.accent}>Secure your FREE trial place at our Oldham Class</p>
                        </div>
                        <div className="flex a-center j-center">
                            <a href="mailto:academy@sarahbyrneactingacademy.co.uk?subject=SBAA Oldham Class." className='btn primary'>Book Now</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Layout>
    );
}
