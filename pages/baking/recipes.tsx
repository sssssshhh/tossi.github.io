export default function Recipes(){
  const Recipes = [
    {"title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg"}, 
    {"title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg"}, 
    {"title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg"}, 
    {"title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg"}, 
    {"title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg"}, 
    {"title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg"}, 
    {"title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg"}, 
    {"title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg"}, 
    {"title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg"}, 
    {"title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg"}, 
    {"title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg"}, 
    {"title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg"}, 
    {"title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg"}, 
    {"title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg"}, 
    {"title": "STRAWBERRY CAKE", "ingredient":"CONFECTIONER'S SUGAR", "img": "../img/victoriaCake_2.jpg"}, 
  ];
  const rowCount = Math.ceil(Recipes.length / 3);
  const ROWS = 3;

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
        <div className="flex flex-col space-y-10">
          {Array(rowCount).fill("").map((_, rowIndex) => (
            <div className="flex space-x-10">
              
              {Array(ROWS).fill("").map((_, columnIndex) => {
                const recipeIndex = rowIndex * 3 + columnIndex;

                if (recipeIndex < Recipes.length) {
                  const recipe = Recipes[recipeIndex];

                  return (
                    <div className="flex flex-col items-center space-y-2 text-amber-800">
                      <div className="w-80 h-64 bg-[url('../img/victoriaCake_2.jpg')]"></div>
                      <div className="font-extralight text-xl">{recipe.title}</div>
                      <div className="font-light text-sm">WITH {recipe.ingredient}</div>
                    </div>
                  );
                }
              })}
            </div>
          ))}
        </div>
        <div className="h-20 w-full">
              {/** blank */}
        </div>
      </div>
    )
}