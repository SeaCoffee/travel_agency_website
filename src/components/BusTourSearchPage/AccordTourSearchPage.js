import React, { useEffect } from 'react';



const SearchModule = () => {
    useEffect(() => {
        // Добавление jQuery, если он еще не загружен
        if (!window.jQuery) {
            const scriptJQuery = document.createElement('script');
            scriptJQuery.type = 'text/javascript';
            scriptJQuery.src = 'http://code.jquery.com/jquery-latest.min.js';
            document.head.appendChild(scriptJQuery);

            // Убедимся, что jQuery загружен перед загрузкой других скриптов
            scriptJQuery.onload = () => loadOtherScripts();
        } else {
            // Если jQuery уже есть, загружаем остальные скрипты
            loadOtherScripts();
        }
    }, []);

    // Функция для загрузки остальных скриптов
    const loadOtherScripts = () => {
        const scriptCalendar = document.createElement('script');
        scriptCalendar.src = 'https://www.accordtour.com/js/easy_xml/calendar/calendar.js';
        document.body.appendChild(scriptCalendar);

        const scriptEasyXML = document.createElement('script');
        scriptEasyXML.src = 'https://www.accordtour.com/js/easy_xml/easy-xml.js';
        document.body.appendChild(scriptEasyXML);

        const scriptEasySearchXML = document.createElement('script');
        scriptEasySearchXML.src = 'https://www.accordtour.com/js/easy_xml/easy-search-xml.js';
        document.body.appendChild(scriptEasySearchXML);

        const scriptGetTourSearch = document.createElement('script');
        scriptGetTourSearch.src = 'https://www.accordtour.com/js/easy_xml/get-tour-search.php?callback=parseRequestSearch&contentDivWidthSearch=400&contentDivWidthSearchField=250&body_bg_color_search=E3F6FF&header_text_color_search=000000&table_border_color_search=d3c183&table_text_color_search=000000&tour_text_color_search=b70505&price_text_color_search=ff0000&hide_header=false&lang=ua&sprite_color=blue';
        document.body.appendChild(scriptGetTourSearch);
    };

    return (
        <div>
            <div id="AT_search_content" style={{ width: '400px', margin: 'auto', background: '#E3F6FF', border: '1px solid #d3c183' }}></div>
            <div id="AT_content" style={{ width: '850px', margin: 'auto' }} rel=""></div>
        </div>
    );
};

export default SearchModule;

