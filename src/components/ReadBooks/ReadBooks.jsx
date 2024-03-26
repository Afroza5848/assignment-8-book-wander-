import useLocalStorage from "../../Hooks/useLocalStorage";


const ReadBooks = () => {
    const {localData} = useLocalStorage();
    console.log(localData);
    return (
        <div>
            <h2>read books</h2>
        </div>
    );
};

export default ReadBooks;