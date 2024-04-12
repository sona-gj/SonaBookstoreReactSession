import '../assets/css/CategoryBookListItem.css';
import '../types'
import "../types";
import {BookItem} from "../types";
import {CartTypes} from "../reducers/CartReducer";
import {useContext} from "react";
import {CartStore} from "../contexts/CartContext";

const bookImageFileName =  (book:BookItem) => {
  let name = book.title.toLowerCase();
  name = name.replace(/ /g, "-");
  name = name.replace(/'/g, "");
  return `${name}.gif`;
};

function CategoryBookListItem(book:BookItem) {
    const  {dispatch} = useContext(CartStore);
    const addBookToCart = () => {
        dispatch({ type: CartTypes.ADD, item:book, id: book.bookId });
    };
return (

        <div className="book-container">
            <div className="book-box">
                <div className="book-front-page">
                    <div className="image-container">
                    <img src={require('../assets/images/books/' + bookImageFileName(book))}
                         alt="book.title"
                    />
                    </div>
                    {book.isPublic && <div className="read-now-container">
                        <svg width="25" height="30" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.4545 0L14.7727 6.75V23.25L20.4545 16.5V0ZM6.25 4.5C4.03409 4.5 1.64773 5.1 0 6.75V28.74C0 29.115 0.284091 29.49 0.568182 29.49C0.681818 29.49 0.738636 29.385 0.852273 29.385C2.38636 28.41 4.60227 27.75 6.25 27.75C8.46591 27.75 10.8523 28.35 12.5 30C14.0341 28.725 16.8182 27.75 18.75 27.75C20.625 27.75 22.5568 28.215 24.1477 29.34C24.2614 29.415 24.3182 29.385 24.4318 29.385C24.7159 29.385 25 29.01 25 28.635V6.75C24.3182 6.075 23.5795 5.625 22.7273 5.25V25.5C21.4773 24.975 20.1136 24.75 18.75 24.75C16.8182 24.75 14.0341 25.725 12.5 27V6.75C10.8523 5.1 8.46591 4.5 6.25 4.5Z"
                                fill="#EDB264"/>
                        </svg>
                    </div>}
                </div>
                <div className="book-info">
                    <div className="book-labels">
                        <label className="title">{book.title}</label>
                        <label className="author">{book.author}</label>
                    </div>
                    <div className="book-prices">
                        <label className="price original-price">${((book.price * 100) / 100).toFixed(2)}</label>
                        <label className="price discounted-price">${(((book.price - book.price*0.2) * 100) / 100).toFixed(2)}</label>
                    </div>
                    <div className="add-to-cart">
                        <button className="add-to-cart-button" onClick={addBookToCart}>
                            <div className="cart-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 18.89 18.1 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 18.89 8.1 18 7 18Z"
                                        fill="#1C0461"/>
                                </svg>
                            </div>
                            <label className="add-to-cart-text">
                                Add To Cart
                            </label>
                        </button>
                    </div>
                </div>

            </div>
        </div>


)
}

export default CategoryBookListItem;
