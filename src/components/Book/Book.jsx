
import PropTypes from 'prop-types';

const Book = ({ book }) => {
    const {image} = book;
    return (
        <div className="card bg-base-100 border border-gray-200">
            <figure className="mx-5 mt-5 bg-base-200 rounded-xl">
                <img src={image} alt="book" className="rounded-xl py-10" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object
};

export default Book;