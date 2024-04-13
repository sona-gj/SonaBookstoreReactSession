import {ShoppingCartItem, BookItem} from "../types";
import {Dispatch, ReducerAction} from "react";


export const CartTypes = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
    CLEAR: 'CLEAR'
};

type AppActions = {
    id: number;
    type: 'ADD' | 'REMOVE' | 'CLEAR';
    item: BookItem;
}

export const cartReducer = (state: ShoppingCartItem[], action: AppActions) => {
    const existingItem = state.find(item => item.id === action.id);
    switch (action.type) {
        case CartTypes.ADD:
            if (existingItem) {
                // If item exists in the cart, increment its quantity
                const updateState = state.map(item =>
                    item.id === action.id
                        ? {...item, quantity: item.quantity + 1}
                        : item
                );
                localStorage.setItem('cart', JSON.stringify(updateState));
                return updateState;
            } else {
                // If item doesn't exist, add it to the cart with quantity 1
                const updateState = [
                    ...state,
                    {id: action.id, book: action.item, quantity: 1},
                ];
                localStorage.setItem('cart', JSON.stringify(updateState));
                return updateState;
            }
        case CartTypes.REMOVE:
            if (existingItem) {
                // If item exists in the cart and its quantity is greater than 1, decrement its quantity
                if (existingItem.quantity > 1) {
                    const updateState = state.map(item =>
                        item.id === action.id
                            ? {...item, quantity: item.quantity - 1}
                            : item
                    );
                    localStorage.setItem('cart', JSON.stringify(updateState));
                    return updateState;
                } else {
                    // If item exists in the cart and its quantity is 1, remove it from the cart
                    const updateState =  state.filter(item => item.id !== action.id);
                    localStorage.setItem('cart', JSON.stringify(updateState));
                    return updateState;
                }
            } else {
                // If item doesn't exist, return the current state
                localStorage.setItem('cart', JSON.stringify(state));
                return state;
            }
        case CartTypes.CLEAR:
            localStorage.removeItem('cart')
            return [];
        default:
            throw new Error(`Invalid action type ${action.type}`);
    }
};