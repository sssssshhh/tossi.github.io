import Image from "next/image";

export default function TossiStory(){
  return (
    <div className="w-full h-full px-3 md:px-14 pt-28 flex flex-col justify-center items-center space-y-10">
      <div className="pt-9 text-3xl text-amber-700">About Tossi</div>
      <div className="w-96 h-72 md:w-[600px] md:h-[400px] relative">
        <Image
          src="https://tossibaking.s3.ap-northeast-2.amazonaws.com/chopstick.jpeg"
          alt="cookie"
          priority
          fill
        />
      </div>
      <div className="h-5/6 pb-20 text-lg text-amber-700 text-center tracking-wide leading-8">
        <p className="pb-10">
          갓 구워 김이 모락모락 나는 빵 <br />
          노릇하게 구운 빵 자르는 소리<br />
          고소한 커피 볶는 향기<br />
          우리의 일상을 편안하게 하는 순간입니다.<br />
          <span className="text-xl font-bold py-5 tracking-wide leading-10">토씨는 일상의 편안함으로 몸과 마음을 채우고 가꿀 수 있는 베이킹 라이프를 전합니다.</span>
        </p>
        <p>
          토씨는 우리 몸과 마음을 아름답게 가꾸는 씨앗이 되는 삶을 만들기 위해<br />
          땅을 구성하는 흙과 생명의 근원인 씨앗의 소중함을 기억하겠습니다. <br />
          씨앗이 되는 삶을 선물합니다.
        </p>
        <p className="pb-10">
          갓 구워 김이 모락모락 나는 빵 <br />
          노릇하게 구운 빵 자르는 소리<br />
          고소한 커피 볶는 향기<br />
          우리의 일상을 편안하게 하는 순간입니다.<br />
          <span className="text-xl font-bold leading-10	tracking-wide">토씨는 일상의 편안함으로 몸과 마음을 채우고 가꿀 수 있는 베이킹 라이프를 전합니다.</span>
        </p>
        <p>
        'Tossi' combines the meaning of 'To' (土), representing the earth that forms the ground, and 'ssi' (씨), representing seeds, the source of life.<br />
        Tossi shows us that life starts from a seed and gives life to our body and mind.<br />
        In our everyday life, we enjoy the scent of freshly baked bread; the sound of bread being sliced mixed with the aroma of coffee being served.
        </p>
        <span className="text-xl font-bold leading-10	tracking-wide">Experience the comfort of baked goods from Tossi where all of our ingredients are sourced from nature and our bakery is a part of your daily life.</span>
      </div>
    </div>
  )
}