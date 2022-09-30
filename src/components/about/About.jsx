import styles from './About.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/button/Button';
import Avatar from '~/assets/avatar.jpg';
import { images } from '~/constants';
const cx = classNames.bind(styles);

const About = () => {
    const skills = [
        {
            name: 'Javascript',
            img: images.javascript,
        },
        {
            name: 'Typescript',
            img: images.typescript,
        },
        {
            name: 'React.js',
            img: images.react,
        },
        {
            name: 'HTML',
            img: images.html,
        },
        {
            name: 'CSS',
            img: images.css,
        },
        {
            name: 'Firebase',
            img: images.firebase,
        },
        {
            name: 'Tailwind',
            img: images.tailwind,
        },
        {
            name: 'Vercel',
            img: images.vercel,
        },
    ];
    return (
        <section id="about" className={cx('about')}>
            <div className={cx('information')}>
                <div className={cx('ava')}>
                    <img src={Avatar} alt="ava" />
                </div>
                <div className={cx('description')}>
                    <div className={cx('introduce')}>
                        <p>
                            I enjoy coding and the challenge of learning something new everyday. My goal is to pursue a
                            career in the field of front-end development.
                        </p>
                        <div className={cx('button-wrapper')}>
                            <a href="#about">
                                <Button btn_download>Download CV</Button>
                            </a>
                        </div>
                    </div>
                    <div className={cx('skills')}>
                        <h4>My skills & Knowledge</h4>
                        <div className={cx('skill-items')}>
                            {skills.map((skill, index) => (
                                <div key={index} className={cx('skill-item')}>
                                    <div className={cx('skill-center')}>
                                        <img src={skill.img} alt={skill.name}></img>
                                        <p>{skill.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
