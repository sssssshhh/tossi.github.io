import Link from "next/link";
import Recipe from '@/models/Recipe';
import Image from "next/image";
import { useState, useEffect } from "react";
import { GetServerSideProps } from "next";

type Props = {
  title?: string;
  num?: number;
};

export default function Recipes( results: any) {
  console.log(results);
  // const [recipes, setRecipes] = useState<Recipe[]>([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch('/api/DB/recipe');
  //       const responseData = await response.json();

  //       const updatedRecipes = responseData.results
  //       .filter((result: any) => (
  //         result.properties.title.title[0]?.plain_text && result.properties.image.url
  //       ))
  //       .map((result: any) => (
  //         {
  //         id: result.id,
  //         title: result.properties.title.title[0].plain_text,
  //         img: result.properties.image.url,
  //         level: result.properties.level.select.name,
  //       }));
  //       setRecipes(updatedRecipes);
  //     } catch (error) {
  //       console.error('Error fetching recipe data:', error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event: any) => {
    const value = event.target.value;
    setSelectedValue(value);
  };

  // const filterRecipesByLevel = (): Recipe[] => {
  //   if (selectedValue === "") {
  //     return recipes;
  //   } else {
  //     return recipes.filter((recipe) => recipe.level === selectedValue);
  //   }
  // };
  // const filteredRecipes: Recipe[] = filterRecipesByLevel();

    return (
      <div>test</div>
      // <div className="w-full h-3/4 px-3 md:px-14 pt-28 flex flex-col justify-center items-center space-y-10">
      //   <div className="w-full flex flex-col justify-center items-center mb-16">
      //     <div className="py-6 text-3xl text-amber-700">RECIPES</div>
      //     <div className="w-full h-full p-4 text-amber-600 bg-amber-200 rounded-lg text-center">
      //       <i className="text-lg">You are the butter to my bread, the breath to my life.</i>
      //       <br/>
      //       <i className="text-sm">- Julie and Julia</i>
      //     </div>
      //   </div>
      //   <div className="w-full flex items-center pl-9 ">
      //     <span className="mr-2 font-bold">LEVEL:</span>
      //     <select value={selectedValue} onChange={handleSelectChange} className="border border-gray-300 rounded px-2 py-1 border-none focus:outline-none">
      //       <option value="">All</option>
      //       <option value="Easy">Easy</option>
      //       <option value="Moderate">Moderate</option>
      //       <option value="Advanced">Advanced</option>
      //     </select>
      //   </div>
      //   <div className="grid grid-cols-1 xl:grid-cols-3 mt-2 gap-3">
      //   {filteredRecipes.map((recipe, index) => (
      //   <Link key={index} href={{ pathname: `/baking/recipe/${recipe.id}` }}>                   
      //     <div className="flex flex-col items-center space-y-2 text-amber-800" key={`recipe-${recipe.id}`}>
      //       <div className="w-80 h-64 relative z-0">
      //         <Image
      //           src={recipe.img}
      //           alt="cookie"
      //           priority
      //           fill
      //         />
      //       </div>
      //       <i className="text-xs text-black self-end">level: {recipe.level}</i>
      //       <div className="text-base sm:text-xl font-extralight ">{recipe.title}</div>
      //     </div>
      //   </Link>
      //     ))}
      //   </div>
      //   <div className="h-20 w-full">
      //         {/** TODO: paging */}
      //   </div>
      // </div>
    )
  }

export async function getServerSideProps() {
  const notionApiUrl = `https://api.notion.com/v1/databases/${process.env.NEXT_PUBLIC_NOTION_DB_RECIPE_ID}/query`;

  const { results } = await 
    (await fetch(notionApiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_NOTION_KEY}`,
        'Notion-Version': '2022-06-28',
      },
    })).json();

  return {
    props: {
      results,
    },
  };
}