import React from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Logo from '~/assets/Logo.svg';
import Button from '~/components/button/Button';
import Header from '~/components/header/Header';
const cx = classNames.bind(styles);
const Home = () => {
    return (
        <section id="home" className={cx('home', 'wide')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('left-content')}>
                        <img className={cx('logo')} src={Logo} alt="My Logo" />
                    </div>

                    <div className={cx('right-content')}>
                        <span className={cx('intro')}>Hi,</span>
                        <span className={cx('iam')}>👋 I'm a Frontend Development</span>
                        <a href="#contact" className={cx('btn-contact')}>
                            <Button btn_contact btn_ripple_effect>
                                Contact me
                            </Button>
                        </a>
                    </div>
                    <div className={cx('scroll-down')}>
                        <a href="#about" className={cx('mouse-wrapper')}>
                            <span>Scroll Down</span>
                            <span className={cx('mouse')}>
                                <span className={cx('wheel')}></span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
