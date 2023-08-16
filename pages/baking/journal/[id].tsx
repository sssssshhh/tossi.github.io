import JournalDetail from "@/models/JournalDetail";
import RichTextRenderer from "@/styles/RichTextRenderer";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Detail() {
  const journals: JournalDetail[]  = [
    {"id": 0, "title": "글루텐 프리 몸에 좋을까요?", "img": "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80", "content": "글루텐=밀가루?글루텐 하면 밀가루가 생각나죠?전문적인 개념은 밀, 보리, 호밀 곡물에 존재하는 단백질을 말합니다.즉 글루텐 = 곡물 속 단백질 | 글루텐의 끈기가 가스를 보유하기 때문에 빵을 부풀게 만든다.글루텐이 나쁜 성분은 아닌데, 왜 글루텐 프리가 나타났을까요?사람은 글루텐의 일부(글리아딘)를 끝까지 분해할 수 있는 효소가 없습니다.  분해가 덜 된 글루텐이 몸의 면역 반응을 일으킵니다. 심지어 염증성 질환이 생기거나 악화하기도 합니다.대표적인 예가 바로 셀리악 병(Celiac DIsease)입니다. 셀리악 병을 방치하면 심각한 질환으로 발전할 수 있습니다.  만약 셀리악병이 의심된다면 병원에 가서 항체 검사와 적절한 치료를 받아야 합니다.여기서 이 셀리악 병에 관한 중요한 사실이 있습니다. 우리나라에서 현재 보고된 셀리악 병 환자가 2016년 2월 기준으로 딱 한 명뿐이라고 합니다. <[서울아산병원 질환 백과>](http://www.amc.seoul.kr/asan/healthinfo/disease/diseaseDetail.do?contentId=32038)소화병학회의 여러 연구에 의하면 셀리악병의 원인이 글루텐이 아닌 다른 첨가물일 수도 있다는 견해가 있습니다. 하지만 글루텐은 알레르기 식품군에 속하기 때문에 만약 글루텐이 들어간 음식을 먹고 몸이 아팠다면 병원에 가서 셀리악 병인지 다른 문제가 있는지 알아보세요. 글루텐 관련 장애가 있다고 진단받으면 글루텐 프리 제품이 도움이 됩니다.하지만 글루텐 프리 제품 중에는 흰 쌀가루, 전분 등 가공된 탄수화물을 넣어 혈당을  높이는 제품도 많습니다. 또 쌀로 만든 빵이지만 글루텐을 넣고 만드는 경우도 있습니다. 글루텐 프리 제품 중에는 가공된 탄수화물, 인공 감미료, 버터 등을  넣는 경우도 있으니 꼭 첨가물을 확인해 보세요.물론 글루텐 프리에 관심을 두는 사람들은 일반적으로 가공식품을 덜 소비하고 야채, 과일, 건강한 지방을 더 소비하는 경향이 있습니다. 즉 중요한 것은 글루텐 프리 마케팅에 휘둘리는 것보다는 건강한 식단을 갖추는 게 더 중요합니다.또한 지나친 밀가루 섭취로 인한 소화 불량이 문제라면 '통곡물' 재료로 만든 베이킹을 하거나 통곡물 베이커리를 추천합니다. '글루텐 프리' 베이킹과  글루텐 프리 제품이 건강하다고 생각하실 필요는 없습니다.'글루텐'은 모두에게 나쁜 것은 아닙니다. 여러 선택지 중 하나입니다."},
    {"id": 1, "title": "나쁜 설탕? 착한 설탕?", "img": "https://images.unsplash.com/photo-1628619876503-2db74e724757?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1510&q=80", "content": "<div className='text-3xl text-amber-700'>{journal.title}</div>"},
 ];
  const journal: JournalDetail = journals.filter(
    journal => journal.id.toString() === useRouter().query.id)[0];

  return (
    <div className="w-full h-full px-14 py-28 flex flex-col justify-center items-center space-y-10">
      <div id="test" className="h-1/4 flex flex-col justify-center items-center text-center space-y-3">
        <RichTextRenderer richTextData={journal.title} />
      </div>
      <div className="w-full h-3/4 space-y-4 flex flex-col pb-10 justify-center items-center">
        <Image
          src={journal.img}
          key={journal.img}
          alt="This is story"
          priority
          width={700}
          height={400}
        />
      </div>
      <div className="h-5/6 pb-20 text-lg text-amber-700 text-center tracking-wide leading-8">
        <p className="pb-10">
          {journal.content}
        </p>
      </div>
    </div>
  )
}