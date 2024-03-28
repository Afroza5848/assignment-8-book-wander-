import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ReadBook from "../ReadBook/ReadBook";


const ReadBooks = () => {
    const [localData, setLocalData] = useState([]);
    const [sortedRating , setSortedRating] = useState([]);
    const [sortedTotalPage, setSortedTotalPages] = useState([]);
    const [sortedPublishYear,setSortedPublishYear] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('books')) || [];
        setLocalData(data)
    }, []);

    // sort rating
    const handleSortRating = () => {
        const ratingSort = localData.sort((a,b) =>  b.rating - a.rating);
        if(ratingSort){
            setSortedRating(ratingSort);
        }
    }
    // sort total page
    const handleSortPage = () => {
        const totalPageSort = localData.sort((a,b) => b.totalPages - a.totalPages);
        if(totalPageSort){
            setSortedTotalPages(totalPageSort);
        }
    }
    
    // sort publish year
    const handleSortPublishYear = () => {
        const totalYearSort = localData.sort((a,b)=> b.yearOfPublishing - a.yearOfPublishing);
        if(totalYearSort){
            setSortedPublishYear(totalYearSort);
        }
    }
   
    return (
        <div className="mb-10">
            <div className="flex justify-center items-center mb-8">
                <details className="dropdown">
                    <summary className="m-1 btn bg-green-500 text-white text-xl font-semibold">Sort By <IoIosArrowDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-52">
                        <li onClick={()=> handleSortRating(sortedRating)}><a>Rating</a></li>
                        <li onClick={()=> handleSortPage(sortedTotalPage)}><a>Number of pages</a></li>
                        <li onClick={()=> handleSortPublishYear(sortedPublishYear)}><a>Publisher Year</a></li>
                    </ul>
                </details>
            </div>

            <div className="grid grid-cols-1 gap-8 my-10">
                {
                    localData.map(data => <ReadBook key={data.id} data={data}></ReadBook>)
                }
            </div>
        </div>
    );
};

export default ReadBooks;