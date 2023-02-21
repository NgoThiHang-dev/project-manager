import React from 'react'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Feature.module.scss';
import { MdClose } from "react-icons/md";



const cx = classNames.bind(styles);

const Feature = () => {
    return (
        <div className={cx('feature')}>
            <div className={cx('container-fluid', 'top-feature', 'py-5 pt-lg-0')}>
                <div className={cx('container', 'py-5 pt-lg-0')}>
                    <div className={cx('row', 'gx-0')}>
                        <div className={cx('col-lg-4', 'wow fadeIn')} data-wow-delay="0.1s">
                            <div className={cx('feature-card')}>
                                <div className={cx('icon-feature', 'bg-icon', 'flex-shrink-0', 'rounded-circle')}>
                                    <MdClose />
                                </div>
                                <div className={cx('ps-3')}>
                                    <h4>No Hidden Cost</h4>
                                    <span>There are no hidden costs. No extra fee!</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-lg-4', 'wow fadeIn')} data-wow-delay="0.3s">
                            <div className={cx('feature-card')}>
                                <div className={cx('icon-feature', 'bg-icon', 'flex-shrink-0', 'rounded-circle')}>
                                    <MdClose />
                                </div>
                                <div className={cx('ps-3')}>
                                    <h4>No Hidden Cost</h4>
                                    <span>There are no hidden costs. No extra fee!</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-lg-4', 'wow fadeIn')} data-wow-delay="0.5s">
                            <div className={cx('feature-card')}>
                                <div className={cx('icon-feature', 'bg-icon', 'flex-shrink-0', 'rounded-circle')}>
                                    <MdClose />
                                </div>
                                <div className={cx('ps-3')}>
                                    <h4>No Hidden Cost</h4>
                                    <span>There are no hidden costs. No extra fee!</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Feature