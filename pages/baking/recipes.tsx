export default function Recipes(){
  const Recipes = [
    {"title": "StrawBerry Cake with Gluten Free", "img": "../img/victoriaCake_2.jpg"}, 
    {"title": "cake2", "img": "../img/victoriaCake_2.jpg"}, 
    {"title": "cake3", "img": "../img/victoriaCake_2.jpg"}, 
    {"title": "cake4", "img": "../img/victoriaCake_2.jpg"}, 
    {"title": "cake5", "img": "../img/victoriaCake_2.jpg"},
    {"title": "cake6", "img": "../img/victoriaCake_2.jpg"}, 
    {"title": "cake7", "img": "../img/victoriaCake_2.jpg"}, 
    {"title": "cake8", "img": "../img/victoriaCake_2.jpg"}, 
    {"title": "cake9", "img": "../img/victoriaCake_2.jpg"}, 
    {"title": "cake10", "img": "../img/victoriaCake_2.jpg"}, 
    {"title": "cake11", "img": "../img/victoriaCake_2.jpg"}, 
    {"title": "cake12", "img": "../img/victoriaCake_2.jpg"}, 
    {"title": "cake13", "img": "../img/victoriaCake_2.jpg"}, 
    {"title": "cake14", "img": "../img/victoriaCake_2.jpg"}, 
    {"title": "cake15", "img": "../img/victoriaCake_2.jpg"}, 
  ];
  const rowCount = Math.ceil(Recipes.length / 3);
  const ROWS = 3;

    return (
      <div className="w-full h-3/4 px-14 pt-28 flex flex-col justify-center items-center space-y-10">
        <div className="w-full flex flex-col justify-center items-center mb-16">
          <div className="py-6 text-3xl">RECIPES</div>
          <div className="w-full h-full p-4 bg-slate-200 rounded-lg text-center">
            <i className="text-lg">You are the butter to my bread, the breath to my life.</i>
            <br/>
            <i className="text-sm">Julie and Julia</i>
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
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-80 h-64 bg-[url('../img/victoriaCake_2.jpg')]"></div>
                      <div className="text-base">{recipe.title}</div>
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