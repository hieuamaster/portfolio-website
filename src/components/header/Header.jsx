import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import Title from './Title';
import Button from '~/components/button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLaptopCode, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faComments, faUser } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
const cx = classNames.bind(styles);
const Header = () => {
    const light = {
        icon: faSun,
        theme: 'light'
    }
    const dark = {
        icon: faMoon,
        theme: 'dark'
    }
    const [theme, setTheme] = useState(light);
    const switchTheme = () => {
        const newTheme = theme === light ? dark : light;
        setTheme(newTheme);
    };

    return (
        <div className={cx('container', 'grid', 'wide')}>
            <div className={cx('inner')}>
                <div className={cx('left-content')}>
                    <div className={cx('btn-menu')}>
                        <Button theme>{<FontAwesomeIcon icon={faBars} />}</Button>
                    </div>
                    <Title />
                </div>
                <div className={cx('right-content')}>
                    <div className={cx('items-menu')}>
                        <Button btn_default leftIcon={<FontAwesomeIcon icon={faUser} />}>
                            About
                        </Button>
                        <Button btn_default leftIcon={<FontAwesomeIcon icon={faLaptopCode} />}>
                            Project
                        </Button>
                        <Button btn_default leftIcon={<FontAwesomeIcon icon={faComments} />}>
                            Contact
                        </Button>
                    </div>
                    <div className={cx('theme')}>
                        <Button theme onClick={switchTheme}>
                            {<FontAwesomeIcon icon={theme.icon} />}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
