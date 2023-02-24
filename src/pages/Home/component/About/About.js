import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './About.module.scss';
import { MdClose } from 'react-icons/md';
import imgSlide1 from '../../../../assets/img/carousel-1.jpg';

const cx = classNames.bind(styles);

const About = () => {
    return (
        <div id="about" className={cx('about', 'py-5')}>
            <div className={cx('container-xxl')}>
                <div className={cx('container')}>
                    <div className={cx('row', 'g-5', 'align-items-end')}>
                        <div className={cx('col-lg-3 col-md-5', 'wow fadeInUp')} data-wow-delay="0.1s">
                            <img src={imgSlide1} alt="about" className={cx('img-about', 'img-fluid', 'rounded')} />
                        </div>
                        <div className={cx('col-lg-6 col-md-7', 'wow fadeInUp')} data-wow-delay="0.3s">
                            <h1 className={cx('text-color-green', 'font-size-5', 'mb-0')}>25</h1>
                            <p className={cx('text-color-green', 'mb-4')}>Year of Experience</p>
                            <h1 className={cx('text-color-main', 'mb-4')}>We Make Your Home Like A Garden</h1>
                            <p className="mb-4">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                                eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore
                                erat amet
                            </p>
                            <Link to="" className={cx('btn', 'btn-ex-more', 'py-sm-3 px-sm-4')}>
                                Explore More
                            </Link>
                        </div>
                        <div className={cx('col-lg-3 col-md-12', 'wow fadeInUp')} data-wow-delay="0.5s">
                            <div className={cx('row', 'g-5')}>
                                <div className="col-12 col-sm-6 col-lg-12">
                                    <div className={cx('border-start ps-4')}>
                                        <i className={cx('text-color-green', 'fa fa-award fa-3x mb-3')}></i>
                                        <h4 className={cx('text-color-green', 'mb-3')}>Award Winning</h4>
                                        <span className={cx('text-color-gray')}>
                                            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-12">
                                    <div className={cx('border-start ps-4')}>
                                        <i className={cx('text-color-green', 'fa fa-users fa-3x mb-3')}></i>
                                        <h4 className={cx('text-color-green', 'mb-3')}>Dedicated Team</h4>
                                        <span className={cx('text-color-gray')}>
                                            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
