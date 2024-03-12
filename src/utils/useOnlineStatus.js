import React, { useEffect, useState } from "react";

const useOnlineStatus = () => {
const [onlineStatus, setOnlineStatus] = useState(true);
    
  useEffect(() => {
    window.addEventListener("online", (event) => {
      console.log("You are now connected to the network.");
      setOnlineStatus(true);
    });

    window.addEventListener("offline", (event) => {
        console.log("You are not connected to the network.");
        setOnlineStatus(false);
      });
  }, []);
  return onlineStatus;
};

export default useOnlineStatus;
