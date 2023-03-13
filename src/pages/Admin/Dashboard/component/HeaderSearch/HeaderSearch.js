import React from 'react'
import classNames from 'classnames/bind';
import styles from './HeaderSearch.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { MdAccountCircle, MdLogout } from 'react-icons/md';

import avatar from '../../../../../assets/img/avatar.jpg';

const cx = classNames.bind(styles);

const HeaderSearch = () => {
    return (
        <div className={cx('row', 'row-mp-0', 'search')}>
            <div className={cx('col-xl-10')}>
                <div className={cx('search-info', 'd-flex', 'align-items-center')}>
                    <AiOutlineSearch className={cx('icon-search')} />
                    <input
                        type="text"
                        className={cx('form-control border-0 shadow-none', 'bg-none')}
                        placeholder="Search..."
                        aria-label="Search..."
                    />
                </div>
            </div>
            <div className={cx('col-xl-2')}>
                <div className={cx('menu-user__item', 'd-flex justify-content-end')}>
                    <div className={cx('dropdown', 'dropdown-profile')}>
                        <button
                            className={cx('dropdown-toggle', 'custom-btn-dropdown')}
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img src={avatar} alt="Avatar" className={cx('avatar')} />
                        </button>
                        <ul className="dropdown-menu">
                            <li className={cx('my-profile')}>
                                <img src={avatar} alt="Avatar" className={cx('avatar')} />
                                <div className={cx('info-profile')}>
                                    <span className={cx('info-profile-username')}>
                                        Hang Ngo
                                    </span>
                                    <label className={cx('info-profile-email')}>hangnt036@gmail.com</label>
                                </div>
                            </li>
                            <li>
                                <hr className={cx('dropdown-divider')} />
                            </li>
                            <li className={cx('my-profile')}>
                                <Link className="dropdown-item" to="#">
                                    <MdAccountCircle className="me-3" style={{ fontSize: '24px' }} />
                                    <span className={cx('header-text-span')}>Profile</span>
                                </Link>
                            </li>
                            <li>
                                <hr className={cx('dropdown-divider')} />
                            </li>
                            <li className={cx('my-profile')}>
                                <button
                                    className={cx('btn-logout')}
                                // onClick={handleLogout}
                                >
                                    <MdLogout className="me-3" style={{ fontSize: '24px' }} />
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderSearch