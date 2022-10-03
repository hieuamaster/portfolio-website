import React from 'react';
import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import { images } from '~/constants';
const cx = classNames.bind(styles);
const contacts = [
    {
        name: 'Github',
        img: images.github,
        url: 'https://github.com/hieuamaster',
    },
    {
        name: 'LinkedIn',
        img: images.linkedin,
        url: 'www.linkedin.com/in/hieuamaster',
    },
    {
        name: 'Facebook',
        img: images.facebook,
        url: 'https://www.facebook.com/ctp.alsatian/',
    },
    {
        name: 'Gmail',
        img: images.gmail,
        url: 'mailto:hieuanguyentrung@gmail.com',
    },
];
const Contact = () => {
    return (
        <section id="#contact" className={cx('contact')}>
            <h1>Get in touch</h1>
            <div className={cx('wrapper')}>
                <div className={cx('contact_form')}></div>
                <div className={cx('contact_other')}>
                    <h1>Other places</h1>
                    {contacts.map((contact, index) => (
                        <a key={index} className={cx('social_contact')} href={contact.url}>
                            <img src={contact.img} alt={contact.name} />
                            <p className={cx('social_name')}>{contact.name}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
