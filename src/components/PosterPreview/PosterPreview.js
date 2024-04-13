import React from 'react';
import {posterService} from "../../servises/axiosService";


export const PosterPreview = ({ imageUrl, title }) => {
    const posterUrl = posterService.getPosterUrl(imageUrl);

    return (
        <img src={posterUrl} alt={title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
    );
};