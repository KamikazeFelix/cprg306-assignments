"use client";
import React, { useState } from 'react';

const NewItem = ({ onAddItem }) => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            name: name,
            quantity: quantity,
            category: category,
        };

        onAddItem(item);

        setName('');
        setQuantity(1);
        setCategory('produce');
    };

    return (
        <div className='border rounded-lg border-black w-96 m-4 p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 container mx-auto mt-8 flex flex-col items-center '>
            <form onSubmit={handleSubmit} className="form">
                <label>
                    <br />
                    <input
                        placeholder=' Item Name'
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="form-input border rounded-lg"
                    />
                    <br />
                </label>
                <br />
                <label>
                    <input
                        type="number"
                        min="1"
                        max="99"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        required
                        className="form-input  border rounded-lg text-center"
                    />
                    <br />
                </label>
                <br />
                <label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className='border rounded-lg' required>
                        <option value=""> Select a category</option>
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>
                    <br />
                </label>
                <br />
                <button type="submit" className="form-input w-full border rounded-lg border-black bg-white">Submit</button>
            </form>
        </div>
    );
}

export default NewItem;


