import Head from 'next/head';
import Layout from '../layouts'
import Footer from "../modules/Footer";

export default function Contact() {
    return (
        <Layout>
            <Head>
                <title>Sarah Byrne Acting Academy | Contact</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Footer />
        </Layout>
    );
}
