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
        <section id="contact" className={cx('contact')}>
            <h1>Get in touch</h1>
            <div className={cx('wrapper')}>
                <div className={cx('contact_form')}>
                    <form className={cx('form')}>
                        <label className={cx('title')} for="name">Your name</label>
                        <input className={cx('input')} type="text" name="name" id="name" placeholder="Your name..." required minLength="3"></input>
                        <label className={cx('title')} for="email">Your email</label>
                        <input className={cx('input')} type="email" name="email" id="email" placeholder="Your email..." required></input>
                        <label className={cx('title')} for="subject">Subject</label>
                        <input className={cx('input')} type="text" name="subject" id="subject" placeholder="I want to talk to you" required></input>
                        <button className={cx('submit_btn')}>Send</button>
                    </form>
                </div>
                <div className={cx('contact_other')}>
                    <h4>Other places</h4>
                    {contacts.map((contact, index) => (
                        <a key={index} className={cx('social_contact')} target="_blank" rel="noopener noreferrer" href={contact.url}>
                            <img className={cx('social_img')} src={contact.img} alt={contact.name} />
                            <p className={cx('social_name')}>{contact.name}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
