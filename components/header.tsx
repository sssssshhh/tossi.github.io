import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return (
      <>
        <title>TOSSI</title>
        <main className="fixed w-full group-hover:h-60 xl:h-28 flex justify-between p-4
        flex-col items-start xl:flex-row xl:justify-center bg-white group z-10">
          <div className="hover:cursor-pointer">
            <Link legacyBehavior href="/">
              <Image
                    src="/logo_top.png"
                    width={130}
                    height={70}
                    alt="This is Logo."
                  />
            </Link>
          </div>
          <ul className="flex flex-col items-center xl:flex-row xl:justify-end w-full pt-3 space-y-1">
            <li className="pr-12 hidden xl:block group-hover:block">
              <Link href="/baking/tossiStory">
                <div className="text-base text-amber-700 hover:text-amber-300">Tossi Story</div>
              </Link>
            </li>
            <li className="pr-12 hidden xl:block group-hover:block">
              <Link href="/baking/recipes">
                <div className="text-base text-amber-700 hover:text-amber-300">Recipes</div>
              </Link>
            </li>
            <li className="pr-12 hidden xl:block group-hover:block">
              <Link href="/baking/bakingStory">
                <div className="text-base text-amber-700 hover:text-amber-300">Baking Story</div>
              </Link>
            </li>
            <li className="pr-12 hidden xl:block group-hover:block">
              <Link href="/baking/bakingJournal">
                <div className="text-base text-amber-700 hover:text-amber-300">Baking Journal</div>
              </Link>
            </li>
            <li className="pr-12 hidden xl:block group-hover:block">
              <Link href="https://www.instagram.com/tossi.baking" target="_blank">
                <div className="text-base text-amber-700 hover:text-amber-300">Instagram</div>
              </Link>
            </li>
          </ul>
        </main>
      </>
    )
}