import { useState, useEffect } from "react";
import itemsData from "./items.json";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import useUserAuth from "./useUserAuth"; 
import React, { useEffect } from 'react';



export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);
  const user = useUserAuth();

  useEffect(() => {
    if (user === null) {
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

async function getItems(userId) {
  const db = getFirestore();
  const itemsCollection = collection(db, `users/${userId}/items`);
  const q = query(itemsCollection);
  const querySnapshot = await getDocs(q);
  const items = [];

  querySnapshot.forEach(doc => {
      items.push({ id: doc.id, ...doc.data() });
  });

  return items;
}

async function addItem(userId, item) {
  const db = getFirestore();
  const itemsCollection = collection(db, `users/${userId}/items`);
  const docRef = await addDoc(itemsCollection, item);
  
  return docRef.id;
}

import React, { useState, useEffect } from 'react';

function ShoppingList() {
    const [items, setItems] = useState([]); 
    const user = {}; 

    useEffect(() => {
        loadItems();
    }, []); 

    const loadItems = async () => {
        try {
            const fetchedItems = await getItems(user.uid); 
            setItems(fetchedItems); 
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    return (
        <div>
            {}
            {items.map(item => (
                <div key={item.id}>
                    {}
                </div>
            ))}
        </div>
    );
}

export default ShoppingList;

import React, { useEffect } from 'react';

function ExampleComponent() {
    useEffect(() => {

        return () => {
        };
    }, []); 

    return <div>Hello, World!</div>;
}

export default ExampleComponent;
