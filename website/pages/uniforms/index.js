import Head from 'next/head';
import Layout from '../layouts'
import Footer from "../modules/Footer";
import ContentTitle from '../modules/ContentTitle';

export default function Uniforms() {
    return (
        <Layout>
            <Head>
                <title>Sarah Byrne Acting Academy | Uniforms</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ContentTitle 
                title = "Uniform"
                accentTitle = "Academy"
            />
            <section className="content_wrapper" style={{ padding: 0 }}>
                <div className={`content column font-center`} style={{
                    padding: 0,
                    maxWidth: "300px"
                }}>
                    <img src="/img/uniforms.webp" />
                </div>
            </section>
            <ContentTitle 
                title = "Uniform Forms"
                accentTitle = "Download Our"
            />
            <section className="content_wrapper" style={{ padding: 0 }}>
                <div className={`content column font-center`} style={{
                    paddingTop: 0,
                    paddingBottom: "3rem",
                    marginTop: "-2em",
                    // maxWidth: "300px"
                }}>
                    <div className="flex column a-center j-center" style={{
                        gap: "1em",
                    }}>
                        <a target="_blank" href="/forms/T-Shirt.pdf" className='btn primary'>T-Shirt Form</a>
                        <a target="_blank" href="/forms/Joggers and Leggings.pdf" className='btn primary'>Joggers & Leggings Form</a>
                        <a target="_blank" href="/forms/Hoodies and ZipUps.pdf" className='btn primary'>Hoodies & Zip-Ups Form</a>
                    </div>
                </div>
            </section>
            <Footer />
        </Layout>
    );
}
