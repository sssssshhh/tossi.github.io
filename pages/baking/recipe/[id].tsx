import { useRouter } from "next/router";
import Image from "next/image";
import RecipeDetail from "@/models/RecipeDetail";

export default function Detail() {
  const recipes: RecipeDetail[]  = [
    {"id": 0, "intro": "통밀가루가 있다면 비건 초콜릿 코코넛 쿠키 만들어 보세요.쿠키 반죽은 냉동실에 넣어 두고 쿠키를 먹고 싶을 때마다, 구워 보세요!!코코넛 향과 맛을 좋아한다면 비건 초콜릿 코코넛 쿠키는 여러분의 최애 쿠키가 될 거예요. 그냥 먹어도 맛있고 모닝커피와 같이 해도 좋고 식후 디저트로 먹어도 좋아요! 은은한 단맛으로 기분 좋은 달콤함을 느껴보세요.", "title": "비건 초콜릿 코코넛 쿠키", 
    "time": "준비 시간 10분 조리 시간 25분 총 시간 35분 총 분량 쿠키 8개", 
    "explanation": "170℃로 오븐을 예열해 주세요.통밀가루, 코코넛 분말, 타피오카 전분, 베이킹파우더, 소금을 체 쳐주세요.두유와 비정제 원당을 섞다가 현미유를 넣고 잘 섞어 주세요.액체 재료와 가루 재료를  섞어 주세요. 점점 한 덩어리로 뭉칠 거예요. 어느 정도 뭉치면 초코칩과 코코넛 롱슈레드를 넣고 한 덩어리로 만들어 주세요.반죽을 냉장실에 40분간 넣어 주세요.반죽을 5cm 아이스크림 스쿱으로 팬닝한 후 장식용 코코넛 채를 올려 주세요. 20분 정도 굽다가 오븐 팬 위치를 바꾸고 5분을 마저 구워주세요. ※  온도 사양에 따라 굽는 시간이 달라요.", 
    "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/cookies2.jpeg",
    "ingredient": "통밀가루 160g 코코넛 분말 20g 타피오카 전분18g 베이킹파우더 7g 비정제 원당 50g 현미유 30g 소금 1g 두유 60g 초코칩 60g 코코넛 롱슈레드 10g"},
  ];

  const router = useRouter();
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
            <Image
              src="https://tossibaking.s3.ap-northeast-2.amazonaws.com/cookies2.jpeg"
              alt="cookie"
              priority
              width={500}
              height={400}
            />
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