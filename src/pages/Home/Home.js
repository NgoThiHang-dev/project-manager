import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Slide from './component/Slide/Slide';
import WOW from 'wowjs';
import Header from '~/layouts/Header';
import Feature from './component/Feature/Feature';
import About from './component/About/About';
import Facts from './component/Facts/Facts';
import Service from './component/Service/Service';
import Contact from './component/Contact/Contact';
import Footer from '~/layouts/Footer';
import Project from './component/Project/Project';
import Partner from './component/Partner/Partner';

const cx = classNames.bind(styles);

const Home = () => {
    const [isShowScollToTop, setIsShowScollToTop] = useState(false);

    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position > 300) {
            setIsShowScollToTop(true);
        }
        if (position < 300) {
            setIsShowScollToTop(false);
        }
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])


    return (
        <div className={cx('wrapper-home')}>
            <Header />
            <Slide />
            <Feature />
            <About />
            <Facts />
            <Service />
            <Project />
            <Contact />
            <Partner />
            <Footer />
            <div>
                <button className={cx('btn btn-lg', 'btn-ex-more', 'btn-lg-square', 'rounded-circle', 'back-to-top')}
                    onClick={handleBackToTop}
                    style={isShowScollToTop ? { display: "block" } : { display: "none" }}>
                    <i className="bi bi-arrow-up"></i>
                </button>
            </div>

        </div>
    )
}

export default Home