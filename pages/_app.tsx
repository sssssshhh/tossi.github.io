import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from "next/router";
import Head from 'next/head';
import Link from "next/link";
import Footer from '@/components/footer'
import Header from '@/components/header';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen relative w-full">
      <Header/>
        <div className="w-full h-2/6 pt-3 px-24">
          <Component {...pageProps} />
        </div>
      <Footer/>
    </div>
  )
}

{/* <div className="h-36 flex flex-col justify-center items-center">
  <div className="font-bold text-2xl mb-4">Tossi Baking</div>
</div> */}

{/* <nav>
<div className='flex'>
    <Link href='/about'>
      <div className={router.pathname === '/about' ? 'px-2 underline ' : 'px-2'}>About</div>
    </Link>
    <Link href='/baking/ingredient'>
      <div className={router.pathname === '/baking/ingredient' ? 'px-2 underline' : 'px-2'}>Baking ingredient</div>
    </Link>
    <Link href='/baking/journal'>
      <div className={router.pathname === '/baking/journal' ? 'px-2 underline' : 'px-2'}>Baking journal</div>
    </Link>
    <Link href='/baking/recipes'>
      <div className={router.pathname === '/baking/recipes' ? 'px-2 underline' : 'px-2'}>Recipes</div>
    </Link>
    <Link href='/info/contact'>
      <div className={router.pathname === '/info/contact' ? 'px-2 underline' : 'px-2'}>Contact</div>
    </Link>
    <Link href='/info/login'>
      <div className={router.pathname === '/info/login' ? 'px-2 font-bold' : 'px-2'}>login</div>
    </Link>
   </div>
</nav> */}

// image_zoom_small
// //mealdo.cafe24.com/web/product/big/201610/38_shop1_101449.jpg
