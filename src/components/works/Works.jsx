import React from 'react';
import styles from './Works.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { images } from '~/constants';
const cx = classNames.bind(styles);
const works = [
    {
        title: 'React CSSFX Loading',
        description: 'React Wrapper for the CSSFX collections. It is a component library, just import to use',
        image: images.cssfx,
        url: {
            demo: '',
            github: '',
        },
        techs: [images.javascript, images.react],
    },
    {
        title: 'React CSSFX Loading',
        description: 'React Wrapper for the CSSFX collections. It is a component library, just import to use',
        image: images.cssfx,
        url: {
            demo: '',
            github: '',
        },
        techs: [images.javascript, images.react],
    },
];

const Works = () => {
    return (
        <section id="works" className={cx('works')}>
            <h1 className={cx('title')}>Selected projects</h1>
            <div className={cx('wrapper')}>
                {/* project lists */}
                {works.map((work, index) => (
                    <div key={index} className={cx('item_container')}>
                        <div className={cx('item_demo')}>
                            <div className={cx('border_blank')}>
                                <img src={work.image} alt="img"></img>
                            </div>
                        </div>

                        <div className={cx('item_info')}>
                            <h1 className={cx('prj_name')}>{work.title}</h1>
                            <p className={cx('prj_info')}>{work.description} </p>
                                <div className={cx('technologies-list')}>
                                {work.techs.map((tech, index) => (
                                    <img key={index} className={cx('technology')} src={tech} alt="tech"></img>
                                    ))}
                                </div>

                            <div className={cx('prj_btn')}>
                                <a className={cx('view_demo')} href={work.url.demo}>
                                    <Button btn_default leftIcon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}>
                                        Live Demo
                                    </Button>
                                </a>
                                <a className={cx('view_github')} href={work.url.github}>
                                    <Button btn_default leftIcon={<FontAwesomeIcon icon={faCodeBranch} />}>
                                        View Github
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Works;
