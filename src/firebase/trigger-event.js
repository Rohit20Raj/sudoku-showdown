import { logEvent } from "firebase/analytics";
import analytics from "./firebase";

export const triggerEvent = (eventName, eventParams) => {
    const date = new Date();

    const event_Params = {
        ...eventParams,
        deviceType: window.innerWidth > 1024 ? "Desktop" : window.innerWidth > 600 ? "Tablet" : "Mobile",
        timeStamp: date.toISOString() 
    }

    if(process.env.APP_ENVIRONMENT === "production"){
        logEvent(analytics, eventName, event_Params);
    }
}