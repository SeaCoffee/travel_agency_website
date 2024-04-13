import React from 'react';
import { Box } from '@mui/material';
import AddressMap from "../AddressMap/AddressMap";
import SocialMediaLinks from "../SocialMediaFooter/SocialMediaLinks";

const Footer = () => {
    return (
        // Здесь добавлен отступ сверху mt: 4, значение '4' можно изменить по вашему усмотрению
        <Box sx={{ bgcolor: '#8DCBE6', color: 'white', p: 3, mt: 8 }}>
            <AddressMap />
        </Box>
    );
};
export default Footer;
