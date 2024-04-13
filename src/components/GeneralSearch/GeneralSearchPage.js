import React, { useEffect } from 'react';
import {useScript} from "../../Context/ScriptContext";

import './tours-ua-styles.css';

const GeneralSearchPage = () => {
    const { isScriptLoaded, setScriptLoaded } = useScript();

    useEffect(() => {
        const scriptId = 'tours-ua-script';
        const moduleContainerId = 'toursua-module-11026';
        let observer;

        const existingScript = document.getElementById(scriptId);
        if (!existingScript) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://mod.tours.ua/gen/module?id=c2b610ab257e1bc0b4e1a9c13092fa6a';
            script.async = true;
            script.onload = () => {
                setScriptLoaded(true);

                // Наблюдение за изменениями после выбора страны
                const countrySelector = document.querySelector(`#${moduleContainerId} .tsua-form input[name="country_id"]`);
                if (countrySelector) {
                    countrySelector.addEventListener('change', () => {
                        const moduleContainer = document.getElementById(moduleContainerId);
                        if (moduleContainer && !observer) {
                            observer = new MutationObserver((mutations) => {
                                mutations.forEach((mutation) => {
                                    if (mutation.addedNodes.length) {
                                        mutation.addedNodes.forEach((node) => {
                                            if (node.matches && node.matches('.tsua-filter-variant')) {
                                                setTimeout(() => {
                                                    node.click();
                                                }, 100);
                                            }
                                        });
                                    }
                                });
                            });

                            observer.observe(moduleContainer, { childList: true, subtree: true });
                        }
                    });
                }
            };
            document.body.appendChild(script);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }

            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, [setScriptLoaded]);

    return (
        <div>
            <div id="toursua-module-11026">Tours.ua module initialization...</div>
            {/* Другой контент страницы */}
        </div>
    );
};





export default GeneralSearchPage;








