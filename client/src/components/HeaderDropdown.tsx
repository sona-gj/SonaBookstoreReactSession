import '../assets/css/global.css'
import '../assets/css/HeaderDropdown.css';
import {Link} from 'react-router-dom';
import {CategoryItem} from "../types";
import {useContext} from "react";
import {Category} from "../contexts/CategoryContext";


function HeaderDropdown() {
    const categories = useContext<CategoryItem[]>(Category);
    return (

        <div className="header-dropdown">
            <div className="menu-category-down-arrow">
                <button className="menu-button">Categories</button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L11.165 15L15.33 10H7Z" fill="#1C0461"/>
                </svg>
            </div>
            <ul>
                {categories.map((item) =>
                    <Link key={item.categoryId} to={`/categories/name/${item.name}`}>
                        <li>

                            {item.name}</li>
                    </Link>)}

            </ul>

        </div>

    )
}

export default HeaderDropdown

