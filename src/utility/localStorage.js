import { toast } from "react-toastify";

export const saveDataToLocalStorage = (data) => {
    const saveData = JSON.parse(localStorage.getItem('books')) || [];

    const exits = saveData.find(item => item.id === data.id);
    if(!exits){
        saveData.push(data);
        localStorage.setItem('books',JSON.stringify(saveData));
        toast.success("added successfully");
    }
    else{
        toast.warn("Already exits");
    }
    
}

export const getFromLocalStorageData = () => {
    const data = JSON.parse(localStorage.getItem('books')) || [];
    return data
}

// wish list
export const saveWishDataToLocalStorage = (data) => {
    const saveData = JSON.parse(localStorage.getItem('wishBooks')) || [];

    const exits = saveData.find(item => item.id === data.id);
    if(!exits){
        saveData.push(data);
        localStorage.setItem('wishBooks',JSON.stringify(saveData));
        toast.success("added successfully");
    }
    else{
        toast.warn("Already exits");
    }
    
}

export const getFromLocalStorageWishData = () => {
    const data = JSON.parse(localStorage.getItem('wishBooks')) || [];
    return data
}