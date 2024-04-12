import {createContext, Dispatch, ReactNode, useReducer} from "react";
import {cartReducer, } from "../reducers/CartReducer";
import { ShoppingCartItem} from "../types";

const initialCartState:ShoppingCartItem[] =  []
export const CartStore = createContext<{
    cart: ShoppingCartItem[];
    dispatch: Dispatch<any>;
}>({
    cart: initialCartState,
    dispatch: () => null
});

CartStore.displayName = 'CartContext';

interface CartProviderProps {
    children: ReactNode;
}


function CartProvider ({ children } : CartProviderProps){
    // @ts-ignore
    const [cart, dispatch]= useReducer(cartReducer,initialCartState);

    return (
        <CartStore.Provider value={{ cart, dispatch }}>
            {children}
        </CartStore.Provider>
    );
}

export default CartProvider;