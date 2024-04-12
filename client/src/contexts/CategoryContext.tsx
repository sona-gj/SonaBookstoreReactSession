import {createContext, SetStateAction, useEffect, useState, ReactNode} from "react";
import {CategoryItem} from "../types";
import axios from "axios";

export const Category = createContext<CategoryItem[] | []>([]);   // creates a context called Category
Category.displayName = 'CategoryContext';

interface CategoryContextProps {
    children: ReactNode;
}


function CategoryContext ({ children }: CategoryContextProps )  {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/SonaBookstoreReactSession/api/categories')
            .then((result: { data: SetStateAction<never[]>; }) => {
                setCategories(result.data)
                // setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
                // setIsLoading(false);
            });
    }, []);
    return (
        <Category.Provider value ={categories}>{children}</Category.Provider>
    );
}
export default CategoryContext;