import React, { useState } from "react";
import { useEffect } from "react";

const useRestaurantMenu = (restId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        console.log("useRestaurantMenu");
        fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch("http://localhost:3000/api/restaurants"+restId+"/restaurants");
        const json = await data.json();
        setResInfo(json.data);
    }
    return resInfo;
};

export default useRestaurantMenu;
