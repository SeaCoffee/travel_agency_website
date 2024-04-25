import React, { useEffect, useRef, useState } from 'react';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import {useScript} from "../../hooks/ScriptContext";

import './tours-ua-styles.css';


const GeneralSearchPage= ({ moduleId, moduleScriptId, moduleScriptSrc }) => {
    const { isScriptLoaded, setScriptLoaded } = useScript();

    useEffect(() => {
        let observer;

        const existingScript = document.getElementById(moduleScriptId);
        if (!existingScript) {
            const script = document.createElement('script');
            script.id = moduleScriptId;
            script.src = moduleScriptSrc;
            script.async = true;
            script.onload = () => {
                setScriptLoaded(true);

                // Наблюдение за изменениями после выбора страны
                const countrySelector = document.querySelector(`#${moduleId} .tsua-form input[name="country_id"]`);
                if (countrySelector) {
                    countrySelector.addEventListener('change', () => {
                        const moduleContainer = document.getElementById(moduleId);
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

    return <div id={moduleId}>Tours.ua module initialization...</div>;
};

export default GeneralSearchPage



