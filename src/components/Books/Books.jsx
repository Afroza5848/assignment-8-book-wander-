import useBooksData from "../../Hooks/useBooksData";
import Book from "../Book/Book";

const Books = () => {

    const {books} = useBooksData();
    //console.log(books);
    return (
        <div className="my-10">
            <div className="text-7xl play-fair text-center font-bold py-8">
                <h2>Books</h2>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;