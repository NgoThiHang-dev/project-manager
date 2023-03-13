import React from 'react';
import classNames from 'classnames/bind';
import styles from './Recruitment.module.scss';
import Header from '~/layouts/components/Header';
import Contact from '../Home/component/Contact/Contact';
import Footer from '~/layouts/components/Footer';
import BannerRecruitment from './component/BannerRecruitment/BannerRecruitment';
import { useNavigate } from 'react-router-dom';


const cx = classNames.bind(styles);

const dataRecruitment = [
    { id: 1, nameJob: 'Front-end Developer', description: 'Go to work right now. Consider a salary increase in 2 times/year. Senior salary every 12 months. Social insurance, annual leave, full holidays. There are opportunities for promotion and travel every year. CV sent to email hr@gmail.com', dueDate: '13/04/2023' },
    { id: 1, nameJob: 'PHP developer', description: 'Go to work right now. Consider a salary increase in 2 times/year. Senior salary every 12 months. Social insurance, annual leave, full holidays. There are opportunities for promotion and travel every year. CV sent to email hr@gmail.com', dueDate: '13/04/2023' },
    { id: 1, nameJob: 'Wordpress Developer', description: 'Go to work right now. Consider a salary increase in 2 times/year. Senior salary every 12 months. Social insurance, annual leave, full holidays. There are opportunities for promotion and travel every year. CV sent to email hr@gmail.com', dueDate: '13/04/2023' },
    { id: 1, nameJob: '.Net Developer', description: 'Go to work right now. Consider a salary increase in 2 times/year. Senior salary every 12 months. Social insurance, annual leave, full holidays. There are opportunities for promotion and travel every year. CV sent to email hr@gmail.com', dueDate: '13/04/2023' },
    { id: 1, nameJob: 'React Developer', description: 'Go to work right now. Consider a salary increase in 2 times/year. Senior salary every 12 months. Social insurance, annual leave, full holidays. There are opportunities for promotion and travel every year. CV sent to email hr@gmail.com', dueDate: '13/04/2023' },
    { id: 1, nameJob: 'Angular Developer', description: 'Go to work right now. Consider a salary increase in 2 times/year. Senior salary every 12 months. Social insurance, annual leave, full holidays. There are opportunities for promotion and travel every year. CV sent to email hr@gmail.com', dueDate: '13/04/2023' },
]


const Recruitment = () => {

    const navigate = useNavigate();

    const handleDetailRecruit = (id, nameJob) => {
        navigate(`/detail-recruitment/${id}`, { state: { nameJob: nameJob } });
    }

    return (
        <div>
            <Header />
            <BannerRecruitment />
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        {dataRecruitment.map((item, idx) => {
                            return (
                                <div className="col-xl-4 col-lg-6" key={idx} onClick={() => handleDetailRecruit(item.id, item.nameJob)}>
                                    <div className={cx('recruitment-item')}>
                                        <h4 className={cx('recruitment-name')}>{item.nameJob}</h4>
                                        <p className={cx('recruitment-description')}>{item.description}</p>
                                        <span className={cx('recruitment-date')}>
                                            {item.dueDate}
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </div>
    );
};

export default Recruitment;
