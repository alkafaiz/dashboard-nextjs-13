import React from "react";

export const useDelay = (delay = 500) => {
    const [isDisplayed, setIsDisplayed] = React.useState(false);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setIsDisplayed(true);
        }, delay);

        return () => {
            clearTimeout(timeout);
        };
    }, [delay]);

    return isDisplayed;
};
