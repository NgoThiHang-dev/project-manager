import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Service.module.scss';
import { MdClose } from 'react-icons/md';

import imgService1 from '../../../../assets/img/services/service-1.jpg';
import imgService2 from '../../../../assets/img/services/service-2.jpg';
import imgService3 from '../../../../assets/img/services/service-3.jpg';
import imgService4 from '../../../../assets/img/services/service-4.jpg';
import imgService5 from '../../../../assets/img/services/service-5.jpg';
import imgService6 from '../../../../assets/img/services/service-6.jpg';

import iconService1 from '../../../../assets/img/icon/icons-1.png';
import iconService2 from '../../../../assets/img/icon/icons-2.png';
import iconService3 from '../../../../assets/img/icon/icons-3.png';
import iconService4 from '../../../../assets/img/icon/icons-4.png';
import iconService5 from '../../../../assets/img/icon/icons-5.png';
import iconService6 from '../../../../assets/img/icon/icons-6.png';

const cx = classNames.bind(styles);

const dataService = [
    {
        id: 1,
        title: 'Web System',
        image: imgService1,
        icon: iconService1,
        description: 'We are not only the expert in development but also providing the architect design, infra design and solution consulting.',
    },
    {
        id: 2,
        title: 'Mobile Phone',
        image: imgService2,
        icon: iconService2,
        description: 'We are not only the expert in development but also providing the architect design, infra design and solution consulting.',
    },
    {
        id: 3,
        title: 'AI and Big Data',
        image: imgService3,
        icon: iconService3,
        description: 'Our AI solutions are applying on many products which are using image detection, natural language processing, smart crawling and recommendation system.',
    },
    {
        id: 4,
        title: 'IoT',
        image: imgService4,
        icon: iconService4,
        description: 'The IoT is a tool to capture information from a vast network of touchpoints, aggregate them in a shared system, and use them to improve your business.',
    },
    {
        id: 5,
        title: 'AR/VR',
        image: imgService5,
        icon: iconService5,
        description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
    },
    {
        id: 6,
        title: 'System Development',
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
                                            <h4 className="mb-3">{lstService.title}</h4>
                                            <div className={cx('service-description')}>
                                                <p className="mb-4">
                                                    {lstService.description}
                                                </p>
                                            </div>
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
