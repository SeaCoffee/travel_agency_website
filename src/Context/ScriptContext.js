import React, { createContext, useContext, useState } from 'react';

const ScriptContext = createContext();

export const ScriptProvider = ({ children }) => {
    const [isScriptLoaded, setScriptLoaded] = useState(false);

    return (
        <ScriptContext.Provider value={{ isScriptLoaded, setScriptLoaded }}>
            {children}
        </ScriptContext.Provider>
    );
};

export const useScript = () => useContext(ScriptContext);
