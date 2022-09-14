import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    children,
    className,
    theme = false,
    btn_default = false,
    btn_contact = false,
    btn_download = false,
    btn_ripple_effect = false,
    btn_medium = false,
    btn_large = false,
    leftIcon = false,
    rightIcon = false,
    onClick,
    ...passProps

}) {
    const props = {
        onClick,
        ...passProps,
    };
    const classes = cx('wrapper', {
        [className]: className,
        btn_default,
        btn_contact,
        btn_download,
        btn_ripple_effect,
        btn_medium,
        btn_large,
        theme,
    });
    
    return (
        <button className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </button>
    );
}

export default Button;
