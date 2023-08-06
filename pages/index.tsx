import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full px-3 md:px-14 pt-28 flex flex-col space-y-10">
      <div className="w-full h-3/4 pb-10 lg:pb-0 flex flex-col xl:flex-row items-center">
        <div className="w-96 h-72 md:w-[600px] md:h-[400px] relative">
          <Image
            src="https://tossibaking.s3.ap-northeast-2.amazonaws.com/plate1.jpg"
            alt="cookie"
            priority
            fill
          />
        </div> 
        <div className="w-full h-72 xl:h-3/4 flex flex-col items-center px-4">
          <div className="pt-5 text-4xl text-amber-800 font-bold">
            Tossi
          </div>
          <div className="pt-12 text-base/loose text-amber-700 text-center">
            <p>
              ‘토씨’의 To(토)는 땅을 구성하는 흙(土)에 생명의 근원인 씨앗의 ‘씨’를 더한 의미입니다.<br />
              ‘토씨’는 우리 몸과 마음을 아름답게 가꾸는 씨앗이 되는 삶을 선물합니다.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
