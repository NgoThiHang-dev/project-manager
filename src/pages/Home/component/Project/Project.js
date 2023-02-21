import React from 'react'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Feature.module.scss';
import { MdClose } from "react-icons/md";



const cx = classNames.bind(styles);

const Project = () => {
    return (
        <div className={cx('Project-content')}>
            <div className={cx('container-xxl', 'py-5')}>
                <div className={cx('container')}>
                    <div className={cx('text-center mx-auto wow fadeInUp')} data-wow-delay="0.1s">
                        <p className={cx('text-color-green', 'fs-5 fw-bold')}>Our Services</p>
                        <h1 className={cx('text-color-main', 'display-5 mb-5')}>Services That We Offer For You</h1>
                    </div>
                    <div className={cx('row', 'g-5')}>
                        {/* {listService.map((lstService, idx) => {
                            return (
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={idx}>
                                    <div className={cx('service-item', 'rounded', 'd-flex h-100')} key={idx}>
                                        <div className={cx('service-img', 'rounded')}>
                                            <img className={cx('img-fluid')} src={lstService.image} alt="" />
                                        </div>
                                        <div className={cx('service-text', 'rounded', 'p-5')}>
                                            <div className={cx('btn-square', 'rounded-circle', 'mx-auto', 'mb-3')}>
                                                <img className={cx('img-fluid')} src={lstService.icon} alt="Icon" />
                                            </div>
                                            <h4 className="mb-3">Landscaping</h4>
                                            <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                            <Link to="" className={cx('btn', 'btn-read-more', 'text-decoration-none')}>
                                                <i className={cx('fa fa-plus me-2 ', 'btn-sm')}></i>
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project