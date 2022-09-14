import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Title from './Title';
const cx = classNames.bind(styles);
const Header = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('inner')}>
                <div className={cx('left-content')}>
                    <Title />
                </div>
                <div className={cx('right-content')}>
                    <div className={cx('items-menu')}>Menu</div>
                    <div className={cx('theme')}>
                        <button>Theme</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
