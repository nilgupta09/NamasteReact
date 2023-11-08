import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";


const useRestaurantDetails = (restId) => {
    const [restData, setRestData] = useState(null);

    useEffect(() =>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_URL + restId);
        const jsonData = await data.json();
        setRestData(jsonData.data);
    }
    return restData;
}

export default useRestaurantDetails;