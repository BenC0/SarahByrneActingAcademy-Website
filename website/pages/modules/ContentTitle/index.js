import styles from "./index.module.css"

export default function ContentTitle(props) {
    const underline = !!props.underline
    return (
        <section className="content_wrapper">
            <div className={`content column ${styles.content_container} ${underline ? styles.underline: ""}`}>
                <h2 className="accent-txt">{props.accentTitle}</h2>
                <h1>{props.title}</h1>
            </div>
        </section>
    )
}