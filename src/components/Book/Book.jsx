
import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { id, image, tags, bookName, author, category, rating } = book || {};
    return (
        <Link to={`/books/${id}`}>
            <div className="card bg-base-100 h-full border border-gray-200">
                <figure className="mx-5 mt-5 bg-base-200 rounded-xl">
                    <img src={image} alt="book" className="rounded-xl py-10" />
                </figure>
                <div className="card-body space-y-3">
                    <div className='flex lg:gap-8 gap-4'>
                        {
                            tags?.map((item, idx) => <span className='work md:text-xl text-[#23BE0A] font-medium bg-[#23BE0A0D] px-4 py-2 rounded-3xl' key={idx}>{item}</span>)
                        }
                    </div>
                    <h2 className="card-title text-3xl text-[#131313] play-fair font-bold">{bookName}</h2>
                    <p className='work font-medium text-xl text-[#13131338] border-b border-gray-300 pb-6 border-dashed'>By: {author}</p>
                    <div className='flex justify-between text-xl'>
                        <h2 className='font-medium text-[#131313B9] work'>{category}</h2>
                        <h2 className='flex gap-2 items-center font-medium text-[#131313B9] work'>{rating} <CiStar /></h2>
                    </div>
                </div>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object,
};

export default Book;