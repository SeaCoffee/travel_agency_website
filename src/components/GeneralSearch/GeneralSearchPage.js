import React, { useEffect, useState,  } from 'react';
import {Typography, useTheme, useMediaQuery} from "@mui/material";




const GeneralSearchPage = () => {
    const [iframeKey, setIframeKey] = useState(1);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    console.log('Mobile:', isMobile, 'Tablet:', isTablet);


    // Функция для внедрения стилей в iframe
    const injectStyles = () => {
        const iframe = document.getElementById('toursua-iframe'); // Установите соответствующий ID вашего iframe
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        const styleElement = iframeDocument.createElement('style');
        styleElement.type = 'text/css';
        styleElement.appendChild(document.createTextNode(`
            /* Общие стили для вкладок и содержимого */
            
.tsua-tabs {
    background-color:  #9DF1DF;/* Цвет фона для всех вкладок */
    padding: 10px; /* Внутренний отступ для всех вкладок */
    border-bottom: 1px solid #ccc; /* Граница снизу для всех вкладок */
}

/* Стили для контента внутри вкладок */
.tsua-content {
    width: 99%;
    padding: 20px;
    background-color: #E3F6FF; /* Цвет фона для контента */
    border-radius: 5px; /* Скругление углов */
    border-top: 1px solid #ccc;
}

/* Стилизация карточек с ценами */
.tsua-price-item {
    margin: 15px;
    border: 10px solid #E3F6FF; /* Цвет границы карточек */
    padding: 15px;
    transition: box-shadow 0.3s; /* Плавность перехода тени */
    border-radius: 15px; /* Скругление углов */
}

.tsua-price-item:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6); /* Тень при наведении */
}

/* Стилизация вкладок в нижнем блоке */
.tsua-tabs.tsua-footer {
    border-top: 1px solid #ccc; /* Граница сверху */
}

/* Стили для элементов, которые могут быть использованы как кнопки */
.tsua-tab-item {
    background-color: #9DF1DF;
    color: black; /* Цвет текста */
    padding: 10px 15px; /* Внутренний отступ */
    margin: 5px; /* Внешний отступ */
    border-radius: 4px; /* Скругление углов */
    border: none; /* Без границы */
    cursor: pointer; /* Курсор в виде указателя */
    text-align: center; /* Выравнивание текста по центру */
    display: inline-block; /* Элементы в одну строку */
    transition: background-color 0.3s, transform 0.2s; /* Плавный переход */
}

/* Стилизация элементов при наведении и активации */
.tsua-tab-item:hover, .tsua-tab-item:active {
    background-color: #89C9B8; /* Изменение фона при наведении и нажатии */
    transform: scale(1.05); /* Увеличение при наведении */
}

.tsua-tab-item:active {
    transform: scale(0.95); /* Уменьшение при нажатии */
}

/* Скрытые обертки */
.tsua-hotel-wrapper,
.tsua-wrapper {
    display: none; /* Скрываем элементы */
}

/* Стилизация скроллбара */
.mCSB_container {
    position: relative; /* Относительное позиционирование */
    background-color: #E3F6FF; /* Цвет фона контейнера */
}

/* Стилизация трека и ползунка полосы прокрутки */
.mCSB_scrollTools .mCSB_draggerContainer,
.mCSB_scrollTools .mCSB_dragger {
    background-color: #E3F6FF; /* Цвет фона трека и ползунка */
    border-radius: 6px; /* Скругление углов */
    width: 10px; /* Ширина */
    opacity: 0.7; /* Прозрачность */
    cursor: pointer; /* Тип курсора */
}

/* Стилизация для ползунка при наведении и активации */
.mCSB_scrollTools .mCSB_dragger:hover,
.mCSB_scrollTools .mCSB_dragger:active {
    background-color: #5EB961; /* Изменение фона при наведении и нажатии */
    opacity: 1; /* Полная непрозрачность */
}

/* Стилизация полосы на ползунке */
.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
    background-color: #E3F6FF; /* Цвет фона полосы */
    margin: 0 auto; /* Центровка полосы */
}

/* Стилизация для активного ползунка */
.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCSB_scrollTools .mCSB_dragger:focus .mCSB_dragger_bar {
    background-color: #333333; /* Цвет фона при активации */
},

@media (max-width: 600px) { /* или другой размер для мобильных устройств */
    .general-search-page {
        margin-bottom: 35px;
    }
}

@media (min-width: 601px) {
    .general-search-page {
        margin-bottom: 0;
    }
}



        `));
        iframeDocument.head.appendChild(styleElement);
    };

    const adjustIframeHeight = () => {
        const iframe = document.getElementById('toursua-iframe');
        if (iframe && iframe.contentWindow) {
            try {
                const body = iframe.contentWindow.document.body;
                const height = body.scrollHeight;
                iframe.style.height = `${height}px`;
            } catch (error) {
                console.error('Ошибка при корректировке высоты iframe:', error);
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            adjustIframeHeight();
        }, 1000);  // Проверка и корректировка каждую секунду

        return () => clearInterval(interval);
    }, []);



    useEffect(() => {
        // При каждом возвращении на страницу пересоздаем iframe для перезагрузки скрипта
        setIframeKey(prevKey => prevKey + 1);
    }, []);


    const iframeSrcDoc = `
    <html>
    <head>
        <style>
            body { margin: 0; width: 100%; } 
        </style>
    </head>
    <body>
        <div id="toursua-module-11033">Инициализация модуля Tours.ua...</div>
        <script src="https://mod.tours.ua/gen/module?id=5f554e6a3a5e65f8901aa9a8649c3d0c"></script>
    </body>
    </html>
`;


    return (
        <div>
            <Typography gutterBottom variant="h5" component="div"
                        style={{
                            textAlign: 'center',
                            margin: '20px 0',
                            fontSize: isMobile ? '18px' : '25px', // Меньший размер шрифта для мобильных устройств
                            fontWeight: 'bold',
                            padding: isMobile ? 2 : 5  // Меньший отступ для мобильных устройств
                        }}>
                Пошук гарячих турів по країнах:
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: isMobile ? '40px' : '0px' }}>
                <iframe
                    id="toursua-iframe"
                    sandbox="allow-scripts allow-same-origin allow-forms"
                    key={iframeKey}
                    srcDoc={iframeSrcDoc}
                    onLoad={injectStyles}
                    style={{
                        width: isMobile ? '90%' : '80%', // 60% для десктопной версии, можно настроить по вашему усмотрению
                        height: 'auto',
                        border: 'none',
                        minHeight: isTablet ? '1000px' : '775px'
                    }}
                    title="Tours.ua Module"
                />
            </div>
        </div>
    );

}


    export default GeneralSearchPage;