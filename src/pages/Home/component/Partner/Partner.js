import React from 'react'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Partner.module.scss';

import imgPartner1 from '../../../../assets/img/partner/glotechSvg2.svg';
import imgPartner2 from '../../../../assets/img/partner/dalatdlu.png';
import imgPartner3 from '../../../../assets/img/partner/react.png';
import imgPartner4 from '../../../../assets/img/partner/bootstrap.png';

const cx = classNames.bind(styles);

const Partner = () => {
    return (
        <div id="partner" className={cx('partner', 'py-5')}>
            <div className={cx('container-fluid', 'd-flex', 'flex-wrap', 'justify-content-center', 'py-5 pt-lg-0')}>
                <div className={cx('container')}>
                    <div className={cx('text-center mx-auto wow fadeInUp')} data-wow-delay="0.1s">
                        <p className={cx('text-color-green', 'fs-5 fw-bold')}>Our partner</p>
                        <h1 className={cx('text-color-main', 'display-5 mb-5')}>Services That We Offer For You</h1>
                    </div>
                    <div className={cx('row', 'justify-content-center')}>
                        <div className={cx('col-md-3 col-6', 'partner-item', 'mb-4')}>
                            <Link to="">
                                <img src={imgPartner2} alt="" className={cx('partner-image')} />
                            </Link>
                        </div>
                        <div className={cx('col-md-3 col-6', 'partner-item', 'mb-4')}>
                            <Link to="">
                                <img src={imgPartner1} alt="" className={cx('partner-image')} />
                            </Link>
                        </div>
                        <div className={cx('col-md-3 col-6', 'partner-item', 'mb-4')}>
                            <Link to="">
                                <img src={imgPartner3} alt="" className={cx('partner-image')} />
                            </Link>
                        </div>
                        <div className={cx('col-md-3 col-6', 'partner-item', 'mb-4')}>
                            <Link to="">
                                <img src={imgPartner4} alt="" className={cx('partner-image')} />
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Partner