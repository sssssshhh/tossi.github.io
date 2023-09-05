import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Story from "@/models/Story";

export default function Story(){
  const [storys, setStorys] = useState<Story[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/DB/bakingStory');
        const responseData = await response.json();
        const updatedStorys = responseData.results
        .filter((result: any) => (
          result.properties.title.title[0]?.plain_text && result.properties.image.url
        ))
        .map((result: any) => (
          {
          id: result.id,
          title: result.properties.title.title[0].plain_text,
          img: result.properties.image.url,
        }));

        setStorys(updatedStorys);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="w-full h-3/4 px-14 pt-28 flex flex-col justify-center items-center space-y-10">
      <div className="w-full flex flex-col justify-center items-center mb-16">
        <div className="py-6 text-3xl text-amber-700">BAKING JOURNAL</div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 mt-2 gap-3">
      {storys.map((story, index) => (
      <Link key={index} href={{ pathname: `/baking/journal/${story.id}` }}>                   
        <div className="flex flex-col items-center space-y-2 text-amber-800">
          <div className="w-80 h-64 relative z-0">
            <Image
              src={story.img}
              alt="cookie"
              priority
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>            
          <div className="w-80 pt-1 text-base sm:text-xl font-extralight text-center">{story.title}</div>
        </div>
      </Link>
        ))}
      </div>
      <div className="h-20 w-full">
            {/** TODO: paging */}
      </div>
    </div>
  )
}