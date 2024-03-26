import useLocalStorage from "../../Hooks/useLocalStorage";
import ReadBook from "../ReadBook/ReadBook";


const ReadBooks = () => {
    const {localData} = useLocalStorage();
    console.log(localData);
    return (
        <div className="grid grid-cols-1 gap-8 my-10">
           {
            localData.map(data => <ReadBook key={data.id} data={data}></ReadBook>)
           }
        </div>
    );
};

export default ReadBooks;