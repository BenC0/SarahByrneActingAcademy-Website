import Head from 'next/head';
import Layout from '../layouts'
import Footer from "../modules/Footer";

export default function About() {
    return (
        <Layout>
            <Head>
                <title>Sarah Byrne Acting Academy | About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Footer />
        </Layout>
    );
}
