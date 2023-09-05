import RichTextRenderer from "@/styles/RichTextRenderer";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';

export default function Detail() {
  const router = useRouter();
  const [blocks, setBlocks] = useState<any[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/pages/${router.query.id}`);

        const responseData = await response.json();
        setTitle(responseData.properties.title.title[0].plain_text);
      } catch (error) {
        console.error('Error fetching title data:', error);
      }
    }
    fetchData();
  }, [router.query.id]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/blocks/${router.query.id}`);

        const responseData = await response.json();
        setBlocks(responseData.results);
      } catch (error) {
        console.error('Error fetching block data:', error);
      }
    }
    fetchData();
  }, [router.query.id]);

  return (
    <div className="w-full h-full px-14 py-28 flex flex-col justify-center items-center space-y-10">
      <div className="h-1/4 text-3xl flex flex-col justify-center items-center text-center space-y-3">
        {title}
      </div>
      <div className="h-5/6 pb-20 text-base tracking-wide leading-8">
        {blocks.map((block, index) => (
        <>
          {block.type === "image" ?
          <div className="pb-10 flex flex-col justify-center items-center">
            <Image
              src={block.image.external.url}
              alt="This is journal"
              priority
              width={700}
              height={400}
            /> 
          </div>
        : 
          <RichTextRenderer key={index} richTextData={block} /> }
        </>
        ))}
      </div>
    </div>
  )
}