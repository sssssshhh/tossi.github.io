import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-3/4 px-14 pt-28 flex flex-col space-y-10">
      <div className="w-full h-96 flex items-center">
        <div className="w-full h-full bg-center rounded-md bg-no-repeat bg-[length:600px_1000px] bg-[url('../img/holdingPlate.jpg')]">
        </div>
        <div className="w-full flex flex-col items-center px-4">
          <div className="pt-5 text-4xl text-amber-800 font-bold">
            Welcome to Tossi
          </div>
          <div className="pt-12 text-base text-amber-700 text-center">
            The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.
          </div>
          <button className="w-28 mx-8 my-10 bg-amber-500 text-white p-3 text-center rounded-lg
          hover:bg-amber-600 active:bg-amber-600 focus:bg-amber-600">
            자세히보기
          </button>
        </div>
      </div>
    </div>
  )
}
{/* <div className='px-10 py-14'>
          <Image
            src="/flower.jpg"
            width={600}
            height={500}
            alt="This is flower."
          />
        </div>
        <div className='w-3/5 px-10 py-14 text-center'>
          <div className='text-4xl py-10'>안녕하세요, 홀썸 라이프입니다</div>
        </div> */}
