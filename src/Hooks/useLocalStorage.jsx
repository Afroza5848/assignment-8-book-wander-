import { useEffect, useState } from "react";
import { getFromLocalStorageData } from "../utility/localStorage";


const useLocalStorage = () => {
    const [localData,setLocalData] = useState([]);

    useEffect(()=>{
        setLocalData(getFromLocalStorageData());
    },[])
    return {localData}
};

export default useLocalStorage;