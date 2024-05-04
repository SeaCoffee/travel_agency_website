import React, { useEffect } from 'react';
import {Typography} from "@mui/material";

const AdriaticToursSearchPage = () => {
    useEffect(() => {
        const scriptId = 'adriatic-travel-script';
        const existingScript = document.getElementById(scriptId);
        if (!existingScript) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://www.adriatic-travel.com.ua/freim.js?123';
            script.async = true;
            document.body.appendChild(script);
        }

        return () => {
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, []);

    return (
        <div style={{
            paddingTop: '20px',
            paddingBottom: '50px',
            overflow: 'auto',
            width: '93%',
            margin: '25px auto',
            padding: '30px',
            boxSizing: 'border-box',
            backgroundColor: '#E3F6FF',
            '@media (max-width: 768px)': { // Медиа-запрос для мобильных устройств
                width: '95%',
                paddingTop: '10px',
                paddingBottom: '25px',
                margin: '10px',
                padding: '15px',
            }
        }}>
            <Typography gutterBottom variant="h5" component="div" style={{
                textAlign: 'center',
                margin: '20px 0',
                fontSize: '25px',
                fontWeight: 'bold',
                p:5,
                backgroundColor: '#E3F6FF',
                '@media (max-width: 768px)': { // Медиа-запрос для мобильных устройств
                    fontSize: '18px', // Уменьшаем размер шрифта
                    margin: '10px 0',
                    p: 2,
                }
            }}>
                Пошук автобусних турів:
            </Typography>
            <iframe
                src="https://www.adriatic-travel.com.ua/freim.php?agent=11687&bgcolour=569061&textcolor=000000&width=1200&currency=UAH&lang=ua"
                id="mmoa"
                name="mmoa"
                style={{
                    backgroundColor: '#E3F6FF',
                    position: 'relative',
                    textAlign: 'center',
                    display: 'block',
                    overflow: 'hidden',
                    width: '97%',
                    height: '1000px',
                    '@media (max-width: 768px)': { // Медиа-запрос для мобильных устройств
                        height: '600px', // Уменьшаем высоту iframe
                    }
                }}
                frameborder="0"
            ></iframe>
        </div>
    );
};

export default AdriaticToursSearchPage;
