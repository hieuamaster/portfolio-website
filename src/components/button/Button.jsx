import styles from './Button.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Button({
    to,
    href,
    children,
    className,
    disabled = false,
    login_small = false,
    login_big = false,
    follow = false,
    upload = false,
    get_app = false,
    leftIcon = false,
    rightIcon = false,
    onClick,
    ...passProps
}) {
    
    const classes = cx('wrapper', {
        [className]: className,
        login_small,
        login_big,
        follow,
        get_app,
        disabled,
        upload,
    });
    return (
        <button className={classes} >
            <span className={cx('title')}>{children}</span>
        </button>
    );
}

export default Button;