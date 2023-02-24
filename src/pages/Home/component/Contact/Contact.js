import React from 'react'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Contact.module.scss';
import imgSlide1 from '../../../../assets/img/carousel-2.jpg';
import { Parallax, Background } from "react-parallax";

const cx = classNames.bind(styles);

const Contact = () => {
    return (
        <Parallax bgImage={imgSlide1} strength={500}>
            <div id="contact" className={cx('contact-content', 'cover-background', 'py-5')}>
                <div className="container-xxl">
                    <div className={cx('container', 'contact-content-bg')}>
                        <div className="row g-5">
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <p className={cx('text-color-green', 'fs-5 fw-bold')}>Contact Us</p>
                                <h1 className={cx('text-color-main', 'display-5 mb-5')}>If You Have Any Query, Please Contact Us</h1>
                                <p className={cx('text-color-gray', 'mb-4')}>We will strictly adhere <Link to="" className={cx('text-color-green', 'text-decoration-none')}>Privacy policy</Link> to the above and thoroughly protect the information received from our customers.</p>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                                <label htmlFor="name" className={cx('text-color-gray')}>Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                                <label htmlFor="email" className={cx('text-color-gray')}>Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                                <label htmlFor="subject" className={cx('text-color-gray')}>Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className={cx('form-control', 'height-100')} placeholder="Leave a message here" id="message" rows="10"></textarea>
                                                <label htmlFor="message" className={cx('text-color-gray')}>Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className={cx('btn', 'btn-ex-more', 'py-3 px-4')} type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" >
                                <div className="position-relative rounded overflow-hidden h-100">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30674.411354385036!2d108.22019743191633!3d16.049840995543867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219b6f66cbec5%3A0xbc0f57b1afe192de!2zSOG6o2kgQ2jDonUgRGlzdHJpY3QsIERhIE5hbmcsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1676972032151!5m2!1sen!2s"
                                        style={{ border: 0, minHeight: "450px" }} className={cx('position-relative w-100 h-100')} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

    )
}

export default Contact