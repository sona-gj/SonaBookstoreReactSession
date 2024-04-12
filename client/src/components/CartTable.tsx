import "../assets/css/CartTable.css"
import {BookItem, ShoppingCartItem} from "../types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';
import {faMinusCircle} from '@fortawesome/free-solid-svg-icons/faMinusCircle';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import {useContext} from "react";
import {CartStore} from "../contexts/CartContext";
import {CartTypes} from "../reducers/CartReducer";
import {Link, useNavigate} from "react-router-dom";
import Checkout from "./Checkout";


const bookImageFileName = (book: BookItem) => {
    let name = book.title.toLowerCase();
    name = name.replace(/ /g, "-");
    name = name.replace(/'/g, "");
    return `${name}.gif`;
};


function CartTable() {
    const navigate = useNavigate();
    const {cart} = useContext(CartStore);
    const {dispatch} = useContext(CartStore);
    const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    const addBookToCart = (cartItem: ShoppingCartItem) => {
        dispatch({type: CartTypes.ADD, item: cartItem.book, id: cartItem.book.bookId});
    };
    const removeBookFromCart = (cartItem: ShoppingCartItem) => {
        dispatch({type: CartTypes.REMOVE, id: cartItem.book.bookId})
    }
    const calculateSubtotal= () => {
        console.log('hi')
    }
    return (
        <>
            <div className="cart-count">
                <label>{`Your shopping cart contains ${cartQuantity} items`}</label>
            </div>
            <div className="cart-call-to-action-buttons">
                <div className="continue-shopping">
                    <button className="continue-shopping-button">
                        <label className="continue-shopping-text">Continue Shopping</label>
                    </button>
                </div>
                <div className="proceed-to-checkout">
                    <button className="proceed-to-checkout-button" onClick={()=>navigate("/checkout")}>
                        <label className="proceed-to-checkout-text">Proceed To Checkout</label>
                    </button>
                </div>
            </div>
            <div className="subtotal-label">
                <label>Subtotal: $</label>
            </div>
            <div className="cart-table">
                <ul className="cart2">
                    <li className="table-heading">
                        <div className="heading-book">Book</div>
                        <div className="heading-price">Price</div>
                        <div className="heading-quantity">Quantity</div>
                        <div className="heading-subtotal">Amount</div>
                    </li>
                    {cart.map((cartItem) => (
                        <>
                            <li key={cartItem.book.bookId}>
                                <div className="cart-book-image">
                                    <div className="rect narrow-rect">
                                        <img src={require('../assets/images/books/' + bookImageFileName(cartItem.book))}
                                             alt="book.title"
                                        />
                                    </div>
                                </div>
                                <div className="cart-book-title">{cartItem.book.title}</div>
                                <div
                                    className="cart-book-price">${(((cartItem.book.price - cartItem.book.price * 0.2) * 100) / 100).toFixed(2)}</div>
                                <div className="cart-book-quantity">
                                    <button
                                        className="icon-button dec-button"
                                        onClick={() => removeBookFromCart(cartItem)}
                                    >
                                        <i className="fas fa-minus-circle"> <FontAwesomeIcon icon={faMinusCircle}/></i>
                                    </button>
                                    <span className="quantity">{cartItem.quantity}</span>&nbsp;
                                    <button
                                        className="icon-button inc-button"
                                        onClick={() => addBookToCart(cartItem)}
                                    >
                                        <i className="fas fa-plus-circle"><FontAwesomeIcon icon={faPlusCircle}/></i>
                                    </button>
                                </div>
                                <div
                                    className="cart-book-subtotal">${((((cartItem.book.price - cartItem.book.price * 0.2) * 100) / 100) * cartItem.quantity).toFixed(2)}</div>
                            </li>
                            <li className="line-sep"></li>
                        </>
                    ))}

                </ul>
            </div>
        </>
    )
}

export default CartTable;

