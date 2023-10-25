"use client";

import React, { useEffect, useState } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const getMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      if (response.ok) {
        const data = await response.json();
        setMeals(data.meals);
      } else {
        console.error("Failed to fetch meal ideas");
      }
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
    }
  };

  useEffect(() => {
    if (ingredient) {
      getMealIdeas(ingredient);
    }
  }, [ingredient]);

  return (
    <div className="border rounded-lg border-black w-96 m-4 p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 container mx-auto mt-8 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-2">Meal Ideas with {ingredient}:</h2>
      <ul className="list-disc pl-4">
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;

