import Link from "next/link";
import { useState } from "react";

function cls(...classNames:string[]){
  const defaultClassNames = "text-base transition duration-700 ease-in-out";
  classNames = classNames.concat(defaultClassNames);
  return classNames.join(" ");
}

export default function Header(){
  const [page, setPage] = useState<
    "Home" | "TossiStory" | "Recipes" | "Story" | "Journal">
    ("Home");

    return (
      <>
        <title>TOSSI</title>
        <main className="fixed w-full group-hover:h-60 xl:h-28 flex justify-between p-4
        flex-col items-start xl:flex-row xl:justify-center bg-white group z-10">
          <div className="hover:cursor-pointer" onClick={() => setPage("Home")}>
            <Link legacyBehavior href="/">
              <div className="text-2xl text-amber-700 font-bold pl-5">TOSSI</div>
            </Link>
          </div>
          <ul className="flex flex-col items-center xl:flex-row xl:justify-end w-full pt-3 space-y-1">
            <li className="pr-12 hidden xl:block group-hover:block" onClick={() => setPage("TossiStory")}>
              <Link href="/baking/tossiStory">
                <div className={cls(
                page === "TossiStory" 
                ?
                "text-amber-950 underline underline-offset-8"
                :
                "text-amber-700 hover:text-amber-300"
                )}>Tossi Story</div>
              </Link>
            </li>
            <li className="pr-12 hidden xl:block group-hover:block" onClick={() => setPage("Recipes")}>
              <Link href="/baking/recipes">
                <div className={cls(
                page === "Recipes" 
                ?
                "text-amber-950 underline underline-offset-8"
                :
                "text-amber-700 hover:text-amber-300"
                )}>Recipes</div>
              </Link>
            </li>
            <li className="pr-12 hidden xl:block group-hover:block" onClick={() => setPage("Story")}>
              <Link href="/baking/story">
                <div className={cls(
                page === "Story" 
                ?
                "text-amber-950 underline underline-offset-8"
                :
                "text-amber-700 hover:text-amber-300"
                )}>Baking Story</div>
              </Link>
            </li>
            <li className="pr-12 hidden xl:block group-hover:block" onClick={() => setPage("Journal")}>
              <Link href="/baking/journal">
                <div className={cls(
                page === "Journal" 
                ?
                "text-amber-950 underline underline-offset-8"
                :
                "text-amber-700 hover:text-amber-300"
                )}>Baking Journal</div>
              </Link>
            </li>
            <li className="pr-12 hidden xl:block group-hover:block">
              <Link href="https://www.instagram.com/tossi.baking" target="_blank">
                <div className="text-base text-amber-700 hover:text-amber-300 transition duration-700 ease-in-out">Instagram</div>
              </Link>
            </li>
          </ul>
        </main>
      </>
    )
}