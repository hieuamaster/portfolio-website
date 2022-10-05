import React from 'react';
import styles from './Works.module.scss';
import classNames from 'classnames/bind';
import { images } from '~/constants/';
import Button from '~/components/button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
const Works = () => {
    return (
        <section id="works" className={cx('works')}>
            <h1 className={cx('title')}>Selected projects</h1>
            <div className={cx('wrapper')}>
                <div className={cx('project_items')}>
                    <div className={cx('item_demo')}>
                        <div className={cx('border_blank')}>
                            <img
                                src="https://media.graphassets.com/resize=width:700/output=format:webp/3ZIRqpAJTkmCKLNjS1N1"
                                alt="img"
                            ></img>
                        </div>
                    </div>
                    <div className={cx('item_info')}>
                        <h1 className={cx('prj_name')}>React CSSFX Loading</h1>
                        <p className={cx('prj_info')}>
                            React Wrapper for the CSSFX collections. It's a component library, just import to use
                        </p>
                        <div className={cx('technologies-list')}>
                            <img className={cx('technology')} src={images.javascript} alt="tech"></img>
                            <img className={cx('technology')} src={images.react} alt="tech"></img>
                        </div>
                        <div className={cx('prj_btn')}>
                            <a className={cx('view_demo')} href="">
                                <Button
                                    btn_default
                                    leftIcon={<FontAwesomeIcon icon={faArrowUpRightFromSquare}/>}
                                >
                                    Live Demo
                                </Button>
                            </a>
                            <a className={cx('view_github')} href="">
                                <Button
                                    btn_default
                                    leftIcon={<FontAwesomeIcon icon={faCodeBranch}/>}
                                >
                                    View Github
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;
