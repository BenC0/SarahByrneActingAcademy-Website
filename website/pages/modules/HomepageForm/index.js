import Link from "next/link";
import styles from "./index.module.css"

export function Form() {
    return (
        <ul className={styles.contactForm}>
            <li>Phone:&nbsp;<a href="tel:07803230999">07803 230999</a></li>
            <li>Social Media:&nbsp;
                <Link href="https://www.facebook.com/sarahbyrneactingacademy" target="_blank">
                    <img src="/img/fb.webp" alt="f" style={{
                        height: 32,
                        width: 32,
                        marginBottom: "-5px",
                    }}/>
                </Link>
                <Link href="hhttps://www.instagram.com/sarahbyrneacting/" target="_blank">
                    <img src="/img/insta.webp" alt="i" style={{
                        height: 32,
                        width: 32,
                        marginBottom: "-5px",
                    }}/>
                </Link>
            </li>
            <li>Email:&nbsp;<a href="mailto:academy@sarahbyrneactingacademy.co.uk">academy@sarahbyrneactingacademy.co.uk</a></li>
        </ul>
        // <form action="" className={`${styles.form} grid col-2`}>
        //     <input type="text" placeholder="First Name" name="First Name" />
        //     <input type="text" placeholder="Last Name" name="Last Name" />
        //     <input type="email" placeholder="Email" name="Email" />
        //     <input type="text" placeholder="Phone" name="Phone" />
        //     <textarea type="textarea" placeholder="Type your message here..." name="Additional Notes"></textarea>
        //     <input type="submit" value="Submit" />
        // </form>
    )
}

export default function HomepageForm() {
    return (
        <section id="HomepageForm" className="content_wrapper">
            <div className={`${styles.titleContainer} content a-center`}>
                <h2>We have classes in Manchester and Oldham</h2>
            </div>
            <div className="content a-flex-start">
                <div className={`${styles.form_wrapper}`}>
                    <div className="copy">
                        <h3>Book your <span className="fc-black">free</span> trial with us</h3>
                    </div>
                    <Form />
                </div>
                <div className={styles.formImage}>
                    <img src="/img/vincoole_SBM_Agency047.webp" />
                </div>
            </div>
        </section>
    )
}