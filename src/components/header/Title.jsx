import classNames from 'classnames/bind';
import styles from './Title.module.scss';

const cx = classNames.bind(styles);
const Title = () => {
    return (
        <a href="/">
            <svg className={cx('svg')} viewBox="0 0 300 100">
                <symbol id="s-text">
                    <text className={cx('name')} text-anchor="middle" x="50%" y="50%" dy=".3em">
                        hieua
                    </text>
                </symbol>
                    <use className={cx('text')} xlinkHref="#s-text"></use>
                    <use className={cx('text')} xlinkHref="#s-text"></use>
                    <use className={cx('text')} xlinkHref="#s-text"></use>
                    <use className={cx('text')} xlinkHref="#s-text"></use>
                    <use className={cx('text')} xlinkHref="#s-text"></use>
            </svg>
        </a>
    );
};

export default Title;
