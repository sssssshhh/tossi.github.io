import { useState } from 'react';
import Link from "next/link";
import Recipe from '@/models/Recipe';
import Image from "next/image";

export default function Recipes(){
  const recipes: Recipe[]  = [
    {"id": 0, "title": "비건 초콜릿 코코넛 쿠키", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/ChocolateCoconutCookie.jpg", "level": "Easy"},
    {"id": 1, "title": "비건 글루텐 프리 오트밀 초콜릿 칩 쿠키", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/oatmeal.jpg", "level": "Moderate"},
    {"id": 2, "title": "비건 글루텐 프리 그래놀라 쿠키", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/granola.jpg", "level": "Advanced"},
    {"id": 3, "title": "비건 더블 로투스 쿠키", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/rottusCookie.jpg", "level": "Moderate"},
    {"id": 4, "title": "비건 오레오 청크 쿠키", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/oreoCookie.jpg", "level": "Moderate"},
    {"id": 5, "title": "비건 라즈베리 콩포트 초콜릿 쿠키", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/congpoteChocolateCookie.jpg", "level": "Moderate"},
    {"id": 6, "title": "라즈베리 콩포트", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/congpoteChocolateCookie.jpg", "level": "Moderate"},
    {"id": 7, "title": "비건 초코 크랙 쿠키", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/chocoCrackCookie.jpg", "level": "Advanced"},
    {"id": 8, "title": "비건 피넛 버터 쿠키", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/peanutCookie.jpg", "level": "Advanced"}, 
    {"id": 9, "title": "라즈베리 화이트 초콜릿 쿠키", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/rasberryWhiteChocolateCookie.jpg", "level": "Easy"},
    {"id": 10, "title": "비건 르뱅 쿠키", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/rebangCookie.jpg", "level": "Advanced"},  
    {"id": 11, "title": "비건 초코 케이크 스콘", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/chocoCakeScorn.jpg", "level": "Easy"},
    {"id": 12, "title": "비건 글루텐 프리 비건 코코넛 스콘", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/coconutScorn.jpg", "level": "Easy"}, 
    {"id": 13, "title": "비건 글루텐 프리 바나나 블루베리 스콘", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/bananaBlueberryScorn.jpg", "level": "Advanced"},  
    {"id": 14, "title": "비건 글루텐 프리 초코칩 스콘", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/chocochipScorn.jpg", "level": "Easy"},
    {"id": 15, "title": "비건 글루텐 프리 블루베리 머핀", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/bluberryMurfin.jpg", "level": "Easy"},
    {"id": 16, "title": "비건 글루텐 프리 라즈베리 머핀", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/rasberrymurfin.jpg", "level": "Easy"},
    {"id": 17, "title": "비건 글루텐 프리 바나나 초콜릿 머핀", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/bananaChocolatemurfin.jpg", "level": "Easy"}, 
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
      <div className="w-full h-3/4 px-3 md:px-14 pt-28 flex flex-col justify-center items-center space-y-10">
        <div className="w-full flex flex-col justify-center items-center mb-16">
          <div className="py-6 text-3xl text-amber-700">RECIPES</div>
          <div className="w-full h-full p-4 text-amber-600 bg-amber-200 rounded-lg text-center">
            <i className="text-lg">You are the butter to my bread, the breath to my life.</i>
            <br/>
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
        <Link href={{ pathname: `/baking/recipe/${recipe.id}` }}>                   
          <div className="flex flex-col items-center space-y-2 text-amber-800" key={`recipe-${recipe.id}`}>
            <div className="w-80 h-64 relative z-0">
              <Image
                src={recipe.img}
                key={index}
                alt="cookie"
                priority
                fill
              />
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
    )}