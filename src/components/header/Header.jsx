import styles from './Header.module.scss';
import Title from './Title';
import Button from '~/components/button/Button';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faComments, faUser } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { motion } from 'framer-motion';

const cx = classNames.bind(styles);
const Header = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className={cx('container')}>
            <div className={cx('left-content')}>
                <Title />
                <div className={cx('btn-menu')}>
                    <Button menu_btn onClick={() => setToggle(true)}>
                        {<FontAwesomeIcon icon={faBars} />}
                    </Button>
                    {toggle && (
                        <motion.div
                            className={cx('sideBar')}
                            whileInView={{ x: [300, 0] }}
                            transition={{ duration: 0.85, ease: 'easeOut' }}
                        >
                            <Button close_btn onClick={() => setToggle(false)}>
                                {<FontAwesomeIcon icon={faXmark} />}
                            </Button>

                            <div className={cx('wrapper')}>
                                <a href="#about">
                                    <Button
                                        onClick={() => setToggle(false)}
                                        menu_sidebar
                                        leftIcon={<FontAwesomeIcon icon={faUser} />}
                                    >
                                        About
                                    </Button>
                                </a>
                                <a href="#project">
                                    <Button
                                        onClick={() => setToggle(false)}
                                        menu_sidebar
                                        leftIcon={<FontAwesomeIcon icon={faLaptopCode} />}
                                    >
                                        Project
                                    </Button>
                                </a>
                                <a href="#contact">
                                    <Button
                                        onClick={() => setToggle(false)}
                                        menu_sidebar
                                        leftIcon={<FontAwesomeIcon icon={faComments} />}
                                    >
                                        Contact
                                    </Button>
                                </a>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
            <div className={cx('right-content')}>
                <div className={cx('items-menu')}>
                    <a href="#about">
                        <Button btn_default leftIcon={<FontAwesomeIcon icon={faUser} />}>
                            About
                        </Button>
                    </a>
                    <a href="#project">
                        <Button btn_default leftIcon={<FontAwesomeIcon icon={faLaptopCode} />}>
                            Project
                        </Button>
                    </a>
                    <a href="#contact">
                        <Button btn_default leftIcon={<FontAwesomeIcon icon={faComments} />}>
                            Contact
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
