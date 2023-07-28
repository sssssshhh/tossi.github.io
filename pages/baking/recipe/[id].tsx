import { useRouter } from "next/router";
import Image from "next/image";

export default function Detail() {
const recipe = {
  "id": 0,
  "title": "비건 초콜릿 코코넛 쿠키",
  "intro": "통밀가루가 있다면 비건 초콜릿 코코넛 쿠키 만들어 보세요.쿠키 반죽은 냉동실에 넣어 두고 쿠키를 먹고 싶을 때마다, 구워 보세요!!코코넛 향과 맛을 좋아한다면 비건 초콜릿 코코넛 쿠키는 여러분의 최애 쿠키가 될 거예요. 그냥 먹어도 맛있고 모닝커피와 같이 해도 좋고 식후 디저트로 먹어도 좋아요! 은은한 단맛으로 기분 좋은 달콤함을 느껴보세요.",
  "time": "준비 시간 10분 조리 시간 25분 총 시간 35분 총 분량 쿠키 8개",
  "ingredient": "통밀가루 160g/코코넛 분말 20g/타피오카 전분18g/베이킹파우더 7g/비정제 원당 50g/현미유 30g/소금 1g/두유 60g/초코칩 60g/코코넛 롱슈레드 10g",
  "explanation": "1. 170℃로 오븐을 예열해 주세요.2. 통밀가루, 코코넛 분말, 타피오카 전분, 베이킹파우더, 소금을 체 쳐주세요.3. 두유와 비정제 원당을 섞다가 현미유를 넣고 잘 섞어 주세요.4. 액체 재료와 가루 재료를  섞어 주세요. 점점 한 덩어리로 뭉칠 거예요. 어느 정도 뭉치면 초코칩과 코코넛 롱슈레드를 넣고 한 덩어리로 만들어 주세요.5. 반죽을 냉장실에 40분간 넣어 주세요.6. 반죽을 5cm 아이스크림 스쿱으로 팬닝한 후 장식용 코코넛 채를 올려 주세요. 7. 20분 정도 굽다가 오븐 팬 위치를 바꾸고 5분을 마저 구워주세요.", 
  "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/cookies2.jpeg",
};

  const router = useRouter();
    // TODO: Add spilit rule of !! ? 
    const introSentences = recipe.intro.split('.');
    const ingredients = recipe.ingredient.split('/');
    // TODO: /\d+\.\s/ ? 
    const steps = recipe.explanation.split(/\d+\.\s/).filter(Boolean);

    return (  
      <div className="w-full h-full px-14 pt-28 flex flex-col justify-center items-center space-y-10">
        <div className="w-[500px] h-1/4 flex flex-col justify-center items-center">
          <div className="text-3xl text-amber-700 pt-10">{recipe.title}</div>
            <div className="text-base	text-amber-700 pt-2 pb-12">Vegan Chocolat Coconut Cookie</div>
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
                  <li>⏱ {recipe.time}</li>
                </ul>
            
              </div>
              <div className="space-y-2 border-t-4 border-dashed py-10">
              <ul className="space-y-2 text-amber-700 text-base">
                  {steps.map((step, index) => (
                    <li key={index}>{index}.{step}</li>
                  ))}
                </ul>
              </div>
            </div>
      </div>
    )
}