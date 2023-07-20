import Journal from "@/models/Journal";
import Link from "next/link";
import Image from "next/image";

export default function BakingJournal(){
    const journals: Journal[]  = [
        {"id": 0, "title": "Beautiful choice-Baking Journal", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/cookies2.jpeg"},
        {"id": 1, "title": "몸과 마음이 아름다워지는 선택!", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/cookies2.jpeg"},
        {"id": 2, "title": "글루텐 프리 몸에 좋을까요?", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/cookies2.jpeg"},
        {"id": 3, "title": "유기농을 꼭 먹어야 할까요?", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/cookies2.jpeg"},
        {"id": 4, "title": "건강한 베이킹은 뭘까요?", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/cookies2.jpeg"},
        {"id": 5, "title": "비건 베이킹? 미니멀 라이프?", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/cookies2.jpeg"},
        {"id": 6, "title": "제로 웨이스트? 비건 베이킹?", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/cookies2.jpeg"},
        {"id": 7, "title": "비건 베이킹 왜 할까요?", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/cookies2.jpeg"},
        {"id": 8, "title": "건강한 빵을 선택하는 기준!", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/cookies2.jpeg"},
        {"id": 9, "title": "빵을 먹으면 몸에 안 좋을까요?", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/cookies2.jpeg"},
        {"id": 10, "title": "빵에 설탕, 많이 들어가야 하는 이유는 무엇일까?", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/cookies2.jpeg"},
        {"id": 11, "title": "밥 대신 빵, 빵을 먹고 속이 더부룩 하다면?", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/cookies2.jpeg"},
        {"id": 12, "title": "비건빵 다이어트, 정말로 도움이 될까요?", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/cookies2.jpeg"},
        {"id": 13, "title": "빵의 역사, 신석기 시대에도 빵이 만들어 졌다는 걸 아시나요?", "img": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/cookies2.jpeg"},
      ];

    return (
        <div className="w-full h-3/4 px-14 pt-28 flex flex-col justify-center items-center space-y-10">
        <div className="w-full flex flex-col justify-center items-center mb-16">
          <div className="py-6 text-3xl text-amber-700">BAKING JOURNALS</div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 mt-2 gap-3">
        {journals.map((journal, index) => (
        <Link href={{ pathname: `/baking/journal/${journal.id}` }}>                   
          <div className="flex flex-col items-center space-y-2 text-amber-800" key={`journal-${journal.id}`}>
            <div className="w-80 h-64 relative z-0">
              <Image
                src={journal.img}
                alt="cookie"
                priority
                fill
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>
            <div className="w-80 pt-1 text-base sm:text-xl font-extralight text-center">{journal.title}</div>
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