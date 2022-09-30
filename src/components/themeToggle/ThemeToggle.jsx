import React from 'react';
import styles from './ThemeToggle.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const ThemeToggle = () => {
    return (
        <div className={cx('theme')}>
            <input type="checkbox" id="dark-mode" className={cx('input')}></input>  
            <label for="dark-mode" className={cx('label')}>
                <div className={cx('circle')}></div>
            </label>
        </div>
    );
};

export default ThemeToggle;
