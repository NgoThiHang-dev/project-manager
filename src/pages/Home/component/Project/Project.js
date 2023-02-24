import React, { useState } from 'react'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Project.module.scss';
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import imgProject1 from '../../../../assets/img/projects/project-1.png';

const cx = classNames.bind(styles);

const dataProject = [
    { id: 1, nameProject: 'Wordpress', description: 'E-commerce', linkWeb: '', linkGitHub: '', image: imgProject1 },
    { id: 2, nameProject: 'Wordpress', description: 'E-commerce', linkWeb: '', linkGitHub: '', image: imgProject1 },
    { id: 3, nameProject: 'Wordpress', description: 'E-commerce', linkWeb: '', linkGitHub: '', image: imgProject1 },
]

const Project = () => {
    const [listProject, setListProject] = useState(dataProject);



    return (
        <div id="projects" className={cx('project-content', 'py-5')}>
            <div className={cx('container-xxl')}>
                <div className={cx('container')}>
                    <div className={cx('text-center mx-auto wow fadeInUp')} data-wow-delay="0.1s">
                        <p className={cx('text-color-green', 'fs-5 fw-bold')}>Our Project</p>
                        <h1 className={cx('text-color-main', 'display-5 mb-5')}>Services That We Offer For You</h1>
                    </div>
                    <div className={cx('row', 'g-5')}>
                        {listProject.map((project, idx) => {
                            return (
                                <div className={cx('col-lg-4 col-md-6 wow fadeInUp', 'item-project')} data-wow-delay="0.1s" key={idx}>
                                    <div className={cx('item-project')}>
                                        <div className={cx('border-top', 'border-5', 'border-green', 'rounded', 'overflow-hidden', 'bg-white', 'shadow')}>
                                            <div className="text-center p-4">
                                                <img src={project.image} className={cx('img-fluid', 'mb-4', 'project-img-screen-shot')} alt="" />
                                                <h5 className="fw-bold mb-1">{project.nameProject}</h5>
                                                <small>{project.description}</small>
                                            </div>
                                            <div className={cx('d-flex justify-content-center p-3', 'bg-green')}>
                                                <Link className={cx('btn', 'btn-square', 'text-color-green', 'bg-white', 'm-1', 'wow fadeInUp')} to={project.linkWeb} data-wow-delay="0.3s">
                                                    <AiOutlineLink />
                                                </Link>
                                                <Link className={cx('btn', 'btn-square', 'text-color-green', 'bg-white', 'm-1', 'wow fadeInUp')} to={project.linkGitHub} data-wow-delay="0.3s">
                                                    <AiOutlineGithub />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project