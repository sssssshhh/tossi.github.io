import Image from "next/image";
import holdingPlate from '../img/holdingPlate.jpg';

export default function Home() {
  return (
    <main className="w-full h-3/4 px-14 pt-28 flex flex-col space-y-10">
      <div className="w-full h-96 flex flex-col xl:flex-row items-center">
        <Image
            src={holdingPlate}
            alt="Picture of the Main Page"
            style={{
              width: '100%',
              height: '400px',
            }}
          />
        <div className="w-full flex flex-col items-center px-4">
          <div className="pt-5 text-4xl text-amber-800 font-bold">
            Welcome to Tossi
          </div>
          <div className="pt-12 text-xl text-amber-700 text-center">
            The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.
          </div>
        </div>
      </div>
    </main>
  )
}
