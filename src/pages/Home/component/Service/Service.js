import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Service.module.scss';
import { MdClose } from 'react-icons/md';

import imgService1 from '../../../../assets/img/service-1.jpg';
import imgService2 from '../../../../assets/img/service-2.jpg';
import imgService3 from '../../../../assets/img/service-3.jpg';
import imgService4 from '../../../../assets/img/service-4.jpg';
import imgService5 from '../../../../assets/img/service-5.jpg';
import imgService6 from '../../../../assets/img/service-6.jpg';
import iconService1 from '../../../../assets/img/icon/icon-2.png';
import iconService2 from '../../../../assets/img/icon/icon-3.png';
import iconService3 from '../../../../assets/img/icon/icon-4.png';
import iconService4 from '../../../../assets/img/icon/icon-5.png';
import iconService5 from '../../../../assets/img/icon/icon-6.png';
import iconService6 from '../../../../assets/img/icon/icon-8.png';

import CountUp from 'react-countup';
import { Parallax, Background } from 'react-parallax';

const cx = classNames.bind(styles);

const dataService = [
    {
        id: 1,
        title: 'Landscaping',
        image: imgService1,
        icon: iconService1,
        description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
    },
    {
        id: 2,
        title: 'Landscaping',
        image: imgService2,
        icon: iconService2,
        description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
    },
    {
        id: 3,
        title: 'Landscaping',
        image: imgService3,
        icon: iconService3,
        description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
    },
    {
        id: 4,
        title: 'Landscaping',
        image: imgService4,
        icon: iconService4,
        description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
    },
    {
        id: 5,
        title: 'Landscaping',
        image: imgService5,
        icon: iconService5,
        description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
    },
    {
        id: 6,
        title: 'Landscaping',
        image: imgService6,
        icon: iconService6,
        description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
    },
];

const Service = () => {
    const [listService, setListService] = useState(dataService);

    return (
        <div id="services" className={cx('service-content')}>
            <div className={cx('container-xxl', 'py-5')}>
                <div className={cx('container')}>
                    <div className={cx('text-center mx-auto wow fadeInUp')} data-wow-delay="0.1s">
                        <p className={cx('text-color-green', 'fs-5 fw-bold')}>Our Services</p>
                        <h1 className={cx('text-color-main', 'display-5 mb-5')}>Services That We Offer For You</h1>
                    </div>
                    <div className={cx('row', 'g-5')}>
                        {listService.map((lstService, idx) => {
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
                                            <p className="mb-4">
                                                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam
                                                stet diam sed stet.
                                            </p>
                                            <Link to="" className={cx('btn', 'btn-read-more', 'text-decoration-none')}>
                                                <i className={cx('fa fa-plus me-2 ', 'btn-sm')}></i>
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
