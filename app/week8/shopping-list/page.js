import { useState, useEffect } from "react";
import itemsData from "./items.json";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import useUserAuth from "./useUserAuth"; 

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);
  const user = useUserAuth();

  useEffect(() => {
    if (user === null) {
      // Redirect the user to the landing page or show a login prompt
    }
  }, [user]);

  if (user === null) {
    return null;
  }

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



