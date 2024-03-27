import { CiLocationOn } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { AiOutlineFilePdf } from "react-icons/ai";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const ReadBook = ({ data }) => {
    const { id, image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = data || {}
    return (
        <div className="card lg:card-side gap-8 border border-gray-200">
            <figure className="lg:w-[25%] w-[100%] flex justify-center"><img className='bg-base-200 lg:px-16 p-10  lg:py-10 rounded-2xl my-5 ml-5' src={image} alt="Movie" /></figure>


            <div className="my-6 w-full px-6 space-y-3">
                <h2 className="card-title">{bookName}</h2>
                <p className='work font-medium text-xl text-[#13131338] '>By: {author}</p>
                <div className='lg:flex flex-col lg:flex-row gap-4 lg:space-y-0 space-y-4  lg:items-center'>
                    <h2 className="text-2xl font-bold text-[#131313]">Tag:</h2>
                    <div className="lg:flex flex-col lg:flex-row">
                        {
                            tags?.map((item, idx) => <span className='work md:text-xl text-[#23BE0A] font-medium bg-[#23BE0A0D] px-4 py-2 rounded-3xl' key={idx}>{item}</span>)
                        }
                    </div>
                    <div className="flex gap-2 items-center text-xl ">
                        <p className="flex gap-1 items-center justify-center"><CiLocationOn /> Year of Publishing :</p>
                        <h2 className="font-bold">{yearOfPublishing}</h2>
                    </div>

                </div>

                <div className="flex lg:gap-10 gap-3 lg:items-center items-start text-xl border-b border-gray-200 lg:pb-6 lg:flex flex-col lg:flex-row">
                    <p className="flex gap-2 items-center justify-center"><HiOutlineUsers /> Publisher:  {publisher}</p>
                    <p className="flex gap-2 items-center justify-center"> <AiOutlineFilePdf /> Page: {totalPages}</p>
                </div>
                
                <div className="flex lg:items-center gap-5 pt-4 lg:flex flex-col lg:flex-row">
                    <p className="work md:text-xl text-[#328EFF] font-medium bg-[#328EFF0D] px-4 py-2 rounded-3xl">Category: {category}</p>
                    <p className="work md:text-xl text-[#FFAC33] font-medium bg-[#FFAC330D] px-4 py-2 rounded-3xl">Rating: {rating}</p>
                    <Link to={`/books/${id}`}><button className="px-4 py-2 bg-[#23BE0A] text-white rounded-3xl work font-medium">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

ReadBook.propTypes = {
    data: PropTypes.object,
};

export default ReadBook;