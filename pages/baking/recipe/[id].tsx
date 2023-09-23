import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import RichTextRenderer from "@/styles/RichTextRenderer";

export default function Detail() {
  const router = useRouter();
  const [blocks, setBlocks] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const myData = [
    {
      "title": "비건 글루텐 프리 바나나 초콜릿 머핀",
      "object": "list",
      "results": [
          {
              "object": "block",
              "id": "b5efb958-d98c-4276-831c-597e1dab98ca",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:20:00.000Z",
              "last_edited_time": "2023-09-09T09:20:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "image",
              "image": {
                  "caption": [],
                  "type": "external",
                  "external": {
                      "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/bananaChocolatemurfin.jpg"
                  }
              }
          },
          {
              "object": "block",
              "id": "0afcffc1-79c5-4b07-96e5-6e64323cb582",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:20:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "먹다 남은 바나나 어떡하죠?",
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
                          "plain_text": "먹다 남은 바나나 어떡하죠?",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "ead14314-23cd-4cf6-be3e-0d8254aa94b2",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "초파리가 계속 꼬여요.",
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
                          "plain_text": "초파리가 계속 꼬여요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "d5ce1c4f-ec5d-4ccc-96f3-b6140fbfc938",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "바로 이때!",
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
                          "plain_text": "바로 이때!",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "95a6cabf-dfe6-4121-bb6d-8726b6af947e",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "비건 글루텐 프리 바나나 초콜릿 머핀을 한 번 만들어 보세요.",
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
                          "plain_text": "비건 글루텐 프리 바나나 초콜릿 머핀을 한 번 만들어 보세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "d8bafa0e-b5e3-4467-9639-3408666c0555",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "바나나, 아몬드 가루, 아마씨, 코코아 가루로 만든 비건 글루텐 프리 바나나 초콜릿 칩 머핀",
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
                          "plain_text": "바나나, 아몬드 가루, 아마씨, 코코아 가루로 만든 비건 글루텐 프리 바나나 초콜릿 칩 머핀",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "0bdd4798-1647-432e-b06c-5b9fe2a346fb",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "c3585012-4b4c-4850-9dbb-5cac32e406c5",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "비건 글루텐 프리 바나나 초콜릿 머핀은요.\n잘 익은 바나나를 달걀로 사용해요.피넛 버터를 사용하여 오일 함량을 줄였어요. 촉촉하고 달콤한 맛을 위해 메이플 시럽을 사용해요.풍부한 초콜릿 맛을 내기 위해 코코아 파우더를 사용해요.초콜릿 칩으로 부드럽게 녹는 진한 초콜릿 맛을 느낄 수 있어요.",
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
                          "plain_text": "비건 글루텐 프리 바나나 초콜릿 머핀은요.\n잘 익은 바나나를 달걀로 사용해요.피넛 버터를 사용하여 오일 함량을 줄였어요. 촉촉하고 달콤한 맛을 위해 메이플 시럽을 사용해요.풍부한 초콜릿 맛을 내기 위해 코코아 파우더를 사용해요.초콜릿 칩으로 부드럽게 녹는 진한 초콜릿 맛을 느낄 수 있어요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "f1d36545-9219-4fcd-9cd2-356d27c88fea",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "간식으로 먹기도 좋고, 냉동 보관해서 식사 대용으로도 좋아요!",
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
                          "plain_text": "간식으로 먹기도 좋고, 냉동 보관해서 식사 대용으로도 좋아요!",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "40af7a36-2b85-4985-9f0e-789d3baad88d",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "fccf588b-117c-4571-a1ef-7411ecc41085",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "총 머핀 5개",
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
                          "plain_text": "총 머핀 5개",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "d982c94e-85c5-4de9-b59c-2b67b195eeaf",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "115ab115-c6f9-4c29-bc86-8534c051a731",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "재료\n아마씨 달걀(아마씨 1T + 물 3T)",
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
                          "plain_text": "재료\n아마씨 달걀(아마씨 1T + 물 3T)",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "e85ddb47-41c7-4281-aa07-755735cf0fba",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "20g 마스코바도 설탕",
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
                          "plain_text": "20g 마스코바도 설탕",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "ef5cb201-9ff4-4511-8145-57d761213ae8",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "1T 메이플 시럽",
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
                          "plain_text": "1T 메이플 시럽",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "276af2e3-7953-4df4-a7bd-88dd1978afa3",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "25g 무첨가 땅콩 버터",
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
                          "plain_text": "25g 무첨가 땅콩 버터",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "976328ef-44c1-4fbe-9e93-251529cbea3c",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "소금 한 꼬집",
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
                          "plain_text": "소금 한 꼬집",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "6cf9fb05-811a-40f0-98cf-0429e5431f77",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "1/4t 바닐라 엑스트랙",
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
                          "plain_text": "1/4t 바닐라 엑스트랙",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "89d2ef80-8edc-4c1c-b710-4a8203966b18",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "5t 현미유",
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
                          "plain_text": "5t 현미유",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "cac572ee-ee58-4b90-ac3c-56c740466cdc",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "5T 두유",
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
                          "plain_text": "5T 두유",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "c248a400-8f40-456e-83a1-806d0722953c",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "잘 익은 바나나 중간 크기 1개",
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
                          "plain_text": "잘 익은 바나나 중간 크기 1개",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "dd7433bc-7779-4b34-b47c-4fc66d668f49",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "30g 코코아 가루",
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
                          "plain_text": "30g 코코아 가루",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "5295b411-326c-4178-85fb-9e4d5c561d81",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "30g 귀리 가루",
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
                          "plain_text": "30g 귀리 가루",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "65df39ff-f536-41e5-bb78-f6e854b45460",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "65g 아몬드 가루",
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
                          "plain_text": "65g 아몬드 가루",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "2f7fb381-30f8-4fc4-93c4-ed36f80cb972",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "4g 베이킹파우더",
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
                          "plain_text": "4g 베이킹파우더",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "38919027-cd7b-4cf8-ab53-32581da6d421",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "1g 베이킹 소다",
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
                          "plain_text": "1g 베이킹 소다",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "ad101a57-cf15-4ccd-aced-852b8cb7362a",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "20g 초콜릿 칩",
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
                          "plain_text": "20g 초콜릿 칩",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "4f6faf32-756d-4ef0-abfc-94f3695cce0f",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "88b9a378-dcb8-4690-b95a-d8389f223cad",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "레시피",
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
                          "plain_text": "레시피",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "a07daabc-ce75-4efe-b59e-4b9dee6cc485",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "180℃로 오븐을 예열해 주세요.",
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
                          "plain_text": "180℃로 오븐을 예열해 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "5cb9cdf0-a57c-4201-9f3d-d579f9478fa9",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "아마씨 달걀을 준비해 주세요.(물과 아마씨 가루를 섞으면 젤리처럼 돼요.)",
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
                          "plain_text": "아마씨 달걀을 준비해 주세요.(물과 아마씨 가루를 섞으면 젤리처럼 돼요.)",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "74ede4c7-d286-42dc-843f-4a8294bbf956",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "볼에 바나나를 으깨고 아마씨 달걀을 넣어 주세요.",
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
                          "plain_text": "볼에 바나나를 으깨고 아마씨 달걀을 넣어 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "113b42c4-468b-4319-97a7-7e75fad1d085",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "메이플 시럽, 마스코바도 설탕, 땅콩 버터, 소금 한 꼬집, 바닐라 엑스트랙, 현미유, 베이킹 소다를 넣고 섞어 주세요.",
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
                          "plain_text": "메이플 시럽, 마스코바도 설탕, 땅콩 버터, 소금 한 꼬집, 바닐라 엑스트랙, 현미유, 베이킹 소다를 넣고 섞어 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "5a3f1692-fce8-4e3a-be90-1566f5e5b842",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "4번에 귀리 가루와 아몬드 가루, 코코아 가루를 넣고 섞어 주세요.",
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
                          "plain_text": "4번에 귀리 가루와 아몬드 가루, 코코아 가루를 넣고 섞어 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "b6bd1659-d0b1-48ee-9035-c5c74676672f",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "머핀컵에 반죽을 가득 채워주세요.",
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
                          "plain_text": "머핀컵에 반죽을 가득 채워주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "1a40817c-541e-4292-a775-9f5d193b8b05",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "초코칩을 올려 주세요.",
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
                          "plain_text": "초코칩을 올려 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "07314ab6-f78f-40fa-9147-b18deb4fcd19",
              "parent": {
                  "type": "page_id",
                  "page_id": "293380b2-1bd8-4cb0-82f8-0d2708918f25"
              },
              "created_time": "2023-09-09T09:10:00.000Z",
              "last_edited_time": "2023-09-09T09:10:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "오븐에서 25~30분 정도 구워 주세요. 구워진 머핀을 이쑤시개로 찔러서 묻어 나오는 게 없으면 꺼내 주세요.머핀이 식으면 꺼내 주세요. 완전히 식어야 머핀 포장지가 잘 떨어져요.",
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
                          "plain_text": "오븐에서 25~30분 정도 구워 주세요. 구워진 머핀을 이쑤시개로 찔러서 묻어 나오는 게 없으면 꺼내 주세요.머핀이 식으면 꺼내 주세요. 완전히 식어야 머핀 포장지가 잘 떨어져요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          }
      ],
      "next_cursor": null,
      "has_more": false,
      "type": "block",
      "block": {}
  },
  {
    "title": "비건 글루텐 프리 라즈베리 머핀",
    "object": "list",
    "results": [
        {
            "object": "block",
            "id": "ea53325e-0f2d-450a-ac9e-582e62d4b9f5",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:20:00.000Z",
            "last_edited_time": "2023-09-09T09:20:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "image",
            "image": {
                "caption": [],
                "type": "external",
                "external": {
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/rasberrymurfin.jpg"
                }
            }
        },
        {
            "object": "block",
            "id": "78046f0b-2826-4d84-a205-a26782695d40",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:20:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "새콤달콤하고 알갱이가 톡톡 씹히는 라즈베리가 듬뿍 든",
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
                        "plain_text": "새콤달콤하고 알갱이가 톡톡 씹히는 라즈베리가 듬뿍 든",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "121c874f-6414-45f2-a63d-4f9c7f3c8dcf",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "비건 글루텐 프리 머핀",
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
                        "plain_text": "비건 글루텐 프리 머핀",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "50b9654a-e1d9-42c2-9fd9-dfaee6b28e51",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "건강하고 맛있는 아침",
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
                        "plain_text": "건강하고 맛있는 아침",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "eeeb99a3-6b80-4504-81b2-fee3305f526c",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "출출할 때 디저트로 먹기 좋아요!",
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
                        "plain_text": "출출할 때 디저트로 먹기 좋아요!",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "adaf492e-4803-47c2-8ba0-cf4fd86c6263",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:10:00.000Z",
            "last_edited_time": "2023-09-09T09:10:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "06225c6c-efab-45b2-a100-ad5836b184ae",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:10:00.000Z",
            "last_edited_time": "2023-09-09T09:10:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "총 머핀 4개",
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
                        "plain_text": "총 머핀 4개",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "d27c7f7a-8ae3-4705-8a19-019867dfb8bb",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:10:00.000Z",
            "last_edited_time": "2023-09-09T09:10:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "18a67cc9-c32d-4af9-9460-4e6f4130d8e2",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:10:00.000Z",
            "last_edited_time": "2023-09-09T09:10:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "재료",
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
                        "plain_text": "재료",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "5cafe013-8026-43ba-9bd8-76385a1dcec6",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:10:00.000Z",
            "last_edited_time": "2023-09-09T09:10:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "아마씨 달걀(아마씨 5g  + 물 15g)\n두유 20g",
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
                        "plain_text": "아마씨 달걀(아마씨 5g  + 물 15g)\n두유 20g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "76a876a3-851a-4e84-be4d-d77600e76d11",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:10:00.000Z",
            "last_edited_time": "2023-09-09T09:10:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "레몬즙 4g",
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
                        "plain_text": "레몬즙 4g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "31c6542d-955a-408d-a034-072e669e8c9e",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:10:00.000Z",
            "last_edited_time": "2023-09-09T09:10:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "베이킹 소다 2g",
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
                        "plain_text": "베이킹 소다 2g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "8442dcc5-f046-418d-815a-04e23cd28a33",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:10:00.000Z",
            "last_edited_time": "2023-09-09T09:10:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "베이킹파우더 6g",
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
                        "plain_text": "베이킹파우더 6g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "1b43e637-e1e2-43e3-82e4-3eb7fe668e10",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:10:00.000Z",
            "last_edited_time": "2023-09-09T09:10:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "아가베 시럽 20g",
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
                        "plain_text": "아가베 시럽 20g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "fe02d309-ab19-4f59-9b9e-576d06f751c1",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:10:00.000Z",
            "last_edited_time": "2023-09-09T09:10:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "비정제 원당 50g",
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
                        "plain_text": "비정제 원당 50g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "761152fd-8f56-4071-bdbe-1ac3e5bd7268",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:10:00.000Z",
            "last_edited_time": "2023-09-09T09:10:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "아보카도 오일 40g",
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
                        "plain_text": "아보카도 오일 40g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "41ef7974-439a-4f60-855d-1d427aa87bd6",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:10:00.000Z",
            "last_edited_time": "2023-09-09T09:10:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "애플 소스(무첨가) 92g",
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
                        "plain_text": "애플 소스(무첨가) 92g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "01d6156f-c75d-43ea-a023-ad29f2a1ee08",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:10:00.000Z",
            "last_edited_time": "2023-09-09T09:10:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "소금 한 꼬집",
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
                        "plain_text": "소금 한 꼬집",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "1df6c9a8-2e90-4c4a-b117-799cc3302622",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:10:00.000Z",
            "last_edited_time": "2023-09-09T09:10:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "타피오카 전분 14g",
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
                        "plain_text": "타피오카 전분 14g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "b0c7f31e-c71a-4232-bfa5-e7fca45e7431",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:10:00.000Z",
            "last_edited_time": "2023-09-09T09:10:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "아몬드 가루 66g",
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
                        "plain_text": "아몬드 가루 66g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "2c6a388c-1531-48c9-bffa-1c5379e3b43a",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:10:00.000Z",
            "last_edited_time": "2023-09-09T09:10:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "귀리 가루 68g",
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
                        "plain_text": "귀리 가루 68g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "9c299e00-7c57-4420-bbba-b4a8ef4c555f",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:10:00.000Z",
            "last_edited_time": "2023-09-09T09:10:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "냉동 라즈베리 70g",
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
                        "plain_text": "냉동 라즈베리 70g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "8e81b3d4-dfe5-4859-b0c5-8856b2e67a2b",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:10:00.000Z",
            "last_edited_time": "2023-09-09T09:10:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "5aace5ef-da61-40b2-b8fc-c48179127474",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:10:00.000Z",
            "last_edited_time": "2023-09-09T09:10:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "레시피",
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
                        "plain_text": "레시피",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "f7809b05-222d-4f2a-ad7a-4c27ac7e01f8",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:10:00.000Z",
            "last_edited_time": "2023-09-09T09:10:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "오븐을 190℃로 예열해 주세요.",
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
                        "plain_text": "오븐을 190℃로 예열해 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "41095a9b-3fcc-4c3f-b872-d52affe5b87b",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:10:00.000Z",
            "last_edited_time": "2023-09-09T09:10:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "아마씨 달걀(아마씨 5g + 물 15g)을 만들어 주세요.\n3 .두유에 레몬즙을 넣고 비건 버터밀크(두유 5T + 레몬즙 1t)를 만들어 주세요.\n4 .아마씨 달걀에 비정제 원당, 메이플 시럽, 애플 소스를 넣고 섞어 주세요.",
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
                        "plain_text": "아마씨 달걀(아마씨 5g + 물 15g)을 만들어 주세요.\n3 .두유에 레몬즙을 넣고 비건 버터밀크(두유 5T + 레몬즙 1t)를 만들어 주세요.\n4 .아마씨 달걀에 비정제 원당, 메이플 시럽, 애플 소스를 넣고 섞어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "674e48e2-4beb-4a17-bb3f-0fb5cc0333aa",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:10:00.000Z",
            "last_edited_time": "2023-09-09T09:10:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "4번에 3번 버터밀크와 아보카도 오일을 넣고 섞어 주세요.\n6 .아몬드 가루, 타피오카 전분, 귀리 가루, 베이킹파우더, 베이킹 소다, 소금을 체 쳐주세요.",
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
                        "plain_text": "4번에 3번 버터밀크와 아보카도 오일을 넣고 섞어 주세요.\n6 .아몬드 가루, 타피오카 전분, 귀리 가루, 베이킹파우더, 베이킹 소다, 소금을 체 쳐주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "e2a7762a-e55a-4b06-8546-4c9336fa1ed6",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:10:00.000Z",
            "last_edited_time": "2023-09-09T09:10:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "가루 재료와 액체 재료를 잘 부드럽게 섞어 주다가 냉동 라즈베리 70g을 넣어 주세요.나머지 20g 라즈베리를 머핀 위에 올려 주세요.",
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
                        "plain_text": "가루 재료와 액체 재료를 잘 부드럽게 섞어 주다가 냉동 라즈베리 70g을 넣어 주세요.나머지 20g 라즈베리를 머핀 위에 올려 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "ba3e235b-2ca6-4e86-abf1-640ea2440912",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:10:00.000Z",
            "last_edited_time": "2023-09-09T09:10:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "895e1fb1-1c03-4c67-9a48-9c1ef3ba75b4",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:10:00.000Z",
            "last_edited_time": "2023-09-09T09:10:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "머핀 종이에 머핀 반죽을 넣고 오븐에서 25분 구워주세요. 머핀 중앙을 이쑤시개로 쑤셔서 안 묻어 나오면 꺼내 주세요.\n완성된 머핀을 틀에서 바로 분리하면 머핀이 망가지기 쉽기 때문에 30분 정도 기다렸다가 틀에서 분리합니다.\n오븐에 꺼낸 머핀은 그대로 5분간 식혀 주세요. 머핀이 완전히 식어야 포장지가 쉽게 벗겨져요.",
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
                        "plain_text": "머핀 종이에 머핀 반죽을 넣고 오븐에서 25분 구워주세요. 머핀 중앙을 이쑤시개로 쑤셔서 안 묻어 나오면 꺼내 주세요.\n완성된 머핀을 틀에서 바로 분리하면 머핀이 망가지기 쉽기 때문에 30분 정도 기다렸다가 틀에서 분리합니다.\n오븐에 꺼낸 머핀은 그대로 5분간 식혀 주세요. 머핀이 완전히 식어야 포장지가 쉽게 벗겨져요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "381c67af-d91b-4442-a373-5603cbe55919",
            "parent": {
                "type": "page_id",
                "page_id": "9097d660-d106-42c8-9959-1e596edfba1b"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        }
    ],
    "next_cursor": null,
    "has_more": false,
    "type": "block",
    "block": {}
  },
  {
    "title": "비건 글루텐 프리 블루베리 머핀",
    "object": "list",
    "results": [
        {
            "object": "block",
            "id": "8a8e43eb-9e04-4e07-9706-52d7d3a58941",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:19:00.000Z",
            "last_edited_time": "2023-09-09T09:19:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "image",
            "image": {
                "caption": [],
                "type": "external",
                "external": {
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/blueberryMuffin.jpg"
                }
            }
        },
        {
            "object": "block",
            "id": "cfe223a0-d892-4603-8608-e8fb6cdc0f4a",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:19:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "안토시아닌이 많아서 시야 보호와 노화 방지에 훌륭한 블루베리!",
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
                        "plain_text": "안토시아닌이 많아서 시야 보호와 노화 방지에 훌륭한 블루베리!",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "6fdefc4f-8e5f-442e-bf9d-08aa71bfa687",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "촉촉하면서 부드러운 블루베리 머핀 만들어 볼까요?",
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
                        "plain_text": "촉촉하면서 부드러운 블루베리 머핀 만들어 볼까요?",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "4be5dbc9-b37d-4200-8d36-9806a0df25bc",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "이번 비건 글루텐 프리 블루베리 머핀은",
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
                        "plain_text": "이번 비건 글루텐 프리 블루베리 머핀은",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "d66f3663-6f04-4506-8f46-9632af5d9ec5",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "비건 버터밀크(두유+ 레몬즙)을 사용할 거예요.",
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
                        "plain_text": "비건 버터밀크(두유+ 레몬즙)을 사용할 거예요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "055559f3-d6ae-45a7-89d2-3e679ad38e61",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "아마씨 달걀을 사용해요.",
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
                        "plain_text": "아마씨 달걀을 사용해요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "9c7aba01-ef2a-4e42-93f4-4ddec23e83af",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "건강한 단맛을 위해 비정제 원당을 사용해요.",
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
                        "plain_text": "건강한 단맛을 위해 비정제 원당을 사용해요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "c77d7b31-adf1-44cd-9253-305f9b1c7689",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "블루베리가 톡톡 터지는 맛을 느껴요.",
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
                        "plain_text": "블루베리가 톡톡 터지는 맛을 느껴요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "4cae7326-22a6-48d0-bcda-9874c7d89a03",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "2b4a853d-1084-49a5-bf15-c7d666ca0dd2",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "총 머핀 5개",
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
                        "plain_text": "총 머핀 5개",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "e53364b5-8323-4230-93bb-798f78b80169",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "재료",
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
                        "plain_text": "재료",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "a12b8c6c-81c1-4971-8a4a-6e433c585a40",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "아마씨 달걀(아마씨 5g + 물 15g)\n두유 5T\n레몬즙 1t\n비정제 원당 60g\n현미유 50g",
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
                        "plain_text": "아마씨 달걀(아마씨 5g + 물 15g)\n두유 5T\n레몬즙 1t\n비정제 원당 60g\n현미유 50g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "c10b3751-c3d3-4203-8472-5dd565dc0267",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "바닐라 엑스트랙 1/2t",
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
                        "plain_text": "바닐라 엑스트랙 1/2t",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "6c4960e1-01b4-4432-b91b-2018b69ccc55",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "아몬드 가루 106g",
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
                        "plain_text": "아몬드 가루 106g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "14e0fc97-7b8a-4cc8-a5d9-de4db196602f",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "타피오카 전분 50g",
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
                        "plain_text": "타피오카 전분 50g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "8be93d3d-f7fb-4076-aec5-437947a3c562",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "현미가루 22g",
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
                        "plain_text": "현미가루 22g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "5d879deb-35b7-4865-8292-647573687577",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "베이킹파우더 7g",
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
                        "plain_text": "베이킹파우더 7g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "52c6c090-7942-4a92-8381-36fa8ce623ca",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "베이킹 소다 2g",
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
                        "plain_text": "베이킹 소다 2g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "f3e6d52c-46bf-444c-a35d-6910f534b0ba",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "소금 한 꼬집\n블루베리 85g",
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
                        "plain_text": "소금 한 꼬집\n블루베리 85g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "c7472df9-5cb4-4af2-8c32-f20557e10dd6",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "2a1ebfa1-d78b-4096-ba12-9fc457950ce6",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "레시피",
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
                        "plain_text": "레시피",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "b1102940-7299-4cd7-a97b-e54b8bb31248",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "오븐을 190℃로 예열해 주세요.",
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
                        "plain_text": "오븐을 190℃로 예열해 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "e3f87dde-72b5-4f62-ac8f-7c3a6bfb6951",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "아마씨 계란(아마씨 5g + 물 15g)을 만들어 주세요.",
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
                        "plain_text": "아마씨 계란(아마씨 5g + 물 15g)을 만들어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "5c894112-a6fc-4a34-badc-e2850270119a",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "두유에 레몬즙을 넣고 비건 버터밀크(두유 5T + 레몬즙 1t)를 만들어 주세요.",
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
                        "plain_text": "두유에 레몬즙을 넣고 비건 버터밀크(두유 5T + 레몬즙 1t)를 만들어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "9780fb0b-7ed7-40e7-b8b4-e9cdb66ec5fe",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "아마씨 계란에 비정제 원당을 넣고 섞어 주세요.",
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
                        "plain_text": "아마씨 계란에 비정제 원당을 넣고 섞어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "9eaa5114-21ae-4bd7-8c23-62fe51d0cb0c",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "4번에 현미유와 바닐라 엑스트랙을 넣고 섞어 주세요.",
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
                        "plain_text": "4번에 현미유와 바닐라 엑스트랙을 넣고 섞어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "1d171137-b269-4f6d-bed9-7aaa1e3987d9",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "5번에 비건 버터밀크(3번)를 넣고 섞어 주세요.",
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
                        "plain_text": "5번에 비건 버터밀크(3번)를 넣고 섞어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "bd7657f8-f351-483a-b3b2-78c9bf6ab044",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "아몬드 가루, 타피오카 전분, 현미가루, 베이킹파우더, 베이킹 소다, 소금을 체 쳐서 6번에 넣어 주세요.",
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
                        "plain_text": "아몬드 가루, 타피오카 전분, 현미가루, 베이킹파우더, 베이킹 소다, 소금을 체 쳐서 6번에 넣어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "f1eb878f-811e-4dcd-97a6-9a011ad10e68",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "7번을 잘 섞어 주다가 블루베리 60g을 넣어 주세요. 나머지 25g 블루베리는 머핀 위에 올려 주세요.",
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
                        "plain_text": "7번을 잘 섞어 주다가 블루베리 60g을 넣어 주세요. 나머지 25g 블루베리는 머핀 위에 올려 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "10b9437b-9f81-443b-abca-a0d967d91ee5",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "토핑으로 비정제 원당을 살짝 뿌려 줘도 좋아요.머핀 종이에 머핀 반죽을 넣고 오븐에서 25분 구워주세요.\n머핀 중앙을 이쑤시개로 쑤셔서 안 묻어 나오면 꺼내 주세요.오븐에 꺼낸 머핀은 그대로 5분간 식혀 주세요. 머핀이 완전히 식어야 포장지가 쉽게 벗겨져요.",
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
                        "plain_text": "토핑으로 비정제 원당을 살짝 뿌려 줘도 좋아요.머핀 종이에 머핀 반죽을 넣고 오븐에서 25분 구워주세요.\n머핀 중앙을 이쑤시개로 쑤셔서 안 묻어 나오면 꺼내 주세요.오븐에 꺼낸 머핀은 그대로 5분간 식혀 주세요. 머핀이 완전히 식어야 포장지가 쉽게 벗겨져요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "3789d3ed-7a6a-4f4d-b16b-c1f559385783",
            "parent": {
                "type": "page_id",
                "page_id": "aac7877d-2025-4ca8-a020-82b2e7f89b28"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        }
    ],
    "next_cursor": null,
    "has_more": false,
    "type": "block",
    "block": {}
  },
  {
    "title": "비건 글루텐 프리 초코칩 스콘",
    "object": "list",
    "results": [
        {
            "object": "block",
            "id": "8f668ce4-969c-448d-af5d-a8c9186174b6",
            "parent": {
                "type": "page_id",
                "page_id": "d6fcb443-7730-45a2-81fe-54e86c5eb91d"
            },
            "created_time": "2023-09-09T09:19:00.000Z",
            "last_edited_time": "2023-09-09T09:19:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "image",
            "image": {
                "caption": [],
                "type": "external",
                "external": {
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/chocochipScorn.jpg"
                }
            }
        },
        {
            "object": "block",
            "id": "2a0cef44-3a06-4534-9a8b-01ee3805433d",
            "parent": {
                "type": "page_id",
                "page_id": "d6fcb443-7730-45a2-81fe-54e86c5eb91d"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:19:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "스콘은  재료를 잘 섞어서 뭉친 반죽을 구워 주기만 하면 돼요.\n비건 글루텐 프리 초코칩 스콘은 과자처럼 겉은 바삭하고 속은 촉촉해요.\n또 달콤하면서 쌉싸름한 초코칩이 씹혀 잼 없이도 맛있게 먹을 수 있어요.\n커피랑 스콘 어떠세요?",
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
                        "plain_text": "스콘은  재료를 잘 섞어서 뭉친 반죽을 구워 주기만 하면 돼요.\n비건 글루텐 프리 초코칩 스콘은 과자처럼 겉은 바삭하고 속은 촉촉해요.\n또 달콤하면서 쌉싸름한 초코칩이 씹혀 잼 없이도 맛있게 먹을 수 있어요.\n커피랑 스콘 어떠세요?",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "b4695959-4594-48d6-8219-bd39e06e3a68",
            "parent": {
                "type": "page_id",
                "page_id": "d6fcb443-7730-45a2-81fe-54e86c5eb91d"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "9862e53b-35f4-40aa-961b-6155ca52d2b8",
            "parent": {
                "type": "page_id",
                "page_id": "d6fcb443-7730-45a2-81fe-54e86c5eb91d"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "총 분량 스콘 4개",
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
                        "plain_text": "총 분량 스콘 4개",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "9672a6a4-a158-499e-9036-2d83a2d19806",
            "parent": {
                "type": "page_id",
                "page_id": "d6fcb443-7730-45a2-81fe-54e86c5eb91d"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "재료\n귀리가루 80g\n아몬드 가루 60g\n타피오카 전분 10g\n베이킹파우더 7g\n비정제 원당 40g\n소금 1g\n현미유 20g\n초코칩 50g",
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
                        "plain_text": "재료\n귀리가루 80g\n아몬드 가루 60g\n타피오카 전분 10g\n베이킹파우더 7g\n비정제 원당 40g\n소금 1g\n현미유 20g\n초코칩 50g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "e4aeff17-eed8-4132-b211-09e57abda7e6",
            "parent": {
                "type": "page_id",
                "page_id": "d6fcb443-7730-45a2-81fe-54e86c5eb91d"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "두유 글레이즈 재료\n두유 5g\n아가베 시럽 5g",
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
                        "plain_text": "두유 글레이즈 재료\n두유 5g\n아가베 시럽 5g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "d0b9284f-3009-4b24-bccd-1009ec8c5f5b",
            "parent": {
                "type": "page_id",
                "page_id": "d6fcb443-7730-45a2-81fe-54e86c5eb91d"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "2306fffd-fe5f-4ce1-9f99-3da050c2e2ef",
            "parent": {
                "type": "page_id",
                "page_id": "d6fcb443-7730-45a2-81fe-54e86c5eb91d"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "레시피",
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
                        "plain_text": "레시피",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "9f62a564-eb2e-42b9-aa03-69494a3b1c1f",
            "parent": {
                "type": "page_id",
                "page_id": "d6fcb443-7730-45a2-81fe-54e86c5eb91d"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "170℃로 오븐 예열해 주세요.",
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
                        "plain_text": "170℃로 오븐 예열해 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "970e48cd-2c2e-4c8c-babd-67c629f42019",
            "parent": {
                "type": "page_id",
                "page_id": "d6fcb443-7730-45a2-81fe-54e86c5eb91d"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "귀리가루, 아몬드 가루, 타피오카 전분, 베이킹파우더, 소금을 체 쳐주세요.",
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
                        "plain_text": "귀리가루, 아몬드 가루, 타피오카 전분, 베이킹파우더, 소금을 체 쳐주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "222ca757-d3e0-4e8c-ac44-4a0d99498cfd",
            "parent": {
                "type": "page_id",
                "page_id": "d6fcb443-7730-45a2-81fe-54e86c5eb91d"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "두유에 비정제 원당을 거품기로 섞어다 현미유를 넣고 잘 섞어 주세요.",
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
                        "plain_text": "두유에 비정제 원당을 거품기로 섞어다 현미유를 넣고 잘 섞어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "cfff9198-97d0-4dfc-bcd2-850365d6670e",
            "parent": {
                "type": "page_id",
                "page_id": "d6fcb443-7730-45a2-81fe-54e86c5eb91d"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "2번과 3번을 섞어 주세요. 점점 한 덩어리로 뭉칠 거예요. 어느 정도 뭉치면 초콜릿을 넣고 한 덩어리로 만들어 주세요.",
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
                        "plain_text": "2번과 3번을 섞어 주세요. 점점 한 덩어리로 뭉칠 거예요. 어느 정도 뭉치면 초콜릿을 넣고 한 덩어리로 만들어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "67c7f9b7-8d56-4a0e-bc83-c946cc5c0da0",
            "parent": {
                "type": "page_id",
                "page_id": "d6fcb443-7730-45a2-81fe-54e86c5eb91d"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "반죽을 냉장실에 40분간 휴지시켜 주세요.칼로 4등분 해주세요.",
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
                        "plain_text": "반죽을 냉장실에 40분간 휴지시켜 주세요.칼로 4등분 해주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "a9a1d409-5ec9-471f-8762-f5d763850e95",
            "parent": {
                "type": "page_id",
                "page_id": "d6fcb443-7730-45a2-81fe-54e86c5eb91d"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "스콘 위에 두유 글레이즈를 살짝 발라 주세요.",
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
                        "plain_text": "스콘 위에 두유 글레이즈를 살짝 발라 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "d24f38cb-f94c-4c9e-816b-43194135dd18",
            "parent": {
                "type": "page_id",
                "page_id": "d6fcb443-7730-45a2-81fe-54e86c5eb91d"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "오븐에 15분 정도 굽다가 오븐 팬 위치를 바꾸고 5분을 마저 구워주세요.",
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
                        "plain_text": "오븐에 15분 정도 굽다가 오븐 팬 위치를 바꾸고 5분을 마저 구워주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "f0dd4af4-67a8-4d6d-9488-f1dc214301e1",
            "parent": {
                "type": "page_id",
                "page_id": "d6fcb443-7730-45a2-81fe-54e86c5eb91d"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "277067db-e4b7-4ad7-a713-27c1522ffd50",
            "parent": {
                "type": "page_id",
                "page_id": "d6fcb443-7730-45a2-81fe-54e86c5eb91d"
            },
            "created_time": "2023-09-09T09:09:00.000Z",
            "last_edited_time": "2023-09-09T09:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "💡 온도 사양에 따라 굽는 시간이 달라요. 스콘은 바짝 구워주면 맛있어요.",
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
                        "plain_text": "💡 온도 사양에 따라 굽는 시간이 달라요. 스콘은 바짝 구워주면 맛있어요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        }
    ],
    "next_cursor": null,
    "has_more": false,
    "type": "block",
    "block": {}
  },
  {
    "title": "비건 글루텐 프리 바나나 블루베리 스콘",
    "object": "list",
    "results": [
        {
            "object": "block",
            "id": "8fcd97ed-a764-45d2-b0e9-446042695157",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:18:00.000Z",
            "last_edited_time": "2023-09-09T09:18:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "image",
            "image": {
                "caption": [],
                "type": "external",
                "external": {
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/bananaBlueberryScorn2.jpg"
                }
            }
        },
        {
            "object": "block",
            "id": "3485ea4b-f909-403a-a6a9-db75e547deb9",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:18:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "귀리 가루를 듬뿍 넣어 포만감이 있어요. 식사 대용으로 먹어도 좋아요.\n바나나를 넣어서 당분과 지방 함량이 낮아 다이어트 하시는 분들에게 추천하는 레시피입니다.\n밀가루를 넣지 않아서 글루텐에 민감한 분들이 만들어 먹으면 좋아요.",
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
                        "plain_text": "귀리 가루를 듬뿍 넣어 포만감이 있어요. 식사 대용으로 먹어도 좋아요.\n바나나를 넣어서 당분과 지방 함량이 낮아 다이어트 하시는 분들에게 추천하는 레시피입니다.\n밀가루를 넣지 않아서 글루텐에 민감한 분들이 만들어 먹으면 좋아요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "4d594e99-d68e-4059-8524-d9d55b69a813",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "379cc776-aa84-4dda-8a7d-10c6a3601f8f",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "총 분량 스콘 4개",
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
                        "plain_text": "총 분량 스콘 4개",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "af7b194c-aa54-4684-a3af-b48a36121ddf",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "재료\n귀리 가루 70g",
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
                        "plain_text": "재료\n귀리 가루 70g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "d8bb25da-ee8a-4c47-9697-6c99ad4c4a8c",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "아몬드 가루 46g",
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
                        "plain_text": "아몬드 가루 46g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "73ca6891-6d50-4e7d-b706-66c5c7784c72",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "베이킹파우더 5g",
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
                        "plain_text": "베이킹파우더 5g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "848e5281-58b2-4b36-84df-9163e3d566dc",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "베이킹소다 2g",
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
                        "plain_text": "베이킹소다 2g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "50dc0aa2-b04f-49dd-8b8a-f0aa0bc64b5f",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "비정제 원당 10g",
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
                        "plain_text": "비정제 원당 10g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "57de7262-b559-4e4b-8cd0-1a077b9701d4",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "현미유 18g",
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
                        "plain_text": "현미유 18g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "cdf1dd79-344b-49e4-bf25-56a385b9e2f8",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "소금 1g",
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
                        "plain_text": "소금 1g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "a0e3ad88-b9cb-4e37-ae8c-440eb22118b7",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "레몬즙 1g",
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
                        "plain_text": "레몬즙 1g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "3fe696fa-3672-428e-a5d3-2c0801bd3b81",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "블루베리 25g",
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
                        "plain_text": "블루베리 25g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "ae00f243-3a74-4b99-90cc-6823ec15fb94",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "두유 글레이즈 재료\n두유 5g",
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
                        "plain_text": "두유 글레이즈 재료\n두유 5g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "c5445182-a81a-4e0a-8e51-96d6a39c482c",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "아가베 시럽 5g",
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
                        "plain_text": "아가베 시럽 5g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "d166f969-e832-4f7c-aede-146fe6843fdb",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "926c4146-d5a4-4a04-8ecc-cd7480e67001",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "레시피",
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
                        "plain_text": "레시피",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "6ef58f4d-333b-48f1-8904-c269b972c941",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "오븐은 170℃로 예열해 주세요.",
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
                        "plain_text": "오븐은 170℃로 예열해 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "534d9970-248b-44d0-9f00-ded7eb8d0cb9",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "아몬드 가루, 귀리가루, 베이킹파우더, 베이킹소다를 체 쳐주세요.",
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
                        "plain_text": "아몬드 가루, 귀리가루, 베이킹파우더, 베이킹소다를 체 쳐주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "8a522947-24b6-4038-83cc-a59feb63d4e0",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "으깬 바나나에 비정제 원당, 소금 넣고 거품기로 섞어 주세요.",
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
                        "plain_text": "으깬 바나나에 비정제 원당, 소금 넣고 거품기로 섞어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "96cf9252-f4c8-4893-8c9e-b6c1abc5c84e",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "레몬즙을 넣고 거품기로 젓다가 현미유를 넣고 섞어 주세요.",
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
                        "plain_text": "레몬즙을 넣고 거품기로 젓다가 현미유를 넣고 섞어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "762046cb-336b-4f0b-83c3-d0e5ac0ec49f",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "4번에 준비한 가루 재료를 넣고 섞다가 블루베리를 넣어 주세요.",
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
                        "plain_text": "4번에 준비한 가루 재료를 넣고 섞다가 블루베리를 넣어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "5a20d6b1-f8f6-4659-b644-6427feb3ab7e",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "냉동실에서 20분 굳혀 주세요.",
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
                        "plain_text": "냉동실에서 20분 굳혀 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "3b797e07-251a-48f0-bc20-6e8b30ad65a9",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "5cm 아이스크림 스쿱으로 떠주세요.",
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
                        "plain_text": "5cm 아이스크림 스쿱으로 떠주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "a22b6193-f248-4d9b-b57c-918fa44eb8fa",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "냉동실에서 꺼낸 반죽에 두유 글레이즈를 살짝 발라 주세요.오븐에 15분 정도 구워 주세요.",
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
                        "plain_text": "냉동실에서 꺼낸 반죽에 두유 글레이즈를 살짝 발라 주세요.오븐에 15분 정도 구워 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "32e4fd14-1830-44ef-b29d-211e01e8e29d",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "오븐 팬 위치를 바꿔서 5분을 마저 구워 주세요.",
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
                        "plain_text": "오븐 팬 위치를 바꿔서 5분을 마저 구워 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "811db52b-63ae-4fcc-a2ba-11539ff3170d",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "c44273a5-c93d-4b8d-96b0-ddded6afe22b",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "스콘은 따뜻한 느낌이 들 정도로 데워 먹으면 제일 맛있어요. 에어프라이어에 한 조각 넣어서 150℃로 5분간 돌려주면 오븐에서 갓 나온 듯한 스콘을 먹을 수 있어요.",
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
                        "plain_text": "스콘은 따뜻한 느낌이 들 정도로 데워 먹으면 제일 맛있어요. 에어프라이어에 한 조각 넣어서 150℃로 5분간 돌려주면 오븐에서 갓 나온 듯한 스콘을 먹을 수 있어요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "4b6fcab0-e6a1-48c7-b831-277769b95ab6",
            "parent": {
                "type": "page_id",
                "page_id": "bbee358d-7d78-4568-bf3e-da37804aa2fc"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        }
    ],
    "next_cursor": null,
    "has_more": false,
    "type": "block",
    "block": {}
  },
  {
    "title": "비건 글루텐 프리 비건 코코넛 스콘",
    "object": "list",
    "results": [
        {
            "object": "block",
            "id": "17d11402-6f69-435c-81c3-47196fac18bd",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:18:00.000Z",
            "last_edited_time": "2023-09-09T09:18:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "image",
            "image": {
                "caption": [],
                "type": "external",
                "external": {
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/coconutScorn.jpg"
                }
            }
        },
        {
            "object": "block",
            "id": "e94ff0a5-0686-47ad-a6c4-c1202d733dbd",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:18:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "스콘 좋아하세요? 스콘은 언제부터 먹었을까요? 1500년대 스코틀랜드에서 스콘을 처음 만들어 먹었대요. Bedford의 공작부인 Anna가 오후에 스콘을 차와 마시면서 대중화되었다고 해요.\n비건 글루텐 프리 코코넛 스콘은요.\n코코넛오일이 들어가서 바삭하고 촉촉해요.",
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
                        "plain_text": "스콘 좋아하세요? 스콘은 언제부터 먹었을까요? 1500년대 스코틀랜드에서 스콘을 처음 만들어 먹었대요. Bedford의 공작부인 Anna가 오후에 스콘을 차와 마시면서 대중화되었다고 해요.\n비건 글루텐 프리 코코넛 스콘은요.\n코코넛오일이 들어가서 바삭하고 촉촉해요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "871fbc9c-77ed-4d46-9522-788d9c30f40f",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "코코넛 밀크가 들어가 코코넛 풍미를 올려줘요.",
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
                        "plain_text": "코코넛 밀크가 들어가 코코넛 풍미를 올려줘요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "cd0be43a-cad1-4174-9e53-128db3b003a2",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "바닐라 글레이즈(스콘 위에 살짝 발라 광택을 내기 위해 바르는 것)를 발라서 모양과 맛이 고급스러워요.",
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
                        "plain_text": "바닐라 글레이즈(스콘 위에 살짝 발라 광택을 내기 위해 바르는 것)를 발라서 모양과 맛이 고급스러워요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "36527029-5dad-4ca7-9c60-c404d19e03a0",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "요즘 빵집이나 카페에서 스콘을 쉽게 볼 수 있어요. 근데 비건 글루텐 프리 스콘은 잘 없어요.",
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
                        "plain_text": "요즘 빵집이나 카페에서 스콘을 쉽게 볼 수 있어요. 근데 비건 글루텐 프리 스콘은 잘 없어요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "ffa79a44-c687-4715-8ed6-958e337a2f71",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "비건 글루텐 프리 스콘 우리 같이 만들어 봐요!",
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
                        "plain_text": "비건 글루텐 프리 스콘 우리 같이 만들어 봐요!",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "d745c540-6821-45e6-b8b2-5b4356d8cb57",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "d2518ea0-a2ca-4bbe-9c59-1d1b410d005f",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "총 분량 스콘 5개",
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
                        "plain_text": "총 분량 스콘 5개",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "df248e67-d4bb-4543-8b89-2bf661796dfb",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "재료",
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
                        "plain_text": "재료",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "3af48a4a-e5d3-4220-a505-cdc4d6b93b1c",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "아마씨 계란(1T 아마씨+ 3T 물)\n3T 코코넛 밀크\n1t 바닐라 엑스트랙\n120g 아몬드 가루\n70g 감자 전분\n50g 귀리 가루\n10g 베이킹파우더\n50g 비정제 원당\n소금 한 꼬집\n60g 차가운 코코넛오일 사용",
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
                        "plain_text": "아마씨 계란(1T 아마씨+ 3T 물)\n3T 코코넛 밀크\n1t 바닐라 엑스트랙\n120g 아몬드 가루\n70g 감자 전분\n50g 귀리 가루\n10g 베이킹파우더\n50g 비정제 원당\n소금 한 꼬집\n60g 차가운 코코넛오일 사용",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "9d8036be-70bd-4123-ba91-85b40b3e5c11",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "바닐라 글레이즈 (선택)\n1T 메이플 시럽\n1/2t 바닐라 엑스트랙\n1T 무첨가 두유",
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
                        "plain_text": "바닐라 글레이즈 (선택)\n1T 메이플 시럽\n1/2t 바닐라 엑스트랙\n1T 무첨가 두유",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "b16b1e80-61ef-45ed-8ba4-ee1b4655fcda",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "55bfbe98-a57a-4964-a96d-56c6e4ee2ce5",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "레시피",
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
                        "plain_text": "레시피",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "2c565deb-2e30-4d27-a365-cb76c25f426b",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "200℃로 오븐을 예열해 주세요.",
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
                        "plain_text": "200℃로 오븐을 예열해 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "b7a608ce-9ccb-4283-8c07-f637d6171a63",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "아마씨와 물을 섞어 젤리처럼 될 때까지 섞어 주세요.",
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
                        "plain_text": "아마씨와 물을 섞어 젤리처럼 될 때까지 섞어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "33605699-ac76-4edf-b835-85f703daa5ff",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "아몬드 가루, 귀리 가루, 베이킹파우더, 소금, 감자 전분을 넣고 체 쳐 주세요.",
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
                        "plain_text": "아몬드 가루, 귀리 가루, 베이킹파우더, 소금, 감자 전분을 넣고 체 쳐 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "ae203b11-801f-4171-85f0-0650fd70382c",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "코코넛 밀크에 비정제 원당을 넣고 섞다가 아마씨 계란(2번)을 넣고 섞어 주세요.",
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
                        "plain_text": "코코넛 밀크에 비정제 원당을 넣고 섞다가 아마씨 계란(2번)을 넣고 섞어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "d3d2936f-3345-4913-86c1-1dd650d760a5",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "가루 재료와 액체 재료를 섞어 주세요.5번에 차가운 코코넛오일을 비벼가면서 뭉쳐 주세요.",
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
                        "plain_text": "가루 재료와 액체 재료를 섞어 주세요.5번에 차가운 코코넛오일을 비벼가면서 뭉쳐 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "35243a07-b641-40bc-b8cd-05152ac87389",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "두께 3cm 원형 반죽을 만들어 주세요.큰 원형 쿠키 커터(5cm)로 반죽을 콕콕 찍어서 팬닝에 해주세요.",
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
                        "plain_text": "두께 3cm 원형 반죽을 만들어 주세요.큰 원형 쿠키 커터(5cm)로 반죽을 콕콕 찍어서 팬닝에 해주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "17a56bf3-49e7-4555-9ba4-4d6b71f6acf9",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "냉동실에서 40분 정도 휴지해 주세요.",
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
                        "plain_text": "냉동실에서 40분 정도 휴지해 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "bc3b2e02-2740-484c-ba58-092948b41325",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "바닐라 글레이즈를 바른 후 오븐에서 15~20분 정도 구워 주세요.가장자리가 황금색이 될 때까지 구워 주세요.",
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
                        "plain_text": "바닐라 글레이즈를 바른 후 오븐에서 15~20분 정도 구워 주세요.가장자리가 황금색이 될 때까지 구워 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "3a05fd02-3df4-4177-9a3f-87b4ab7c9277",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "a018fe47-0cc8-49e9-bbcb-70c59417ba10",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "반죽 팁",
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
                        "plain_text": "반죽 팁",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "f6dc3931-7dff-4f15-a38f-2c279286399e",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "반죽은 촉촉하지만, 손에 달라붙지 않아요. 만약 날씨가 습해서 반죽이 손에 달라붙으면 아몬드 가루를 한 숟가락 넣어 주세요. 반대로 반죽이 단단하면 코코넛 밀크를 한 숟가락 넣어 주세요.\n사용하는 가루 제품 브랜드에 따라 반죽 상태가 약간 달라질 수 있어요.",
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
                        "plain_text": "반죽은 촉촉하지만, 손에 달라붙지 않아요. 만약 날씨가 습해서 반죽이 손에 달라붙으면 아몬드 가루를 한 숟가락 넣어 주세요. 반대로 반죽이 단단하면 코코넛 밀크를 한 숟가락 넣어 주세요.\n사용하는 가루 제품 브랜드에 따라 반죽 상태가 약간 달라질 수 있어요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "c8de0d3a-5405-4227-a622-55d8e63f4ea5",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "저는 큰 원형 쿠키 커터를 사용했어요.\n하지만 칼로 잘라서 모양을 만들 수 있어요. 칼로 잘라서 스콘 모양을 만들 경우, 칼을 물에 담갔다가 닦아서 사용하면 칼에 반죽이 덜 묻어요.",
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
                        "plain_text": "저는 큰 원형 쿠키 커터를 사용했어요.\n하지만 칼로 잘라서 모양을 만들 수 있어요. 칼로 잘라서 스콘 모양을 만들 경우, 칼을 물에 담갔다가 닦아서 사용하면 칼에 반죽이 덜 묻어요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "2aaaf151-62c7-40bf-b081-e47d67829a53",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "집에 통밀이나 밀가루만 있다면, 가루 재료를 통밀가루나 밀가루로 대체해도 좋아요.",
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
                        "plain_text": "집에 통밀이나 밀가루만 있다면, 가루 재료를 통밀가루나 밀가루로 대체해도 좋아요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "0b38e9ce-a7be-49f0-ae70-2237ce7a40aa",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "완전히 식혀서 실온에서 최대 3일간 밀폐하여 보관할 수 있습니다.",
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
                        "plain_text": "완전히 식혀서 실온에서 최대 3일간 밀폐하여 보관할 수 있습니다.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "16a2640d-6391-47ec-86e9-7091470f742b",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "냉동할 경우 다른 음식물 냄새가 배지 않도록 밀폐에 신경 써주세요.",
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
                        "plain_text": "냉동할 경우 다른 음식물 냄새가 배지 않도록 밀폐에 신경 써주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "66d86209-6860-46c3-9b30-a7e0a5f5f83e",
            "parent": {
                "type": "page_id",
                "page_id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804"
            },
            "created_time": "2023-09-09T09:08:00.000Z",
            "last_edited_time": "2023-09-09T09:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "에어 프라이어에 180도로 2분간 데워 먹어도 좋아요.",
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
                        "plain_text": "에어 프라이어에 180도로 2분간 데워 먹어도 좋아요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        }
    ],
    "next_cursor": null,
    "has_more": false,
    "type": "block",
    "block": {}
  },
  {
    "title": "비건 초코 케이크 스콘",
    "object": "list",
    "results": [
        {
            "object": "block",
            "id": "0cbc8130-648c-40af-a068-6931d2c73b6d",
            "parent": {
                "type": "page_id",
                "page_id": "7ca14f72-e5bf-4b9b-b008-164ed5b62070"
            },
            "created_time": "2023-09-09T09:17:00.000Z",
            "last_edited_time": "2023-09-09T09:17:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "image",
            "image": {
                "caption": [],
                "type": "external",
                "external": {
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/chocoCakeScorn2.jpg"
                }
            }
        },
        {
            "object": "block",
            "id": "ec2fb54c-d894-4674-aae8-29f77657c807",
            "parent": {
                "type": "page_id",
                "page_id": "7ca14f72-e5bf-4b9b-b008-164ed5b62070"
            },
            "created_time": "2023-09-09T09:06:00.000Z",
            "last_edited_time": "2023-09-09T09:17:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "카카오 파우더를 넣어 달지 않고 입에 쫙 감기는 초코케이크 같은 스콘입니다.\n초콜릿 칩이 들어가지 않았지만 부드럽고 촉촉한 식감으로 우유와 함께 먹으면 더 맛있어요.\n간단하면서 맛있는 비건 초코케이크 스콘 꼭  만들어 보세요.",
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
                        "plain_text": "카카오 파우더를 넣어 달지 않고 입에 쫙 감기는 초코케이크 같은 스콘입니다.\n초콜릿 칩이 들어가지 않았지만 부드럽고 촉촉한 식감으로 우유와 함께 먹으면 더 맛있어요.\n간단하면서 맛있는 비건 초코케이크 스콘 꼭  만들어 보세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "57772ecb-52bf-41b6-877f-b3e08db29d15",
            "parent": {
                "type": "page_id",
                "page_id": "7ca14f72-e5bf-4b9b-b008-164ed5b62070"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "63d39a4b-832e-4691-98a0-7db798b01308",
            "parent": {
                "type": "page_id",
                "page_id": "7ca14f72-e5bf-4b9b-b008-164ed5b62070"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "총 분량 스콘 4개(8cm)",
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
                        "plain_text": "총 분량 스콘 4개(8cm)",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "5aaef4f0-2ff2-494e-a5b2-0cf872e9205a",
            "parent": {
                "type": "page_id",
                "page_id": "7ca14f72-e5bf-4b9b-b008-164ed5b62070"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "재료",
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
                        "plain_text": "재료",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "2a7f5b2b-c62e-440d-9033-04e4da8c957d",
            "parent": {
                "type": "page_id",
                "page_id": "7ca14f72-e5bf-4b9b-b008-164ed5b62070"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "통밀가루 95g\n아몬드 가루 60g\n베이킹파우더 6g\n베이킹 소다 2g\n카카오 파우더 30g\n비정제 원당 60g\n현미유 36g\n애플 소스(설탕 무첨가) 20g\n두유 100g\n소금 1g\n레몬즙 5g",
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
                        "plain_text": "통밀가루 95g\n아몬드 가루 60g\n베이킹파우더 6g\n베이킹 소다 2g\n카카오 파우더 30g\n비정제 원당 60g\n현미유 36g\n애플 소스(설탕 무첨가) 20g\n두유 100g\n소금 1g\n레몬즙 5g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "e192d02b-8de5-4d14-9c2b-5b4d1909ee33",
            "parent": {
                "type": "page_id",
                "page_id": "7ca14f72-e5bf-4b9b-b008-164ed5b62070"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "a2e867f7-c8bc-4e57-941d-76fff74947cc",
            "parent": {
                "type": "page_id",
                "page_id": "7ca14f72-e5bf-4b9b-b008-164ed5b62070"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "레시피",
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
                        "plain_text": "레시피",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "438220b4-ad52-4e9c-9e1d-6fd7c3d58661",
            "parent": {
                "type": "page_id",
                "page_id": "7ca14f72-e5bf-4b9b-b008-164ed5b62070"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "두유와 레몬즙을 볼에 넣고 20분 정도 놔두세요.->비건 버터밀크(비건 베이킹에서 계란처럼 사용해요.)",
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
                        "plain_text": "두유와 레몬즙을 볼에 넣고 20분 정도 놔두세요.->비건 버터밀크(비건 베이킹에서 계란처럼 사용해요.)",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "572ad180-c994-403d-82bc-3c018f7b4bfa",
            "parent": {
                "type": "page_id",
                "page_id": "7ca14f72-e5bf-4b9b-b008-164ed5b62070"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "통밀가루, 아몬드 가루, 베이킹파우더, 베이킹소다, 카카오 파우더, 소금을 체 쳐주세요.",
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
                        "plain_text": "통밀가루, 아몬드 가루, 베이킹파우더, 베이킹소다, 카카오 파우더, 소금을 체 쳐주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "3b0079ec-d17d-45b9-b4dd-df113d9d0e6f",
            "parent": {
                "type": "page_id",
                "page_id": "7ca14f72-e5bf-4b9b-b008-164ed5b62070"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "1번에 비정제 원당을 넣고 섞다가 애플 소스를 넣고 섞어 주세요.",
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
                        "plain_text": "1번에 비정제 원당을 넣고 섞다가 애플 소스를 넣고 섞어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "a2f233a8-2822-476a-aaa2-cd6e17d4dd8d",
            "parent": {
                "type": "page_id",
                "page_id": "7ca14f72-e5bf-4b9b-b008-164ed5b62070"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "3번에 현미유를 넣어 주세요.",
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
                        "plain_text": "3번에 현미유를 넣어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "43a84cff-5484-47ef-aed2-1ae85260e8a0",
            "parent": {
                "type": "page_id",
                "page_id": "7ca14f72-e5bf-4b9b-b008-164ed5b62070"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "준비한 가루 재료에 4번을 가볍게 섞어 주세요.",
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
                        "plain_text": "준비한 가루 재료에 4번을 가볍게 섞어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "6989ff08-b308-4c5a-91bb-14f88f32b9ae",
            "parent": {
                "type": "page_id",
                "page_id": "7ca14f72-e5bf-4b9b-b008-164ed5b62070"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "냉동실에서 20분간 굳혀 주세요.",
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
                        "plain_text": "냉동실에서 20분간 굳혀 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "b0f08700-f09f-42b5-aa05-3d67e84897ea",
            "parent": {
                "type": "page_id",
                "page_id": "7ca14f72-e5bf-4b9b-b008-164ed5b62070"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "7.8cm 아이스크림 스쿱으로 반죽을 떠주세요.",
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
                        "plain_text": "7.8cm 아이스크림 스쿱으로 반죽을 떠주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "07051bb3-9f60-4a78-9ca5-4b004d7830e1",
            "parent": {
                "type": "page_id",
                "page_id": "7ca14f72-e5bf-4b9b-b008-164ed5b62070"
            },
            "created_time": "2023-09-09T09:07:00.000Z",
            "last_edited_time": "2023-09-09T09:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "170℃로 예열된 오븐에 20분 구워 주세요. 반죽이 묻어 나오면 5분 정도 더 구워주세요.",
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
                        "plain_text": "170℃로 예열된 오븐에 20분 구워 주세요. 반죽이 묻어 나오면 5분 정도 더 구워주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        }
    ],
    "next_cursor": null,
    "has_more": false,
    "type": "block",
    "block": {}
  },
  {
      "title": "비건 르뱅 쿠키",
      "object": "list",
      "results": [
          {
              "object": "block",
              "id": "480c8bdb-a0bd-4d43-ab1d-9b425ff9551e",
              "parent": {
                  "type": "page_id",
                  "page_id": "64f1cf8c-a469-4591-a206-0668eafb6bc8"
              },
              "created_time": "2023-09-09T09:17:00.000Z",
              "last_edited_time": "2023-09-09T09:17:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "image",
              "image": {
                  "caption": [],
                  "type": "external",
                  "external": {
                      "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/rebangCookie.jpg"
                  }
              }
          },
          {
              "object": "block",
              "id": "f1b62d16-0bfc-40cd-93f9-c7000d90d904",
              "parent": {
                  "type": "page_id",
                  "page_id": "64f1cf8c-a469-4591-a206-0668eafb6bc8"
              },
              "created_time": "2023-09-09T09:06:00.000Z",
              "last_edited_time": "2023-09-09T09:17:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "‘르뱅 쿠키’ 많이 들어보셨죠? ‘르뱅(Levain)'은 뉴욕 유명한 베이커리 이름이에요. 1995년 문을 연 곳으로, 초콜릿 칩이 박힌 호두 쿠키가 유명해요. 초콜릿 칩과 호두를 듬뿍 넣어 만든 꾸덕꾸덕한 쿠키예요. 아메리칸 스타일 쿠키 버전인 거죠.\n쌉싸름한 초콜릿, 고소한 호두가 들어간 겉은 바싹 속은 촉촉한 르뱅 쿠키와 커피 한잔하세요!",
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
                          "plain_text": "‘르뱅 쿠키’ 많이 들어보셨죠? ‘르뱅(Levain)'은 뉴욕 유명한 베이커리 이름이에요. 1995년 문을 연 곳으로, 초콜릿 칩이 박힌 호두 쿠키가 유명해요. 초콜릿 칩과 호두를 듬뿍 넣어 만든 꾸덕꾸덕한 쿠키예요. 아메리칸 스타일 쿠키 버전인 거죠.\n쌉싸름한 초콜릿, 고소한 호두가 들어간 겉은 바싹 속은 촉촉한 르뱅 쿠키와 커피 한잔하세요!",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "dafc75b2-3025-40b4-95f9-2971fb7afcbd",
              "parent": {
                  "type": "page_id",
                  "page_id": "64f1cf8c-a469-4591-a206-0668eafb6bc8"
              },
              "created_time": "2023-09-09T09:06:00.000Z",
              "last_edited_time": "2023-09-09T09:06:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "0cd60180-8238-4253-87b5-6b232633ab1f",
              "parent": {
                  "type": "page_id",
                  "page_id": "64f1cf8c-a469-4591-a206-0668eafb6bc8"
              },
              "created_time": "2023-09-09T09:06:00.000Z",
              "last_edited_time": "2023-09-09T09:06:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "총 분량 쿠키 9개",
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
                          "plain_text": "총 분량 쿠키 9개",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "424412ab-a809-4323-a7d9-d215f7201415",
              "parent": {
                  "type": "page_id",
                  "page_id": "64f1cf8c-a469-4591-a206-0668eafb6bc8"
              },
              "created_time": "2023-09-09T09:06:00.000Z",
              "last_edited_time": "2023-09-09T09:06:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "재료\n통밀가루 130g\n아몬드 가루 40g\n타피오카 전분 40g\n베이킹파우더 6g\n베이킹 소다 2g\n마스코바도 설탕 80g\n현미유 80g\n두유 20g\n애플 소스(무첨가) 40g\n바닐라 엑스트랙 4g\n레몬즙 2g\n소금 1g\n60% 다크 초콜릿60g\n피칸/호두 60g",
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
                          "plain_text": "재료\n통밀가루 130g\n아몬드 가루 40g\n타피오카 전분 40g\n베이킹파우더 6g\n베이킹 소다 2g\n마스코바도 설탕 80g\n현미유 80g\n두유 20g\n애플 소스(무첨가) 40g\n바닐라 엑스트랙 4g\n레몬즙 2g\n소금 1g\n60% 다크 초콜릿60g\n피칸/호두 60g",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "862f028f-cc86-4085-9c43-0c52c3b921e0",
              "parent": {
                  "type": "page_id",
                  "page_id": "64f1cf8c-a469-4591-a206-0668eafb6bc8"
              },
              "created_time": "2023-09-09T09:06:00.000Z",
              "last_edited_time": "2023-09-09T09:06:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "b24b27c7-8bdd-42c1-8361-6d2434dba771",
              "parent": {
                  "type": "page_id",
                  "page_id": "64f1cf8c-a469-4591-a206-0668eafb6bc8"
              },
              "created_time": "2023-09-09T09:06:00.000Z",
              "last_edited_time": "2023-09-09T09:06:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "레시피",
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
                          "plain_text": "레시피",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "985f2ee8-213f-46c3-8869-7818228a73a0",
              "parent": {
                  "type": "page_id",
                  "page_id": "64f1cf8c-a469-4591-a206-0668eafb6bc8"
              },
              "created_time": "2023-09-09T09:06:00.000Z",
              "last_edited_time": "2023-09-09T09:06:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "통밀가루, 아몬드 가루, 타피오카 전분, 베이킹파우더, 베이킹 소다, 소금을 미리 체 쳐주세요.",
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
                          "plain_text": "통밀가루, 아몬드 가루, 타피오카 전분, 베이킹파우더, 베이킹 소다, 소금을 미리 체 쳐주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "8cff123f-084a-459e-b9cd-afdfea41990a",
              "parent": {
                  "type": "page_id",
                  "page_id": "64f1cf8c-a469-4591-a206-0668eafb6bc8"
              },
              "created_time": "2023-09-09T09:06:00.000Z",
              "last_edited_time": "2023-09-09T09:06:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "현미유, 마스코바도 설탕을 볼에 넣고 거품기로 1분 정도 섞어 주세요.",
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
                          "plain_text": "현미유, 마스코바도 설탕을 볼에 넣고 거품기로 1분 정도 섞어 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "96198d5a-c53a-4824-9847-46d5290acb6d",
              "parent": {
                  "type": "page_id",
                  "page_id": "64f1cf8c-a469-4591-a206-0668eafb6bc8"
              },
              "created_time": "2023-09-09T09:06:00.000Z",
              "last_edited_time": "2023-09-09T09:06:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "애플 소스, 레몬즙, 바닐라 엑스트랙을 넣고 1분 정도 잘 섞어 주세요.견과류 (호두, 피칸 등)를 넣고 섞어 주세요.",
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
                          "plain_text": "애플 소스, 레몬즙, 바닐라 엑스트랙을 넣고 1분 정도 잘 섞어 주세요.견과류 (호두, 피칸 등)를 넣고 섞어 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "0b2e8c62-5c46-4f56-ad34-f8a1057c7e9a",
              "parent": {
                  "type": "page_id",
                  "page_id": "64f1cf8c-a469-4591-a206-0668eafb6bc8"
              },
              "created_time": "2023-09-09T09:06:00.000Z",
              "last_edited_time": "2023-09-09T09:06:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "견과류는 가루 재료를 넣기 전에 액체 재료에 넣어 주세요. 가루 재료를 넣고 견과류를 넣으면 가루가 치대져 끈기가 생겨서 바삭하지 않아요.1의 가루 재료를 넣고 주걱으로 섞은 후 날가루가 보이지 않으면 다크 초콜릿을 넣어 주세요.",
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
                          "plain_text": "견과류는 가루 재료를 넣기 전에 액체 재료에 넣어 주세요. 가루 재료를 넣고 견과류를 넣으면 가루가 치대져 끈기가 생겨서 바삭하지 않아요.1의 가루 재료를 넣고 주걱으로 섞은 후 날가루가 보이지 않으면 다크 초콜릿을 넣어 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "d1926bad-9490-4f11-b135-aca6fd7832a7",
              "parent": {
                  "type": "page_id",
                  "page_id": "64f1cf8c-a469-4591-a206-0668eafb6bc8"
              },
              "created_time": "2023-09-09T09:06:00.000Z",
              "last_edited_time": "2023-09-09T09:06:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "반죽을 냉장고에서 30분 휴지해 주세요.반죽은 차가운 느낌이 생길 때까지 보관해 주세요.",
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
                          "plain_text": "반죽을 냉장고에서 30분 휴지해 주세요.반죽은 차가운 느낌이 생길 때까지 보관해 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "483af8c6-f60b-44c6-be6d-c82a5a4d61ff",
              "parent": {
                  "type": "page_id",
                  "page_id": "64f1cf8c-a469-4591-a206-0668eafb6bc8"
              },
              "created_time": "2023-09-09T09:06:00.000Z",
              "last_edited_time": "2023-09-09T09:06:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "휴지한 반죽을 5cm 아이스크림 스쿱으로 떠서 오븐 팬에 올려 주세요.구워지면 반죽이 커지기 때문에 3cm 이상의 간격이 주세요.",
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
                          "plain_text": "휴지한 반죽을 5cm 아이스크림 스쿱으로 떠서 오븐 팬에 올려 주세요.구워지면 반죽이 커지기 때문에 3cm 이상의 간격이 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "de57c2e5-2340-4704-898d-3bea5c991402",
              "parent": {
                  "type": "page_id",
                  "page_id": "64f1cf8c-a469-4591-a206-0668eafb6bc8"
              },
              "created_time": "2023-09-09T09:06:00.000Z",
              "last_edited_time": "2023-09-09T09:06:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "180℃로 예열된 오븐에 10~15분 구워 주세요.",
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
                          "plain_text": "180℃로 예열된 오븐에 10~15분 구워 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "c14f5930-2367-43b9-b4a6-bb1ad8601903",
              "parent": {
                  "type": "page_id",
                  "page_id": "64f1cf8c-a469-4591-a206-0668eafb6bc8"
              },
              "created_time": "2023-09-09T09:06:00.000Z",
              "last_edited_time": "2023-09-09T09:06:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "높은 온도에서 적절하게 구워지도록 지정 온도로 몇십 분 전에 잘 예열해 주세요. 안 그러면 온도가 올라가는 과정에서 쿠키 반죽이 흐물흐물해져요. 지정된 온도에서 빠른 시간 안에 구워야 쿠키가 맛있어요.",
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
                          "plain_text": "높은 온도에서 적절하게 구워지도록 지정 온도로 몇십 분 전에 잘 예열해 주세요. 안 그러면 온도가 올라가는 과정에서 쿠키 반죽이 흐물흐물해져요. 지정된 온도에서 빠른 시간 안에 구워야 쿠키가 맛있어요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "96dcac76-02be-4fed-9975-64ef74c0ed30",
              "parent": {
                  "type": "page_id",
                  "page_id": "64f1cf8c-a469-4591-a206-0668eafb6bc8"
              },
              "created_time": "2023-09-09T09:06:00.000Z",
              "last_edited_time": "2023-09-09T09:06:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "구운 뒤 오븐 팬에서 5~10분 기다린 뒤 옮겨 주세요.",
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
                          "plain_text": "구운 뒤 오븐 팬에서 5~10분 기다린 뒤 옮겨 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "c94716b4-e88f-4d9b-be8b-2339032677b1",
              "parent": {
                  "type": "page_id",
                  "page_id": "64f1cf8c-a469-4591-a206-0668eafb6bc8"
              },
              "created_time": "2023-09-09T09:06:00.000Z",
              "last_edited_time": "2023-09-09T09:06:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "1613292a-b5f7-4444-b905-cd3495fea378",
              "parent": {
                  "type": "page_id",
                  "page_id": "64f1cf8c-a469-4591-a206-0668eafb6bc8"
              },
              "created_time": "2023-09-09T09:06:00.000Z",
              "last_edited_time": "2023-09-09T09:06:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "팁! 저는 계란 대체 재료로 애플 소스(무설탕)를 사용했어요. 애플 소스(무설탕)를 사용하면 오일 함량을 줄여 저지방 베이킹을 할 수 있어요. 또 보드라운 식감과 사과의 은은한 향과 천연 단맛이 고급스러운 쿠키를 만들어 줘요.저는 무가당 애플 소스를 사서 사용했어요. 하지만 사과가 많이 나는 계절에 한 번 만들어서 사용해 보세요.",
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
                          "plain_text": "팁! 저는 계란 대체 재료로 애플 소스(무설탕)를 사용했어요. 애플 소스(무설탕)를 사용하면 오일 함량을 줄여 저지방 베이킹을 할 수 있어요. 또 보드라운 식감과 사과의 은은한 향과 천연 단맛이 고급스러운 쿠키를 만들어 줘요.저는 무가당 애플 소스를 사서 사용했어요. 하지만 사과가 많이 나는 계절에 한 번 만들어서 사용해 보세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "62312ebd-6d27-42d3-88a2-7b66df4efc58",
              "parent": {
                  "type": "page_id",
                  "page_id": "64f1cf8c-a469-4591-a206-0668eafb6bc8"
              },
              "created_time": "2023-09-09T09:06:00.000Z",
              "last_edited_time": "2023-09-09T09:06:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "베이킹파우더와, 베이킹 소다는 소량 들어가서 체 치지 않고 넣어도 됩니다.\n입자가 큰 비정제 원당이 두유에 녹을 수 있도록 충분히 휘핑에 줍니다. 사각사각하는 소리가 줄어들면 비정제 원당이 잘  녹았다고 보시면 돼요.\n가루를 넣고 섞은 후에 초콜릿과 견과류를 넣어야 반죽에 초콜릿과 견과류가 잘 섞입니다.",
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
                          "plain_text": "베이킹파우더와, 베이킹 소다는 소량 들어가서 체 치지 않고 넣어도 됩니다.\n입자가 큰 비정제 원당이 두유에 녹을 수 있도록 충분히 휘핑에 줍니다. 사각사각하는 소리가 줄어들면 비정제 원당이 잘  녹았다고 보시면 돼요.\n가루를 넣고 섞은 후에 초콜릿과 견과류를 넣어야 반죽에 초콜릿과 견과류가 잘 섞입니다.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          }
      ],
      "next_cursor": null,
      "has_more": false,
      "type": "block",
      "block": {}
  },
  {
      "title": "라즈베리 화이트 초콜릿 쿠키",
      "object": "list",
      "results": [
          {
              "object": "block",
              "id": "c4d93f35-c084-4651-a61a-67a77566b8f0",
              "parent": {
                  "type": "page_id",
                  "page_id": "8ae5234a-627a-499e-b287-f1c372573e12"
              },
              "created_time": "2023-09-09T09:17:00.000Z",
              "last_edited_time": "2023-09-09T09:17:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "image",
              "image": {
                  "caption": [],
                  "type": "external",
                  "external": {
                      "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/rasberryWhiteChocolateCookie.jpg"
                  }
              }
          },
          {
              "object": "block",
              "id": "337fbbfd-847e-4dfd-9865-d1e525e65418",
              "parent": {
                  "type": "page_id",
                  "page_id": "8ae5234a-627a-499e-b287-f1c372573e12"
              },
              "created_time": "2023-09-09T09:05:00.000Z",
              "last_edited_time": "2023-09-09T09:17:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "라즈베리의 상큼함과 화이트초콜릿의 달콤한 맛이 서로 부족한 맛을 채워주는 누구나 좋아하는 쿠키입니다.**\n만들고 바로 먹기보단 하루 정도 숙성 후 먹으면 더 맛있고, 얼려 먹어도 맛있어요!**",
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
                          "plain_text": "라즈베리의 상큼함과 화이트초콜릿의 달콤한 맛이 서로 부족한 맛을 채워주는 누구나 좋아하는 쿠키입니다.**\n만들고 바로 먹기보단 하루 정도 숙성 후 먹으면 더 맛있고, 얼려 먹어도 맛있어요!**",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "05cc796f-4a77-409a-a3b5-cb812cfd76f6",
              "parent": {
                  "type": "page_id",
                  "page_id": "8ae5234a-627a-499e-b287-f1c372573e12"
              },
              "created_time": "2023-09-09T09:05:00.000Z",
              "last_edited_time": "2023-09-09T09:05:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "f6076c0c-efea-4cd1-b1c6-7f63b85a05e3",
              "parent": {
                  "type": "page_id",
                  "page_id": "8ae5234a-627a-499e-b287-f1c372573e12"
              },
              "created_time": "2023-09-09T09:05:00.000Z",
              "last_edited_time": "2023-09-09T09:05:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "총 분량 쿠키 8개",
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
                          "plain_text": "총 분량 쿠키 8개",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "0aa79ae3-d51a-43f1-b72f-828ed7bdb006",
              "parent": {
                  "type": "page_id",
                  "page_id": "8ae5234a-627a-499e-b287-f1c372573e12"
              },
              "created_time": "2023-09-09T09:05:00.000Z",
              "last_edited_time": "2023-09-09T09:05:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "재료\n통밀가루 130g\n헤이즐넛 가루 30g\n타피오카 전분 40g\n베이킹파우더 6g\n베이킹소다 2g\n비정제 원당 80g\n현미유 60g\n애플 소스(무첨가) 40g\n애플 사이다 비니거 2g\n소금 2g\n바닐라 엑스트랙 2g\n냉동 라즈베리 80g\n화이트초콜릿 50g",
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
                          "plain_text": "재료\n통밀가루 130g\n헤이즐넛 가루 30g\n타피오카 전분 40g\n베이킹파우더 6g\n베이킹소다 2g\n비정제 원당 80g\n현미유 60g\n애플 소스(무첨가) 40g\n애플 사이다 비니거 2g\n소금 2g\n바닐라 엑스트랙 2g\n냉동 라즈베리 80g\n화이트초콜릿 50g",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "0789a27a-1bdb-4de7-a56b-693e0ec009c9",
              "parent": {
                  "type": "page_id",
                  "page_id": "8ae5234a-627a-499e-b287-f1c372573e12"
              },
              "created_time": "2023-09-09T09:05:00.000Z",
              "last_edited_time": "2023-09-09T09:05:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "9518e5e0-290e-42d1-a372-8a8dd7ebe0c7",
              "parent": {
                  "type": "page_id",
                  "page_id": "8ae5234a-627a-499e-b287-f1c372573e12"
              },
              "created_time": "2023-09-09T09:05:00.000Z",
              "last_edited_time": "2023-09-09T09:05:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "레시피",
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
                          "plain_text": "레시피",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "573da4df-9222-4294-a41a-49ac1bc57978",
              "parent": {
                  "type": "page_id",
                  "page_id": "8ae5234a-627a-499e-b287-f1c372573e12"
              },
              "created_time": "2023-09-09T09:05:00.000Z",
              "last_edited_time": "2023-09-09T09:05:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "통밀가루, 헤이즐넛 가루, 타피오카 전분, 베이킹파우더, 베이킹소다, 소금을 미리 체 쳐주세요.",
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
                          "plain_text": "통밀가루, 헤이즐넛 가루, 타피오카 전분, 베이킹파우더, 베이킹소다, 소금을 미리 체 쳐주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "c570b511-82cc-40f6-b2af-926de05b8f2c",
              "parent": {
                  "type": "page_id",
                  "page_id": "8ae5234a-627a-499e-b287-f1c372573e12"
              },
              "created_time": "2023-09-09T09:05:00.000Z",
              "last_edited_time": "2023-09-09T09:05:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "현미유, 비정제 원당을 넣고 거품기로 1분 정도 섞어 주세요.",
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
                          "plain_text": "현미유, 비정제 원당을 넣고 거품기로 1분 정도 섞어 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "02cd4397-85ac-4179-8132-e74e2a328074",
              "parent": {
                  "type": "page_id",
                  "page_id": "8ae5234a-627a-499e-b287-f1c372573e12"
              },
              "created_time": "2023-09-09T09:05:00.000Z",
              "last_edited_time": "2023-09-09T09:05:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "2번에 애플 소스와 애플 사이다 비니거, 바닐라 엑스트랙을 넣고 1분 정도 잘 섞어 주세요.",
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
                          "plain_text": "2번에 애플 소스와 애플 사이다 비니거, 바닐라 엑스트랙을 넣고 1분 정도 잘 섞어 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "40b67e7a-b002-45f9-a14a-0406b4734c2a",
              "parent": {
                  "type": "page_id",
                  "page_id": "8ae5234a-627a-499e-b287-f1c372573e12"
              },
              "created_time": "2023-09-09T09:05:00.000Z",
              "last_edited_time": "2023-09-09T09:05:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "1번 가루 재료를 넣고 주걱으로 섞어 주세요.날가루가 보이지 않을 때쯤 냉동 라즈베리와 화이트초콜릿을 넣고 섞어 주세요.냉동 라즈베리를 넣으면, 라즈베리 향과 새콤한 맛이 더 나요. (라즈베리는 취향껏 조절 가능)",
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
                          "plain_text": "1번 가루 재료를 넣고 주걱으로 섞어 주세요.날가루가 보이지 않을 때쯤 냉동 라즈베리와 화이트초콜릿을 넣고 섞어 주세요.냉동 라즈베리를 넣으면, 라즈베리 향과 새콤한 맛이 더 나요. (라즈베리는 취향껏 조절 가능)",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "5ab220f6-b429-4929-b4ac-767f72c9a1f0",
              "parent": {
                  "type": "page_id",
                  "page_id": "8ae5234a-627a-499e-b287-f1c372573e12"
              },
              "created_time": "2023-09-09T09:05:00.000Z",
              "last_edited_time": "2023-09-09T09:05:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "냉장실에서 30분 정도 휴지한 반죽을 아이스크림 스쿱으로 떠 주세요.",
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
                          "plain_text": "냉장실에서 30분 정도 휴지한 반죽을 아이스크림 스쿱으로 떠 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "4f114968-7ece-4c5b-952f-e58b81de5514",
              "parent": {
                  "type": "page_id",
                  "page_id": "8ae5234a-627a-499e-b287-f1c372573e12"
              },
              "created_time": "2023-09-09T09:05:00.000Z",
              "last_edited_time": "2023-09-09T09:05:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "예열된 오븐 180℃에서 13~16분 구워 주세요.오븐에서 반죽이 커지기 때문에 3~5cm 이상의 간격이 필요해요.",
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
                          "plain_text": "예열된 오븐 180℃에서 13~16분 구워 주세요.오븐에서 반죽이 커지기 때문에 3~5cm 이상의 간격이 필요해요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "6635af75-0924-4b5f-91ff-b0c8000217a5",
              "parent": {
                  "type": "page_id",
                  "page_id": "8ae5234a-627a-499e-b287-f1c372573e12"
              },
              "created_time": "2023-09-09T09:05:00.000Z",
              "last_edited_time": "2023-09-09T09:05:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "막 오븐에서 나온 쿠키는 힘이 없어서 흐물흐물해요.5~10분 후 조심히 붙은 쿠키를 떼어 준 후 식힌 망에서 충분히 식혀 주세요.",
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
                          "plain_text": "막 오븐에서 나온 쿠키는 힘이 없어서 흐물흐물해요.5~10분 후 조심히 붙은 쿠키를 떼어 준 후 식힌 망에서 충분히 식혀 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          }
      ],
      "next_cursor": null,
      "has_more": false,
      "type": "block",
      "block": {}
  },
  {
    "title": "비건 피넛 버터 쿠키",
    "object": "list",
    "results": [
        {
            "object": "block",
            "id": "73444f0f-ed71-4c59-8271-490fafb1ff2f",
            "parent": {
                "type": "page_id",
                "page_id": "10283a93-2a7c-4d20-a18d-37623b75f359"
            },
            "created_time": "2023-09-09T09:16:00.000Z",
            "last_edited_time": "2023-09-09T09:16:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "image",
            "image": {
                "caption": [],
                "type": "external",
                "external": {
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/peanutCookie.jpg"
                }
            }
        },
        {
            "object": "block",
            "id": "8252edee-5114-4b82-9fa9-9e4d7f784541",
            "parent": {
                "type": "page_id",
                "page_id": "10283a93-2a7c-4d20-a18d-37623b75f359"
            },
            "created_time": "2023-09-09T09:04:00.000Z",
            "last_edited_time": "2023-09-09T09:16:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "묵직하면서도 땅콩버터의 풍미를 한가득 느낄 수 있는 비건 땅콩버터 쿠키로!\n좀 더 맛있는 식감을 살리기 위해 토핑으로 땅콩 가루를 올려도 좋고, 쿠키에 라즈베리 콩포트를 올려 상큼함을 더해 볼 수 있어요.\n베이킹 초보자도 손쉽게 만들 수 있는 레시피인 만큼 땅콩버터가 있다면 꼭 한번 만들어 보셨으면 좋겠습니다.",
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
                        "plain_text": "묵직하면서도 땅콩버터의 풍미를 한가득 느낄 수 있는 비건 땅콩버터 쿠키로!\n좀 더 맛있는 식감을 살리기 위해 토핑으로 땅콩 가루를 올려도 좋고, 쿠키에 라즈베리 콩포트를 올려 상큼함을 더해 볼 수 있어요.\n베이킹 초보자도 손쉽게 만들 수 있는 레시피인 만큼 땅콩버터가 있다면 꼭 한번 만들어 보셨으면 좋겠습니다.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "78c8377c-796b-4e31-a609-0eef77b2472c",
            "parent": {
                "type": "page_id",
                "page_id": "10283a93-2a7c-4d20-a18d-37623b75f359"
            },
            "created_time": "2023-09-09T09:04:00.000Z",
            "last_edited_time": "2023-09-09T09:04:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "피넛 버터(무첨가)는 혈관을 막히게 하는 포화지방산이 아닌 건강에 이로운 불포화 지방산이 들어 있어요.\n식이섬유는 물론 다양한 비타민, 미네랄 등과 같은 몸에 필요한 영양분을 섭취할 수도 있고요.\n비거니즘은 축산업을 하기 위해 만드는 목초지를 개발할 때 배출되는 이산화탄소의 양을 감소시킬 수 있어요. 지구 온난화 속도를 더디게 할 수 있어요.\n비건 베이킹을 통한 비건을 실천해서 지구 환경 보존에 동참해 보시면 어떨까요?",
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
                        "plain_text": "피넛 버터(무첨가)는 혈관을 막히게 하는 포화지방산이 아닌 건강에 이로운 불포화 지방산이 들어 있어요.\n식이섬유는 물론 다양한 비타민, 미네랄 등과 같은 몸에 필요한 영양분을 섭취할 수도 있고요.\n비거니즘은 축산업을 하기 위해 만드는 목초지를 개발할 때 배출되는 이산화탄소의 양을 감소시킬 수 있어요. 지구 온난화 속도를 더디게 할 수 있어요.\n비건 베이킹을 통한 비건을 실천해서 지구 환경 보존에 동참해 보시면 어떨까요?",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "8ef51465-5d82-4203-94c6-e34e6a378e3a",
            "parent": {
                "type": "page_id",
                "page_id": "10283a93-2a7c-4d20-a18d-37623b75f359"
            },
            "created_time": "2023-09-09T09:04:00.000Z",
            "last_edited_time": "2023-09-09T09:04:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "fb81dc24-e7ed-4978-b4f8-e4461ca4e79d",
            "parent": {
                "type": "page_id",
                "page_id": "10283a93-2a7c-4d20-a18d-37623b75f359"
            },
            "created_time": "2023-09-09T09:04:00.000Z",
            "last_edited_time": "2023-09-09T09:04:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "총 분량 쿠키 7개",
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
                        "plain_text": "총 분량 쿠키 7개",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "574cb314-0dd8-4133-843c-824eed114119",
            "parent": {
                "type": "page_id",
                "page_id": "10283a93-2a7c-4d20-a18d-37623b75f359"
            },
            "created_time": "2023-09-09T09:04:00.000Z",
            "last_edited_time": "2023-09-09T09:04:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "재료\n통밀가루 150g\n베이킹파우더 6g\n베이킹 소다 2g\n비정제 원당 60g\n현미유 30g\n두유 45g\n애플 소스(무설탕) 25g\n땅콩버터(무첨가) 50g\n바닐라 엑스트랙 4g\n소금 1g",
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
                        "plain_text": "재료\n통밀가루 150g\n베이킹파우더 6g\n베이킹 소다 2g\n비정제 원당 60g\n현미유 30g\n두유 45g\n애플 소스(무설탕) 25g\n땅콩버터(무첨가) 50g\n바닐라 엑스트랙 4g\n소금 1g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "61acd49b-b364-451b-be9d-ca9a80e17ae6",
            "parent": {
                "type": "page_id",
                "page_id": "10283a93-2a7c-4d20-a18d-37623b75f359"
            },
            "created_time": "2023-09-09T09:05:00.000Z",
            "last_edited_time": "2023-09-09T09:05:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "b24c9d00-cf35-4c0f-8e8c-6720624773e2",
            "parent": {
                "type": "page_id",
                "page_id": "10283a93-2a7c-4d20-a18d-37623b75f359"
            },
            "created_time": "2023-09-09T09:05:00.000Z",
            "last_edited_time": "2023-09-09T09:05:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "레시피",
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
                        "plain_text": "레시피",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "32e47604-4444-4e84-b16f-b7ddc56cf39c",
            "parent": {
                "type": "page_id",
                "page_id": "10283a93-2a7c-4d20-a18d-37623b75f359"
            },
            "created_time": "2023-09-09T09:05:00.000Z",
            "last_edited_time": "2023-09-09T09:05:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "통밀가루, 베이킹파우더, 베이킹 소다, 소금을 미리 체 쳐주세요.",
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
                        "plain_text": "통밀가루, 베이킹파우더, 베이킹 소다, 소금을 미리 체 쳐주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "6e414f3f-4e15-453c-9cb8-a57b18e92ee7",
            "parent": {
                "type": "page_id",
                "page_id": "10283a93-2a7c-4d20-a18d-37623b75f359"
            },
            "created_time": "2023-09-09T09:05:00.000Z",
            "last_edited_time": "2023-09-09T09:05:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "현미유, 마스코바도 설탕을 볼에 넣고 거품기로 1분 정도 섞어 주세요.",
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
                        "plain_text": "현미유, 마스코바도 설탕을 볼에 넣고 거품기로 1분 정도 섞어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "5f233c85-45c4-486c-b00c-d18f72ffa21d",
            "parent": {
                "type": "page_id",
                "page_id": "10283a93-2a7c-4d20-a18d-37623b75f359"
            },
            "created_time": "2023-09-09T09:05:00.000Z",
            "last_edited_time": "2023-09-09T09:05:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "땅콩 버터(무첨가), 애플 소스(무설탕), 바닐라 엑스트랙을 넣고 1분 정도 잘 섞어 주세요.",
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
                        "plain_text": "땅콩 버터(무첨가), 애플 소스(무설탕), 바닐라 엑스트랙을 넣고 1분 정도 잘 섞어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "7370f771-0d4a-4820-9bf3-7ff12dc655ba",
            "parent": {
                "type": "page_id",
                "page_id": "10283a93-2a7c-4d20-a18d-37623b75f359"
            },
            "created_time": "2023-09-09T09:05:00.000Z",
            "last_edited_time": "2023-09-09T09:05:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "1의 가루 재료를 넣고 주걱으로 섞은 후 날가루가 보이지 않을 때까지만 섞어 주세요.너무 오래 섞으면 가루가 치대져 끈기가 생겨서 바삭하지 않아요.",
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
                        "plain_text": "1의 가루 재료를 넣고 주걱으로 섞은 후 날가루가 보이지 않을 때까지만 섞어 주세요.너무 오래 섞으면 가루가 치대져 끈기가 생겨서 바삭하지 않아요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "025ffb3b-c4d1-41d4-b0e5-dcc0c811688c",
            "parent": {
                "type": "page_id",
                "page_id": "10283a93-2a7c-4d20-a18d-37623b75f359"
            },
            "created_time": "2023-09-09T09:05:00.000Z",
            "last_edited_time": "2023-09-09T09:05:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "반죽을 비닐 팩에 넣어 냉장고에서 30분 휴지해 주세요.반죽은 차가운 느낌이 생길 때까지 보관해 주세요.",
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
                        "plain_text": "반죽을 비닐 팩에 넣어 냉장고에서 30분 휴지해 주세요.반죽은 차가운 느낌이 생길 때까지 보관해 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "9168b88f-f47b-4490-94a9-8131bc4a7bdb",
            "parent": {
                "type": "page_id",
                "page_id": "10283a93-2a7c-4d20-a18d-37623b75f359"
            },
            "created_time": "2023-09-09T09:05:00.000Z",
            "last_edited_time": "2023-09-09T09:05:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "휴지한 반죽을 아이스크림 스쿱으로 떠 주세요.오븐에서 반죽이 커지기 때문에 3cm 이상의 간격이 주세요.",
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
                        "plain_text": "휴지한 반죽을 아이스크림 스쿱으로 떠 주세요.오븐에서 반죽이 커지기 때문에 3cm 이상의 간격이 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "f19c390a-af81-4eaf-afd2-37c745ed3b68",
            "parent": {
                "type": "page_id",
                "page_id": "10283a93-2a7c-4d20-a18d-37623b75f359"
            },
            "created_time": "2023-09-09T09:05:00.000Z",
            "last_edited_time": "2023-09-09T09:05:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "180℃로 예열된 오븐에 10~15분 구워 주세요.\n높은 온도에서 적절하게 구워지도록 지정 온도로 몇십 분 전에 잘 예열해 주세요. 안 그러면 온도가 올라가는 과정에서 쿠키 반죽이 흐물흐물해져요. 지정된 온도에서 빠른 시간 안에 구워야 쿠키가 맛있어요.",
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
                        "plain_text": "180℃로 예열된 오븐에 10~15분 구워 주세요.\n높은 온도에서 적절하게 구워지도록 지정 온도로 몇십 분 전에 잘 예열해 주세요. 안 그러면 온도가 올라가는 과정에서 쿠키 반죽이 흐물흐물해져요. 지정된 온도에서 빠른 시간 안에 구워야 쿠키가 맛있어요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "f0705ec1-8015-44a3-ac08-4805c572ebcb",
            "parent": {
                "type": "page_id",
                "page_id": "10283a93-2a7c-4d20-a18d-37623b75f359"
            },
            "created_time": "2023-09-09T09:05:00.000Z",
            "last_edited_time": "2023-09-09T09:05:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "구운 뒤 오븐 팬에서 5~10분 기다린 뒤 옮겨 주세요.",
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
                        "plain_text": "구운 뒤 오븐 팬에서 5~10분 기다린 뒤 옮겨 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        }
    ],
    "next_cursor": null,
    "has_more": false,
    "type": "block",
    "block": {}
  },
  {
    "title": "크랙 초코 쿠키",
    "object": "list",
    "results": [
        {
            "object": "block",
            "id": "51576000-b498-41cc-8764-7b3985c13caf",
            "parent": {
                "type": "page_id",
                "page_id": "7a4ee776-9f90-432c-94ae-66ab7d45ea52"
            },
            "created_time": "2023-09-09T09:16:00.000Z",
            "last_edited_time": "2023-09-09T09:16:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "image",
            "image": {
                "caption": [],
                "type": "external",
                "external": {
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/chocoCrackCookie.jpg"
                }
            }
        },
        {
            "object": "block",
            "id": "c4e4cd30-1c60-4fbd-96c7-1036e03eb7b9",
            "parent": {
                "type": "page_id",
                "page_id": "7a4ee776-9f90-432c-94ae-66ab7d45ea52"
            },
            "created_time": "2023-09-09T09:04:00.000Z",
            "last_edited_time": "2023-09-09T09:16:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "비건 초코 크랙 쿠키는 겉은 바싹하고 속은 부드러워요.\n오븐에서 나오는 순간 생기는 크랙을 보면 쿠키 굽는 재미도 느낄 수 있어요.\n초콜릿의 진한 맛을 그대로 느낄 수 있어 커피나 녹차  등 쌉싸름한 차와 함께 하기 좋아요.",
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
                        "plain_text": "비건 초코 크랙 쿠키는 겉은 바싹하고 속은 부드러워요.\n오븐에서 나오는 순간 생기는 크랙을 보면 쿠키 굽는 재미도 느낄 수 있어요.\n초콜릿의 진한 맛을 그대로 느낄 수 있어 커피나 녹차  등 쌉싸름한 차와 함께 하기 좋아요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "37a87ce8-935e-4e0e-9c95-b7c194d4b9bd",
            "parent": {
                "type": "page_id",
                "page_id": "7a4ee776-9f90-432c-94ae-66ab7d45ea52"
            },
            "created_time": "2023-09-09T09:04:00.000Z",
            "last_edited_time": "2023-09-09T09:04:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "69ad526c-07e9-43e6-958a-da7c173c1a0c",
            "parent": {
                "type": "page_id",
                "page_id": "7a4ee776-9f90-432c-94ae-66ab7d45ea52"
            },
            "created_time": "2023-09-09T09:04:00.000Z",
            "last_edited_time": "2023-09-09T09:04:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "총 분량 쿠키 4개",
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
                        "plain_text": "총 분량 쿠키 4개",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "8f8ec10b-4085-41d6-afb2-bc29ab6acc1a",
            "parent": {
                "type": "page_id",
                "page_id": "7a4ee776-9f90-432c-94ae-66ab7d45ea52"
            },
            "created_time": "2023-09-09T09:04:00.000Z",
            "last_edited_time": "2023-09-09T09:04:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "재료\n통밀가루 52g\n아몬드 가루 20g\n타피오카 전분 8g\n베이킹 소다 3g\n두유 30g\n메이플 시럽 30g\n레몬즙 3g\n현미유 10g\n마스코바도 설탕 18g\n칼리바우트 다크커버춰 80g\n소금 1g",
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
                        "plain_text": "재료\n통밀가루 52g\n아몬드 가루 20g\n타피오카 전분 8g\n베이킹 소다 3g\n두유 30g\n메이플 시럽 30g\n레몬즙 3g\n현미유 10g\n마스코바도 설탕 18g\n칼리바우트 다크커버춰 80g\n소금 1g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "d66b1c0f-d5cd-45b2-935e-1c7c3e2f3dbf",
            "parent": {
                "type": "page_id",
                "page_id": "7a4ee776-9f90-432c-94ae-66ab7d45ea52"
            },
            "created_time": "2023-09-09T09:04:00.000Z",
            "last_edited_time": "2023-09-09T09:04:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "9047dd37-9bdb-412f-b76f-34681b06bf39",
            "parent": {
                "type": "page_id",
                "page_id": "7a4ee776-9f90-432c-94ae-66ab7d45ea52"
            },
            "created_time": "2023-09-09T09:04:00.000Z",
            "last_edited_time": "2023-09-09T09:04:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "레시피",
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
                        "plain_text": "레시피",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "0d025db6-063c-44fd-b1bd-48fbe424f6c9",
            "parent": {
                "type": "page_id",
                "page_id": "7a4ee776-9f90-432c-94ae-66ab7d45ea52"
            },
            "created_time": "2023-09-09T09:04:00.000Z",
            "last_edited_time": "2023-09-09T09:04:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "통밀가루, 아몬드 가루, 타피오카 전분, 베이킹 소다, 소금을 미리 체 쳐주세요.",
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
                        "plain_text": "통밀가루, 아몬드 가루, 타피오카 전분, 베이킹 소다, 소금을 미리 체 쳐주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "49f2712d-0944-448a-8890-5e2988464e8d",
            "parent": {
                "type": "page_id",
                "page_id": "7a4ee776-9f90-432c-94ae-66ab7d45ea52"
            },
            "created_time": "2023-09-09T09:04:00.000Z",
            "last_edited_time": "2023-09-09T09:04:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "칼리바우트 다크커버춰, 두유, 현미유, 메이플 시럽을 넣고 중탕으로 녹여 주세요.\n중탕 후 온도를 미지근할 정도까지 식혀야 해요. 뜨거울 때 설탕을 넣으면, 크랙이 생기지 않아요.",
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
                        "plain_text": "칼리바우트 다크커버춰, 두유, 현미유, 메이플 시럽을 넣고 중탕으로 녹여 주세요.\n중탕 후 온도를 미지근할 정도까지 식혀야 해요. 뜨거울 때 설탕을 넣으면, 크랙이 생기지 않아요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "5af6a073-7015-434b-9b26-f613dcb74cc0",
            "parent": {
                "type": "page_id",
                "page_id": "7a4ee776-9f90-432c-94ae-66ab7d45ea52"
            },
            "created_time": "2023-09-09T09:04:00.000Z",
            "last_edited_time": "2023-09-09T09:04:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "2번 재료에 마스코바도 설탕, 소금, 레몬즙을 넣어 섞어 주세요.",
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
                        "plain_text": "2번 재료에 마스코바도 설탕, 소금, 레몬즙을 넣어 섞어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "42cc5c1d-81fc-4745-b94c-b482f21ce211",
            "parent": {
                "type": "page_id",
                "page_id": "7a4ee776-9f90-432c-94ae-66ab7d45ea52"
            },
            "created_time": "2023-09-09T09:04:00.000Z",
            "last_edited_time": "2023-09-09T09:04:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "1번 가루 재료를 넣고 볼을 돌려가며 날가루가 보이지 않을 때 3번을 넣고 섞어 주세요.",
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
                        "plain_text": "1번 가루 재료를 넣고 볼을 돌려가며 날가루가 보이지 않을 때 3번을 넣고 섞어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "4de0aa54-14a6-4776-a5b8-d561c4ac121a",
            "parent": {
                "type": "page_id",
                "page_id": "7a4ee776-9f90-432c-94ae-66ab7d45ea52"
            },
            "created_time": "2023-09-09T09:04:00.000Z",
            "last_edited_time": "2023-09-09T09:04:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "완성한 반죽을 냉장고에서 30분 정도 굳혀 주세요.냉장 휴지는 30분을 넘지 않게 해주세요.\n반죽을 만졌을 때 약간의 찬 기운이 있는 정도, 단단함이 있어야 해요. 너무 따뜻하면 반죽이 퍼지고, 너무 차가우면 반죽이 옆으로 퍼지지 않아요.",
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
                        "plain_text": "완성한 반죽을 냉장고에서 30분 정도 굳혀 주세요.냉장 휴지는 30분을 넘지 않게 해주세요.\n반죽을 만졌을 때 약간의 찬 기운이 있는 정도, 단단함이 있어야 해요. 너무 따뜻하면 반죽이 퍼지고, 너무 차가우면 반죽이 옆으로 퍼지지 않아요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "a405211f-1393-4947-8278-3b214c01aa11",
            "parent": {
                "type": "page_id",
                "page_id": "7a4ee776-9f90-432c-94ae-66ab7d45ea52"
            },
            "created_time": "2023-09-09T09:04:00.000Z",
            "last_edited_time": "2023-09-09T09:04:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "휴지한 반죽을 아이스크림 스쿱으로 떠서 유산지를 깐 오븐 팬 위에 올려주세요.구우면 반죽이 커지기 때문에 3cm 이상의 간격이 주세요.\n180℃로 예열된 오븐에 쿠키를 넣고, 10분 구워 주세요. 높은 온도에서 구울수록 크랙이 잘 생겨요.",
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
                        "plain_text": "휴지한 반죽을 아이스크림 스쿱으로 떠서 유산지를 깐 오븐 팬 위에 올려주세요.구우면 반죽이 커지기 때문에 3cm 이상의 간격이 주세요.\n180℃로 예열된 오븐에 쿠키를 넣고, 10분 구워 주세요. 높은 온도에서 구울수록 크랙이 잘 생겨요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "fac00afc-85df-41af-89ea-0fdd2dd800b0",
            "parent": {
                "type": "page_id",
                "page_id": "7a4ee776-9f90-432c-94ae-66ab7d45ea52"
            },
            "created_time": "2023-09-09T09:04:00.000Z",
            "last_edited_time": "2023-09-09T09:04:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "오븐에 '컨벤션' 기능이 있다면 사용해 주세요. 윗부분이 열풍으로 건조되면 더 잘 깨집니다.",
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
                        "plain_text": "오븐에 '컨벤션' 기능이 있다면 사용해 주세요. 윗부분이 열풍으로 건조되면 더 잘 깨집니다.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "e402d6e2-cfc1-4ea3-aee1-6cdd130ba3d3",
            "parent": {
                "type": "page_id",
                "page_id": "7a4ee776-9f90-432c-94ae-66ab7d45ea52"
            },
            "created_time": "2023-09-09T09:04:00.000Z",
            "last_edited_time": "2023-09-09T09:04:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "막 오븐에서 나온 쿠키는 힘이 없어서 흐물흐물해요.5~10분 후 조심히 붙은 쿠키를 떼어 준 후 식힌 망에서 충분히 식혀 주세요.",
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
                        "plain_text": "막 오븐에서 나온 쿠키는 힘이 없어서 흐물흐물해요.5~10분 후 조심히 붙은 쿠키를 떼어 준 후 식힌 망에서 충분히 식혀 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "4fdcc38d-aab7-460d-b649-38cdc20ae7bb",
            "parent": {
                "type": "page_id",
                "page_id": "7a4ee776-9f90-432c-94ae-66ab7d45ea52"
            },
            "created_time": "2023-09-09T09:04:00.000Z",
            "last_edited_time": "2023-09-09T09:04:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        }
    ],
    "next_cursor": null,
    "has_more": false,
    "type": "block",
    "block": {}
  },
  {
    "title": "비건 라즈베리 콩포트 초콜릿 쿠키",
    "object": "list",
    "results": [
        {
            "object": "block",
            "id": "470ee161-6fde-480c-97b3-1b014cc9ffc1",
            "parent": {
                "type": "page_id",
                "page_id": "1cca7ba2-7acd-4cc7-853d-4e71a90732a6"
            },
            "created_time": "2023-09-09T09:15:00.000Z",
            "last_edited_time": "2023-09-09T09:15:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "image",
            "image": {
                "caption": [],
                "type": "external",
                "external": {
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/congpoteChocolateCookie.jpg"
                }
            }
        },
        {
            "object": "block",
            "id": "f987a6b0-a5e2-4171-b5a0-8f7aafd9748f",
            "parent": {
                "type": "page_id",
                "page_id": "1cca7ba2-7acd-4cc7-853d-4e71a90732a6"
            },
            "created_time": "2023-09-09T09:03:00.000Z",
            "last_edited_time": "2023-09-09T09:15:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "진한 초콜릿 베이스와 상큼한 라즈베리 콩포트 조화가 좋은 쿠키예요.\n홈메이드 비건 라즈베리 콩포트 초콜릿 쿠키 만들어 보세요.",
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
                        "plain_text": "진한 초콜릿 베이스와 상큼한 라즈베리 콩포트 조화가 좋은 쿠키예요.\n홈메이드 비건 라즈베리 콩포트 초콜릿 쿠키 만들어 보세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "881df6ce-e9ea-46db-aa0a-bc8471278f01",
            "parent": {
                "type": "page_id",
                "page_id": "1cca7ba2-7acd-4cc7-853d-4e71a90732a6"
            },
            "created_time": "2023-09-09T09:03:00.000Z",
            "last_edited_time": "2023-09-09T09:03:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "344ab838-4e96-4f06-8225-223432ba7b26",
            "parent": {
                "type": "page_id",
                "page_id": "1cca7ba2-7acd-4cc7-853d-4e71a90732a6"
            },
            "created_time": "2023-09-09T09:03:00.000Z",
            "last_edited_time": "2023-09-09T09:03:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "총 분량 쿠키 8개",
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
                        "plain_text": "총 분량 쿠키 8개",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "730ee35f-6bd7-4281-8176-48c59a3edf22",
            "parent": {
                "type": "page_id",
                "page_id": "1cca7ba2-7acd-4cc7-853d-4e71a90732a6"
            },
            "created_time": "2023-09-09T09:03:00.000Z",
            "last_edited_time": "2023-09-09T09:03:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "재료\n통밀가루 100g\n아몬드 가루 60g\n타피오카 전분 30g\n베이킹파우더 6g\n베이킹 소다 2g\n비정제 원당 80g\n현미유 70g\n애플 소스(무설탕) 40g\n애플 사이다 비니거 4g\n두유 20g\n소금 2g\n코코아 파우더 25g\n라즈베리 콩포트",
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
                        "plain_text": "재료\n통밀가루 100g\n아몬드 가루 60g\n타피오카 전분 30g\n베이킹파우더 6g\n베이킹 소다 2g\n비정제 원당 80g\n현미유 70g\n애플 소스(무설탕) 40g\n애플 사이다 비니거 4g\n두유 20g\n소금 2g\n코코아 파우더 25g\n라즈베리 콩포트",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "bd587bd4-6a00-45fe-9e4a-59941b8b5b0f",
            "parent": {
                "type": "page_id",
                "page_id": "1cca7ba2-7acd-4cc7-853d-4e71a90732a6"
            },
            "created_time": "2023-09-09T09:03:00.000Z",
            "last_edited_time": "2023-09-09T09:03:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "89a003d0-8bb7-4319-b294-e3856388f5c2",
            "parent": {
                "type": "page_id",
                "page_id": "1cca7ba2-7acd-4cc7-853d-4e71a90732a6"
            },
            "created_time": "2023-09-09T09:03:00.000Z",
            "last_edited_time": "2023-09-09T09:03:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "레시피",
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
                        "plain_text": "레시피",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "c81ad1e1-76bf-4f28-aba4-9fd8f9efddd6",
            "parent": {
                "type": "page_id",
                "page_id": "1cca7ba2-7acd-4cc7-853d-4e71a90732a6"
            },
            "created_time": "2023-09-09T09:03:00.000Z",
            "last_edited_time": "2023-09-09T09:03:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "두유와 애플 사이다 비니거를 볼에 넣고 20분 정도 놔두세요. 비건 버터밀크를 사용해서 달걀처럼 사용해요.",
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
                        "plain_text": "두유와 애플 사이다 비니거를 볼에 넣고 20분 정도 놔두세요. 비건 버터밀크를 사용해서 달걀처럼 사용해요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "8303860c-e82e-4c2d-a78a-2c48027d25d2",
            "parent": {
                "type": "page_id",
                "page_id": "1cca7ba2-7acd-4cc7-853d-4e71a90732a6"
            },
            "created_time": "2023-09-09T09:03:00.000Z",
            "last_edited_time": "2023-09-09T09:03:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "통밀가루, 아몬드 가루, 타피오카 전분, 코코아 파우더, 베이킹파우더, 베이킹 소다, 소금을 넣고 미리 체 쳐주세요.",
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
                        "plain_text": "통밀가루, 아몬드 가루, 타피오카 전분, 코코아 파우더, 베이킹파우더, 베이킹 소다, 소금을 넣고 미리 체 쳐주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "374efae8-8a22-498d-9ddf-e0038ff5c58e",
            "parent": {
                "type": "page_id",
                "page_id": "1cca7ba2-7acd-4cc7-853d-4e71a90732a6"
            },
            "created_time": "2023-09-09T09:03:00.000Z",
            "last_edited_time": "2023-09-09T09:03:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "비정제 원당, 현미유를 넣고 거품기로 1분 정도 섞은 뒤 애플 소스(무설탕)를 넣고 1분 정도 잘 섞어 주세요.",
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
                        "plain_text": "비정제 원당, 현미유를 넣고 거품기로 1분 정도 섞은 뒤 애플 소스(무설탕)를 넣고 1분 정도 잘 섞어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "7ccb216e-2b1b-4e77-bb6d-64af0c2741ba",
            "parent": {
                "type": "page_id",
                "page_id": "1cca7ba2-7acd-4cc7-853d-4e71a90732a6"
            },
            "created_time": "2023-09-09T09:03:00.000Z",
            "last_edited_time": "2023-09-09T09:03:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "액체 재료와 가루 재료를 넣고 날가루가 보이지 않을 때까지 섞어 주세요.",
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
                        "plain_text": "액체 재료와 가루 재료를 넣고 날가루가 보이지 않을 때까지 섞어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "b3535b90-7464-4264-bd5f-9ff14a8a6dd8",
            "parent": {
                "type": "page_id",
                "page_id": "1cca7ba2-7acd-4cc7-853d-4e71a90732a6"
            },
            "created_time": "2023-09-09T09:03:00.000Z",
            "last_edited_time": "2023-09-09T09:03:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "완성한 반죽을 냉장고에서 30분 정도 굳혀 주세요.휴지한 반죽을 5cm 아이스크림 스쿱으로 떠서 팬닝해 주세요.구우면 반죽이 커지기 때문에 3cm 이상의 간격이 주세요.",
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
                        "plain_text": "완성한 반죽을 냉장고에서 30분 정도 굳혀 주세요.휴지한 반죽을 5cm 아이스크림 스쿱으로 떠서 팬닝해 주세요.구우면 반죽이 커지기 때문에 3cm 이상의 간격이 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "0666ee3a-1693-47c4-9796-a6a31291683b",
            "parent": {
                "type": "page_id",
                "page_id": "1cca7ba2-7acd-4cc7-853d-4e71a90732a6"
            },
            "created_time": "2023-09-09T09:03:00.000Z",
            "last_edited_time": "2023-09-09T09:03:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "180℃로 예열된 오븐에 쿠키를 넣고, 180℃에서 15분 구워 주세요.",
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
                        "plain_text": "180℃로 예열된 오븐에 쿠키를 넣고, 180℃에서 15분 구워 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "b54fd665-34c0-43be-991a-d467888cc764",
            "parent": {
                "type": "page_id",
                "page_id": "1cca7ba2-7acd-4cc7-853d-4e71a90732a6"
            },
            "created_time": "2023-09-09T09:03:00.000Z",
            "last_edited_time": "2023-09-09T09:03:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "완성한 쿠키 위에 라즈베리 콩포트를 올려 주세요.",
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
                        "plain_text": "완성한 쿠키 위에 라즈베리 콩포트를 올려 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "05eda811-7199-453c-a241-bbb76bbe63a7",
            "parent": {
                "type": "page_id",
                "page_id": "1cca7ba2-7acd-4cc7-853d-4e71a90732a6"
            },
            "created_time": "2023-09-09T09:03:00.000Z",
            "last_edited_time": "2023-09-09T09:03:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "막 오븐에서 나온 쿠키는 힘이 없어서 흐물흐물해요.5~10분 후 조심히 붙은 쿠키를 떼어 준 후 식힌 망에서 충분히 식혀 주세요.완성한 쿠키 위에 라즈베리 콩포트를 올려 주세요.",
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
                        "plain_text": "막 오븐에서 나온 쿠키는 힘이 없어서 흐물흐물해요.5~10분 후 조심히 붙은 쿠키를 떼어 준 후 식힌 망에서 충분히 식혀 주세요.완성한 쿠키 위에 라즈베리 콩포트를 올려 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "8f6eae2a-223f-4768-bf1d-48b7a22f9b8d",
            "parent": {
                "type": "page_id",
                "page_id": "1cca7ba2-7acd-4cc7-853d-4e71a90732a6"
            },
            "created_time": "2023-09-09T09:03:00.000Z",
            "last_edited_time": "2023-09-09T09:03:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "74bac508-28aa-4c18-beea-7c31e98486f1",
            "parent": {
                "type": "page_id",
                "page_id": "1cca7ba2-7acd-4cc7-853d-4e71a90732a6"
            },
            "created_time": "2023-09-09T09:03:00.000Z",
            "last_edited_time": "2023-09-09T09:03:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "라즈베리 콩포트 레시피",
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
                        "plain_text": "라즈베리 콩포트 레시피",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "855dcd18-887f-4015-a063-bc7db698def5",
            "parent": {
                "type": "page_id",
                "page_id": "1cca7ba2-7acd-4cc7-853d-4e71a90732a6"
            },
            "created_time": "2023-09-09T09:03:00.000Z",
            "last_edited_time": "2023-09-09T09:03:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "냉동 라즈베리 100g\n원당 60g\n레몬즙 1g",
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
                        "plain_text": "냉동 라즈베리 100g\n원당 60g\n레몬즙 1g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "26720a1b-e90f-421f-b265-689574084d25",
            "parent": {
                "type": "page_id",
                "page_id": "1cca7ba2-7acd-4cc7-853d-4e71a90732a6"
            },
            "created_time": "2023-09-09T09:03:00.000Z",
            "last_edited_time": "2023-09-09T09:03:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "냉동 라즈베리와 원당을 냄비에 넣고 고루 섞어 주세요.",
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
                        "plain_text": "냉동 라즈베리와 원당을 냄비에 넣고 고루 섞어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "d1bb4aa3-d007-46d6-a453-0da64300d978",
            "parent": {
                "type": "page_id",
                "page_id": "1cca7ba2-7acd-4cc7-853d-4e71a90732a6"
            },
            "created_time": "2023-09-09T09:03:00.000Z",
            "last_edited_time": "2023-09-09T09:03:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "중간 불에서 끓여 주세요.",
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
                        "plain_text": "중간 불에서 끓여 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "e2848c96-c58f-4ac9-84e7-73f4b7e55115",
            "parent": {
                "type": "page_id",
                "page_id": "1cca7ba2-7acd-4cc7-853d-4e71a90732a6"
            },
            "created_time": "2023-09-09T09:03:00.000Z",
            "last_edited_time": "2023-09-09T09:03:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "수분이 조려져 1/3 정도가 되면, 레몬즙을 넣고 식혀 주세요.",
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
                        "plain_text": "수분이 조려져 1/3 정도가 되면, 레몬즙을 넣고 식혀 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        }
    ],
    "next_cursor": null,
    "has_more": false,
    "type": "block",
    "block": {}
  },
  {
    "title": "비건 오레오 청크 쿠키",
    "object": "list",
    "results": [
        {
            "object": "block",
            "id": "067d2b73-16c3-47a6-9e5d-2a96486724fc",
            "parent": {
                "type": "page_id",
                "page_id": "819669c1-d551-49a5-ae40-6fb070f0c4bc"
            },
            "created_time": "2023-09-09T09:15:00.000Z",
            "last_edited_time": "2023-09-09T09:15:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "image",
            "image": {
                "caption": [],
                "type": "external",
                "external": {
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/oreoCookie2.jpg"
                }
            }
        },
        {
            "object": "block",
            "id": "31d88713-f4ea-4586-a27b-595bdd60828d",
            "parent": {
                "type": "page_id",
                "page_id": "819669c1-d551-49a5-ae40-6fb070f0c4bc"
            },
            "created_time": "2023-09-09T09:02:00.000Z",
            "last_edited_time": "2023-09-09T09:15:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "고소하고 은은한 헤이즐넛 반죽에, 달콤하고 진한 오레오 쿠키가 듬뿍 들어갔어요.\n속세의 쿠키 맛에 익숙해 있다면, 비건 오레오 청크 쿠키 한번 만들어 보세요.",
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
                        "plain_text": "고소하고 은은한 헤이즐넛 반죽에, 달콤하고 진한 오레오 쿠키가 듬뿍 들어갔어요.\n속세의 쿠키 맛에 익숙해 있다면, 비건 오레오 청크 쿠키 한번 만들어 보세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "1b354a45-4d00-49b5-92e0-3170dd87b4dd",
            "parent": {
                "type": "page_id",
                "page_id": "819669c1-d551-49a5-ae40-6fb070f0c4bc"
            },
            "created_time": "2023-09-09T09:02:00.000Z",
            "last_edited_time": "2023-09-09T09:02:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "8d210c0e-0afd-4a58-8da4-07e8a72062f6",
            "parent": {
                "type": "page_id",
                "page_id": "819669c1-d551-49a5-ae40-6fb070f0c4bc"
            },
            "created_time": "2023-09-09T09:02:00.000Z",
            "last_edited_time": "2023-09-09T09:02:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "총 분량 쿠키 9개",
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
                        "plain_text": "총 분량 쿠키 9개",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "5045fabd-d9a6-488b-a38b-fbe1bf69a485",
            "parent": {
                "type": "page_id",
                "page_id": "819669c1-d551-49a5-ae40-6fb070f0c4bc"
            },
            "created_time": "2023-09-09T09:02:00.000Z",
            "last_edited_time": "2023-09-09T09:02:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "재료\n통밀가루 105g\n헤이즐넛 가루 30g\n타피오카 전분 40g\n마스코바도 설탕 60g\n현미유 60g\n애플소스(무설탕) 30g\n두유 10g\n애플 사이다 비니거 2g\n베이킹파우더 6g\n베이킹 소다 2g\n바닐라 엑스트랙 2g\n소금 1g\n오레오 100g\n토핑 오레오 50g",
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
                        "plain_text": "재료\n통밀가루 105g\n헤이즐넛 가루 30g\n타피오카 전분 40g\n마스코바도 설탕 60g\n현미유 60g\n애플소스(무설탕) 30g\n두유 10g\n애플 사이다 비니거 2g\n베이킹파우더 6g\n베이킹 소다 2g\n바닐라 엑스트랙 2g\n소금 1g\n오레오 100g\n토핑 오레오 50g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "74d0977b-127b-41d9-8178-973b6cda462f",
            "parent": {
                "type": "page_id",
                "page_id": "819669c1-d551-49a5-ae40-6fb070f0c4bc"
            },
            "created_time": "2023-09-09T09:02:00.000Z",
            "last_edited_time": "2023-09-09T09:02:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "5b5cee91-5f77-4e9e-8a1a-9eea9f6eca2e",
            "parent": {
                "type": "page_id",
                "page_id": "819669c1-d551-49a5-ae40-6fb070f0c4bc"
            },
            "created_time": "2023-09-09T09:02:00.000Z",
            "last_edited_time": "2023-09-09T09:02:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "레시피",
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
                        "plain_text": "레시피",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "5b030326-b455-4e94-b24f-6bc5f7c57e0d",
            "parent": {
                "type": "page_id",
                "page_id": "819669c1-d551-49a5-ae40-6fb070f0c4bc"
            },
            "created_time": "2023-09-09T09:02:00.000Z",
            "last_edited_time": "2023-09-09T09:02:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "두유와 애플 사이다 비니거를 볼에 넣고 20분 정도 놔두세요.(비건 버터 밀크)->비건 버터 밀크를 사용해서 달걀처럼 사용해요.",
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
                        "plain_text": "두유와 애플 사이다 비니거를 볼에 넣고 20분 정도 놔두세요.(비건 버터 밀크)->비건 버터 밀크를 사용해서 달걀처럼 사용해요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "3b68feeb-1fb7-4e8b-801c-bcfb987aecae",
            "parent": {
                "type": "page_id",
                "page_id": "819669c1-d551-49a5-ae40-6fb070f0c4bc"
            },
            "created_time": "2023-09-09T09:02:00.000Z",
            "last_edited_time": "2023-09-09T09:02:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "통밀가루, 헤이즐넛 가루, 타피오카 전분, 베이킹파우더, 베이킹 소다, 소금을 미리 체 쳐주세요.",
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
                        "plain_text": "통밀가루, 헤이즐넛 가루, 타피오카 전분, 베이킹파우더, 베이킹 소다, 소금을 미리 체 쳐주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "7541e67c-ce43-4a1d-b505-554983e8ce20",
            "parent": {
                "type": "page_id",
                "page_id": "819669c1-d551-49a5-ae40-6fb070f0c4bc"
            },
            "created_time": "2023-09-09T09:02:00.000Z",
            "last_edited_time": "2023-09-09T09:02:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "마스코바도 설탕과 현미유를 넣고 거품기로 1분 정도 섞어 주세요.",
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
                        "plain_text": "마스코바도 설탕과 현미유를 넣고 거품기로 1분 정도 섞어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "8d43f9b0-5337-4ad8-a9fd-1b75fc3ad584",
            "parent": {
                "type": "page_id",
                "page_id": "819669c1-d551-49a5-ae40-6fb070f0c4bc"
            },
            "created_time": "2023-09-09T09:02:00.000Z",
            "last_edited_time": "2023-09-09T09:02:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "3번에 애플 소스(무설탕), 바닐라 엑스트랙을 넣고 1분 정도 섞어 주세요.",
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
                        "plain_text": "3번에 애플 소스(무설탕), 바닐라 엑스트랙을 넣고 1분 정도 섞어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "736e5adb-e055-490e-91c2-a2daf678480b",
            "parent": {
                "type": "page_id",
                "page_id": "819669c1-d551-49a5-ae40-6fb070f0c4bc"
            },
            "created_time": "2023-09-09T09:02:00.000Z",
            "last_edited_time": "2023-09-09T09:02:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "액체 재료에 가루 재료를 넣고 날가루가 보이지 않을 때까지 주걱으로 섞은 후 오레오를 넣어 주세요.",
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
                        "plain_text": "액체 재료에 가루 재료를 넣고 날가루가 보이지 않을 때까지 주걱으로 섞은 후 오레오를 넣어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "166fee49-9b99-456a-9b52-bf116d7dd83d",
            "parent": {
                "type": "page_id",
                "page_id": "819669c1-d551-49a5-ae40-6fb070f0c4bc"
            },
            "created_time": "2023-09-09T09:02:00.000Z",
            "last_edited_time": "2023-09-09T09:02:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "완성한 반죽을 냉장고에서 30분 정도 굳혀 주세요.",
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
                        "plain_text": "완성한 반죽을 냉장고에서 30분 정도 굳혀 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "e6f6b975-544a-4ca9-bc1d-89d92d7dee97",
            "parent": {
                "type": "page_id",
                "page_id": "819669c1-d551-49a5-ae40-6fb070f0c4bc"
            },
            "created_time": "2023-09-09T09:02:00.000Z",
            "last_edited_time": "2023-09-09T09:02:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "쿠키 반죽을 5cm 아이스크림 스쿱으로 떠주세요.",
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
                        "plain_text": "쿠키 반죽을 5cm 아이스크림 스쿱으로 떠주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "38d1f752-3924-4d37-80f8-249daec58113",
            "parent": {
                "type": "page_id",
                "page_id": "819669c1-d551-49a5-ae40-6fb070f0c4bc"
            },
            "created_time": "2023-09-09T09:02:00.000Z",
            "last_edited_time": "2023-09-09T09:02:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "토핑용 오레오를 살짝 올려 주세요.",
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
                        "plain_text": "토핑용 오레오를 살짝 올려 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "c2ad84c0-2af2-4201-82b7-678deb6caf72",
            "parent": {
                "type": "page_id",
                "page_id": "819669c1-d551-49a5-ae40-6fb070f0c4bc"
            },
            "created_time": "2023-09-09T09:02:00.000Z",
            "last_edited_time": "2023-09-09T09:02:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "200℃로 예열된 오븐에 쿠키를 넣고, 180℃에서 13분 구워 주세요.막 오븐에서 나온 쿠키는 힘이 없어서 흐물흐물해요.",
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
                        "plain_text": "200℃로 예열된 오븐에 쿠키를 넣고, 180℃에서 13분 구워 주세요.막 오븐에서 나온 쿠키는 힘이 없어서 흐물흐물해요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "f9c8ff2b-a9f2-456e-a08d-cedfbc62b01a",
            "parent": {
                "type": "page_id",
                "page_id": "819669c1-d551-49a5-ae40-6fb070f0c4bc"
            },
            "created_time": "2023-09-09T09:02:00.000Z",
            "last_edited_time": "2023-09-09T09:02:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "5~10분 후 조심히 붙은 쿠키를 떼어 준 후 식힌 망에서 충분히 식혀 주세요.",
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
                        "plain_text": "5~10분 후 조심히 붙은 쿠키를 떼어 준 후 식힌 망에서 충분히 식혀 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "3370063f-14bd-43d2-8ca5-3bac239a6fd8",
            "parent": {
                "type": "page_id",
                "page_id": "819669c1-d551-49a5-ae40-6fb070f0c4bc"
            },
            "created_time": "2023-09-09T09:02:00.000Z",
            "last_edited_time": "2023-09-09T09:02:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "0de3feaa-5822-475c-bcb0-d6ec2c4db7dd",
            "parent": {
                "type": "page_id",
                "page_id": "819669c1-d551-49a5-ae40-6fb070f0c4bc"
            },
            "created_time": "2023-09-09T09:02:00.000Z",
            "last_edited_time": "2023-09-09T09:02:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "우리나라 오레오는 국내 OEM 생산 제품이에요. 우리나라 오레오는 유청분말을 함유하고 있어요. 하지만 미국은 2014년부터 유청, 유당을 빼고 비건 레시피로 생산하고 있어요. 미국 오레오를 사용해서 비건으로 만들어 보세요.",
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
                        "plain_text": "우리나라 오레오는 국내 OEM 생산 제품이에요. 우리나라 오레오는 유청분말을 함유하고 있어요. 하지만 미국은 2014년부터 유청, 유당을 빼고 비건 레시피로 생산하고 있어요. 미국 오레오를 사용해서 비건으로 만들어 보세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "2c4e1ae9-c129-49e0-a820-18e0f63fac17",
            "parent": {
                "type": "page_id",
                "page_id": "819669c1-d551-49a5-ae40-6fb070f0c4bc"
            },
            "created_time": "2023-09-09T09:02:00.000Z",
            "last_edited_time": "2023-09-09T09:02:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        }
    ],
    "next_cursor": null,
    "has_more": false,
    "type": "block",
    "block": {}
  },
  {
    "title": "비건 더블 로투스 쿠키",
    "object": "list",
    "results": [
        {
            "object": "block",
            "id": "7a1b7b29-b5af-4df9-a788-9c1fd6813bb2",
            "parent": {
                "type": "page_id",
                "page_id": "7bc41ce3-5571-43e2-96f4-fa5bf57353c4"
            },
            "created_time": "2023-09-09T09:14:00.000Z",
            "last_edited_time": "2023-09-09T09:14:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "image",
            "image": {
                "caption": [],
                "type": "external",
                "external": {
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/rottusCookie.jpg"
                }
            }
        },
        {
            "object": "block",
            "id": "e8dc0fca-19a6-4386-9339-7f421d3c4e1b",
            "parent": {
                "type": "page_id",
                "page_id": "7bc41ce3-5571-43e2-96f4-fa5bf57353c4"
            },
            "created_time": "2023-09-09T09:01:00.000Z",
            "last_edited_time": "2023-09-09T09:14:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "로투스 스프레드와 로투스 쿠키가 들어간 달콤한 커피 향 폴폴 나는 쿠키예요.\n노릇하게 구워진 쿠키와 로투스 스프레드가 커피랑 너무 잘 어울려요.\n커피엔 언제나 비건 로투스 쿠키",
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
                        "plain_text": "로투스 스프레드와 로투스 쿠키가 들어간 달콤한 커피 향 폴폴 나는 쿠키예요.\n노릇하게 구워진 쿠키와 로투스 스프레드가 커피랑 너무 잘 어울려요.\n커피엔 언제나 비건 로투스 쿠키",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "2e162a91-8a16-4020-a320-58aeb01add96",
            "parent": {
                "type": "page_id",
                "page_id": "7bc41ce3-5571-43e2-96f4-fa5bf57353c4"
            },
            "created_time": "2023-09-09T09:01:00.000Z",
            "last_edited_time": "2023-09-09T09:01:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "b683132b-dbb7-4479-aaf2-fe39cac7d405",
            "parent": {
                "type": "page_id",
                "page_id": "7bc41ce3-5571-43e2-96f4-fa5bf57353c4"
            },
            "created_time": "2023-09-09T09:01:00.000Z",
            "last_edited_time": "2023-09-09T09:01:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "총 분량 쿠키 9개",
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
                        "plain_text": "총 분량 쿠키 9개",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "3d9278c9-d068-493d-9066-e9deb9e29eff",
            "parent": {
                "type": "page_id",
                "page_id": "7bc41ce3-5571-43e2-96f4-fa5bf57353c4"
            },
            "created_time": "2023-09-09T09:01:00.000Z",
            "last_edited_time": "2023-09-09T09:01:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "재료\n통밀가루 100g\n아몬드 가루 60g\n감자 전분 30g\n베이킹파우더 6\n시나몬 파우더 1g\n비정제 원당 60g\n현미유 70g\n두유 25g\n애플 사이다 비니거 3g\n애플 소스(무첨가) 40g\n소금 1g\n바닐라 엑스트랙 2g\n로투스 쿠키 10개\n로투스 스프레드 50g",
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
                        "plain_text": "재료\n통밀가루 100g\n아몬드 가루 60g\n감자 전분 30g\n베이킹파우더 6\n시나몬 파우더 1g\n비정제 원당 60g\n현미유 70g\n두유 25g\n애플 사이다 비니거 3g\n애플 소스(무첨가) 40g\n소금 1g\n바닐라 엑스트랙 2g\n로투스 쿠키 10개\n로투스 스프레드 50g",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "e82c2bb8-6377-4468-8cc1-dbd318d1f262",
            "parent": {
                "type": "page_id",
                "page_id": "7bc41ce3-5571-43e2-96f4-fa5bf57353c4"
            },
            "created_time": "2023-09-09T09:01:00.000Z",
            "last_edited_time": "2023-09-09T09:01:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "1bb1fe2b-99c3-40e6-80bf-59654848d9f4",
            "parent": {
                "type": "page_id",
                "page_id": "7bc41ce3-5571-43e2-96f4-fa5bf57353c4"
            },
            "created_time": "2023-09-09T09:01:00.000Z",
            "last_edited_time": "2023-09-09T09:01:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "레시피",
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
                        "plain_text": "레시피",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "b7400aa3-9fbb-4aa6-bcb3-d836d4411df8",
            "parent": {
                "type": "page_id",
                "page_id": "7bc41ce3-5571-43e2-96f4-fa5bf57353c4"
            },
            "created_time": "2023-09-09T09:01:00.000Z",
            "last_edited_time": "2023-09-09T09:01:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "두유와 애플 사이다 비니거를 볼에 넣고 20분 정도 놔두세요. (->비건 버터밀크: 달걀 대체)",
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
                        "plain_text": "두유와 애플 사이다 비니거를 볼에 넣고 20분 정도 놔두세요. (->비건 버터밀크: 달걀 대체)",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "01fe5272-0e76-4f77-955c-1806ba4f88ea",
            "parent": {
                "type": "page_id",
                "page_id": "7bc41ce3-5571-43e2-96f4-fa5bf57353c4"
            },
            "created_time": "2023-09-09T09:01:00.000Z",
            "last_edited_time": "2023-09-09T09:01:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "통밀가루, 아몬드 가루, 감자 전분, 베이킹파우더, 소금, 시나몬 가루를 미리 체 쳐주세요.",
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
                        "plain_text": "통밀가루, 아몬드 가루, 감자 전분, 베이킹파우더, 소금, 시나몬 가루를 미리 체 쳐주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "1932bdbe-5a36-4a63-b7ee-2eddb404ecbd",
            "parent": {
                "type": "page_id",
                "page_id": "7bc41ce3-5571-43e2-96f4-fa5bf57353c4"
            },
            "created_time": "2023-09-09T09:01:00.000Z",
            "last_edited_time": "2023-09-09T09:01:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "비정제 원당과 현미유를 볼에 넣고 거품기로 섞다가 애플 소스, 바닐라 엑스트랙을 넣고 1분 정도 잘 섞어 주세요.",
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
                        "plain_text": "비정제 원당과 현미유를 볼에 넣고 거품기로 섞다가 애플 소스, 바닐라 엑스트랙을 넣고 1분 정도 잘 섞어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "c6b78133-5fe9-4be9-973a-f40334c4ebc0",
            "parent": {
                "type": "page_id",
                "page_id": "7bc41ce3-5571-43e2-96f4-fa5bf57353c4"
            },
            "created_time": "2023-09-09T09:01:00.000Z",
            "last_edited_time": "2023-09-09T09:01:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "3에 1번, 2번, 부순 비스코프 쿠키를 넣어 주세요.주걱 날로 자르듯이 섞어 주세요.",
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
                        "plain_text": "3에 1번, 2번, 부순 비스코프 쿠키를 넣어 주세요.주걱 날로 자르듯이 섞어 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "db0fd5a1-652f-4a1a-82fb-087798fa0e04",
            "parent": {
                "type": "page_id",
                "page_id": "7bc41ce3-5571-43e2-96f4-fa5bf57353c4"
            },
            "created_time": "2023-09-09T09:01:00.000Z",
            "last_edited_time": "2023-09-09T09:01:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "완성한 반죽을 냉장고에서 30분 정도 굳혀 주세요.",
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
                        "plain_text": "완성한 반죽을 냉장고에서 30분 정도 굳혀 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "3310d066-2542-4f43-ba7b-66d069cdf714",
            "parent": {
                "type": "page_id",
                "page_id": "7bc41ce3-5571-43e2-96f4-fa5bf57353c4"
            },
            "created_time": "2023-09-09T09:01:00.000Z",
            "last_edited_time": "2023-09-09T09:01:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "쿠키 반죽을 5cm 아이스크림 스쿱으로 반죽(50g)을 떠주세요.",
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
                        "plain_text": "쿠키 반죽을 5cm 아이스크림 스쿱으로 반죽(50g)을 떠주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "9205dcdb-6515-4721-bdca-88dd614472f6",
            "parent": {
                "type": "page_id",
                "page_id": "7bc41ce3-5571-43e2-96f4-fa5bf57353c4"
            },
            "created_time": "2023-09-09T09:01:00.000Z",
            "last_edited_time": "2023-09-09T09:01:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "쿠키 위에 살짝 로투스 스프레드를 올려 주세요. 토핑용 로투스를 올려 꾹 눌러 주세요.",
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
                        "plain_text": "쿠키 위에 살짝 로투스 스프레드를 올려 주세요. 토핑용 로투스를 올려 꾹 눌러 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "31a038b8-1fef-41e3-9398-820e3aee43c6",
            "parent": {
                "type": "page_id",
                "page_id": "7bc41ce3-5571-43e2-96f4-fa5bf57353c4"
            },
            "created_time": "2023-09-09T09:01:00.000Z",
            "last_edited_time": "2023-09-09T09:01:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "유산지를 깐 오븐 팬 위에 올려주세요.",
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
                        "plain_text": "유산지를 깐 오븐 팬 위에 올려주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "5c41890c-6550-43d9-ac06-0bc34bde7d01",
            "parent": {
                "type": "page_id",
                "page_id": "7bc41ce3-5571-43e2-96f4-fa5bf57353c4"
            },
            "created_time": "2023-09-09T09:01:00.000Z",
            "last_edited_time": "2023-09-09T09:01:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "180℃로 예열된 오븐에 쿠키를 넣고, 180℃에서 15분 구워 주세요.",
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
                        "plain_text": "180℃로 예열된 오븐에 쿠키를 넣고, 180℃에서 15분 구워 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "19fee69c-86db-4e9f-8f8d-27340ee47b35",
            "parent": {
                "type": "page_id",
                "page_id": "7bc41ce3-5571-43e2-96f4-fa5bf57353c4"
            },
            "created_time": "2023-09-09T09:01:00.000Z",
            "last_edited_time": "2023-09-09T09:01:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "반죽의 윤기가 사라지고, 토핑용 로투스가 황금빛 갈색이 날 때까지 구워 주세요.",
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
                        "plain_text": "반죽의 윤기가 사라지고, 토핑용 로투스가 황금빛 갈색이 날 때까지 구워 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "b87f0e1e-78a7-47a3-804d-2f4613710c4a",
            "parent": {
                "type": "page_id",
                "page_id": "7bc41ce3-5571-43e2-96f4-fa5bf57353c4"
            },
            "created_time": "2023-09-09T09:01:00.000Z",
            "last_edited_time": "2023-09-09T09:01:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "f9e4eae2-cc46-4fb8-9eb4-fbd9a8d6c980",
            "parent": {
                "type": "page_id",
                "page_id": "7bc41ce3-5571-43e2-96f4-fa5bf57353c4"
            },
            "created_time": "2023-09-09T09:01:00.000Z",
            "last_edited_time": "2023-09-09T09:01:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "입자가 큰 비정제 원당이 두유에 녹을 수 있도록 충분히 휘핑해주세요.\n막 오븐에서 나온 쿠키는 힘이 없어서 흐물흐물해요. 팬에서 5~10분 기다린 후에 옮겨 주세요.",
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
                        "plain_text": "입자가 큰 비정제 원당이 두유에 녹을 수 있도록 충분히 휘핑해주세요.\n막 오븐에서 나온 쿠키는 힘이 없어서 흐물흐물해요. 팬에서 5~10분 기다린 후에 옮겨 주세요.",
                        "href": null
                    }
                ],
                "color": "default"
            }
        },
        {
            "object": "block",
            "id": "a2706dbf-0b92-4d50-81a5-3e8c9768fa85",
            "parent": {
                "type": "page_id",
                "page_id": "7bc41ce3-5571-43e2-96f4-fa5bf57353c4"
            },
            "created_time": "2023-09-09T09:01:00.000Z",
            "last_edited_time": "2023-09-09T09:01:00.000Z",
            "created_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "last_edited_by": {
                "object": "user",
                "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
            },
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
                "rich_text": [],
                "color": "default"
            }
        }
    ],
    "next_cursor": null,
    "has_more": false,
    "type": "block",
    "block": {}
  },
  {
      "title": "원볼 비건 글루텐 프리 그래놀라 쿠키",
      "object": "list",
      "results": [
          {
              "object": "block",
              "id": "aaaa670b-7bb5-45fd-b568-bdd9d3a2223a",
              "parent": {
                  "type": "page_id",
                  "page_id": "98ae66c8-4f14-4e78-8ae4-808948f9b87a"
              },
              "created_time": "2023-09-09T09:13:00.000Z",
              "last_edited_time": "2023-09-09T09:13:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "image",
              "image": {
                  "caption": [],
                  "type": "external",
                  "external": {
                      "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/granola.jpg"
                  }
              }
          },
          {
              "object": "block",
              "id": "af348126-7a95-4843-aab9-dd303f09e713",
              "parent": {
                  "type": "page_id",
                  "page_id": "98ae66c8-4f14-4e78-8ae4-808948f9b87a"
              },
              "created_time": "2023-09-09T09:00:00.000Z",
              "last_edited_time": "2023-09-09T09:13:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "그래놀라 맛있는데, 사서 먹으면  가격에 비해 양이 적지 않나요?\n집에서 하면 사서 먹는 맛을 내기 어렵죠?\n이런 고민을 하셨다면, 비건 글루텐 프리 그래놀라 쿠키를 한 번 만들어 보세요!\n그래놀라보다 만들기 쉬우면서  맛있고 손이 가는 쿠키예요!\n오일이 없이, 땅콩버터로 고소하게 만들었어요.\n향긋한 메이플 시럽으로 풍미를 더해 주었답니다.",
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
                          "plain_text": "그래놀라 맛있는데,  사서 먹으면  가격에 비해 양이 적지 않나요?\n집에서 하면 사서 먹는 맛을 내기 어렵죠?\n이런 고민을 하셨다면, 비건 글루텐 프리 그래놀라 쿠키를 한 번 만들어 보세요!\n그래놀라보다 만들기 쉬우면서  맛있고 손이 가는 쿠키예요!\n오일이 없이, 땅콩버터로 고소하게 만들었어요.\n향긋한 메이플 시럽으로 풍미를 더해 주었답니다.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "919b5f7c-f20b-4d9d-96c9-6ff4295ac98c",
              "parent": {
                  "type": "page_id",
                  "page_id": "98ae66c8-4f14-4e78-8ae4-808948f9b87a"
              },
              "created_time": "2023-09-09T09:00:00.000Z",
              "last_edited_time": "2023-09-09T09:00:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "266deb3f-40f9-4a43-9195-bd58ef009cce",
              "parent": {
                  "type": "page_id",
                  "page_id": "98ae66c8-4f14-4e78-8ae4-808948f9b87a"
              },
              "created_time": "2023-09-09T09:00:00.000Z",
              "last_edited_time": "2023-09-09T09:00:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "총 분량 쿠키  6개",
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
                          "plain_text": "총 분량 쿠키  6개",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "6a98e697-de3d-450e-883d-ff465a3f8161",
              "parent": {
                  "type": "page_id",
                  "page_id": "98ae66c8-4f14-4e78-8ae4-808948f9b87a"
              },
              "created_time": "2023-09-09T09:00:00.000Z",
              "last_edited_time": "2023-09-09T09:00:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "재료\n무첨가 땅콩버터 60g\n메이플 시럽 2T\n베이킹 소다 1/4t\n소금 한 꼬집\n납작귀리(롤드오트) 70g\n치아씨드 10g\n잘게 썬 아몬드 30g\n말린 크랜베리 30g",
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
                          "plain_text": "재료\n무첨가 땅콩버터 60g\n메이플 시럽 2T\n베이킹 소다 1/4t\n소금 한 꼬집\n납작귀리(롤드오트) 70g\n치아씨드 10g\n잘게 썬 아몬드 30g\n말린 크랜베리 30g",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "e18d4b72-9ea7-41fe-b7db-91ec0c8cacf8",
              "parent": {
                  "type": "page_id",
                  "page_id": "98ae66c8-4f14-4e78-8ae4-808948f9b87a"
              },
              "created_time": "2023-09-09T09:00:00.000Z",
              "last_edited_time": "2023-09-09T09:00:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "15cfe12c-e65e-4b87-b8c2-924d2ef81253",
              "parent": {
                  "type": "page_id",
                  "page_id": "98ae66c8-4f14-4e78-8ae4-808948f9b87a"
              },
              "created_time": "2023-09-09T09:00:00.000Z",
              "last_edited_time": "2023-09-09T09:00:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "레시피",
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
                          "plain_text": "레시피",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "8f8b8640-951e-43e5-8a63-832939a46fb8",
              "parent": {
                  "type": "page_id",
                  "page_id": "98ae66c8-4f14-4e78-8ae4-808948f9b87a"
              },
              "created_time": "2023-09-09T09:00:00.000Z",
              "last_edited_time": "2023-09-09T09:00:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "170℃로 오븐을 예열해 주세요.땅콩버터, 메이플 시럽을 넣고 부드럽게 섞어 주세요.",
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
                          "plain_text": "170℃로 오븐을 예열해 주세요.땅콩버터, 메이플 시럽을 넣고 부드럽게 섞어 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "b3f18c90-571d-4770-b6be-938f90e6e93a",
              "parent": {
                  "type": "page_id",
                  "page_id": "98ae66c8-4f14-4e78-8ae4-808948f9b87a"
              },
              "created_time": "2023-09-09T09:00:00.000Z",
              "last_edited_time": "2023-09-09T09:00:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "베이킹 소다, 소금을 넣고 섞어 주세요.",
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
                          "plain_text": "베이킹 소다, 소금을 넣고 섞어 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "4122a063-332e-45e8-aaaf-5ba2e2946c5a",
              "parent": {
                  "type": "page_id",
                  "page_id": "98ae66c8-4f14-4e78-8ae4-808948f9b87a"
              },
              "created_time": "2023-09-09T09:00:00.000Z",
              "last_edited_time": "2023-09-09T09:00:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "롤드 오트, 치아씨드, 잘게 썬 아몬드, 말린 크랜베리를 넣고 잘 섞어 주세요.",
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
                          "plain_text": "롤드 오트, 치아씨드, 잘게 썬 아몬드, 말린 크랜베리를 넣고 잘 섞어 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "355c25e4-2e3c-473e-864f-20c0ca25a858",
              "parent": {
                  "type": "page_id",
                  "page_id": "98ae66c8-4f14-4e78-8ae4-808948f9b87a"
              },
              "created_time": "2023-09-09T09:00:00.000Z",
              "last_edited_time": "2023-09-09T09:00:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "아이스크림 스쿱(5cm)으로 떠서 팬딩해 주세요. 반죽을 살짝 눌러주세요. 쿠키가 많이 퍼지지 않을 거예요. 쿠키 반죽 사이에 안 멀어도 괜찮아요.",
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
                          "plain_text": "아이스크림 스쿱(5cm)으로 떠서 팬딩해 주세요. 반죽을 살짝 눌러주세요. 쿠키가 많이 퍼지지 않을 거예요. 쿠키 반죽 사이에 안 멀어도 괜찮아요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "dc5ccef2-9659-484e-bb0f-dbdbd31d7d53",
              "parent": {
                  "type": "page_id",
                  "page_id": "98ae66c8-4f14-4e78-8ae4-808948f9b87a"
              },
              "created_time": "2023-09-09T09:00:00.000Z",
              "last_edited_time": "2023-09-09T09:00:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "15분 정도 오븐에서 구워 주세요.\n오븐 사양에 따라 굽는 시간은 달라질 수 있어요.",
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
                          "plain_text": "15분 정도 오븐에서 구워 주세요.\n오븐 사양에 따라 굽는 시간은 달라질 수 있어요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "10ebe627-43fa-41b0-a83e-de4ca9643e22",
              "parent": {
                  "type": "page_id",
                  "page_id": "98ae66c8-4f14-4e78-8ae4-808948f9b87a"
              },
              "created_time": "2023-09-09T09:00:00.000Z",
              "last_edited_time": "2023-09-09T09:00:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "e9110a68-2159-47da-8c98-be0a8b4b6c58",
              "parent": {
                  "type": "page_id",
                  "page_id": "98ae66c8-4f14-4e78-8ae4-808948f9b87a"
              },
              "created_time": "2023-09-09T09:00:00.000Z",
              "last_edited_time": "2023-09-09T09:00:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "건 크랜베리는 사용하기 전에 물에 잠시 불려서 말랑해지면 사용해 주세요.\n비건 글루텐 프리 그래놀라 쿠키 맛있게 먹기\n그래놀라 쿠키는 아몬드 우유나 두유랑 같이 먹으면 정말 맛있어요.\n실온에서 3일 보관 가능하고 완전히 식힌 다음 냉동실에서 1개월 보관 가능해요.",
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
                          "plain_text": "건 크랜베리는 사용하기 전에 물에 잠시 불려서 말랑해지면 사용해 주세요.\n비건 글루텐 프리 그래놀라 쿠키 맛있게 먹기\n그래놀라 쿠키는 아몬드 우유나 두유랑 같이 먹으면 정말 맛있어요.\n실온에서 3일 보관 가능하고 완전히 식힌 다음 냉동실에서 1개월 보관 가능해요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          }
      ],
      "next_cursor": null,
      "has_more": false,
      "type": "block",
      "block": {}
  },
  {
      "title": "비건 글루텐 프리 오트밀 초콜릿 칩 쿠키",
      "object": "list",
      "results": [
          {
              "object": "block",
              "id": "4bba77d1-1808-4861-862f-dc65bd69bb31",
              "parent": {
                  "type": "page_id",
                  "page_id": "272296de-54ee-4426-a56c-a2445275d9e9"
              },
              "created_time": "2023-09-09T09:12:00.000Z",
              "last_edited_time": "2023-09-09T09:12:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "image",
              "image": {
                  "caption": [],
                  "type": "external",
                  "external": {
                      "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/oatmealChocolateCookie.jpg"
                  }
              }
          },
          {
              "object": "block",
              "id": "cd6e5a01-d352-4b52-bc19-6b25c1bded55",
              "parent": {
                  "type": "page_id",
                  "page_id": "272296de-54ee-4426-a56c-a2445275d9e9"
              },
              "created_time": "2023-09-09T08:59:00.000Z",
              "last_edited_time": "2023-09-09T09:12:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "몸에 좋은 귀리와 초콜릿이 듬뿍 들어간 겉바속촉  쿠키\n귀리\n아몬드 가루\n코코넛 슬라이스\n초콜릿이 들어간 쿠키\n아보카도 오일로 촉촉하고 바삭한 맛을 더하고\n피넛 버터는 고소한 부드러움을 더해 줍니다.\n마스코바도 설탕과 초콜릿으로 은은한 달콤함과 씹는 맛을 더해줘요.\n아쿠아파바(병아리콩물)은 쿠키가 부풀며 바삭바삭한 식감을 살려줘요.\n한 번 만들어서 냉동실에 쟁여 두고 놓기 딱 좋은 쿠키\n미리 쿠키 반죽을 해놓으면 언제든 근사한 쿠키를 먹을 수 있어요.\n쿠키와 두유, 아몬드 우유, 우유 외 함께 먹으면 최고의 디저트예요!",
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
                          "plain_text": "몸에 좋은 귀리와 초콜릿이 듬뿍 들어간 겉바속촉  쿠키\n귀리\n아몬드 가루\n코코넛 슬라이스\n초콜릿이 들어간 쿠키\n아보카도 오일로 촉촉하고 바삭한 맛을 더하고\n피넛 버터는 고소한 부드러움을 더해 줍니다.\n마스코바도 설탕과 초콜릿으로 은은한 달콤함과 씹는 맛을 더해줘요.\n아쿠아파바(병아리콩물)은 쿠키가 부풀며 바삭바삭한 식감을 살려줘요.\n한 번 만들어서 냉동실에 쟁여 두고 놓기 딱 좋은 쿠키\n미리 쿠키 반죽을 해놓으면 언제든 근사한 쿠키를 먹을 수 있어요.\n쿠키와 두유, 아몬드 우유, 우유 외 함께 먹으면 최고의 디저트예요!",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "47e13138-1069-4166-9eac-b0cfcc228812",
              "parent": {
                  "type": "page_id",
                  "page_id": "272296de-54ee-4426-a56c-a2445275d9e9"
              },
              "created_time": "2023-09-09T08:59:00.000Z",
              "last_edited_time": "2023-09-09T08:59:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "d46a8b08-6741-4b64-b5d7-4fe2474a1675",
              "parent": {
                  "type": "page_id",
                  "page_id": "272296de-54ee-4426-a56c-a2445275d9e9"
              },
              "created_time": "2023-09-09T08:59:00.000Z",
              "last_edited_time": "2023-09-09T08:59:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "총 분량 쿠키  5개",
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
                          "plain_text": "총 분량 쿠키  5개",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "c8b48a1d-9908-4379-a2d3-0238efd9bafe",
              "parent": {
                  "type": "page_id",
                  "page_id": "272296de-54ee-4426-a56c-a2445275d9e9"
              },
              "created_time": "2023-09-09T08:59:00.000Z",
              "last_edited_time": "2023-09-09T08:59:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "재료\n아몬드 가루 45g\n납작 귀리 30g\n코코넛 슬라이스 10g\n베이킹파우더 3g\n초코칩 10g\n소금 한 꼬집\n마스코바도 설탕 20g\n아쿠아파바 25g\n무첨가 땅콩 버터 13g\n아보카도 오일 1T\n바닐라 엑스트랙 1/2t",
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
                          "plain_text": "재료\n아몬드 가루 45g\n납작 귀리 30g\n코코넛 슬라이스 10g\n베이킹파우더 3g\n초코칩 10g\n소금 한 꼬집\n마스코바도 설탕 20g\n아쿠아파바 25g\n무첨가 땅콩 버터 13g\n아보카도 오일 1T\n바닐라 엑스트랙 1/2t",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "34adf849-47bc-45df-b0a3-8951dd760e04",
              "parent": {
                  "type": "page_id",
                  "page_id": "272296de-54ee-4426-a56c-a2445275d9e9"
              },
              "created_time": "2023-09-09T09:00:00.000Z",
              "last_edited_time": "2023-09-09T09:00:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "d99419e3-eaf8-4bfc-89aa-2e56b25b4da8",
              "parent": {
                  "type": "page_id",
                  "page_id": "272296de-54ee-4426-a56c-a2445275d9e9"
              },
              "created_time": "2023-09-09T09:00:00.000Z",
              "last_edited_time": "2023-09-09T09:00:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "레시피",
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
                          "plain_text": "레시피",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "cc0270ee-f092-4106-91bf-950278a9af14",
              "parent": {
                  "type": "page_id",
                  "page_id": "272296de-54ee-4426-a56c-a2445275d9e9"
              },
              "created_time": "2023-09-09T09:00:00.000Z",
              "last_edited_time": "2023-09-09T09:00:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "170℃로 오븐을 예열해 주세요.",
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
                          "plain_text": "170℃로 오븐을 예열해 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "70b595a3-003a-4b31-9b5a-dbd2f0ee8927",
              "parent": {
                  "type": "page_id",
                  "page_id": "272296de-54ee-4426-a56c-a2445275d9e9"
              },
              "created_time": "2023-09-09T09:00:00.000Z",
              "last_edited_time": "2023-09-09T09:00:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "믹싱 볼에 아몬드 가루, 납작 귀리, 코코넛 슬라이스, 초코칩, 베이킹파우더, 소금, 마스코바도 설탕을 함께 섞어 주세요.",
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
                          "plain_text": "믹싱 볼에 아몬드 가루, 납작 귀리, 코코넛 슬라이스, 초코칩, 베이킹파우더, 소금, 마스코바도 설탕을 함께 섞어 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "10ce6202-d731-4e71-a8c7-8972e51f0b43",
              "parent": {
                  "type": "page_id",
                  "page_id": "272296de-54ee-4426-a56c-a2445275d9e9"
              },
              "created_time": "2023-09-09T09:00:00.000Z",
              "last_edited_time": "2023-09-09T09:00:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "병아리 콩물을 푹신한 봉우리가 생길 때까지 휘핑해 주세요.(->아쿠아파바)",
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
                          "plain_text": "병아리 콩물을 푹신한 봉우리가 생길 때까지 휘핑해 주세요.(->아쿠아파바)",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "04c99f40-5bd8-4837-b223-364be4f2b3bc",
              "parent": {
                  "type": "page_id",
                  "page_id": "272296de-54ee-4426-a56c-a2445275d9e9"
              },
              "created_time": "2023-09-09T09:00:00.000Z",
              "last_edited_time": "2023-09-09T09:00:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "아쿠아파바에 무첨가 땅콩 버터, 아보카도 오일, 바닐라 엑스트랙를 넣고 거품기로 섞어 주세요.\n(공기가 약간 빠져도 괜찮아요.)",
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
                          "plain_text": "아쿠아파바에 무첨가 땅콩 버터, 아보카도 오일, 바닐라 엑스트랙를 넣고 거품기로 섞어 주세요.\n(공기가 약간 빠져도 괜찮아요.)",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "9b3c241d-b241-4b2a-94e4-6c9bc0eb0809",
              "parent": {
                  "type": "page_id",
                  "page_id": "272296de-54ee-4426-a56c-a2445275d9e9"
              },
              "created_time": "2023-09-09T09:00:00.000Z",
              "last_edited_time": "2023-09-09T09:00:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "가루 재료와 액체 재료를 잘 섞어 주세요.",
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
                          "plain_text": "가루 재료와 액체 재료를 잘 섞어 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "b4d03ff4-441f-4303-a58b-cede36973a61",
              "parent": {
                  "type": "page_id",
                  "page_id": "272296de-54ee-4426-a56c-a2445275d9e9"
              },
              "created_time": "2023-09-09T09:00:00.000Z",
              "last_edited_time": "2023-09-09T09:00:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "쿠키 반죽을 최소 30분 휴지해 주세요.",
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
                          "plain_text": "쿠키 반죽을 최소 30분 휴지해 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "6d667b8a-9969-426a-8957-263587f8cf83",
              "parent": {
                  "type": "page_id",
                  "page_id": "272296de-54ee-4426-a56c-a2445275d9e9"
              },
              "created_time": "2023-09-09T09:00:00.000Z",
              "last_edited_time": "2023-09-09T09:00:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "쿠키 반죽을 아이스크림 스쿱(5cm)으로 오븐 팬에 팬딩해 주세요.",
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
                          "plain_text": "쿠키 반죽을 아이스크림 스쿱(5cm)으로 오븐 팬에 팬딩해 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "a5888b9f-2756-4380-a462-506471c50845",
              "parent": {
                  "type": "page_id",
                  "page_id": "272296de-54ee-4426-a56c-a2445275d9e9"
              },
              "created_time": "2023-09-09T09:00:00.000Z",
              "last_edited_time": "2023-09-09T09:00:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "10~12분간 구워 주세요.",
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
                          "plain_text": "10~12분간 구워 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "b9c1bb3c-d9cf-476f-bddb-0fc7c8937afb",
              "parent": {
                  "type": "page_id",
                  "page_id": "272296de-54ee-4426-a56c-a2445275d9e9"
              },
              "created_time": "2023-09-09T09:00:00.000Z",
              "last_edited_time": "2023-09-09T09:00:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "오븐 팬에서 10분간 식혀 주세요.",
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
                          "plain_text": "오븐 팬에서 10분간 식혀 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "b6067658-dd1d-4c36-95ac-59fba1b475ec",
              "parent": {
                  "type": "page_id",
                  "page_id": "272296de-54ee-4426-a56c-a2445275d9e9"
              },
              "created_time": "2023-09-09T09:00:00.000Z",
              "last_edited_time": "2023-09-09T09:00:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [],
                  "color": "default"
              }
          }
      ],
      "next_cursor": null,
      "has_more": false,
      "type": "block",
      "block": {}
  },
  {
      "title": "비건 초콜릿 코코넛 쿠키",
      "object": "list",
      "results": [
          {
              "object": "block",
              "id": "b87e3d61-fed7-43b0-874c-fda47d66f57f",
              "parent": {
                  "type": "page_id",
                  "page_id": "83c7212f-3944-46bf-8397-040dbc10c534"
              },
              "created_time": "2023-08-18T03:43:00.000Z",
              "last_edited_time": "2023-08-18T03:43:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "image",
              "image": {
                  "caption": [],
                  "type": "external",
                  "external": {
                      "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/ChocolateCoconutCookie.jpg"
                  }
              }
          },
          {
              "object": "block",
              "id": "bf3228cc-6e14-49c6-a9c2-1bd2d0696277",
              "parent": {
                  "type": "page_id",
                  "page_id": "83c7212f-3944-46bf-8397-040dbc10c534"
              },
              "created_time": "2023-08-18T03:19:00.000Z",
              "last_edited_time": "2023-08-18T03:43:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "통밀가루가 있다면 비건 초콜릿 코코넛 쿠키 만들어 보세요.\n쿠키 반죽은 냉동실에 넣어 두고 쿠키를 먹고 싶을 때마다, 구워 보세요!!\n코코넛 향과 맛을 좋아한다면\n비건 초콜릿 코코넛 쿠키는 여러분의 최애 쿠키가 될 거예요.\n그냥 먹어도 맛있고\n모닝커피와 같이 해도 좋고\n식후 디저트로 먹어도 좋아요!\n은은한 단맛으로 기분 좋은 달콤함을 느껴보세요.",
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
                          "plain_text": "통밀가루가 있다면 비건 초콜릿 코코넛 쿠키 만들어 보세요.\n쿠키 반죽은 냉동실에 넣어 두고 쿠키를 먹고 싶을 때마다, 구워 보세요!!\n코코넛 향과 맛을 좋아한다면\n비건 초콜릿 코코넛 쿠키는 여러분의 최애 쿠키가 될 거예요.\n그냥 먹어도 맛있고\n모닝커피와 같이 해도 좋고\n식후 디저트로 먹어도 좋아요!\n은은한 단맛으로 기분 좋은 달콤함을 느껴보세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "3886ee18-4e6b-465f-87de-dbc0b9ab3700",
              "parent": {
                  "type": "page_id",
                  "page_id": "83c7212f-3944-46bf-8397-040dbc10c534"
              },
              "created_time": "2023-08-18T04:25:00.000Z",
              "last_edited_time": "2023-08-18T04:25:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "b3db1235-3d98-401d-ad50-9f0897ae5e38",
              "parent": {
                  "type": "page_id",
                  "page_id": "83c7212f-3944-46bf-8397-040dbc10c534"
              },
              "created_time": "2023-08-18T03:19:00.000Z",
              "last_edited_time": "2023-08-18T03:26:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "준비 시간 10분\n조리 시간 25분\n총 시간 35분\n총 분량 쿠키 8개",
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
                          "plain_text": "준비 시간 10분\n조리 시간 25분\n총 시간 35분\n총 분량 쿠키 8개",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "a0d29d4a-c81c-4839-902e-96bc94477549",
              "parent": {
                  "type": "page_id",
                  "page_id": "83c7212f-3944-46bf-8397-040dbc10c534"
              },
              "created_time": "2023-08-18T03:19:00.000Z",
              "last_edited_time": "2023-08-18T03:26:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "레시피",
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
                          "plain_text": "레시피",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "9ca35859-f459-4174-8e9b-dd40dc6e58ab",
              "parent": {
                  "type": "page_id",
                  "page_id": "83c7212f-3944-46bf-8397-040dbc10c534"
              },
              "created_time": "2023-08-18T03:19:00.000Z",
              "last_edited_time": "2023-08-18T03:28:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "밀가루 160g\n코코넛 분말 20g\n타피오카 전분18g\n베이킹파우더 7g\n비정제 원당 50g\n현미유 30g\n소금 1g\n두유 60g\n초코칩 60g\n코코넛 롱슈레드 10g",
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
                          "plain_text": "밀가루 160g\n코코넛 분말 20g\n타피오카 전분18g\n베이킹파우더 7g\n비정제 원당 50g\n현미유 30g\n소금 1g\n두유 60g\n초코칩 60g\n코코넛 롱슈레드 10g",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "4a8f97c4-2387-4a6c-ba8f-17855c9aaace",
              "parent": {
                  "type": "page_id",
                  "page_id": "83c7212f-3944-46bf-8397-040dbc10c534"
              },
              "created_time": "2023-08-18T03:29:00.000Z",
              "last_edited_time": "2023-08-18T03:34:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "637036ee-fdf3-4e51-aebe-0e31ffd66147",
              "parent": {
                  "type": "page_id",
                  "page_id": "83c7212f-3944-46bf-8397-040dbc10c534"
              },
              "created_time": "2023-08-18T03:34:00.000Z",
              "last_edited_time": "2023-08-18T04:39:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "170℃로 오븐을 예열해 주세요",
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
                          "plain_text": "170℃로 오븐을 예열해 주세요",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "829fd905-6ef7-4ad6-ae69-94222516b881",
              "parent": {
                  "type": "page_id",
                  "page_id": "83c7212f-3944-46bf-8397-040dbc10c534"
              },
              "created_time": "2023-08-18T03:34:00.000Z",
              "last_edited_time": "2023-08-18T03:34:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "통밀가루, 코코넛 분말, 타피오카 전분, 베이킹파우더, 소금을 체 쳐주세요.",
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
                          "plain_text": "통밀가루, 코코넛 분말, 타피오카 전분, 베이킹파우더, 소금을 체 쳐주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "8d8af1cb-74c3-4ff1-b9d0-68f973af518c",
              "parent": {
                  "type": "page_id",
                  "page_id": "83c7212f-3944-46bf-8397-040dbc10c534"
              },
              "created_time": "2023-08-18T03:34:00.000Z",
              "last_edited_time": "2023-08-18T03:34:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "두유와 비정제 원당을 섞다가 현미유를 넣고 잘 섞어 주세요.",
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
                          "plain_text": "두유와 비정제 원당을 섞다가 현미유를 넣고 잘 섞어 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "6f94eb35-4a6e-468e-810e-d3c61aa41a38",
              "parent": {
                  "type": "page_id",
                  "page_id": "83c7212f-3944-46bf-8397-040dbc10c534"
              },
              "created_time": "2023-08-18T03:34:00.000Z",
              "last_edited_time": "2023-08-18T03:34:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "액체 재료와 가루 재료를 섞어 주세요. 점점 한 덩어리로 뭉칠 거예요. 어느 정도 뭉치면 초코칩과 코코넛 롱슈레드를 넣고 한 덩어리로 만들어 주세요.",
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
                          "plain_text": "액체 재료와 가루 재료를 섞어 주세요. 점점 한 덩어리로 뭉칠 거예요. 어느 정도 뭉치면 초코칩과 코코넛 롱슈레드를 넣고 한 덩어리로 만들어 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "204538fa-1617-4434-bcf8-b86556094621",
              "parent": {
                  "type": "page_id",
                  "page_id": "83c7212f-3944-46bf-8397-040dbc10c534"
              },
              "created_time": "2023-08-18T03:34:00.000Z",
              "last_edited_time": "2023-08-18T03:34:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "반죽을 냉장실에 40분간 넣어 주세요.",
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
                          "plain_text": "반죽을 냉장실에 40분간 넣어 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "30919a4b-84df-48cb-b9c3-4a5c4445d3c5",
              "parent": {
                  "type": "page_id",
                  "page_id": "83c7212f-3944-46bf-8397-040dbc10c534"
              },
              "created_time": "2023-08-18T03:34:00.000Z",
              "last_edited_time": "2023-08-18T03:34:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "반죽을 5cm 아이스크림 스쿱으로 팬닝한 후 장식용 코코넛 채를 올려 주세요.",
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
                          "plain_text": "반죽을 5cm 아이스크림 스쿱으로 팬닝한 후 장식용 코코넛 채를 올려 주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "3c49effd-7eb0-46b6-bd09-e58429bc2eb0",
              "parent": {
                  "type": "page_id",
                  "page_id": "83c7212f-3944-46bf-8397-040dbc10c534"
              },
              "created_time": "2023-08-18T03:34:00.000Z",
              "last_edited_time": "2023-08-18T03:35:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "20분 정도 굽다가 오븐 팬 위치를 바꾸고 5분을 마저 구워주세요.",
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
                          "plain_text": "20분 정도 굽다가 오븐 팬 위치를 바꾸고 5분을 마저 구워주세요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "0661ad67-3c2e-4d91-a71f-c521d00c1dfc",
              "parent": {
                  "type": "page_id",
                  "page_id": "83c7212f-3944-46bf-8397-040dbc10c534"
              },
              "created_time": "2023-08-18T04:12:00.000Z",
              "last_edited_time": "2023-08-18T04:12:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "ed35744b-5fb1-4dda-9443-24136a309040",
              "parent": {
                  "type": "page_id",
                  "page_id": "83c7212f-3944-46bf-8397-040dbc10c534"
              },
              "created_time": "2023-08-18T04:12:00.000Z",
              "last_edited_time": "2023-08-18T04:12:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [
                      {
                          "type": "text",
                          "text": {
                              "content": "💡 온도 사양에 따라 굽는 시간이 달라요.",
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
                          "plain_text": "💡 온도 사양에 따라 굽는 시간이 달라요.",
                          "href": null
                      }
                  ],
                  "color": "default"
              }
          },
          {
              "object": "block",
              "id": "557ce43e-005a-43e1-89e0-1f903aeaa426",
              "parent": {
                  "type": "page_id",
                  "page_id": "83c7212f-3944-46bf-8397-040dbc10c534"
              },
              "created_time": "2023-08-18T03:35:00.000Z",
              "last_edited_time": "2023-08-18T03:35:00.000Z",
              "created_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "last_edited_by": {
                  "object": "user",
                  "id": "6afa59b7-ee33-4b1f-a469-cc07a6f31df4"
              },
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": {
                  "rich_text": [],
                  "color": "default"
              }
          }
      ],
      "next_cursor": null,
      "has_more": false,
      "type": "block",
      "block": {}
  }
];
    
  useEffect(() => {
    async function fetchData() {
      try {
        // const response = await fetch(`/api/blocks/${router.query.id}`);
        // const responseData = await response.json();

        const responseData2 = myData.find(result => 
          result.results[0].parent.page_id === String(router.query.id)
        );

        let order = 1;
        if(responseData2) {
            setTitle(responseData2.title);
            for (const block of responseData2.results) {
                if (block.type === "numbered_list_item") {
                    if(block.numbered_list_item){
                        const content = block.numbered_list_item.rich_text[0].text.content
                        block.numbered_list_item.rich_text[0].text.content 
                        = `${order}.${block.numbered_list_item.rich_text[0].text.content}`;
                        order++;
                    }
                }
              }
              setBlocks(responseData2.results);
        }
      } catch (error) {
        console.error('Error fetching block data:', error);
      }
    }
    fetchData();
  }, [router.query.id]);

    return ( 
      <div className="w-full h-full md:px-14 pt-28 flex flex-col justify-center items-center space-y-10">
        <div className="h-1/4 px-5 flex flex-col justify-center items-center">
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