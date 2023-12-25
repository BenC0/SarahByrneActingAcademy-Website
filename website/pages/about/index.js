import Head from 'next/head';
import Layout from '../layouts'
import Footer from "../modules/Footer";
import ContentTitle from '../modules/ContentTitle';
import Testimonials from '../modules/Testimonials';
import Gallery from '../modules/Gallery';

export default function About() {
    return (
        <Layout>
            <Head>
                <title>Sarah Byrne Acting Academy | About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ContentTitle 
                title = "Our Academy"
                accentTitle = "About"
            />
            <section className="content_wrapper">
                <div className={`content column font-center`}>
                    <p>Founded in 2016 by UK actress Sarah Byrne, the Sarah Byrne Acting Academy teaches young people age 4-25 years with an interest in the art of Acting.</p>
                    <p>The Acting Academy shares vast knowledge of the industry, extensive networking circles and great connections. This provides our future stars the support and nurturing needed to become professional actors, soap stars and voice over artists.</p>
                    <p>We pride ourselves with representing professional, fresh, gritty actors who have an edge; qualities which they can learn, develop and embrace while being trained at the Sarah Byrne Acting Academy and represented by our in house agency, <a href="https://www.sbmagency.co.uk/">SBM Agency</a></p>
                </div>
            </section>
            <ContentTitle 
                title = "Students Say"
                accentTitle = "What Our"
            />
            <Testimonials />
            <Gallery images = {[
                "/img/gallery/1.jpg",
                "/img/gallery/2.jpg",
                "/img/gallery/3.jpg",
                "/img/gallery/4.jpg",
                "/img/gallery/5.jpg",
                "/img/gallery/6.png",
                "/img/gallery/7.jpg",
                "/img/gallery/8.jpg",
                "/img/gallery/9.jpg",
                "/img/gallery/10.jpg"
            ]} />
            <Footer />
        </Layout>
    );
}
