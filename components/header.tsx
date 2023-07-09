import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return (
      <>
        <title>Tossi</title>
        <div className="position: fixed w-full h-28 px-14 bg-white">
          <ul className="display: block pt-8 mx-auto">
            <li className="display: inline-block pr-96 hover:cursor-pointer">
              <Link legacyBehavior href="/">
                <Image
                      src="/logo_top.png"
                      width={130}
                      height={70}
                      alt="This is Logo."
                    />
              </Link>
            </li>
            <li className="display: inline-block pr-12">
              <Link href="/baking/tossiStory">
                <div className="text-base text-amber-700 hover:text-amber-300">Tossi Story</div>
              </Link>
            </li>
            <li className="display: inline-block pr-12">
              <Link href="/baking/recipes">
                <div className="text-base text-amber-700 hover:text-amber-300">Recipes</div>
              </Link>
            </li>
            <li className="display: inline-block pr-12">
              <Link href="/baking/bakingStory">
                <div className="text-base text-amber-700 hover:text-amber-300">Baking Story</div>
              </Link>
            </li>
            <li className="display: inline-block pr-12">
              <Link href="/baking/bakingJournal">
                <div className="text-base text-amber-700 hover:text-amber-300">Baking Journal</div>
              </Link>
            </li>
            <li className="display: inline-block pr-12">
              <Link href="/baking/notice">
                <div className="text-base text-amber-700 hover:text-amber-300">Login</div>
              </Link>
            </li>
            <li className="display: inline-block pr-12">
              <Link href="https://www.instagram.com/tossi.baking" target="_blank">
                <div className="text-base text-amber-700 hover:text-amber-300">Instagram</div>
              </Link>
            </li>
          </ul>
        </div>
      </>
    )
}