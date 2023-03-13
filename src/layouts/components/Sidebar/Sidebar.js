import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';
import { MdOutlineArticle } from "react-icons/md";
import { AiOutlineHome } from 'react-icons/ai';
import { FaUsers } from "react-icons/fa";

const cx = classNames.bind(styles);

const listMenu = [
  {
    icon: <AiOutlineHome />,
    name: 'Dashboard',
    path: '/dashboard',
  },
  {
    icon: <FaUsers />,
    name: 'User',
    path: '/user',
  },
  {
    icon: <AiOutlineHome />,
    name: 'Project',
    path: '/project',
  },
  {
    icon: <MdOutlineArticle />,
    name: 'Blog',
    path: '/blog',
  },
]

const Sidebar = () => {

  return (
    <div className={cx('wrapper-sidebar')}>
      <div className={cx('sidebar-container', 'bg-menu-theme')}>
        <div className={cx('sidebar-menu', 'pt-4')}>
          <div className={cx('sidebar-logo', 'text-center', 'mb-4')}>
            <h3>Felicity</h3>
          </div>
          <div>
            {listMenu.map((item, idx) => {
              return (
                <div className={cx('menu-item',
                  window.location.pathname === item.path ? 'active' : '',
                )} key={idx}>
                  <Link to={item.path} className={cx('menu-link', 'text-decoration-none', 'd-flex')}>
                    <div className={cx('me-2')}>{item.icon}</div>
                    <span className={cx('menu-text')}>{item.name}</span>
                  </Link>
                </div>
              )
            })}
          </div>


          {/* <div className={cx('menu-item')}>
            <Link to="" className={cx('menu-link', 'text-decoration-none')}>
              <MdClose className={cx('me-2')} />
              <span className={cx('menu-text')}>Dashboard</span>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Sidebar