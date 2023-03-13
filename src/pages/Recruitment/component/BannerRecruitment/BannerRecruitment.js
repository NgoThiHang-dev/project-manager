import React from 'react';
import classNames from 'classnames/bind';
import styles from './BannerRecruitment.module.scss';


const cx = classNames.bind(styles);

const BannerRecruitment = () => {
    return (
        <div>
            <div className={cx('container-fluid', 'page-header', 'py-5 mb-5 wow fadeIn')} data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-3 text-white mb-4 animated slideInDown">Recruitment</h1>
                </div>
            </div>
        </div>
    );
};

export default BannerRecruitment;
