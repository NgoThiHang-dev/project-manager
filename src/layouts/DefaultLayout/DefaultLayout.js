import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Sidebar from '../components/Sidebar/Sidebar';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper-admin', 'd-flex')}>
            <div className={cx('layout-sidebar')}>
                <Sidebar />
            </div>
            <div className={cx('layout-admin-content')}>
                {children}
            </div>
        </div>
    )
}

export default DefaultLayout