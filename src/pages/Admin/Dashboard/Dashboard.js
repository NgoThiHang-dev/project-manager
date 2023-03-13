import React from 'react'
import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';
import HeaderSearch from './component/HeaderSearch/HeaderSearch';
import imgBanner from '../../../assets/img/man-with-laptop-light.png'

import icons1 from '../../../assets/img/unicons/cc-primary.png';
import icons2 from '../../../assets/img/unicons/chart-success.png';
import icons3 from '../../../assets/img/unicons/paypal.png';
import icons4 from '../../../assets/img/unicons/wallet-info.png';
import { AiOutlineArrowUp } from 'react-icons/ai';

const cx = classNames.bind(styles);

const dataStatis = [
  { id: 1, name: "Profit", price: '$12,628', percent: 72.80, icons: icons1 },
  { id: 2, name: "Sales", price: '$12,628', percent: 72.80, icons: icons2 },
  { id: 3, name: "Payments", price: '$12,628', percent: 72.80, icons: icons3 },
  { id: 4, name: "Transactions", price: '$12,628', percent: 72.80, icons: icons4 },
  { id: 5, name: "Transactions", price: '$12,628', percent: 72.80, icons: icons4 },
  { id: 6, name: "Transactions", price: '$12,628', percent: 72.80, icons: icons4 }
]

const Dashboard = () => {
  return (
    <div className={cx('wp-content-admin')}>
      <HeaderSearch />
      <div className={cx('banner-dash', 'my-2')}>
        <div className={'row'}>
          <div className={cx('col-xl-8')}>
            <div className={cx('card-banner')}>
              <h4 className={cx('text-center', 'mb-2')}>Congratulations HangNgo! 🎉</h4>
              <p className={cx('mb-4', 'text-center')}>You have done <b>72%</b> more sales today. Check your new badge in your profile.</p>
            </div>
          </div>
          <div className={cx('col-xl-4')}>
            <div className={cx('pb-0 px-0 px-md-4')}>
              <img src={imgBanner} alt="" className={cx('img-banner')} />
            </div>
          </div>
        </div>
      </div>
      <div className={cx('statistic')}>
        <div className={cx('row')}>
          {dataStatis.map((item) => (
            <div className={cx('col-xl-2')} key={item.id}>
              <div className={cx('box-showdown')}>
                <div className={cx('card-body')}>
                  <div className={cx('card-title')}>
                    <div className={cx('avatar flex-shrink-0')}>
                      <img
                        src={item.icons}
                        alt="chart success"
                        className={cx('rounded', 'icon-statis')}
                      />
                    </div>
                  </div>
                  <span className={cx('fw-semibold d-block mb-1', 'text-color-gray')}>{item.name}</span>
                  <h3 className={cx('card-title mb-2', 'text-color-main')}>{item.price}</h3>
                  <small className={cx('fw-semibold', 'text-color-green')}><AiOutlineArrowUp /> +{item.percent}%</small>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
      <div className={cx('chart-statistic')}>
        <div className={cx('col-xl-6')}>

        </div>
        <div className={cx('col-xl-6')}>

        </div>
      </div>
    </div>
  )
}

export default Dashboard