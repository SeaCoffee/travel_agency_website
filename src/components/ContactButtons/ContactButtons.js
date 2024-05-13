import React from 'react';
import TelegramIcon from '../../icons/telegram.png'; // Импортируем иконку Telegram
import ViberIcon from '../../icons/viber.png'; // Импортируем иконку Viber

import styles from './ContactButtons.module.css'

export const ContactButtons = () => {
    const managers = [
        {
            phoneNumber: '096 064 13 04',
            viberNumber: '0960641304',
            telegramUsername: 'https://t.me/tanyalito365',
        },
        {
            phoneNumber: '098 777 18 69',
            viberNumber: '0987771869',
            telegramUsername: 'https://t.me/kvytkyvlito',
        }
    ];

    const handleMessengerLinkClick = (url, messenger) => {
        try {
            window.open(url, '_blank');
        } catch (error) {
            alert(`Не вдалось відкрити посилання ${messenger}. Перевірте з'єднання і спробуйте ще раз.`);
        }
    };

    return (
        <div className={styles.contactContainer}>
            <div className={styles.numbersTitle}>Наші контакти:</div>
            {managers.map((manager, index) => (
                <div key={index} className={styles.numberWithMessengers}>
                    <span className={styles.additionalNumbers}>{manager.phoneNumber}</span>
                    <div className={styles.messengerLinks}>
                        <span>Відкрити діалог в </span>
                        <a onClick={() => handleMessengerLinkClick(`viber://chat?number=${manager.viberNumber}`, 'Viber')}
                           className={styles.contactLink}>
                            <span style={{color: '#0000ff'}}>Viber</span>
                            <img src={ViberIcon} alt="Viber" className={styles.contactImage}/>
                        </a>
                        <a onClick={() => handleMessengerLinkClick(manager.telegramUsername.startsWith('http') ? manager.telegramUsername : `https://t.me/${manager.telegramUsername}`, 'Telegram')}
                           className={styles.contactLink}>
                            <span style={{color: '#0000ff'}}>Telegram</span>
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
