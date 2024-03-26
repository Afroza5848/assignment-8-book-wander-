
//import PropTypes from 'prop-types';

import { useParams } from "react-router-dom";
import useBooksData from "../../Hooks/useBooksData";

const BookDetails = () => {
    const { books } = useBooksData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find(item => item.id == idInt);
    //console.log(book);
    const { image, tags, bookName, author, category, rating, review,totalPages,publisher,yearOfPublishing } = book || {};
    return (
        <div className="card lg:card-side gap-10 rounded-2xl mb-10">
            <figure className="lg:w-[50%] w-full h-full bg-base-200 rounded-2xl py-28"><img className="w-[50%] rounded-3xl" src={image} alt="book" /></figure>
            <div className=" lg:w-[50%] w-full py-0 md:space-y-5 space-y-3">
                <h2 className="card-title text-3xl text-[#131313] play-fair">{bookName}</h2>
                <p className='work font-medium text-xl text-[#13131366] '>By: {author}</p>
                <h3 className="border-y text-xl font-medium text-[#131313B9] border-gray-200 py-6">{category}</h3>
                <p className="text-xl pt-4">{review}</p>

                <div className='flex lg:gap-8 gap-4 items-center border-b border-gray-200 pb-8'>
                    <h2 className="text-2xl font-bold text-[#131313]">Tag:</h2>
                        {
                            tags?.map((item, idx) => <span className='work md:text-xl text-[#23BE0A] font-medium bg-[#23BE0A0D] px-4 py-2 rounded-3xl' key={idx}>{item}</span>)
                        }
                </div>

                <div className="flex gap-12 items-center    text-xl">
                    <p>Number of Pages :</p>
                    <h2 className="font-bold">{totalPages}</h2>
                </div>
                <div className="flex gap-10 space-x-20 items-center text-xl">
                    <p>Publisher:</p>
                    <h2 className="font-bold">{publisher}</h2>
                </div>

                <div className="flex gap-10 space-x-1 items-center text-xl">
                    <p>Year of Publishing :</p>
                    <h2 className="font-bold">{yearOfPublishing}</h2>
                </div>

                <div className="flex gap-12 space-x-24  items-center text-xl">
                    <p>Rating :</p>
                    <h2 className="font-bold">{rating}</h2>
                </div>

                 <div className=" flex gap-7 items-center">
                    <button className="work px-8 py-3 text-xl rounded-xl font-semibold border border-gray-800">Read</button>
                    <button className="work px-8 py-3 text-xl rounded-xl text-white font-semibold border border-[#50B1C9]  bg-[#50B1C9]">Wishlist</button>
                </div>       

            </div>
        </div>
    );
};

BookDetails.propTypes = {

};

export default BookDetails;