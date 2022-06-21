import { useCallback } from "react";

export const useHttp = () => {
    const request = useCallback(async (url, method="GET", body = null, headers={"Content-type": "application/json"}) => {
        try {
            const res = await fetch(url, {method, body, headers})
            if(!res.ok) {
                throw new Error(`Could not fetch ${url}, status ${res.status}`)
            }
            const data = await res.json();
            return data;    
        } catch(e) {
            console.log(e)
        }
    }, [])
    return {request}
}













