import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";


const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [rat , setRating] = useState([])
    const handleRating = () => {
        const localRating = JSON.parse(localStorage.getItem('books'));
        localRating.find(rating => setRating(rating))
        console.log(rat);
    //    const sortResult = rat.sort((a,b) => {return b - a} );
    //    setRating(sortResult);
      
    }
    return (
        <div>
            <div className="bg-base-200 py-12 rounded-2xl text-center mt-6 mb-10 ">
                <h2 className="text-5xl play-fair font-bold">Books</h2>
            </div>

            <div className="flex justify-center items-center mb-8">
                <details className="dropdown">
                    <summary className="m-1 btn bg-green-500 text-white text-xl font-semibold">Sort By <IoIosArrowDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-52">
                        <li onClick={handleRating}><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Publisher Year</a></li>
                    </ul>
                </details>
            </div>

            <div className="px-4">
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  ">
                    <Link to="" onClick={() => setTabIndex(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b ${tabIndex === 0 ? 'border border-b-0 text-gray-700' : 'border-b'} dark:border-gray-300 dark:text-gray-400 rounded-t-lg`}>

                        <span>Read Books</span>
                    </Link>
                    <Link to="wishlistBooks" onClick={() => setTabIndex(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0 text-gray-700' : 'border-b'} rounded-t-lg dark:border-gray-300 dark:text-gray-400`}>

                        <span>Wishlist Books</span>
                    </Link>

                </div>
            </div>

            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;