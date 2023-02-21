import React from 'react'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);


const Footer = () => {
    return (
        <div className={cx('footer')}>
            <div className={cx('container-fluid', 'bg-dark', 'text-light footer mt-5 py-4 wow fadeIn')} data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-4">
                            <h4 className="text-white mb-4">Our Office</h4>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                            <div class="d-flex pt-2">
                                <Link to="" className={cx('btn-square', 'btn', 'btn-outline-light', 'rounded-circle', 'me-2')}>
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                                <Link to="" className={cx('btn-square', 'btn', 'btn-outline-light', 'rounded-circle', 'me-2')}>
                                    <i className="fab fa-skype"></i>
                                </Link>
                                <Link to="" className={cx('btn-square', 'btn', 'btn-outline-light', 'rounded-circle', 'me-2')}>
                                    <i className="fab fa-linkedin-in"></i>
                                </Link>
                                <Link to="" className={cx('btn-square', 'btn', 'btn-outline-light', 'rounded-circle', 'me-2')}>
                                    <i className="fab fa-instagram"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <h4 className="text-white mb-4">Quick Links</h4>
                            <Link to="" className={cx('btn', 'btn-hn-link')}>
                                Home
                            </Link>
                            <Link to="" className={cx('btn', 'btn-hn-link')}>
                                About Us
                            </Link>
                            <Link to="" className={cx('btn', 'btn-hn-link')}>
                                Contact Us
                            </Link>
                            <Link to="" className={cx('btn', 'btn-hn-link')}>
                                Our Services
                            </Link>

                        </div>
                        <div className="col-lg-4 col-md-4">
                            <h4 className="text-white mb-4">Newsletter</h4>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className="position-relative w-100">
                                <input className="form-control bg-light border-light w-100 py-3 ps-4 pe-5" type="text"
                                    placeholder="Your email" />
                                <button type="button"
                                    className={cx('btn-ex-more', 'btn py-2 position-absolute top-0 end-0 mt-2 me-2')}>SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('container-fluid py-3', 'copyright')}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; Developed By Hang Corn. All Right Reserved.
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer