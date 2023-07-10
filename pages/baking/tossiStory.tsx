import Image from "next/image";

export default function TossiStory(){
    return (
        <div className="w-full h-full px-14 pt-28 flex flex-col justify-center items-center space-y-10">
          <div className="pt-9 text-3xl">Tossi Baking</div>
          <div className="w-4/5 h-80 bg-[url('../img/victoriaCake_2.jpg')]"></div>
          <div className="h-[500px]">
              <h2 className="text-2xl pt-12 pb-5">About Tossi</h2>
              <p className="text-lg">
                바쁜 일상이 버거운 우리들에게 식빵은 맛있는 쉼표입니다. <br></br>
                갓 구워서 김이 모락모락 나는 식빵 한 쪽에도 우리는 충분히 행복감을 느낄 수 있기 때문이지요.<br></br>
                meal°(밀도)는 ‘식빵’이라는 단어가 주는 느낌처럼 소박하고 담백하지만 단단함이 느껴지는 식빵 전문 베이커리입니다.
                <br></br>
                <br></br>
                meal°(밀도)의 meal(밀)은 식사, 끼니를 뜻하기도 하고 매일 먹을 수 있는 식빵의 기본재료인 ‘밀’의 발음이기도 합니다.<br></br>
                여기에 매일 온도, 습도의 ‘도’를 더하여 작은 차이까지 세심하게 고려하여 만드는 식빵을 의미합니다.<br></br>
                <span className="text-xl font-bold leading-10	tracking-wide">식빵은 가장 기본이 되면서도 만들기 가장 어려운 빵 중의 하나입니다.</span>
              </p>
              <h2 className="text-2xl pt-12 pb-5">Simply the Best</h2>
              <p className="text-lg">
                100% 직영점 운영은 '밀도'의 철저한 맛, 품질관리의 비결입니다.
              </p>
          </div>
        </div>
    )
}