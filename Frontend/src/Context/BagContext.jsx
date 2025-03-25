import React, { createContext, useState } from 'react';

export const BagContext = createContext();

export const BagProvider = ({ children }) => {
    const [bag, setBag] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const addToBag = (product) => {
        setBag(prev => {
        const exists = prev.find(item => item.id === product.id);
        if (exists) {
            return prev.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            return [...prev, { ...product, quantity: 1 }];
        }
        });
    };

    const removeFromBag = (id) => {
        setBag(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id, quantity) => {
        setBag(prev => {
        if (quantity < 1) return prev.filter(item => item.id !== id);
        return prev.map(item =>
            item.id === id ? { ...item, quantity } : item
        );
        });
    };

    const addToWishlist = (product) => {
        setWishlist((prev) => prev.find(item => item.id === product.id) ? prev : [...prev, product]);
    };

    const removeFromWishlist = (id) => {
        setWishlist(prev => prev.filter(item => item.id !== id));
    };

    return (
        <BagContext.Provider value={{ bag, addToBag, removeFromBag, updateQuantity, wishlist, addToWishlist, removeFromWishlist }}>
        {children}
        </BagContext.Provider>
    );
};