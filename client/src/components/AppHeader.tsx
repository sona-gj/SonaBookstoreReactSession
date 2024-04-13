import HeaderDropdown from './HeaderDropdown';
import '../assets/css/global.css'
import '../assets/css/AppHeader.css';
import {Link, useLocation} from 'react-router-dom';
import {useContext} from "react";
import {CartStore} from "../contexts/CartContext";

function AppHeader() {
    const location = useLocation();
    const {cart} = useContext(CartStore);
    const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    const categoryPaths = '/categories';// Add more paths as needed
    const isInCategoryPage = location.pathname.startsWith(categoryPaths);

// Update the className condition based on whether the location is in a category page
    const className = `${isInCategoryPage ? "on-highlight" : ""}`

    return (
        <header
            className={`container ${location.pathname === '/' ? "bookstore-header-home-bg" : "bookstore-header-others-bg"}`}>
            <section className="bookstore-logo-container">
                <Link to={"/"}>
                    <img
                        src={require('../assets/images/site/bookstore-booklogo.png')}
                        alt="Paperpulse Logo"
                        width="auto"
                        height="auto"
                    />
                </Link>
                <Link to={"/"}>
                    <img
                        src={require('../assets/images/site/bookstore-logoname.png')}
                        alt="PaperPulse"
                        width="auto"
                        height="auto"
                    />
                </Link>
            </section>

            <section className="header-menu">
                <Link to={'/'} className={`menu-button ${location.pathname === '/' ? "on-highlight" : ""}`}>Home</Link>
                <div className={className}>
                    <HeaderDropdown/>
                </div>
            </section>

            <section className="search-bar-and-cart">
                <div className="container-mid-align">
                    <form action="">
                        <label>
                            <input type="text" className="search-bar" placeholder="Search"/>
                        </label>
                    </form>
                </div>
                <Link to={"/cart"}>
                    <button className="cart-button">
                        <div className="move-ellipse">
                            <div className="count-ellipse">
                                <p className="count-text">{cartQuantity}</p>
                            </div>
                        </div>
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 16.9568C14.89 16.9568 14 17.8468 14 18.9568C14 19.4872 14.2107 19.9959 14.5858 20.371C14.9609 20.7461 15.4696 20.9568 16 20.9568C16.5304 20.9568 17.0391 20.7461 17.4142 20.371C17.7893 19.9959 18 19.4872 18 18.9568C18 17.8468 17.1 16.9568 16 16.9568ZM0 0.956802V2.9568H2L5.6 10.5468L4.24 12.9968C4.09 13.2768 4 13.6068 4 13.9568C4 14.4872 4.21071 14.9959 4.58579 15.371C4.96086 15.7461 5.46957 15.9568 6 15.9568H18V13.9568H6.42C6.3537 13.9568 6.29011 13.9305 6.24322 13.8836C6.19634 13.8367 6.17 13.7731 6.17 13.7068C6.17 13.6568 6.18 13.6168 6.2 13.5868L7.1 11.9568H14.55C15.3 11.9568 15.96 11.5368 16.3 10.9268L19.88 4.4568C19.95 4.2968 20 4.1268 20 3.9568C20 3.69159 19.8946 3.43723 19.7071 3.2497C19.5196 3.06216 19.2652 2.9568 19 2.9568H4.21L3.27 0.956802M6 16.9568C4.89 16.9568 4 17.8468 4 18.9568C4 19.4872 4.21071 19.9959 4.58579 20.371C4.96086 20.7461 5.46957 20.9568 6 20.9568C6.53043 20.9568 7.03914 20.7461 7.41421 20.371C7.78929 19.9959 8 19.4872 8 18.9568C8 17.8468 7.1 16.9568 6 16.9568Z"
                                fill="#1C0461"/>
                        </svg>
                    </button>
                </Link>
                {location.pathname === '/' ?
                    <div className="container-mid-align">
                        <button className="login-button">
                            <span className="login-text">Sign In</span>
                        </button>
                    </div> :
                    <div className="logged-in-user-container">
                        <div className="logo-container">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0ZM8 10C12.42 10 16 11.79 16 14V16H0V14C0 11.79 3.58 10 8 10Z"
                                    fill="#1C0461"/>
                            </svg>
                        </div>
                        <div className="user-name">
                            <p className="name">Sona Grace John</p>
                        </div>
                    </div>
                }
            </section>

        </header>
    )
}

export default AppHeader;

