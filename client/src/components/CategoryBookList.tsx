import '../types';
import '../assets/css/CategoryBookList.css';
import CategoryBookListItem from './CategoryBookListItem';
import CategoryNav from './CategoryNav';
import "../types";
import {BookItem} from "../types";
import {useParams} from "react-router-dom";
import {SetStateAction, useEffect, useState} from "react";
import axios from "axios";
import Loader from "./Loader";

function CategoryBookList() {
    const {categoryName} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [bookList, setBookList] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8080/SonaBookstoreReactSession/api/categories/name/${categoryName}/books`)
            .then((result: { data: SetStateAction<never[]>; }) => {
                setBookList(result.data)
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching books:', error);
                setIsLoading(false);
            });
    }, [categoryName]);
    return (
        <>
            {isLoading ?
                <Loader/>
                :
                <>
                    <CategoryNav/>
                    <section className="category-book-list">

                        {bookList.map((book: BookItem) => (
                            <CategoryBookListItem key={book.bookId} bookId={book.bookId} isPublic={book.isPublic}
                                                  price={book.price}
                                                  title={book.title}
                                                  author={book.author}/>))}
                    </section>
                </>
            }
        </>
    )
}

export default CategoryBookList;
