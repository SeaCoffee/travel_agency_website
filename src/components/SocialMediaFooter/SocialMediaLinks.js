import React from 'react';
import { IconButton, Box } from '@mui/material';


import FacebookIcon from '../../icons/facebook.png';
import TelegramIcon from '../../icons/telegram.png';
import ViberIcon from '../../icons/viber.png';



const SocialMediaLinks = () => {
    return (
        <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton href="https://t.me/your_telegram_group" target="_blank" aria-label="Telegram" color="inherit">
                <img src={TelegramIcon} alt="Telegram" style={{ width: 24, height: 24 }} />
            </IconButton>
            <IconButton href="https://www.facebook.com/your_facebook_group" target="_blank" aria-label="Facebook" color="inherit">
                <img src={FacebookIcon} alt="Facebook" style={{ width: 24, height: 24 }} />
            </IconButton>
            <IconButton href="viber://chat?number=+1234567890" aria-label="Viber" color="inherit">
                <img src={ViberIcon} alt="Viber" style={{ width: 24, height: 24 }} />
            </IconButton>
        </Box>
    );
};

export default SocialMediaLinks;



