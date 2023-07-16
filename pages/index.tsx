export default function Home() {
  return (
    <main className="w-full h-3/4 px-14 pt-28 flex flex-col space-y-10">
      <div className="w-full h-96 flex flex-col xl:flex-row items-center">
        <div className="w-full h-full bg-center rounded-md bg-no-repeat bg-[length:600px_1000px] bg-[url('../img/holdingPlate.jpg')]">
        </div>
        <div className="w-full flex flex-col items-center px-4">
          <div className="pt-5 text-4xl text-amber-800 font-bold">
            Welcome to Tossi
          </div>
          <div className="pt-12 text-base text-amber-700 text-center">
            The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.
          </div>
        </div>
      </div>
    </main>
  )
}
