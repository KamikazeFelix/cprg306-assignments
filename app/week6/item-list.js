"use client";

import React, { useState } from 'react';
import Item from './item';

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        }
        if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    const sortingButtons = (
        <div className='border border-black w-96 m-4 p-2 bg-gradient-to-r from-blue-200 to-purple-300 container mx-auto mt-8 '>
            <button className='border border-balck w-30 m-1 p-1 bg-gradient-to-r from-red-300 to-purple-400 '
                style={{ backgroundColor: sortBy === "name" ? "lightblue" : "" }}
                onClick={() => setSortBy("name")}
            >
                Sort by Name
            </button>
            <button className='border border-balck w-30 m-1 p-1 bg-gradient-to-r from-red-300 to-purple-400 '
                style={{ backgroundColor: sortBy === "category" ? "lightblue" : "" }}
                onClick={() => setSortBy("category")}
            >
                Sort by Category
            </button>
        </div>
    );

    const itemList = (
        <ul>
            {sortedItems.map(item => (
                <Item 
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                />
            ))}
        </ul>
    );

    return (
        <div>
            {sortingButtons}
            {itemList}
        </div>
    );
}

