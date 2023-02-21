import React, { useEffect } from 'react'
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

const cx = classNames.bind(styles);

const Home = () => {
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
            <Contact />
            <Footer />
        </div>
    )
}

export default Home