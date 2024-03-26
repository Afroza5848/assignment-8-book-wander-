
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { AiOutlineFilePdf } from "react-icons/ai";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";



const WishlistBook = ({ data }) => {
    const { id, image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = data
    return (
        <div className="card card-side gap-8 border border-gray-200">
            <figure className="w-[25%]"><img className='bg-base-200 px-16  py-10 rounded-2xl my-5 ml-5' src={image} alt="Movie" /></figure>
            <div className="my-6 w-full space-y-3">
                <h2 className="card-title">{bookName}</h2>
                <p className='work font-medium text-xl text-[#13131338] '>By: {author}</p>
                <div className='flex gap-4 items-center'>
                    <h2 className="text-2xl font-bold text-[#131313]">Tag:</h2>
                    {
                        tags?.map((item, idx) => <span className='work md:text-xl text-[#23BE0A] font-medium bg-[#23BE0A0D] px-4 py-2 rounded-3xl' key={idx}>{item}</span>)
                    }
                    <div className="flex gap-2 items-center text-xl">
                        <p className="flex gap-1 items-center justify-center"><CiLocationOn /> Year of Publishing :</p>
                        <h2 className="font-bold">{yearOfPublishing}</h2>
                    </div>

                </div>

                <div className="flex gap-10 items-center text-xl border-b border-gray-200 pb-6">
                    <p className="flex gap-2 items-center justify-center"><HiOutlineUsers /> Publisher:  {publisher}</p>
                    <p className="flex gap-2 items-center justify-center"> <AiOutlineFilePdf /> Page: {totalPages}</p>
                </div>
                <div className="flex items-center gap-5 pt-4">
                    <p className="work md:text-xl text-[#328EFF] font-medium bg-[#328EFF0D] px-4 py-2 rounded-3xl">Category: {category}</p>
                    <p className="work md:text-xl text-[#FFAC33] font-medium bg-[#FFAC330D] px-4 py-2 rounded-3xl">Rating: {rating}</p>
                    <Link to={`/books/${id}`}><button className="px-4 py-2 bg-[#23BE0A] text-white rounded-3xl work font-medium">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

WishlistBook.propTypes = {
    data: PropTypes.object,
};

export default WishlistBook;