import React from 'react';
import classNames from 'classnames/bind';
import styles from './DetailRecruitment.module.scss';
import BannerRecruitment from '../BannerRecruitment/BannerRecruitment';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import { useLocation } from 'react-router-dom';


const cx = classNames.bind(styles);

const DetailRecruitment = () => {

    const location = useLocation();
    // console.log(location);

    return (
        <div>
            <Header />
            <BannerRecruitment />
            <div className="container-xxl py-5">
                <div className="container">
                    <div className={cx('recruit-name-job', 'my-5', 'text-center')}>
                        <h2 className={cx('name-job-detail')}>{location.state.nameJob}</h2>
                    </div>
                    <div className={cx('recruit-description-job', 'my-4')}>
                        <h5>Job description</h5>
                        <ul>
                            <li>Implement modern, interactive web application UI with high demands on quality and reliability.</li>
                            <li>Working with modern technology based on ES6, React, Redux, NextJS.</li>
                            <li>Work closely with the design team to find the most practical approach to developing new UIs.</li>
                            <li>Actively discuss and advise on backend API.</li>
                            <li>Actively deliver products quickly to customers.</li>
                            <li>Research and argue for the appropriate method or technology to solve a problem.</li>
                        </ul>
                    </div>
                    <div className={cx('recruit-require-job', 'my-4')}>
                        <h5>Job Requirements</h5>
                        <ul>
                            <li>Have 1 year of work experience.</li>
                            <li>Proficient with HTML/CSS, JavaScript ES5.6. (Knowing typescript is an advantage)</li>
                            <li>Proficient in cutting HTML/CSS interfaces from design files (Photoshop, Figma, Xd)</li>
                            <li>ReactJS experience (required), ability to work with NextJS</li>
                            <li>Knowledge of Jamstack is an advantage</li>
                            <li>Experience with: HTTP, API, REST, JSON, unit test, XSS, CSRF, sync vs. async, promise, immutability, pure function</li>
                            <li>Experience using Git</li>
                            <li>Ability to discuss approaches and implement alternatives well with the team.</li>
                        </ul>
                    </div>
                    <div className={cx('recruit-benefits-job', 'my-4')}>
                        <h5>Benefits</h5>
                        <ul>
                            <li>Salary negotiable according to ability (Senior by agreement, Junior from $700, Fresher from $350, Intern with allowance). Consider salary increase every 6 months.</li>
                            <li>Social insurance according to labor law, periodical health check.</li>
                            <li>Bao Viet health insurance for employees working for more than 1 year.</li>
                            <li>Bonus for projects, holidays, Tet, mid-year, year-end.</li>
                            <li> Friendly working environment, personal capacity development, Japan branch onsite opportunities
                                🇯🇵 Support to study Japanese outside of school hours</li>
                            <li>Team Building monthly. Join the weekly badminton and football club.</li>
                        </ul>
                    </div>
                    <div className={cx('recruit-info-send', 'my-4')}>
                        <h5>Information sent about</h5>
                        <p>Please send your CV to email hr@gmail.com or contact Miss Hang – 0123456789</p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DetailRecruitment;
