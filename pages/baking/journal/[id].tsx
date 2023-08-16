import JournalDetail from "@/models/JournalDetail";
import RichTextRenderer from "@/styles/RichTextRenderer";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';

export default function Detail() {
  const router = useRouter();
  const [blocks, setBlocks] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/blocks/${router.query.id}`);
        const responseData = await response.json();
        // const updatedJournals = responseData.results
        // .filter((result: any) => (
        //   result.properties.title.title[0]?.plain_text && result.properties.image.url
        // ))
        // .map((result: any) => (
        //   {
        //   id: result.id,
        //   title: result.properties.title.title[0].plain_text,
        //   img: result.properties.image.url,
        // }));
        setBlocks(responseData.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [router.query.id]);

  return (
    <div className="w-full h-full px-14 py-28 flex flex-col justify-center items-center space-y-10">
      <div id="test" className="h-1/4 flex flex-col justify-center items-center text-center space-y-3">
        {/* <RichTextRenderer richTextData={journal?.title} /> */}
      </div>
        
      {blocks.map((block, index) => (
      <div className="h-5/6 pb-20 text-lg text-center tracking-wide leading-8">
        {block.type === "image" ? 
        <Image
          src={block.image.external.url}
          alt="This is story"
          priority
          width={700}
          height={400}
        /> : 
        <RichTextRenderer key={index} richTextData={block} /> }
      </div>
      ))}
    </div>
  )
}