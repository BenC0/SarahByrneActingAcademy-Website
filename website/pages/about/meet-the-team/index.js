import styles from "./index.module.css"

import Head from 'next/head';
import Layout from '../../layouts'
import Footer from "../../modules/Footer";
import ContentTitle from '../../modules/ContentTitle';

export default function AboutMeetTheTeam() {
    return (
        <Layout>
            <Head>
                <title>Sarah Byrne Acting Academy | About | Meet the Team</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ContentTitle
                title = "The Team"
                accentTitle = "Meet"
            />
            <section className='content-wrapper'>
                <div className='content font-center' style={{
                    paddingTop: "0",
                    marginTop: "-1em"
                }}>
                    <h3 style={{
                        fontSize: "1.5rem"
                    }}>Founded in 2015 by UK actress Sarah Byrne, the Sarah Byrne Acting Academy teaches young people age 4-25 years with an interest in the art of Acting.</h3>
                </div>
            </section>
            <ContentTitle
                title = "Sarah Byrne"
                accentTitle = "Meet"
                underline="true"
            />
            <section className='content-wrapper'>
                <div className='content grid col-2' style={{
                    paddingTop: "0",
                    marginTop: "-1em"
                }}>
                    <div style={{
                        fontSize: ".9rem"
                    }}>
                        <p style={{marginTop: 0}}>Introducing Sarah Byrne, the driving force behind the Sarah Byrne Acting Academy. Sarah's passion for performing arts ignited during her studies at the Shena Simon Performing Arts College, where she earned a BTEC National Diploma in Performing Arts. She further honed her skills at Manchester Metropolitan University, graduating with a 2:1 BA Hons in Film, Television, and Cultural Studies.</p>
                        <p>With an impressive 20-year track record in television, theatre, and film, Sarah has established herself as an absolute professional in the industry. Her notable television appearances include a series regular role in Channel 4's acclaimed show Shameless, BBC's Sorted, Channel 4's Hollyoaks, and as the face of the Domino's Ident.</p>
                        <p>Sarah's talents extend beyond acting, as she has also collaborated with esteemed Casting Director Lucy Pardee in the casting of the award-winning film Catch Me Daddy. Drawing from her vast experience, Sarah founded the Sarah Byrne Acting Academy in 2016, driven by her passion for nurturing aspiring actors of all ages across the North West.</p>
                        <p>The impact of Sarah's guidance and instruction is evident through the accomplishments of her students. They have graced numerous TV channels, starred in compelling short films, and made their mark in captivating commercial advertisements. To further support their journey, Sarah, alongside Sue Burns, established SBM Agency (www.sbmagency.co.uk), an agency dedicated to representing their talented students.</p>
                        <p><b>Discover the transformative power of the Sarah Byrne Acting Academy and embark on a journey to unleash your acting potential.</b></p>
                    </div>
                    <img src="/img/thumbnail_Sarah 2.webp" />
                </div>
            </section>
            <section className='content-wrapper'>
                <div className='content grid col-2' style={{
                    paddingTop: "0"
                }}>
                    <img src="/img/thumbnail_Sue 2.webp" />
                    <div style={{
                        fontSize: ".9rem"
                    }}>
                        <ContentTitle
                            title = "Sue Burns"
                            accentTitle = "Meet"
                            underline="true"
                        />
                        <p style={{marginTop: 0}}>Introducing Sue Burns, an integral part of the Sarah Byrne Acting Academy. With a wealth of experience in TV, film, and theatre production, Sue brings her expertise to create a nurturing and family-like atmosphere for all students attending classes.</p>
                        <p>Sue's exceptional planning, organizational, and communication skills ensure that every aspect of managing the Sarah Byrne Acting Academy is taken care of.  From coordinating schedules to enhancing your child's enjoyment during their time in class, Sue is dedicated to providing a seamless experience.</p>
                        <p>With an impressive 30-year journey in the arts world, Sue possesses a deep understanding of how production companies collaborate with actors. This insight allows her to provide valuable guidance and support to students, helping them navigate the industry with confidence.</p>
                    </div>
                </div>
            </section>
            <section className='content-wrapper'>
                <div className='content font-center column'>
                    <h3>Our Students can be seen on TV and Film!</h3>
                    <div className={styles.brands}>
                        <img src="/img/brands/Film4_RGB_Colour_Positive.webp" />
                        <img src="/img/brands/itv.webp" />
                        <img src="/img/brands/bbc.webp" />
                        <img src="/img/brands/netflix-logo-B24AFC06E5-seeklogo_com.webp" />
                        <img src="/img/brands/prime.webp" />
                        <img src="/img/brands/Channel-4-Logo-1982.webp" />
                        <img src="/img/brands/dave.webp" />
                        <img src="/img/brands/insta.webp" />
                        <img src="/img/brands/fbook.webp" />
                        <img src="/img/brands/tiktok.webp" />
                    </div>
                </div>
            </section>
            <Footer />
        </Layout>
    );
}
