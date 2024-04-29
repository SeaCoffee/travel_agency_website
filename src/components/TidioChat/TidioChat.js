import { useEffect } from 'react';

const TidioChat = ({ publicKey }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `//code.tidio.co/${publicKey}.js`;
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, [publicKey]);

    return null;
};

export default TidioChat;
