import { useRef, useEffect, useCallback } from "react";
import { hideLogs } from "./devHosts";

export const getRandomInt = (max, min = 0) => {
    return Math.floor(Math.random() * (max - min) + min);
};

export const log = (...message) => {
    !hideLogs && console.log(...message);
};

export const error = (...message) => {
    !hideLogs && console.error(...message);
};

export const info = (...message) => {
    !hideLogs && console.info(...message);
};

export const debug = (...message) => {
    !hideLogs && console.debug(...message);
};

if (!hideLogs) {
    log("dev mode");
}

export const randomize = <T,>(array: T[]): T => {
    return array[Math.floor(Math.random() * array.length)];
};

//return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
export const guid = () => {
    const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};

export const stringify = (json) => JSON.stringify(json, null, "\t");

export const helpFetch = async ({ url, body = null }: { url: string; body?: object }): Promise<Response> => {
    // : Promise<string>
    const headers = new Headers();
    headers.append("Accept", "application/json");
    // const encoded = window.btoa("idapi:gZjs2F03");
    // const auth = "Basic " + encoded;
    // headers.append("Authorization", auth);
    const settings = {
        headers,
        method: "GET",
        body: ""
    };
    if (body) {
        settings.method = "POST";
        settings.body = JSON.stringify(body);
    }
    return fetch(url, settings);
};

export const capitalizeFirstLetter = (text: string) => {
    return text.length > 0 ? text.charAt(0).toUpperCase() + text.slice(1) : "";
};

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
export const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

export const flatten = (nested) => {
    const flat = [];
    const handleFlat = (array) => {
        let counter = 0;
        while (counter < array.length) {
            const val = array[counter];
            if (Array.isArray(val)) {
                handleFlat(val);
            } else {
                flat.push(val);
            }
            ++counter;
        }
    };
    handleFlat(nested);
    return flat;
};

export function useIsMounted() {
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;

        return () => {
            isMounted.current = false;
        };
    }, []);

    return useCallback(() => isMounted.current, []);
}

export function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function generateCSSId(length) {
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
