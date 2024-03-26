import { useState } from "react";
import { Link, Outlet } from "react-router-dom";


const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div>
            <div className="bg-base-200 py-12 rounded-2xl text-center my-6">
                <h2 className="text-5xl play-fair font-bold">Books</h2>
            </div>
            <div className="px-4">
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  ">
                    <Link to="" onClick={()=>setTabIndex(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b ${tabIndex === 0? 'border border-b-0 text-gray-700' :'border-b'} dark:border-gray-300 dark:text-gray-400 rounded-t-lg`}>
                        
                        <span>Read Books</span>
                    </Link>
                    <Link to="wishlistBooks" onClick={()=>setTabIndex(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1? 'border border-b-0 text-gray-700' :'border-b'} rounded-t-lg dark:border-gray-300 dark:text-gray-400`}>
                       
                        <span>Wishlist Books</span>
                    </Link>
                    
                </div>
            </div>

            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;