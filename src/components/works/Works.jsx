import React from 'react';
import styles from './Works.module.scss';
import classNames from 'classnames/bind';
// import { images } from '~/constants/';
const cx = classNames.bind(styles);
const Works = () => {
    return (
         <section id="works" className={cx('works')}>
            <h1>Selected projects</h1>
         </section>
    )
};

export default Works;
