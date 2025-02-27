import { useEffect, useState } from "react";


const useBooksData = () => {
    const [books,setBooks] = useState([]);

    useEffect(()=>{
        fetch('/books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return {books}
};

export default useBooksData;