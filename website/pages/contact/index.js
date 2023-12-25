import Head from 'next/head';
import Link from "next/link";
import Layout from '../layouts'
import Footer from "../modules/Footer";
import ContentTitle from '../modules/ContentTitle';

export default function Contact() {
    return (
        <Layout>
            <Head>
                <title>Sarah Byrne Acting Academy | Contact</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ContentTitle 
                title = ""
                accentTitle = "Contact Us"
            />
            <ContentTitle 
                title = "Follw us on socials"
                accentTitle = "Keep Up To Date"
            />
            <section className="content_wrapper" style={{ padding: 0 }}>
                <div className={`content font-center a-center j-center`} style={{
                    paddingTop: 0,
                    marginTop: "-2em",
                }}>
                    <Link href="https://www.facebook.com/sarahbyrneactingacademy">
                        <img src="/img/fb.webp" alt="f" style={{
                            width: "39px",
                            height: "39px"
                        }}/>
                    </Link>
                    <Link href="hhttps://www.instagram.com/sarahbyrneacting/">
                        <img src="/img/insta.webp" alt="i" style={{
                            width: "39px",
                            height: "39px"
                        }}/>
                    </Link>
                </div>
            </section>
            <section className="content_wrapper" style={{ padding: 0 }}>
                <div className={`content column font-center`} style={{
                    paddingTop: 0,
                }}>
                    <img src="/img/gallery/5.jpg" />
                </div>
            </section>
            <Footer />
        </Layout>
    );
}
