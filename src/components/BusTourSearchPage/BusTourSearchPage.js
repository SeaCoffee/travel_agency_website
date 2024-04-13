import { useEffect } from 'react';

const BusToursSearchPage = () => {
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
        <div>
            <iframe
                src="https://www.adriatic-travel.com.ua/freim.php?agent=11687&bgcolour=569061&textcolor=000000&width=1200&currency=UAH&lang=ua"
                id="mmoa"
                name="mmoa"
                style={{
                    position: 'relative',
                    textAlign: 'center',
                    float: 'bottom',
                    display: 'block',
                    overflow: 'hidden',
                    width: '100%',
                    height: '1000px',
                }}
                frameborder="0"
            ></iframe>
            {/* Другой контент страницы */}
        </div>
    );
};

export default BusToursSearchPage;
