import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen relative">
    
      <div className="w-full h-4/6 xl:h-2/6 pt-3 px-10 md:px-24">
        <Component {...pageProps} />
      </div>
 
    </div>
  )
}
