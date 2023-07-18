
import Story from "@/models/Story";
import Link from "next/link";
import Image from "next/image";
import cookieWithCups from '../../img/cookies_with_cups.jpeg';

export default function BakingStory(){
    const storys: Story[]  = [
        {"id": 0, "title": "Vegan baking Ingredient_타피오카 전분", "img": "../img/victoriaCake_2.jpg"},
        {"id": 1, "title": "귀리? 오트밀? 오트?", "img": "../img/victoriaCake_2.jpg"},
        {"id": 2, "title": "베이킹파우더? 베이킹 소다?", "img": "../img/victoriaCake_2.jpg"},
        {"id": 3, "title": "유기농을 꼭 먹어야 할까요?", "img": "../img/victoriaCake_2.jpg"},
        {"id": 4, "title": "카카오 파우더? 코코아 파우더?", "img": "../img/victoriaCake_2.jpg"},
        {"id": 5, "title": "현미 쌀가루", "img": "../img/victoriaCake_2.jpg"},
        {"id": 6, "title": "달걀 대체 재료", "img": "../img/victoriaCake_2.jpg"},
        {"id": 7, "title": "우유 대체 재료", "img": "../img/victoriaCake_2.jpg"},
        {"id": 8, "title": "버터 대체 재료", "img": "../img/victoriaCake_2.jpg"},
        {"id": 9, "title": "빵을 먹으면 몸에 안 좋을까요?", "img": "../img/victoriaCake_2.jpg"},
        {"id": 10, "title": "계량 하는 법", "img": "../img/victoriaCake_2.jpg"},
        {"id": 11, "title": "무가당 애플 소스 ", "img": "../img/victoriaCake_2.jpg"},
        {"id": 12, "title": "땅콩버터 효능", "img": "../img/victoriaCake_2.jpg"},
        {"id": 13, "title": "인스턴트 이스트(yeast)? 생 이스트(yeast)?", "img": "../img/victoriaCake_2.jpg"},
        {"id": 14, "title": "Xanthan Gum (잔탄검)", "img": "../img/victoriaCake_2.jpg"},
        {"id": 15, "title": "아몬드 가루?", "img": "../img/victoriaCake_2.jpg"},
        {"id": 16, "title": "아마씨 달걀? 치아씨드 달걀?", "img": "../img/victoriaCake_2.jpg"},
        {"id": 17, "title": "나쁜 설탕? 착한 설탕?", "img": "../img/victoriaCake_2.jpg"},
        {"id": 18, "title": "빵굽는 온도, 반죽에 따라서 달라져요!", "img": "../img/victoriaCake_2.jpg"},

    ];

    return (
        <div className="w-full h-3/4 px-14 pt-28 flex flex-col justify-center items-center space-y-10">
        <div className="w-full flex flex-col justify-center items-center mb-16">
          <div className="py-6 text-3xl text-amber-700">BAKING STORYS</div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 mt-2 gap-3">
        {storys.map((story, index) => (
        <Link href={{ pathname: `/baking/story/${story.id}` }}>                   
          <div className="flex flex-col items-center space-y-2 text-amber-800" key={`journal-${story.id}`}>
            <div className="w-80 h-64 relative z-0">
              <Image
                src={cookieWithCups}
                alt="cookie"
                priority
                fill
                sizes="(min-width: 20px) 20px, 20px"
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>            
            <div className="w-80 pt-1 text-base sm:text-xl font-extralight text-center">{story.title}</div>
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