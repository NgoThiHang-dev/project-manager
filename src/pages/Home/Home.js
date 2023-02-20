import React from 'react'
import Header from '../../layouts/Header/Header'

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Slide from './component/Slide/Slide';

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <div className={cx('wrapper-home')}>
            <Header />
            <Slide />
        </div>
    )
}

export default Home