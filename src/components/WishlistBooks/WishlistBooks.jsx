import useLocalStorageWish from "../../Hooks/useLocalStorageWish";
import WishlistBook from "../WishlistBook/WishlistBook";


const WishlistBooks = () => {
    const { localData } = useLocalStorageWish()
    return (
        
            <div className="grid grid-cols-1 gap-8 my-10">
                {
                    localData.map(data => <WishlistBook key={data.id} data={data}></WishlistBook>)
                }
            </div>
        
    );
};

export default WishlistBooks;