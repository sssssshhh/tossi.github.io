import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  // const [id]:any = router.query.params;
//[...params] // TODO: Temporal
    return (
      <div className="w-full h-full px-14 pt-28 flex flex-col justify-center items-center space-y-10">
        <div className="w-[500px] h-1/4 flex flex-col justify-center items-center">
          <div className="text-3xl text-amber-500 pt-10">리치에 감자크림치즈</div>
          <div className="text-base	text-amber-500 pt-2 pb-12">Potato Cream Cheese with Rich Bread</div>
          <div className="border-y-2 text-amber-500 mb-4 py-2">
            <div>크림 치즈와 으깬 감자의 부드러운 식감과</div>
            <div>풍미가 조화로운 미니 식빵</div>
          </div>
        </div>
        <div className="w-[500px] h-3/4 space-y-4 flex flex-col pb-10">
          <div className="w-full h-56 bg-[url('../img/victoriaCake_2.jpg')] bg-no-repeat"></div>
          <div className="space-y-2 py-5">
            <div className="flex flex-col pb-8 items-center text-xl sm:text-2xl font-bold text-amber-700">Ingredient</div>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-1 text-base text-amber-700">
              <li>1 package (1/4 ounce) active dry yeast</li>
              <li>1 cup 2% milk (110° to 115°)</li>
              <li>1/4 cup sugar</li>
              <li>1/4 cup unsweetened applesauce</li>
              <li>1/4 cup sugar</li>
              <li>1/4 cup unsweetened applesauce</li>
            </ul>
          </div>
          <div className="space-y-2 border-t-4 border-dashed py-10">
            <div className="flex flex-col pb-8 items-center text-xl sm:text-2xl font-bold text-amber-700">Recipes</div>
            <ul className="space-y-6 text-amber-700 text-base">
              <li>1. In a large bowl, dissolve yeast in warm milk. Add the sugar, applesauce, egg whites, salt and 2 cups flour; beat until smooth. Stir in enough remaining flour to form a soft dough.</li>
              <li>2. Turn onto a lightly floured surface; knead until smooth and elastic, 6-8 minutes (dough will be slightly sticky). Place in a bowl coated with cooking spray, turning once to coat top. Cover and let rise in a warm place until doubled, about 1 hour.</li>
              <li>3. Turn dough onto a lightly floured surface; divide into 24 pieces. Shape each portion into an 8-in. rope; tie into a knot. </li>
              <li>4. Cover and let rise until doubled, about 30 minutes.Bake at 375° until golden brown, 12-16 minutes. Remove from pans to wire racks to cool.</li>
            </ul>
            </div>
        </div>
      </div>
    )
}