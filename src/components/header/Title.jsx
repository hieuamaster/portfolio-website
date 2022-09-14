import classNames from 'classnames/bind';
import styles from './Title.module.scss';

const cx = classNames.bind(styles);
const Title = () => {
    return (
        <a className={cx('a-link')} href="/">
            <svg className={cx('svg')} viewBox="0 0 390 130">
                <symbol id="s-text">
                    <text className={cx('name')} textAnchor="middle" x="50%" y="50%" dy=".3em">
                        HieuA
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
