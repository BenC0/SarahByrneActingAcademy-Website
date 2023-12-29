import styles from "./index.module.css"

export default function HomepageContent() {
    return (
        <section className="content_wrapper d-grid col-2 m-flex m-column t-flex t-column">
            <div className={`${styles.halfContent} ${styles.callout} content`}>
                <h1>
                    <span className="accent-txt">Sarah Byrne Acting Academy </span>
                    <span>is for young people aged 4-25 years with an interest in the art of Acting</span>
                </h1>
            </div>

            <div className={`${styles.halfContent} ${styles.iconList} content column`}>
                <div className="icon-list-item m-column content a-center">
                    <img src="/img/Drama-Symbol.webp" className="icon" />
                    <p>We teach our students the skills to become great actors while having fun, building confidence & meeting new friends.</p>
                </div>
                <div className="icon-list-item m-column content a-center">
                    <img src="/img/confidence-symbol_edited.webp" className="icon" />
                    <p>Our classes focus on confidence building and mentoring young people’s natural abilities.</p>
                </div>
                <div className="icon-list-item m-column content a-center">
                    <img src="/img/star-symbol_edited.webp" className="icon" />
                    <p>With our passionate tutors and industry connections our academy is the one where stars are born.</p>
                </div>
            </div>
        </section>
    )
}