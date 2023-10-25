"use client";

import { useState } from "react";
import itemsData from "./items.json";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (itemName) => {
    let cleanedItemName = itemName.split(',')[0].trim();
    const emojiRegex = /[\u1F600-\u1F64F]/g; // Note: This regex might not cover all emoji ranges
    cleanedItemName = cleanedItemName.replace(emojiRegex, '');
    setSelectedItemName(cleanedItemName);
  };

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div>
        <h1 className="text-4xl font-bold m-4 text-center text-purple-500">
          Felix's Shopping List:
        </h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div>
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
      </div>
    </main>
  );
}



