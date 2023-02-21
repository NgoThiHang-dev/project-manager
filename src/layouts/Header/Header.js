import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

const Header = () => {
    const [addClassShow, setAddClassShow] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset;
        console.log('position');
        console.log(position);
        if (position > 300) {
            setAddClassShow(true);
        }
        if (position < 300) {
            setAddClassShow(false);
        }
    };

    console.log('addClassShow');
    console.log(addClassShow);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={cx('topbar-header', 'container-fluid', 'bg-dark-custom', 'text-light px-0 py-2')}>
                <div className="row gx-0 d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center me-4">
                            <span className="fa fa-phone-alt me-2"></span>
                            <span>+012 345 6789</span>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center">
                            <span className="far fa-envelope me-2"></span>
                            <span>info@example.com</span>
                        </div>
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <div className="h-100 d-inline-flex align-items-center mx-n2">
                            <span>Follow Us:</span>
                            <Link to="" className="btn btn-link text-light">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link to="live:.cid.9f55725811b707c2" className="btn btn-link text-light">
                                <i className="fab fa-skype"></i>
                            </Link>
                            <Link to="" className="btn btn-link text-light">
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                            <Link to="" className="btn btn-link text-light">
                                <i className="fab fa-instagram"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <nav
                className={cx('navbar-header', 'navbar navbar-expand-lg bg-white navbar-light sticky-top p-0', {
                    'shadow-sm': addClassShow ? true : false,
                })}
                style={addClassShow ? { top: '0px' } : { top: '-100px' }}
            >
                <Link
                    to={routesConfig.home}
                    className={cx(
                        'navbar-brand',
                        'd-flex',
                        'align-items-center',
                        'px-4',
                        'px-lg-5',
                        'text-decoration-none',
                        'height-80',
                    )}
                >
                    <h1 className={cx('logo-txt', 'm-0')}>Gardener</h1>
                </Link>
                <button
                    type="button"
                    className={cx('navbar-toggler', 'me-4')}
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className={cx('navbar-toggler-icon')}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link
                            to={routesConfig.home}
                            className={cx('nav-item', 'nav-link', 'active', 'text-decoration-none')}
                        >
                            Home
                        </Link>
                        <Link to="#about" className={cx('nav-item', 'nav-link', 'text-decoration-none')}>
                            About
                        </Link>
                        <Link to={routesConfig.home} className={cx('nav-item', 'nav-link', 'text-decoration-none')}>
                            Services
                        </Link>
                        <Link to={routesConfig.home} className={cx('nav-item', 'nav-link', 'text-decoration-none')}>
                            Projects
                        </Link>

                        {/* <div className={cx('nav-item', 'dropdown')}>
                                <Link to={routesConfig.home} className={cx('nav-link', 'dropdown-toggle')} data-bs-toggle="dropdown">Pages</Link>
                                <div className={cx('dropdown-menu', 'bg-light', 'm-0')}>
                                    <Link to={routesConfig.home} className={cx('dropdown-item')}>Features</Link>
                                    <Link to={routesConfig.home} className={cx('dropdown-item')}>Free Quote</Link>
                                    <Link to={routesConfig.home} className={cx('dropdown-item')}>Our Team</Link>
                                    <Link to={routesConfig.home} className={cx('dropdown-item')}>Testimonial</Link>
                                    <Link to={routesConfig.home} className={cx('dropdown-item')}>404.html</Link>
                                </div>
                            </div> */}
                        <Link to={routesConfig.home} className={cx('nav-item', 'nav-link', 'text-decoration-none')}>
                            Contact
                        </Link>
                    </div>
                    <Link
                        to={routesConfig.home}
                        className={cx(
                            'btn',
                            'btn-green-custom',
                            'py-4',
                            'px-lg-4',
                            'rounded-0',
                            'd-none',
                            'd-lg-block',
                            'text-decoration-none',
                            'text-white',
                        )}
                    >
                        Get A Quote<i className="fa fa-arrow-right ms-3"></i>
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Header;
