import React from 'react';
import TelegramIcon from '../../icons/telegram.png'; // Импортируем иконку Telegram
import ViberIcon from '../../icons/viber.png'; // Импортируем иконку Viber

import styles from './ContactButtons.module.css'

export const ContactButtons = () => {

    const managers = [
        {
            phoneNumber: '096 064 13 04', // Номер телефона менеджера 1
            viberNumber: '0960641304', // Номер Viber менеджера 1
            telegramUsername: 'manager1_telegram', // Telegram username менеджера 1
        },
        {
            phoneNumber: '098 777 18 69', // Номер телефона менеджера 2
            viberNumber: '0987771869', // Номер Viber менеджера 2
            telegramUsername: 'https://t.me/kvytkyvlito', // Telegram username менеджера 2
        }
    ];

    return (
        <div className={styles.contactContainer}>
            <div className={styles.numbersTitle}>Наші контакти:</div>
            {managers.map((manager, index) => (
                <div key={index} className={styles.numberWithMessengers}>
                    <span className={styles.additionalNumbers}>{manager.phoneNumber}</span>
                    <div className={styles.messengerLinks}>
                        <span>Відкрити діалог в </span>
                        <a href={`viber://chat?number=${manager.viberNumber}`} target="_blank" rel="noopener noreferrer"
                           className={styles.contactLink}>
                            <span style={{ color: '#0000ff' }}>Viber</span>
                            <img src={ViberIcon} alt="Viber" className={styles.contactImage}/>
                        </a>
                        <a href={manager.telegramUsername.startsWith('http') ? manager.telegramUsername : `https://t.me/${manager.telegramUsername}`} target="_blank" rel="noopener noreferrer"
                           className={styles.contactLink}>
                            <span style={{ color: '#0000ff' }}>Telegram</span>
                            <img src={TelegramIcon} alt="Telegram" className={styles.contactImage}/>
                        </a>
                    </div>
                </div>
            ))}

            <div className={styles.emergencyNotice}>
                На період воєнного стану працюємо в режимі онлайн
            </div>
        </div>
    );
};

export default ContactButtons;
