import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return (
      <>
        <title>Tossi</title>
        <div className="position: fixed w-full h-28 px-14 bg-white">
          <ul className='display: block pt-8 mx-auto'>
            <li className='display: inline-block pr-96'>
              <Image
                  src="/logo_top.png"
                  width={130}
                  height={70}
                  alt="This is flower."
                />
            </li>
            <li className='display: inline-block pr-12'>
              <Link href='/baking/tossiStory'>
                <div className='hover:text-green-500 text-base'>Tossi Story</div>
              </Link>
            </li>
            <li className='display: inline-block pr-12'>
              <Link href='/baking/recipes'>
                <div className='hover:text-green-500 text-base'>Recipes</div>
              </Link>
            </li>
            <li className='display: inline-block pr-12'>
              <Link href='/baking/bakingStory'>
                <div className='hover:text-green-500 text-base'>Baking Story</div>
              </Link>
            </li>
            <li className='display: inline-block pr-12'>
              <Link href='/baking/bakingJournal'>
                <div className='hover:text-green-500 text-base'>Baking Journal</div>
              </Link>
            </li>
            <li className='display: inline-block pr-12'>
              <Link href='/baking/notice'>
                <div className='hover:text-green-500 text-base'>Login</div>
              </Link>
            </li>
            <li className='display: inline-block pr-12'>
              <Link href='/baking/academy'>
                <div className='hover:text-green-500 text-base'>Instagram</div>
              </Link>
            </li>
          </ul>
        </div>
      </>
    )
}