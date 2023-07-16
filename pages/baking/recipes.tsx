import { useState } from 'react';
import Link from "next/link";

interface Recipe {
  id: number,
  title: string;
  ingredient: string;
  img: string;
  level: string;
}

export default function Recipes(){
  const recipes: Recipe[]  = [
    {"id": 0, "title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg", "level": "Easy"},
    {"id": 1, "title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg", "level": "Moderate"},
    {"id": 2, "title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg", "level": "Advanced"},
    {"id": 3, "title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg", "level": "Moderate"},
    {"id": 4, "title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg", "level": "Moderate"},
    {"id": 5, "title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg", "level": "Moderate"},
    {"id": 6, "title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg", "level": "Advanced"},
    {"id": 7, "title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg", "level": "Advanced"}, 
    {"id": 8, "title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg", "level": "Easy"},
    {"id": 9, "title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg", "level": "Advanced"},  
    {"id": 10, "title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg", "level": "Easy"},
    {"id": 11, "title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg", "level": "Easy"}, 
    {"id": 12, "title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg", "level": "Advanced"},  
    {"id": 13, "title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg", "level": "Easy"},
    {"id": 14, "title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg", "level": "Easy"} 
  ];

  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event: any) => {
    const value = event.target.value;
    setSelectedValue(value);
  };

  const filterRecipesByLevel = (): Recipe[] => {
    if (selectedValue === "") {
      return recipes;
    } else {
      return recipes.filter((recipe) => recipe.level === selectedValue);
    }
  };

  const filteredRecipes: Recipe[] = filterRecipesByLevel();

    return (
      <div className="w-full h-3/4 px-14 pt-28 flex flex-col justify-center items-center space-y-10">
        <div className="w-full flex flex-col justify-center items-center mb-16">
          <div className="py-6 text-3xl text-amber-700">RECIPES</div>
          <div className="w-full h-full p-4 text-amber-600 bg-amber-200 rounded-lg text-center">
            <i className="text-lg">You are the butter to my bread, the breath to my life.</i>
            <br/>
            <i className="text-sm">- Julie and Julia</i>
          </div>
        </div>
        <div className="w-full flex items-center pl-9">
          <span className="mr-2 font-bold">LEVEL:</span>
          <select value={selectedValue} onChange={handleSelectChange} className="border border-gray-300 rounded px-2 py-1 border-none focus:outline-none">
            <option value="">All</option>
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 mt-2 gap-3">
        {filteredRecipes.map((recipe, index) => (
        <Link href={{ pathname: `/baking/${recipe.id}` }}>                   
          <div className="flex flex-col items-center space-y-2 text-amber-800" key={`recipe-${recipe.id}`}>
            <div className="w-80 h-64 bg-[url('../img/victoriaCake_2.jpg')]"></div>
            <i className="text-xs text-black self-end">level: {recipe.level}</i>
            <div className="text-base sm:text-xl font-extralight ">{recipe.title}</div>
            <div className="text-xs sm:text-sm font-light">WITH {recipe.ingredient}</div>
          </div>
        </Link>
          ))}
        </div>
        <div className="h-20 w-full">
              {/** TODO: paging */}
        </div>
      </div>
    )}