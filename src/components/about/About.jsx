import styles from './About.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/button/Button';
import Avatar from '~/assets/avatar.jpg';
const cx = classNames.bind(styles);
// const skills = [{}];
const About = () => {
    return (
        <section id="about" className={cx('about', 'grid', 'wide')}>
            <div className={cx('container')}>
                <div className={cx('information')}>
                    <div className={cx('ava')}>
                        <img src={Avatar} alt="ava" />
                    </div>
                    <div className={cx('description')}>
                        <div className={cx('introduce')}>
                            <p>
                                I enjoy coding and the challenge of learning something new everyday. My goal is to
                                pursue a career in the field of front-end development.
                            </p>
                            <div className={cx('button-wrapper')}>
                                <a href="#about">
                                    <Button btn_download>Download CV</Button>
                                </a>
                            </div>
                        </div>
                        <div className={cx('skills')}>
                            <div className={cx('skill-items')}>
                                <div className={cx('skill-info')}>
                                    <h4>My skills & Knowledge</h4>
                                    <p>" ReactJS, "</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
