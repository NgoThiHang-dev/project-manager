import React from 'react'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Slide.module.scss';
import routesConfig from '~/config/routes';

import imgSlide1 from '../../../../assets/img/carousel-1.jpg';
import imgSlide2 from '../../../../assets/img/carousel-2.jpg';

const cx = classNames.bind(styles);

const Slide = () => {
    return (
        <div className={cx('slide')}>
            {/* <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className={cx('carousel-inner')}>
                        <div className="carousel-item active">
                            <img src={imgSlide1} className="w-100" alt="Slide 1" />
                            <div className={cx('carousel-caption')}>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h1 className="display-1 text-white mb-5 animated slideInDown">Make Your Home Like Garden</h1>
                                            <Link to="" className="btn btn-primary py-sm-3 px-sm-4">Explore More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('carousel-inner')}>
                            <img src={imgSlide2} className="w-100" alt="Slide 2" />
                            <div className={cx('carousel-caption')}>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-7">
                                            <h1 className="display-1 text-white mb-5 animated slideInDown">Create Your Own Small Garden At Home</h1>
                                            <Link to="" className="btn btn-primary py-sm-3 px-sm-4">Explore More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className={cx('carousel-control-prev')} type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className={cx('carousel-control-prev-icon')} aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className={cx('carousel-control-next')} type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className={cx('carousel-control-next-icon')} aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div> */}

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imgSlide1} className="w-100" alt="Slide 1" />
                        <div className={cx('carousel-caption')}>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h1 className="display-1 text-white mb-5 animated slideInDown">Make Your Home Like Garden</h1>
                                        <Link to="" className="btn btn-primary py-sm-3 px-sm-4">Explore More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={imgSlide2} className="w-100" alt="Slide 1" />
                        <div className={cx('carousel-caption')}>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-7">
                                        <h1 className="display-1 text-white mb-5 animated slideInDown">Create Your Own Small Garden At Home</h1>
                                        <Link to="" className="btn btn-primary py-sm-3 px-sm-4">Explore More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className={cx('carousel-control-prev-icon')} aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className={cx('carousel-control-next-icon')} aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slide