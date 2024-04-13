import React from 'react';
import { Typography, Box } from '@mui/material';
import SocialMediaLinks from "../SocialMediaFooter/SocialMediaLinks";


const AddressMap = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row', // Важно указать направление строки
            alignItems: 'flex-start',
            gap: 2,  // Отступ между элементами
        }}>
            {/* Карта с левой стороны */}
            <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.043211405983!2d26.97789063711424!3d49.42699707141489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473206fbdc28818d%3A0x7a90f6fc483b1fe!2z0LLRg9C70LjRhtGPINCf0L7QtNGW0LvRjNGB0YzQutCwLCAyMSwg0KXQvNC10LvRjNC90LjRhtGM0LrQuNC5LCDQpdC80LXQu9GM0L3QuNGG0YzQutCwINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNGX0L3QsCwgMjkwMDA!5e0!3m2!1suk!2sro!4v1712915238042"
                width="450"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Блок с текстовым описанием и иконками соцсетей */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                    <Typography variant="h6" gutterBottom>
                        Контакти:
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Офіс закритий на період воєнного стану. <br />
                        Працюємо в режимі онлайн
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        ТЦ "Магніт", Вулиця Подільска 21, офіс 4, Хмельницький, Україна
                    </Typography>
                </Box>
                <SocialMediaLinks />
            </Box>
        </Box>
    );
};

export default AddressMap;
