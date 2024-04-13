import React, { useEffect } from 'react';

const ToursUaModule = ({ moduleId, containerId }) => {
    useEffect(() => {
        const scriptId = `toursua-script-${moduleId}`;
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = `https://mod.tours.ua/gen/module?id=${moduleId}`;
            script.async = true;
            document.body.appendChild(script);

            return () => {
                const existingScript = document.getElementById(scriptId);
                if (existingScript) {
                    document.body.removeChild(existingScript);
                }
            };
        }
    }, [moduleId]);

    return <div id={containerId}>Tours.ua module initialization...</div>;
};

export default ToursUaModule;
