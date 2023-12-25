import React, { useState, useEffect } from 'react';
import styles from "./index.module.css";

export default function Gallery(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setTransition] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTransition(true);

            // Wait for the transition to complete before changing the index
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % props.images.length);
                setTransition(false);
            }, 500);
        }, 1500);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount

    }, [props.images.length]);

    let images = props.images.map((img, index) => (
        <img
            key={index}
            src={img}
            alt={`Image ${index}`}
            className={` ${styles.galleryImage} ${ index === currentIndex - 1 ? styles.lastActive : "" } ${ index === currentIndex ? styles.active : "" } ${index === currentIndex && isTransitioning ? styles.fadeIn : ''} `}
            style={{ opacity: index === currentIndex ? 1 : 0 }}
        />
    ));

    return (
        <section className="content_wrapper">
            <div className={`content ${styles.Gallery}`}>
                <div className={styles.GalleryImages}>
                    {images}
                </div>
            </div>
        </section>
    );
}
