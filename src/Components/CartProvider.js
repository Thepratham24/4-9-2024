import React, { createContext, useContext, useReducer } from 'react';

// Create contexts for state and dispatch
const CartStateContext = createContext();
const CartDispatchContext = createContext();

// Reducer to manage cart state
const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            const { id, name, qty, size, options, img } = action;
            const price = options[size] || 0; // Default to 0 if size is not found
            return [...state, { id, name, qty, size, price, img }];

        case 'REMOVE':
            return state.filter((_, index) => index !== action.index);
        
        case 'DROP':
            return []; // Clear the cart
        
        default:
            console.error("Unhandled action type: ", action.type);
            return state;
    }
};

// Provider component to wrap your app
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);
    
    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    );
};

// Custom hooks for using context
export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
