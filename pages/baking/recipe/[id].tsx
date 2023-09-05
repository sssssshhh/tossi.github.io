import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import RichTextRenderer from "@/styles/RichTextRenderer";

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

        let order = 1;
        for (const block of responseData.results) {
          if (block.type === "numbered_list_item") {
            const content = block.numbered_list_item.rich_text[0].text.content
            block.numbered_list_item.rich_text[0].text.content 
            = `${order}.${block.numbered_list_item.rich_text[0].text.content}`;
            order++;
          }
        }

        setBlocks(responseData.results);
      } catch (error) {
        console.error('Error fetching block data:', error);
      }
    }
    fetchData();
  }, [router.query.id]);

    return (  
      <div className="w-full h-full px-14 pt-28 flex flex-col justify-center items-center space-y-10">
        <div className="w-[500px] h-1/4 flex flex-col justify-center items-center">
          <div className="text-3xl text-amber-700 pt-10 pb-12">{title}
          </div>
          <div className="h-5/6 pb-20 text-base tracking-wide leading-8">
            {blocks.map((block, index) => (
            <div key={index}>
              {block.type === "image" && (
                <div className="pb-10 flex flex-col justify-center items-center">
                  <Image
                    src={block.image.external.url}
                    alt="This is recipe"
                    priority
                    width={700}
                    height={400}
                  />    
                </div>
                )}
                {block.type === "numbered_list_item" && (
                  <RichTextRenderer richTextData={block} />
                )}
                {!["image", "numbered_list_item"].includes(block.type) && (
                  <RichTextRenderer richTextData={block} />
                )}
            </div>
            ))}
          </div>
        </div>
      </div>
    )
}