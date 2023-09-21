import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Story from "@/models/Story";

export default function Story(){
  const [storys, setStorys] = useState<Story[]>([]);
  const results = {
    "object": "list",
    "results": [
        {
            "object": "page",
            "id": "5a520787-9218-4218-8307-480c257c4012",
            "created_time": "2023-09-09T13:00:00.000Z",
            "last_edited_time": "2023-09-09T13:01:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "06227dd3-d254-49d4-8255-757d57e9ed70"
            },
            "archived": false,
            "properties": {
                "image": {
                    "id": "%7CBmO",
                    "type": "url",
                    "url": "https://images.unsplash.com/photo-1507576164121-220762647800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "카카오? 코코아?",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "카카오? 코코아?",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/5a520787921842188307480c257c4012",
            "public_url": null
        },
        {
            "object": "page",
            "id": "ef6cd908-ba40-441b-9e0a-a9f18afc7635",
            "created_time": "2023-09-09T13:00:00.000Z",
            "last_edited_time": "2023-09-09T13:00:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "06227dd3-d254-49d4-8255-757d57e9ed70"
            },
            "archived": false,
            "properties": {
                "image": {
                    "id": "%7CBmO",
                    "type": "url",
                    "url": "https://images.unsplash.com/photo-1609045630693-efe04b372eec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "아마씨 달걀? 치아씨드 달걀?",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "아마씨 달걀? 치아씨드 달걀?",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/ef6cd908ba40441b9e0aa9f18afc7635",
            "public_url": null
        },
        {
            "object": "page",
            "id": "2c9c05e9-f7a8-40b0-8d4f-b00423ab600d",
            "created_time": "2023-09-09T12:59:00.000Z",
            "last_edited_time": "2023-09-09T13:00:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "06227dd3-d254-49d4-8255-757d57e9ed70"
            },
            "archived": false,
            "properties": {
                "image": {
                    "id": "%7CBmO",
                    "type": "url",
                    "url": "https://images.unsplash.com/photo-1626196340006-f89d9bedf1c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "아몬드 가루",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "아몬드 가루",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/2c9c05e9f7a840b08d4fb00423ab600d",
            "public_url": null
        },
        {
            "object": "page",
            "id": "77f51a4d-34a3-4bc1-b985-8abc53d34329",
            "created_time": "2023-09-09T12:58:00.000Z",
            "last_edited_time": "2023-09-09T12:59:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "06227dd3-d254-49d4-8255-757d57e9ed70"
            },
            "archived": false,
            "properties": {
                "image": {
                    "id": "%7CBmO",
                    "type": "url",
                    "url": "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "Xanthan Gum (잔탄검)",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "Xanthan Gum (잔탄검)",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/Xanthan-Gum-77f51a4d34a34bc1b9858abc53d34329",
            "public_url": null
        },
        {
            "object": "page",
            "id": "5b6488f5-f887-431f-a325-bdb0096c79cb",
            "created_time": "2023-09-09T12:58:00.000Z",
            "last_edited_time": "2023-09-09T12:59:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "06227dd3-d254-49d4-8255-757d57e9ed70"
            },
            "archived": false,
            "properties": {
                "image": {
                    "id": "%7CBmO",
                    "type": "url",
                    "url": "https://images.unsplash.com/photo-1581886020291-33855d6eaf3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "Alll about 이스트(Yeast)",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "Alll about 이스트(Yeast)",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/Alll-about-Yeast-5b6488f5f887431fa325bdb0096c79cb",
            "public_url": null
        },
        {
            "object": "page",
            "id": "26148f41-cc25-4c9c-a2c0-3f86fe357b23",
            "created_time": "2023-08-16T02:25:00.000Z",
            "last_edited_time": "2023-08-18T02:48:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "06227dd3-d254-49d4-8255-757d57e9ed70"
            },
            "archived": false,
            "properties": {
                "image": {
                    "id": "%7CBmO",
                    "type": "url",
                    "url": "https://images.unsplash.com/photo-1577391846175-d57a76814389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "스콘? 비스킷?",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "스콘? 비스킷?",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/26148f41cc254c9ca2c03f86fe357b23",
            "public_url": null
        }
    ],
    "next_cursor": null,
    "has_more": false,
    "type": "page_or_database",
    "page_or_database": {}
    };

  useEffect(() => {
    async function fetchData() {
      try {
        // const response = await fetch('/api/DB/bakingStory');
        // const responseData = await response.json();
        const updatedStorys = results.results
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
        <div className="py-6 text-3xl text-amber-700">BAKING STORY</div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 mt-2 gap-3">
      {storys.map((story, index) => (
      <Link key={index} href={{ pathname: `/baking/story/${story.id}` }}>                   
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