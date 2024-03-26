import { useEffect, useState } from "react";
import { getFromLocalStorageWishData } from "../utility/localStorage";


const useLocalStorageWish = () => {
    const [localData,setLocalData] = useState([]);

    useEffect(()=>{
        setLocalData(getFromLocalStorageWishData());
    },[])
    return {localData}
};

export default useLocalStorageWish;