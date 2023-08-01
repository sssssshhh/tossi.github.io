import { useRouter } from "next/router";
import Image from "next/image";
import RecipeDetail from "@/models/RecipeDetail";
import { Level } from "@/enum/level";
// import { recipes } from "./recipes";

export default function Detail() {
const recipe: RecipeDetail =     
{
  "id": 0,
  "title": "비건 초콜릿 코코넛 쿠키",
  "level": Level.EASY,
  "intro": "통밀가루가 있다면 비건 초콜릿 코코넛 쿠키 만들어 보세요.쿠키 반죽은 냉동실에 넣어 두고 쿠키를 먹고 싶을 때마다, 구워 보세요!!코코넛 향과 맛을 좋아한다면 비건 초콜릿 코코넛 쿠키는 여러분의 최애 쿠키가 될 거예요. 그냥 먹어도 맛있고 모닝커피와 같이 해도 좋고 식후 디저트로 먹어도 좋아요! 은은한 단맛으로 기분 좋은 달콤함을 느껴보세요.",
  "result": "총 분량 쿠키 8개",
  "ingredient": "통밀가루 160g,코코넛 분말 20g,타피오카 전분18g,베이킹파우더 7g,비정제 원당 50g,현미유 30g,소금 1g,두유 60g,초코칩 60g,코코넛 롱슈레드 10g",
  "explanation": "1.  통밀가루, 헤이즐넛 가루, 타피오카 전분, 베이킹파우더, 베이킹소다, 소금을 미리 체 쳐주세요.2. 현미유, 비정제 원당을 넣고 거품기로 1분 정도 섞어 주세요.3. 2번에 애플 소스와 애플 사이다 비니거, 바닐라 엑스트랙을 넣고 1분 정도 잘 섞어 주세요.4. 1번 가루 재료를 넣고 주걱으로 섞어 주세요.날가루가 보이지 않을 때쯤 냉동 라즈베리와 화이트초콜릿을 넣고 섞어 주세요.냉동 라즈베리를 넣으면, 라즈베리 향과 새콤한 맛이 더 나요. (라즈베리는 취향껏 조절 가능)5. 냉장실에서 30분 정도 휴지한 반죽을 아이스크림 스쿱으로 떠 주세요.6. 예열된 오븐 180℃에서 13~16분 구워 주세요.오븐에서 반죽이 커지기 때문에 3~5cm 이상의 간격이 필요해요.7. 막 오븐에서 나온 쿠키는 힘이 없어서 흐물흐물해요.5~10분 후 조심히 붙은 쿠키를 떼어 준 후 식힌 망에서 충분히 식혀 주세요.",
  "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/cookies2.jpeg",
};

  const router = useRouter();

  console.log(useRouter().query.id)

    const sentenceDelimiters = /[.!?]/;
    const sentences = recipe.intro.split(sentenceDelimiters);
    const introSentences = sentences.filter((sentence) => sentence.trim() !== "");
    const ingredients = recipe.ingredient.split(',');
    // TODO: /\d+\.\s/ ? 
    const steps = recipe.explanation.split(/\d+\.\s/).filter(Boolean);

    return (  
      <div className="w-full h-full px-14 pt-28 flex flex-col justify-center items-center space-y-10">
        <div className="w-[500px] h-1/4 flex flex-col justify-center items-center">
          <div className="text-3xl text-amber-700 pt-10 pb-12">{recipe.title}</div>
            <div className="border-y-2 text-amber-600 mb-4 py-2">
              {introSentences.map((sentence, index) => (
                <p key={index} className="leading-5 whitespace-pre-wrap">
                  {sentence}
                </p>
              ))}
            </div>
          </div>
          <div className="w-[500px] h-3/4 space-y-4 flex flex-col pb-10">
              <Image
                src={recipe.img}
                alt="This is recipe"
                priority
                width={500}
                height={400} />
              <div className="space-y-2 py-5">
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-1 text-base text-amber-700">
                  {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <ul className="pt-3 text-base text-amber-700">
                  <li>{recipe.result}</li>
                </ul>
              </div>
              <div className="space-y-2 border-t-4 border-dashed py-10">
              <ul className="space-y-2 text-amber-700 text-base">
                  {steps.map((step, index) => (
                    <li key={index}>{index}.{step}</li>
                  ))}
                  <li>{recipe.tip}</li>
                </ul>
              </div>
            </div>
      </div>
    )
}