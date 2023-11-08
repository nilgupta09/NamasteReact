import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const {onlineStatus, setOnlineStatus} = useState(true);

    console.log("render of status check");
    useEffect(()=>{
        console.log("useEffect of status check");
        window.addEventListener("offline", () => {
            console.log("The network connection has been lost.");
        });
        window.addEventListener("online", () => {
            console.log("You are now connected to the network.");
          });
    }, []);
    console.log(onlineStatus);
    return onlineStatus;
}

export default useOnlineStatus;