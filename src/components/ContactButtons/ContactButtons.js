import React from 'react';
import TelegramIcon from '../../icons/telegram.png'; // Импортируем иконку Telegram
import ViberIcon from '../../icons/viber.png'; // Импортируем иконку Viber

import styles from './ContactButtons.module.css'

export const ContactButtons = () => {
    const viberNumber = '1234567890'; // Замените на ваш номер телефона для Viber
    const telegramUsername = 'your_telegram_username'; // Замените на ваше имя пользователя в Telegram
    const additionalNumber1 = '9876543210'; // Дополнительный номер телефона 1
    const additionalNumber2 = '1122334455'; // Дополнительный номер телефона 2

    return (
        <div className={styles.contactContainer}>
            <div className={styles.iconsContainer}>
                <span>Відкрити діалог в </span>
                <a href={`viber://chat?number=${viberNumber}`} target="_blank" rel="noopener noreferrer"
                   className={styles.contactLink}>
                    <span style={{ color: '#0000ff' }}>Viber</span> <img src={ViberIcon} alt="Viber" className={styles.contactImage}/>
                </a>
                <a href={`https://t.me/${telegramUsername}`} target="_blank" rel="noopener noreferrer"
                   className={styles.contactLink}>
                    <span style={{ color: '#0000ff' }}>Telegram</span> <img src={TelegramIcon} alt="Telegram" className={styles.contactImage}/>
                </a>
            </div>
            <div>
                <div className={styles.numbersTitle}>Наші контакти:</div>
                <ul>
                    <li className={styles.additionalNumbers}>{additionalNumber1}</li>
                    <li className={styles.additionalNumbers}>{additionalNumber2}</li>
                </ul>
            </div>
            <div className={styles.emergencyNotice}>
                На період воєнного стану працюємо в режимі онлайн
            </div>
        </div>
    );
}



export default ContactButtons;
