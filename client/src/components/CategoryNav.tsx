import '../assets/css/CategoryNav.css'
import '../assets/css/global.css'
import {CategoryItem} from "../types";
import {Link, useParams} from "react-router-dom";
import {useContext} from "react";
import {Category} from "../contexts/CategoryContext";

function CategoryNav() {
  const categories = useContext<CategoryItem[]>(Category);
  const {categoryName} = useParams();
  const currentCategoryName = categoryName;
  return (
  <nav className="category-nav">
    <ul className="category-buttons">

      {categories.map((category) =>
          (
          <li key={category.categoryId} className={`${category.name ===  currentCategoryName? "selected-category-list" : "unselected-category-list"}`}>
            <Link to={`/categories/name/${category.name}`} className={`category-name-button ${category.name === currentCategoryName ? "selected-category-button selected-category" : "unselected-category-button"}`}>
              {category.name}
            </Link>
            {/*<hr className={`${category.categoryId === currentCategoryId ? "category-focus" : ""}`}/>*/}
          </li>
      ))}
    </ul>
  </nav>
)
}

export default CategoryNav;

