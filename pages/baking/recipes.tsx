import Link from "next/link";
import Recipe from '@/models/Recipe';
import Image from "next/image";
import { useState, useEffect } from "react";

type Props = {
  title?: string;
  num?: number;
};

export default function Recipes() {
  const results = {
    "object": "list",
    "results": [
        {
            "object": "page",
            "id": "83c7212f-3944-46bf-8397-040dbc10c534",
            "created_time": "2023-08-18T03:08:00.000Z",
            "last_edited_time": "2023-08-18T04:39:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "1b83168b-8cec-4490-abfe-757fe53936bf"
            },
            "archived": false,
            "properties": {
                "level": {
                    "id": "k%7Cpe",
                    "type": "select",
                    "select": {
                        "id": "gJJA",
                        "name": "Easy",
                        "color": "blue"
                    }
                },
                "image": {
                    "id": "q_D%3C",
                    "type": "url",
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/ChocolateCoconutCookie.jpg"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "비건 초콜릿 코코넛 쿠키",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "비건 초콜릿 코코넛 쿠키",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/83c7212f394446bf8397040dbc10c534",
            "public_url": null
        }
    ],
    "next_cursor": null,
    "has_more": false,
    "type": "page_or_database",
    "page_or_database": {}
};

  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // const response = await fetch('/api/DB/recipe');
        // const responseData = await response.json();

        const updatedRecipes = results.results
        .filter((result: any) => (
          result.properties.title.title[0]?.plain_text && result.properties.image.url
        ))
        .map((result: any) => (
          {
          id: result.id,
          title: result.properties.title.title[0].plain_text,
          img: result.properties.image.url,
          level: result.properties.level.select.name,
        }));
        setRecipes(updatedRecipes);
      } catch (error) {
        console.error('Error fetching recipe data:', error);
      }
    }
    fetchData();
  }, []);

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
      <div className="w-full h-3/4 px-3 md:px-14 pt-28 flex flex-col justify-center items-center space-y-10">
        <div className="w-full flex flex-col justify-center items-center mb-16">
          <div className="py-6 text-3xl text-amber-700">RECIPES</div>
          <div className="w-full h-full p-4 text-amber-600 bg-amber-200 rounded-lg text-center">
            <i className="text-lg">You are the butter to my bread, the breath to my life.</i>
            <br />
            <i className="text-sm">- Julie and Julia</i>
          </div>
        </div>
        <div className="w-full flex items-center pl-9 ">
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
            <Link key={index} href={{ pathname: `/baking/recipe/${recipe.id}` }}>
              <div className="flex flex-col items-center space-y-2 text-amber-800" key={`recipe-${recipe.id}`}>
                <div className="w-80 h-64 relative z-0">
                  <Image
                    src={recipe.img}
                    alt="cookie"
                    priority
                    fill />
                </div>
                <i className="text-xs text-black self-end">level: {recipe.level}</i>
                <div className="text-base sm:text-xl font-extralight ">{recipe.title}</div>
              </div>
            </Link>
          ))}
        </div>
        <div className="h-20 w-full">
          {/** TODO: paging */}
        </div>
      </div>
    )
  }