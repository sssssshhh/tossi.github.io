import Link from "next/link";
import Image from "next/image";
import Journal from "@/models/Journal";
import { useState, useEffect } from "react";

export default function Journal(){
  const [journals, setJournals] = useState<Journal[]>([]);
  const results = {
    "object": "list",
    "results": [
        {
            "object": "page",
            "id": "c31e8c59-5403-48f8-840b-e4906a73cbec",
            "created_time": "2023-09-09T13:04:00.000Z",
            "last_edited_time": "2023-09-09T13:05:00.000Z",
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
                "database_id": "903b0e42-35b6-4792-8dd8-443bc89efc3e"
            },
            "archived": false,
            "properties": {
                "image": {
                    "id": "oO%3B%5C",
                    "type": "url",
                    "url": "https://images.unsplash.com/photo-1486887396153-fa416526c108?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "빵을 먹으면 몸에 안 좋을까요?",
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
                            "plain_text": "빵을 먹으면 몸에 안 좋을까요?",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/c31e8c59540348f8840be4906a73cbec",
            "public_url": null
        },
        {
            "object": "page",
            "id": "949b2255-62ed-48cf-8d94-f0580687e2ac",
            "created_time": "2023-09-09T13:04:00.000Z",
            "last_edited_time": "2023-09-09T13:04:00.000Z",
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
                "database_id": "903b0e42-35b6-4792-8dd8-443bc89efc3e"
            },
            "archived": false,
            "properties": {
                "image": {
                    "id": "oO%3B%5C",
                    "type": "url",
                    "url": "https://images.unsplash.com/photo-1523294587484-bae6cc870010?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1602&q=80"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "건강한 빵을 선택하는 기준!",
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
                            "plain_text": "건강한 빵을 선택하는 기준!",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/949b225562ed48cf8d94f0580687e2ac",
            "public_url": null
        },
        {
            "object": "page",
            "id": "a2bb9e50-1f7e-40c5-8abc-3ee1b9c86907",
            "created_time": "2023-09-09T13:04:00.000Z",
            "last_edited_time": "2023-09-09T13:04:00.000Z",
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
                "database_id": "903b0e42-35b6-4792-8dd8-443bc89efc3e"
            },
            "archived": false,
            "properties": {
                "image": {
                    "id": "oO%3B%5C",
                    "type": "url",
                    "url": "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "비건 베이킹 왜 할까요?",
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
                            "plain_text": "비건 베이킹 왜 할까요?",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/a2bb9e501f7e40c58abc3ee1b9c86907",
            "public_url": null
        },
        {
            "object": "page",
            "id": "618cff11-406d-4843-ae2e-385709d27652",
            "created_time": "2023-09-09T13:03:00.000Z",
            "last_edited_time": "2023-09-09T13:04:00.000Z",
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
                "database_id": "903b0e42-35b6-4792-8dd8-443bc89efc3e"
            },
            "archived": false,
            "properties": {
                "image": {
                    "id": "oO%3B%5C",
                    "type": "url",
                    "url": "https://images.unsplash.com/photo-1622485832460-7e78062fcb10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "제로 웨이스트? 비건 베이킹?",
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
                            "plain_text": "제로 웨이스트? 비건 베이킹?",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/618cff11406d4843ae2e385709d27652",
            "public_url": null
        },
        {
            "object": "page",
            "id": "1c0a4e59-ff2f-4540-a04d-92a24c060268",
            "created_time": "2023-09-09T13:03:00.000Z",
            "last_edited_time": "2023-09-09T13:03:00.000Z",
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
                "database_id": "903b0e42-35b6-4792-8dd8-443bc89efc3e"
            },
            "archived": false,
            "properties": {
                "image": {
                    "id": "oO%3B%5C",
                    "type": "url",
                    "url": "https://images.unsplash.com/photo-1622485832460-7e78062fcb10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "비건 베이킹? 미니멀 라이프?",
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
                            "plain_text": "비건 베이킹? 미니멀 라이프?",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/1c0a4e59ff2f4540a04d92a24c060268",
            "public_url": null
        },
        {
            "object": "page",
            "id": "b11a8468-6b4c-42dd-bcec-bc3a277a73a4",
            "created_time": "2023-09-09T13:02:00.000Z",
            "last_edited_time": "2023-09-09T13:02:00.000Z",
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
                "database_id": "903b0e42-35b6-4792-8dd8-443bc89efc3e"
            },
            "archived": false,
            "properties": {
                "image": {
                    "id": "oO%3B%5C",
                    "type": "url",
                    "url": "https://images.unsplash.com/photo-1499889808931-317a0255c0e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "건강한 베이킹은 뭘까요?",
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
                            "plain_text": "건강한 베이킹은 뭘까요?",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/b11a84686b4c42ddbcecbc3a277a73a4",
            "public_url": null
        },
        {
            "object": "page",
            "id": "0d8407b6-cbcd-4724-beaf-6733d75c9c71",
            "created_time": "2023-08-16T02:25:00.000Z",
            "last_edited_time": "2023-09-09T13:03:00.000Z",
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
                "database_id": "903b0e42-35b6-4792-8dd8-443bc89efc3e"
            },
            "archived": false,
            "properties": {
                "image": {
                    "id": "oO%3B%5C",
                    "type": "url",
                    "url": "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "유기농을 꼭 먹어야 할까요?",
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
                            "plain_text": "유기농을 꼭 먹어야 할까요?",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/0d8407b6cbcd4724beaf6733d75c9c71",
            "public_url": null
        },
        {
            "object": "page",
            "id": "71c2ef4c-7465-4735-9df1-1d73d451e7cd",
            "created_time": "2023-08-16T02:25:00.000Z",
            "last_edited_time": "2023-08-16T05:31:00.000Z",
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
                "database_id": "903b0e42-35b6-4792-8dd8-443bc89efc3e"
            },
            "archived": false,
            "properties": {
                "image": {
                    "id": "oO%3B%5C",
                    "type": "url",
                    "url": "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "글루텐 프리 몸에 좋을까요?",
                                "link": null
                            },
                            "annotations": {
                                "bold": true,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "글루텐 프리 몸에 좋을까요?",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/71c2ef4c746547359df11d73d451e7cd",
            "public_url": null
        },
        {
            "object": "page",
            "id": "f59d76c5-6d91-4272-b1e8-5bc6726e303e",
            "created_time": "2023-08-16T02:25:00.000Z",
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
                "database_id": "903b0e42-35b6-4792-8dd8-443bc89efc3e"
            },
            "archived": false,
            "properties": {
                "image": {
                    "id": "oO%3B%5C",
                    "type": "url",
                    "url": "https://images.unsplash.com/photo-1628619876503-2db74e724757?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1510&q=80"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "나쁜 설탕? 착한 설탕?",
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
                            "plain_text": "나쁜 설탕? 착한 설탕?",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/f59d76c56d914272b1e85bc6726e303e",
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
        // const response = await fetch('/api/DB/bakingJournal');
        // const responseData = await response.json();
        const updatedJournals = results.results
        .filter((result: any) => (
          result.properties.title.title[0]?.plain_text && result.properties.image.url
        ))
        .map((result: any) => (
          {
          id: result.id,
          title: result.properties.title.title[0].plain_text,
          img: result.properties.image.url,
        }));
        setJournals(updatedJournals);
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
      {journals.map((journal, index) => (
      <Link key={index} href={{ pathname: `/baking/journal/${journal.id}` }}>                   
        <div className="flex flex-col items-center space-y-2 text-amber-800">
          <div className="w-80 h-64 relative z-0">
            <Image
              src={journal.img}
              alt="cookie"
              priority
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>            
          <div className="w-80 pt-1 text-base sm:text-xl font-extralight text-center">{journal.title}</div>
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
