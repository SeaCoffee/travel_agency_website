import React from 'react';
import { Box } from '@mui/material';
import AddressMap from "../AddressMap/AddressMap";

const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#8DCBE6', color: 'white', p: 3, mt: 8 }}>
            <AddressMap />
        </Box>
    );
};
export default Footer;
