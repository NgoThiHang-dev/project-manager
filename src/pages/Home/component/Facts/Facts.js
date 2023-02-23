import React, { useState } from 'react'
import classNames from 'classnames/bind';
import styles from './Facts.module.scss';
import imgSlide1 from '../../../../assets/img/carousel-1.jpg';
import CountUp from 'react-countup';
import { Parallax } from "react-parallax";

const cx = classNames.bind(styles);


const dataContent = [
    { id: 1, numberCount: 50, title: 'Web Service', wowDelay: 0.1 },
    { id: 2, numberCount: 25, title: 'Business System', wowDelay: 0.3 },
    { id: 3, numberCount: 30, title: 'Mobile Application', wowDelay: 0.5 },
    { id: 4, numberCount: 20, title: 'Cloud, AI, IoT', wowDelay: 0.7 },
]

const Facts = () => {
    const [facts, setFacts] = useState(dataContent);


    return (
        <div className={cx('fact-content', 'my-5')}>
            <Parallax bgImage={imgSlide1} strength={500} className={cx()}>
                <div className={cx('facts', 'container-fluid')}>
                    <div className={cx('container', 'py-5')}>
                        <div className={cx('row', 'g-5 m-4')}>
                            {facts.map((fact, idx) => {
                                return (
                                    <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay={`${fact.wowDelay}s`} key={idx}>
                                        <h1 className="display-4 text-white">
                                            <CountUp start={0} end={fact.numberCount} duration={2.75} delay={2}>
                                                {fact.numberCount}
                                            </CountUp>
                                        </h1>
                                        <span className="fs-5 fw-semi-bold text-light">{fact.title}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>

    )
}

export default Facts