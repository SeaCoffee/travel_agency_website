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
        <div style={{ paddingTop: '20px', paddingBottom: '50px', overflow: 'auto',  width: '96%',
            margin: '25px',
            padding: '30px',
            boxSizing: 'border-box',
            backgroundColor: '#E3F6FF' }}>
            <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center', margin: '20px 0', fontSize: '25px', fontWeight: 'bold', p:5, backgroundColor: '#E3F6FF'  }}>
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
                    width: '100%',
                    height: '1000px',
                }}
                frameborder="0"
            ></iframe>
        </div>
    );

};

export default AdriaticToursSearchPage;
