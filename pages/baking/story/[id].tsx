import RichTextRenderer from "@/styles/RichTextRenderer";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Detail() {
  const router = useRouter();
  const [blocks, setBlocks] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const myData = [
    {
        "title":"카카오? 코코아?",
        "object": "list",
        "results": [
            {
                "object": "block",
                "id": "ca3d267c-1bfb-42fa-889d-46d177812e6b",
                "parent": {
                    "type": "page_id",
                    "page_id": "5a520787-9218-4218-8307-480c257c4012"
                },
                "created_time": "2023-09-09T13:01:00.000Z",
                "last_edited_time": "2023-09-09T13:01:00.000Z",
                "created_by": {
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
                        "url": "https://images.unsplash.com/photo-1507576164121-220762647800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&w=1470&q=80"
                    }
                }
            },
            {
                "object": "block",
                "id": "6141b949-a93d-44eb-bcf1-0a9f5a4ddac3",
                "parent": {
                    "type": "page_id",
                    "page_id": "5a520787-9218-4218-8307-480c257c4012"
                },
                "created_time": "2023-09-09T13:01:00.000Z",
                "last_edited_time": "2023-09-09T13:01:00.000Z",
                "created_by": {
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
                                "content": "어떤 사람은 코코아라하고, 어떤 사람은 카카오라 하는데, 서로 다를까요?  코코아와 카카오는 사실 같은 말입니다. 우리나라와 영어권에서는 '코코아'라 하고, 프랑스에서는 '카카오'라 합니다.\n영어권에서는 코코아 매스, 코코아 버터, 코코아 분말 등 가공품에 ‘코코아’라 하고, 가공 전 열매에는 ‘카카오’라고 합니다. 하지만 프랑스에서는 가공한 코코아 매스를 파트 드 카카오(pate de cacao), 코코아 버터를 뵈르 드 카카오(beurre de cacao), 코코아 분말을 푸드흐 드 카카오(poudre de cacao)라고 합니다. 코코아라는 단어를 사용하지 않습니다.\n카카오나무 열매인 카카오는 초콜릿의 원료입니다. 열매의 이름은 페드 드 카카오(feve de cacao)입니다. 카카오 빈(cacao bean)은 열매 속 달콤한 과육을 말합니다. 이 카카오 빈을 발효하고 건조한 것이 카카오입니다. 카카오 빈을 로스팅한 후 갈면 카카오 매스가 되고, 카카오 매스를 압착한 후 지방을 분리하면 카카오버터가 됩니다. 초콜릿은 카카오 매스, 카카오버터, 설탕을 섞은 것입니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "어떤 사람은 코코아라하고, 어떤 사람은 카카오라 하는데, 서로 다를까요?  코코아와 카카오는 사실 같은 말입니다. 우리나라와 영어권에서는 '코코아'라 하고, 프랑스에서는 '카카오'라 합니다.\n영어권에서는 코코아 매스, 코코아 버터, 코코아 분말 등 가공품에 ‘코코아’라 하고, 가공 전 열매에는 ‘카카오’라고 합니다. 하지만 프랑스에서는 가공한 코코아 매스를 파트 드 카카오(pate de cacao), 코코아 버터를 뵈르 드 카카오(beurre de cacao), 코코아 분말을 푸드흐 드 카카오(poudre de cacao)라고 합니다. 코코아라는 단어를 사용하지 않습니다.\n카카오나무 열매인 카카오는 초콜릿의 원료입니다. 열매의 이름은 페드 드 카카오(feve de cacao)입니다. 카카오 빈(cacao bean)은 열매 속 달콤한 과육을 말합니다. 이 카카오 빈을 발효하고 건조한 것이 카카오입니다. 카카오 빈을 로스팅한 후 갈면 카카오 매스가 되고, 카카오 매스를 압착한 후 지방을 분리하면 카카오버터가 됩니다. 초콜릿은 카카오 매스, 카카오버터, 설탕을 섞은 것입니다.",
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
        "title":"아마씨 달걀? 치아씨드 달걀?",
        "object": "list",
        "results": [
            {
                "object": "block",
                "id": "4e422e2f-27f6-4f96-8819-23c9d6068453",
                "parent": {
                    "type": "page_id",
                    "page_id": "ef6cd908-ba40-441b-9e0a-a9f18afc7635"
                },
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
                "has_children": false,
                "archived": false,
                "type": "image",
                "image": {
                    "caption": [],
                    "type": "external",
                    "external": {
                        "url": "https://images.unsplash.com/photo-1609045630693-efe04b372eec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&w=1470&q=80"
                    }
                }
            },
            {
                "object": "block",
                "id": "dabe3bf4-4d8b-4d02-b9ea-96b9ac628c24",
                "parent": {
                    "type": "page_id",
                    "page_id": "ef6cd908-ba40-441b-9e0a-a9f18afc7635"
                },
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
                "has_children": false,
                "archived": false,
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "아마씨(flaxseed)는 고대 문명 시절부터 식량으로 사용되어 온 식물입니다. 아마씨는 작고 둥글며 갈색이나 금색으로 빛나는 씨앗으로, 콩, 귀리 등과 함께 식물성 단백질의 대표적인 원료 중 하나입니다.\n아마씨의 장점은 다음과 같습니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "아마씨(flaxseed)는 고대 문명 시절부터 식량으로 사용되어 온 식물입니다. 아마씨는 작고 둥글며 갈색이나 금색으로 빛나는 씨앗으로, 콩, 귀리 등과 함께 식물성 단백질의 대표적인 원료 중 하나입니다.\n아마씨의 장점은 다음과 같습니다.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "2eb445d5-3afe-4e24-aa0a-d843a5585462",
                "parent": {
                    "type": "page_id",
                    "page_id": "ef6cd908-ba40-441b-9e0a-a9f18afc7635"
                },
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
                "has_children": false,
                "archived": false,
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "영양성분이 풍부합니다. 아마씨는 단백질, 식이섬유, 마그네슘, 인, 철, 칼슘 등이 풍부하게 함유되어 있습니다.\n식물성 단백질을 공급합니다. 채식주의자인 경우 좋은 단백질 공급원입니다. 글루텐이 없습니다. 아마씨는 글루텐이 없기 때문에 글루텐에 민감한 사람들도 섭취할 수 있습니다.\n다양한 요리에 이용할 수 있습니다. 아마씨는 죽, 샐러드, 파스타, 베이킹 등 다양한 요리에 이용할 수 있습니다.\n아마씨의 단점은 크게 없지만, 대량으로 섭취하면 소화장애를 일으킬 수 있으니 적당한 양으로 섭취하는 것이 좋습니다. 또한, 아마씨를 섭취할 때 물을 충분히 마시는 것이 좋습니다.\n치아씨드는 식물인 치아나무(Chia Plant)의 종자로, 멕시코와 중남미에서 아주 오랫동안 먹어 온 식품입니다.\n치아씨드의 장점은 다음과 같습니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "영양성분이 풍부합니다. 아마씨는 단백질, 식이섬유, 마그네슘, 인, 철, 칼슘 등이 풍부하게 함유되어 있습니다.\n식물성 단백질을 공급합니다. 채식주의자인 경우 좋은 단백질 공급원입니다. 글루텐이 없습니다. 아마씨는 글루텐이 없기 때문에 글루텐에 민감한 사람들도 섭취할 수 있습니다.\n다양한 요리에 이용할 수 있습니다. 아마씨는 죽, 샐러드, 파스타, 베이킹 등 다양한 요리에 이용할 수 있습니다.\n아마씨의 단점은 크게 없지만, 대량으로 섭취하면 소화장애를 일으킬 수 있으니 적당한 양으로 섭취하는 것이 좋습니다. 또한, 아마씨를 섭취할 때 물을 충분히 마시는 것이 좋습니다.\n치아씨드는 식물인 치아나무(Chia Plant)의 종자로, 멕시코와 중남미에서 아주 오랫동안 먹어 온 식품입니다.\n치아씨드의 장점은 다음과 같습니다.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "ed7f6c83-ffe2-4c64-9c2b-e92a9e821da5",
                "parent": {
                    "type": "page_id",
                    "page_id": "ef6cd908-ba40-441b-9e0a-a9f18afc7635"
                },
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
                "has_children": false,
                "archived": false,
                "type": "numbered_list_item",
                "numbered_list_item": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "식물성 단백질과 오메가-3 지방산이 풍부하므로 식물성 식품 중에서도 영양성이 높은 편입니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "식물성 단백질과 오메가-3 지방산이 풍부하므로 식물성 식품 중에서도 영양성이 높은 편입니다.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "ea60882a-f1bb-464c-9faf-a0d890f73ed1",
                "parent": {
                    "type": "page_id",
                    "page_id": "ef6cd908-ba40-441b-9e0a-a9f18afc7635"
                },
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
                "has_children": false,
                "archived": false,
                "type": "numbered_list_item",
                "numbered_list_item": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "섬유질이 풍부하여 소화와 변비 개선에 도움을 줄 수 있습니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "섬유질이 풍부하여 소화와 변비 개선에 도움을 줄 수 있습니다.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "c11846dd-141e-4702-9500-59378e2a9933",
                "parent": {
                    "type": "page_id",
                    "page_id": "ef6cd908-ba40-441b-9e0a-a9f18afc7635"
                },
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
                "has_children": false,
                "archived": false,
                "type": "numbered_list_item",
                "numbered_list_item": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "혈당 조절에 도움을 주는 섬유질과 단백질이 풍부해 당뇨 환자에게 좋습니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "혈당 조절에 도움을 주는 섬유질과 단백질이 풍부해 당뇨 환자에게 좋습니다.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "f8424964-f505-4efb-8696-47a6307ddf4f",
                "parent": {
                    "type": "page_id",
                    "page_id": "ef6cd908-ba40-441b-9e0a-a9f18afc7635"
                },
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
                "has_children": false,
                "archived": false,
                "type": "numbered_list_item",
                "numbered_list_item": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "식물성 재료로 콜레스테롤이 없어 심혈관 질환 예방에 도움이 됩니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "식물성 재료로 콜레스테롤이 없어 심혈관 질환 예방에 도움이 됩니다.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "54ca726b-c31d-4794-b6f9-52287eb56739",
                "parent": {
                    "type": "page_id",
                    "page_id": "ef6cd908-ba40-441b-9e0a-a9f18afc7635"
                },
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
                "has_children": false,
                "archived": false,
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "반면에 단점도 있습니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "반면에 단점도 있습니다.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "e8fbae28-b93f-4f70-b7d7-7adefce9f76b",
                "parent": {
                    "type": "page_id",
                    "page_id": "ef6cd908-ba40-441b-9e0a-a9f18afc7635"
                },
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
                "has_children": false,
                "archived": false,
                "type": "numbered_list_item",
                "numbered_list_item": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "치아씨드를 과도하게 섭취하면 소화 문제가 발생할 수 있습니다. 치아씨드를 섭취할 때는 충분한 물과 함께 섭취하거나 미리 물에 불리어 부드럽게 만들어 먹는 것이 좋습니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "치아씨드를 과도하게 섭취하면 소화 문제가 발생할 수 있습니다. 치아씨드를 섭취할 때는 충분한 물과 함께 섭취하거나 미리 물에 불리어 부드럽게 만들어 먹는 것이 좋습니다.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "5d917639-e980-4666-82f5-299de884bd4e",
                "parent": {
                    "type": "page_id",
                    "page_id": "ef6cd908-ba40-441b-9e0a-a9f18afc7635"
                },
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
                "has_children": false,
                "archived": false,
                "type": "numbered_list_item",
                "numbered_list_item": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "일부 사람들은 치아씨드에 알레르기 반응을 보일 수 있으므로, 처음 섭취하는 경우에는 적은 양을 먹어 보고 몸의 상태를 살펴보는 편이 좋습니다.\n아마씨와 치아씨드의 차이 중 하나는 맛입니다. 견과류와 비슷한 맛이 나는 아마씨와는 달리, 치아씨드는 더욱 특별한 맛을 갖고 있지 않습니다. 게다가, 아마씨는 치아씨드보다 더 짙고 끈적거리는 젤을 만듭니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "일부 사람들은 치아씨드에 알레르기 반응을 보일 수 있으므로, 처음 섭취하는 경우에는 적은 양을 먹어 보고 몸의 상태를 살펴보는 편이 좋습니다.\n아마씨와 치아씨드의 차이 중 하나는 맛입니다. 견과류와 비슷한 맛이 나는 아마씨와는 달리, 치아씨드는 더욱 특별한 맛을 갖고 있지 않습니다. 게다가, 아마씨는 치아씨드보다 더 짙고 끈적거리는 젤을 만듭니다.",
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
        "title":"아몬드 가루",
        "object": "list",
        "results": [
            {
                "object": "block",
                "id": "0b80cf5b-c78b-42f9-8fb9-cb496da67b41",
                "parent": {
                    "type": "page_id",
                    "page_id": "2c9c05e9-f7a8-40b0-8d4f-b00423ab600d"
                },
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
                "has_children": false,
                "archived": false,
                "type": "image",
                "image": {
                    "caption": [],
                    "type": "external",
                    "external": {
                        "url": "https://images.unsplash.com/photo-1626196340006-f89d9bedf1c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&w=1374&q=80"
                    }
                }
            },
            {
                "object": "block",
                "id": "8873321f-b210-41f2-b60c-dfc4a0712605",
                "parent": {
                    "type": "page_id",
                    "page_id": "2c9c05e9-f7a8-40b0-8d4f-b00423ab600d"
                },
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
                "has_children": false,
                "archived": false,
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "아몬드는 영양성분이 풍부한 건강한 견과류 중 하나입니다. 아몬드는 어떤 효능이 있을까요?\n단백질과 영양소: 아몬드는 단백질, 식이섬유, 비타민 E, 칼슘, 마그네슘 등 다양한 영양소가 풍부합니다. 특히, 1/4컵(약 28그램)의 아몬드에는 약 6그램의 단백질, 4그램의 식이섬유, 40% 이상의 일일 권장량을 충족시키는 비타민 E가 들어있습니다.\n혈당 조절: 아몬드는 혈당을 조절하는 데 도움을 줄 수 있습니다. 식이섬유와 단백질이 풍부하며, 이들은 혈당이 급격하게 상승하지 않도록 하는 효과가 있습니다.  2019년 미국 성인 대상으로 실시한 연구에서는, 일주일에 4번 이상 아몬드를 섭취한 사람들이 섭취하지 않은 사람들보다 혈중 콜레스테롤 수치가 낮았으며, 혈당 수치가 안정적이었습니다.\n콜레스테롤 개선: 아몬드는 고지방 식품이지만, 포화지방산보다는 단일불포화지방과 다중 불포화지방이 풍부합니다. 이들은 혈중 콜레스테롤을 개선하는 데 도움을 줄 수 있습니다.\n다이어트와 체중 관리: 아몬드는 높은 단백질과 식이섬유 함량 때문에 다이어트와 체중 관리에도 도움이 될 수 있습니다. 일부 연구에 따르면, 아몬드를 간식으로 섭취하면 포만감을 유지하면서 칼로리 섭취량을 줄일 수 있다는 것이 입증되어 있습니다.\n심혈관 건강: 아몬드에는 마그네슘, 칼슘, 칼륨 등 다양한 미네랄이 풍부하며, 이들은 심혈관 건강에 도움을 줄 수 있습니다.\n따라서 아몬드는 건강한 식습관을 위한 좋은 선택 중 하나입니다. 하지만 고지방 식품이므로 적당한 양을 섭취하고, 다른 영양소를 고려하여 균형 잡힌 식습관을 유지하는 것이 중요합니다.\n비건 베이킹 재료로 아몬드 가루를 자주 사용해요. 아몬드 가루는 아몬드를 가루 형태로 만든 것을 말합니다. 이런 아몬드 가루는 베이킹에서 어떤 역할을 할까요?\n밀가루 대체 가루로 사용 가능: 아몬드 가루는 밀가루를 대체할 수 있어서, 밀가루를 섭취하지 말아야 하는 비건, 키토 베이킹으로 사용합니다.풍부한 단백질: 아몬드 한 줌에는 삶은 달걀 1개와 동일한 양의 단백질(30ｇ당 6ｇ)이 들어있습니다. 즉 아몬드 가루는 식이섬유와 단백질이 풍부하며, 지방 함량이 낮아서 건강에 이로운 영양소가 많이 들어있습니다. 부드러운 질감: 아몬드 가루를 사용하면 베이킹 제품의 부드러운 질감과 촉촉한 맛을 만들 수 있습니다.달걀 대체: 아몬드 가루는 달걀 대체재로 사용되기도 하며, 달걀을 사용하지 않아도 베이킹 모양을 잘 만들 수 있습니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "아몬드는 영양성분이 풍부한 건강한 견과류 중 하나입니다. 아몬드는 어떤 효능이 있을까요?\n단백질과 영양소: 아몬드는 단백질, 식이섬유, 비타민 E, 칼슘, 마그네슘 등 다양한 영양소가 풍부합니다. 특히, 1/4컵(약 28그램)의 아몬드에는 약 6그램의 단백질, 4그램의 식이섬유, 40% 이상의 일일 권장량을 충족시키는 비타민 E가 들어있습니다.\n혈당 조절: 아몬드는 혈당을 조절하는 데 도움을 줄 수 있습니다. 식이섬유와 단백질이 풍부하며, 이들은 혈당이 급격하게 상승하지 않도록 하는 효과가 있습니다.  2019년 미국 성인 대상으로 실시한 연구에서는, 일주일에 4번 이상 아몬드를 섭취한 사람들이 섭취하지 않은 사람들보다 혈중 콜레스테롤 수치가 낮았으며, 혈당 수치가 안정적이었습니다.\n콜레스테롤 개선: 아몬드는 고지방 식품이지만, 포화지방산보다는 단일불포화지방과 다중 불포화지방이 풍부합니다. 이들은 혈중 콜레스테롤을 개선하는 데 도움을 줄 수 있습니다.\n다이어트와 체중 관리: 아몬드는 높은 단백질과 식이섬유 함량 때문에 다이어트와 체중 관리에도 도움이 될 수 있습니다. 일부 연구에 따르면, 아몬드를 간식으로 섭취하면 포만감을 유지하면서 칼로리 섭취량을 줄일 수 있다는 것이 입증되어 있습니다.\n심혈관 건강: 아몬드에는 마그네슘, 칼슘, 칼륨 등 다양한 미네랄이 풍부하며, 이들은 심혈관 건강에 도움을 줄 수 있습니다.\n따라서 아몬드는 건강한 식습관을 위한 좋은 선택 중 하나입니다. 하지만 고지방 식품이므로 적당한 양을 섭취하고, 다른 영양소를 고려하여 균형 잡힌 식습관을 유지하는 것이 중요합니다.\n비건 베이킹 재료로 아몬드 가루를 자주 사용해요. 아몬드 가루는 아몬드를 가루 형태로 만든 것을 말합니다. 이런 아몬드 가루는 베이킹에서 어떤 역할을 할까요?\n밀가루 대체 가루로 사용 가능: 아몬드 가루는 밀가루를 대체할 수 있어서, 밀가루를 섭취하지 말아야 하는 비건, 키토 베이킹으로 사용합니다.풍부한 단백질: 아몬드 한 줌에는 삶은 달걀 1개와 동일한 양의 단백질(30ｇ당 6ｇ)이 들어있습니다. 즉 아몬드 가루는 식이섬유와 단백질이 풍부하며, 지방 함량이 낮아서 건강에 이로운 영양소가 많이 들어있습니다. 부드러운 질감: 아몬드 가루를 사용하면 베이킹 제품의 부드러운 질감과 촉촉한 맛을 만들 수 있습니다.달걀 대체: 아몬드 가루는 달걀 대체재로 사용되기도 하며, 달걀을 사용하지 않아도 베이킹 모양을 잘 만들 수 있습니다.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "52ea9888-837e-4e28-b347-42b633f03725",
                "parent": {
                    "type": "page_id",
                    "page_id": "2c9c05e9-f7a8-40b0-8d4f-b00423ab600d"
                },
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
                "id": "d6325458-08aa-43a2-ac32-5456158b3369",
                "parent": {
                    "type": "page_id",
                    "page_id": "2c9c05e9-f7a8-40b0-8d4f-b00423ab600d"
                },
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
                "has_children": false,
                "archived": false,
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "아몬드 가루를 보관법",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "아몬드 가루를 보관법",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "8254f493-f1e9-4d39-8572-036002cffec0",
                "parent": {
                    "type": "page_id",
                    "page_id": "2c9c05e9-f7a8-40b0-8d4f-b00423ab600d"
                },
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
                "has_children": false,
                "archived": false,
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "냉장 보관: 아몬드 가루를 냉장고에 보관하면 상온보다 오래 보관할 수 있습니다. 밀폐용기에 담아 냉장고에 보관하면 1~2달 정도 사용할 수 있습니다.냉동 보관: 아몬드 가루를 냉동고에 보관하면 더 오래 보관할 수 있습니다. 밀폐용기에 담아 냉동고에 보관하면 6개월 이상 보관할 수 있습니다.실온 보관: 아몬드 가루를 상온에서 보관하면 오랫동안 사용하기 어렵습니다. 공기나 습기가 많은 곳에 놓으면 가루가 변질하거나 상하기 쉬우므로 피하는 것이 좋습니다.**\n또한, 아몬드 가루를 보관할 때는 냄새와 습기가 없는 곳에 보관하는 것이 좋습니다. 그리고 사용하기 전에 가루가 응축되어 있는지 확인하고, 응축된 부분을 가볍게 흔들어서 분리해 주면 좋습니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "냉장 보관: 아몬드 가루를 냉장고에 보관하면 상온보다 오래 보관할 수 있습니다. 밀폐용기에 담아 냉장고에 보관하면 1~2달 정도 사용할 수 있습니다.냉동 보관: 아몬드 가루를 냉동고에 보관하면 더 오래 보관할 수 있습니다. 밀폐용기에 담아 냉동고에 보관하면 6개월 이상 보관할 수 있습니다.실온 보관: 아몬드 가루를 상온에서 보관하면 오랫동안 사용하기 어렵습니다. 공기나 습기가 많은 곳에 놓으면 가루가 변질하거나 상하기 쉬우므로 피하는 것이 좋습니다.**\n또한, 아몬드 가루를 보관할 때는 냄새와 습기가 없는 곳에 보관하는 것이 좋습니다. 그리고 사용하기 전에 가루가 응축되어 있는지 확인하고, 응축된 부분을 가볍게 흔들어서 분리해 주면 좋습니다.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "675064f4-0cbc-439e-bc38-712484130bdb",
                "parent": {
                    "type": "page_id",
                    "page_id": "2c9c05e9-f7a8-40b0-8d4f-b00423ab600d"
                },
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
        "title":"Xanthan Gum (잔탄검)",
        "object": "list",
        "results": [
            {
                "object": "block",
                "id": "c0bb9e6f-c0f9-46ab-9d3c-483826a0f60a",
                "parent": {
                    "type": "page_id",
                    "page_id": "77f51a4d-34a3-4bc1-b985-8abc53d34329"
                },
                "created_time": "2023-09-09T12:59:00.000Z",
                "last_edited_time": "2023-09-09T12:59:00.000Z",
                "created_by": {
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
                        "url": "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&w=1470&q=80"
                    }
                }
            },
            {
                "object": "block",
                "id": "5d977b1f-f9c0-4600-ae18-9696c8252bf3",
                "parent": {
                    "type": "page_id",
                    "page_id": "77f51a4d-34a3-4bc1-b985-8abc53d34329"
                },
                "created_time": "2023-09-09T12:59:00.000Z",
                "last_edited_time": "2023-09-09T12:59:00.000Z",
                "created_by": {
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
                                "content": "Xanthan Gum(잔탄검)은 식품 첨가물 중 하나로, 옥수수, 밀, 대두 등에 포함된 포도당 성분을 발효시켜 얻어진 천연 점착제입니다. 일반적으로 산업용 미생물 발효법을 사용하여 발효시킨 후, 분말 또는 굳어진 형태로 제공됩니다.\n잔탄검은 높은 점착성을 가지고 있어, 식품의 질감, 미각 및 안정성을 향상하는 데 도움이 됩니다. 또한, 산성도와 열 안정성이 우수하기 때문에 다양한 식품 제품에 적용할 수 있습니다.\n잔탄검은 안전성이 높은 첨가물 중 하나이며, 대부분 사람이 섭취해도 부작용이 거의 없습니다. 사실, 2017년에 발표된 유럽 식품 안전처의 식품 첨가물에 관한  \"식품첨가물인 잔탄검(E 415)의 재평가\"라는 연구에 따르면, \"잔탄검(E 415)은 식품첨가물로서 인체 유해한 우려가 없다... 많이 섭취해도 문제가 없다\"라고 말하고 있습니다. 해당 연구 논문은 여기에서 확인하실 수 있습니다. ",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "Xanthan Gum(잔탄검)은 식품 첨가물 중 하나로, 옥수수, 밀, 대두 등에 포함된 포도당 성분을 발효시켜 얻어진 천연 점착제입니다. 일반적으로 산업용 미생물 발효법을 사용하여 발효시킨 후, 분말 또는 굳어진 형태로 제공됩니다.\n잔탄검은 높은 점착성을 가지고 있어, 식품의 질감, 미각 및 안정성을 향상하는 데 도움이 됩니다. 또한, 산성도와 열 안정성이 우수하기 때문에 다양한 식품 제품에 적용할 수 있습니다.\n잔탄검은 안전성이 높은 첨가물 중 하나이며, 대부분 사람이 섭취해도 부작용이 거의 없습니다. 사실, 2017년에 발표된 유럽 식품 안전처의 식품 첨가물에 관한  \"식품첨가물인 잔탄검(E 415)의 재평가\"라는 연구에 따르면, \"잔탄검(E 415)은 식품첨가물로서 인체 유해한 우려가 없다... 많이 섭취해도 문제가 없다\"라고 말하고 있습니다. 해당 연구 논문은 여기에서 확인하실 수 있습니다. ",
                            "href": null
                        },
                        {
                            "type": "text",
                            "text": {
                                "content": "Re ‐ evaluation of xanthan gum (E 415) as a food additive - PMC (nih.gov)",
                                "link": {
                                    "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7009887/"
                                }
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "Re ‐ evaluation of xanthan gum (E 415) as a food additive - PMC (nih.gov)",
                            "href": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7009887/"
                        },
                        {
                            "type": "text",
                            "text": {
                                "content": " 그러나 일부  밀, 옥수수, 콩, 유제품 알레르기가 심한 사람은 잔탄검에 알레르기 반응을 보일 수 있으므로, 제품 선택 시 꼭 확인해야 합니다.\n일반적으로, 잔탄검은 글루텐이 없는 베이킹에서 쉽게 사용됩니다. 잔탄검은 베이킹 도중 형성되는 글루텐의 대체물질로 사용할 수 있습니다. 따라서 글루텐이 없는 베이킹에서 빵, 케이크, 쿠키 등을 만들 때 잔탄검을 넣어 제품의 구성과 질감을 향상할 수 있습니다.\n또한, 잔탄검은 베이킹에서 안정성을 제공하는 역할도 합니다. 예를 들어, 잔탄검을 사용하면 케이크와 같은 제품의 성형이 더 쉬워지며, 제품이 더욱 부드럽고 촉촉하게 유지할 수 있습니다.\n또한, 잔탄검은 베이킹에서 점성을 높여 줍니다. 소스나 크림, 아이싱 등과 같은 토핑 재료를 더욱 부드럽게 만들어 주어, 제품의 외관과 맛을 개선할 수 있습니다. 이러한 이유로, 잔탄검은 베이킹에서 다양한 용도로 사용되며, 글루텐이 없는 베이킹에서는 특히 중요한 첨가물 중 하나입니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": " 그러나 일부  밀, 옥수수, 콩, 유제품 알레르기가 심한 사람은 잔탄검에 알레르기 반응을 보일 수 있으므로, 제품 선택 시 꼭 확인해야 합니다.\n일반적으로, 잔탄검은 글루텐이 없는 베이킹에서 쉽게 사용됩니다. 잔탄검은 베이킹 도중 형성되는 글루텐의 대체물질로 사용할 수 있습니다. 따라서 글루텐이 없는 베이킹에서 빵, 케이크, 쿠키 등을 만들 때 잔탄검을 넣어 제품의 구성과 질감을 향상할 수 있습니다.\n또한, 잔탄검은 베이킹에서 안정성을 제공하는 역할도 합니다. 예를 들어, 잔탄검을 사용하면 케이크와 같은 제품의 성형이 더 쉬워지며, 제품이 더욱 부드럽고 촉촉하게 유지할 수 있습니다.\n또한, 잔탄검은 베이킹에서 점성을 높여 줍니다. 소스나 크림, 아이싱 등과 같은 토핑 재료를 더욱 부드럽게 만들어 주어, 제품의 외관과 맛을 개선할 수 있습니다. 이러한 이유로, 잔탄검은 베이킹에서 다양한 용도로 사용되며, 글루텐이 없는 베이킹에서는 특히 중요한 첨가물 중 하나입니다.",
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
        "title":"Alll about 이스트(Yeast)",
        "object": "list",
        "results": [
            {
                "object": "block",
                "id": "550141b0-5c11-4751-ab62-28cbd80b4a9c",
                "parent": {
                    "type": "page_id",
                    "page_id": "5b6488f5-f887-431f-a325-bdb0096c79cb"
                },
                "created_time": "2023-09-09T12:59:00.000Z",
                "last_edited_time": "2023-09-09T12:59:00.000Z",
                "created_by": {
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
                        "url": "https://images.unsplash.com/photo-1581886020291-33855d6eaf3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&w=1470&q=80"
                    }
                }
            },
            {
                "object": "block",
                "id": "21a2d0f0-22bb-4322-ba5c-2c4a708dabc3",
                "parent": {
                    "type": "page_id",
                    "page_id": "5b6488f5-f887-431f-a325-bdb0096c79cb"
                },
                "created_time": "2023-09-09T12:58:00.000Z",
                "last_edited_time": "2023-09-09T12:58:00.000Z",
                "created_by": {
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
                                "content": "베이킹을 하다 보면 \"이스트\"를  한 번을 들어봤을 텐데요. 빵을 만들 경우에 그 발효를 담당하는 것이 바로 \"이스트\"입니다. 수분이 있는 환경에서 밀가루나 설탕을 먹는 과정에서 이산화탄소와 에탄올을 생산합니다. 이 과정에서 반죽을 부풀리고 부드럽게 만드는 역할을 합니다. 이 과정에서 반죽을 부풀리고 부드럽게 만드는 역할을 합니다.\n보통 빵을 만들 때 쓰는 이스트는 세 종류입니다.\n생이스트, 인스턴트 이스트, 액티브 드라이 이스트.\n액티브 드라이 이스트는 일반적으로 드라이 이스트라고도 부릅니다.\n세 종류는 이스트는 활성화하는 방법이 다르기 때문에 넣어야 하는 양도 다릅니다.\n생이스트는 건조하지 않은 상태로 매우 신선한 이스트로, 물과 설탕을 섞어 발효시키는 과정을 거쳐 사용됩니다. 생이스트는 발효 시간이 더 길기 때문에, 반죽의 맛과 향이 더욱 깊어집니다. 또, 더 큰 볼륨과 부드러운 질감을 만들어 줍니다. 하지만 보관하기가 어렵고 유통기한도 짧아서 그 단점을 보완하려고 나온 것이 인스턴트 이스트와 액티브 드라이 이스트입니다.\n세 종류 이스트 중 인스턴트 이스트는 가장 사용하기 쉽습니다. 적은 양을 사용해도 되기 때문에, 양적인 부담이 적습니다. 또한 인스턴트 이스트는 오래 보관이 가능합니다.\n액티브 드라이 이스트는 생이스트 다음으로 잘 부풀고 빵 맛이 좋습니다. 하지만 액티브 드라이 이스트는 인스턴트 이스트보다 사용하기 아주 조금 번거롭습니다. 액티브 드라이 이스트는  물이나 우유에 설탕 넣고 이스트 넣은 후 5분 정도 기다립니다. 하지만 드라이 이스트는 그냥 밀가루에 소금, 설탕, 이스트 이렇게 바로 넣어 사용합니다.\n액티브 드라이 이스트를 활성화했을 경우, 특유의 시큼한 냄새가 납니다. 따뜻한 물이나 우유를 사용할 경우에 이 시큼한 냄새가 많이 나서, 이 냄새가 싫으신 분들은 찬물이나 찬 우유에 액티브 드라이 이스트를 넣어 사용해도 되지만 이럴 경우,  발효 시간이 더 길어집니다.\n액티브 드라이 이스트와 인스턴트 이스트는 넣어줘야 하는 양에 거의 차이는 없습니다. 하지만 생이스트는 액티브 드라이 이스트와 인스턴트 이스트의 양을 넣으면 됩니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "베이킹을 하다 보면 \"이스트\"를  한 번을 들어봤을 텐데요. 빵을 만들 경우에 그 발효를 담당하는 것이 바로 \"이스트\"입니다. 수분이 있는 환경에서 밀가루나 설탕을 먹는 과정에서 이산화탄소와 에탄올을 생산합니다. 이 과정에서 반죽을 부풀리고 부드럽게 만드는 역할을 합니다. 이 과정에서 반죽을 부풀리고 부드럽게 만드는 역할을 합니다.\n보통 빵을 만들 때 쓰는 이스트는 세 종류입니다.\n생이스트, 인스턴트 이스트, 액티브 드라이 이스트.\n액티브 드라이 이스트는 일반적으로 드라이 이스트라고도 부릅니다.\n세 종류는 이스트는 활성화하는 방법이 다르기 때문에 넣어야 하는 양도 다릅니다.\n생이스트는 건조하지 않은 상태로 매우 신선한 이스트로, 물과 설탕을 섞어 발효시키는 과정을 거쳐 사용됩니다. 생이스트는 발효 시간이 더 길기 때문에, 반죽의 맛과 향이 더욱 깊어집니다. 또, 더 큰 볼륨과 부드러운 질감을 만들어 줍니다. 하지만 보관하기가 어렵고 유통기한도 짧아서 그 단점을 보완하려고 나온 것이 인스턴트 이스트와 액티브 드라이 이스트입니다.\n세 종류 이스트 중 인스턴트 이스트는 가장 사용하기 쉽습니다. 적은 양을 사용해도 되기 때문에, 양적인 부담이 적습니다. 또한 인스턴트 이스트는 오래 보관이 가능합니다.\n액티브 드라이 이스트는 생이스트 다음으로 잘 부풀고 빵 맛이 좋습니다. 하지만 액티브 드라이 이스트는 인스턴트 이스트보다 사용하기 아주 조금 번거롭습니다. 액티브 드라이 이스트는  물이나 우유에 설탕 넣고 이스트 넣은 후 5분 정도 기다립니다. 하지만 드라이 이스트는 그냥 밀가루에 소금, 설탕, 이스트 이렇게 바로 넣어 사용합니다.\n액티브 드라이 이스트를 활성화했을 경우, 특유의 시큼한 냄새가 납니다. 따뜻한 물이나 우유를 사용할 경우에 이 시큼한 냄새가 많이 나서, 이 냄새가 싫으신 분들은 찬물이나 찬 우유에 액티브 드라이 이스트를 넣어 사용해도 되지만 이럴 경우,  발효 시간이 더 길어집니다.\n액티브 드라이 이스트와 인스턴트 이스트는 넣어줘야 하는 양에 거의 차이는 없습니다. 하지만 생이스트는 액티브 드라이 이스트와 인스턴트 이스트의 양을 넣으면 됩니다.",
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
        "title":"스콘? 비스킷?",
        "object": "list",
        "results": [
            {
                "object": "block",
                "id": "e4e881a7-eacb-4cf0-a6cb-9b7f2cba0fe3",
                "parent": {
                    "type": "page_id",
                    "page_id": "26148f41-cc25-4c9c-a2c0-3f86fe357b23"
                },
                "created_time": "2023-08-18T02:48:00.000Z",
                "last_edited_time": "2023-08-18T02:48:00.000Z",
                "created_by": {
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
                        "url": "https://images.unsplash.com/photo-1577391846175-d57a76814389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&w=1374&q=80"
                    }
                }
            },
            {
                "object": "block",
                "id": "4b72e714-a94a-4765-b91a-cddb634d6eb2",
                "parent": {
                    "type": "page_id",
                    "page_id": "26148f41-cc25-4c9c-a2c0-3f86fe357b23"
                },
                "created_time": "2023-08-18T02:35:00.000Z",
                "last_edited_time": "2023-08-18T02:47:00.000Z",
                "created_by": {
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
                                "content": "베이킹파우더 또는 베이킹 소다 등 화학 팽창제를 사용해서 빠른 시간에 만드는 빵을 퀵 브레드(Quick Bread)라고 합니다. 스콘, 비스킷, 머핀, 컵케이크 등이 있습니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "베이킹파우더 또는 베이킹 소다 등 화학 팽창제를 사용해서 빠른 시간에 만드는 빵을 퀵 브레드(Quick Bread)라고 합니다. 스콘, 비스킷, 머핀, 컵케이크 등이 있습니다.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "74fd5baa-d775-4e0e-9245-5d99dc523c2d",
                "parent": {
                    "type": "page_id",
                    "page_id": "26148f41-cc25-4c9c-a2c0-3f86fe357b23"
                },
                "created_time": "2023-08-18T02:35:00.000Z",
                "last_edited_time": "2023-08-18T02:35:00.000Z",
                "created_by": {
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
                                "content": "스콘과 비스킷은 일부 유사점이 있지만, 재료, 제조 방법, 문화적 연관성 등에서 차이가 있습니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "스콘과 비스킷은 일부 유사점이 있지만, 재료, 제조 방법, 문화적 연관성 등에서 차이가 있습니다.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "650de865-1c6e-4c84-af1f-89509c4fc9fd",
                "parent": {
                    "type": "page_id",
                    "page_id": "26148f41-cc25-4c9c-a2c0-3f86fe357b23"
                },
                "created_time": "2023-08-18T02:35:00.000Z",
                "last_edited_time": "2023-08-18T02:35:00.000Z",
                "created_by": {
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
                                "content": "스콘의 유래는 스코틀랜드에 있습니다. 스콘은 스코틀랜드의 전통 음식 중 하나로, 1500년대부터 만들어 먹었다고 합니다. 처음에는 두껍고 큰 원형으로 만들어졌지만, 나중에는 작고 삼각형 모양으로 만들어지기도 했습니다. 스콘은 일반적으로 커피숍이나 차 시간에 간식으로 즐기며, 잼과 버터, 클로티드 크림 등과 함께 먹습니다. 스콘은 영국 및 영어권 국가에서 매우 인기 있는 빵 중 하나입니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "스콘의 유래는 스코틀랜드에 있습니다. 스콘은 스코틀랜드의 전통 음식 중 하나로, 1500년대부터 만들어 먹었다고 합니다. 처음에는 두껍고 큰 원형으로 만들어졌지만, 나중에는 작고 삼각형 모양으로 만들어지기도 했습니다. 스콘은 일반적으로 커피숍이나 차 시간에 간식으로 즐기며, 잼과 버터, 클로티드 크림 등과 함께 먹습니다. 스콘은 영국 및 영어권 국가에서 매우 인기 있는 빵 중 하나입니다.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "728a3e29-4341-470a-8969-8f869eb80322",
                "parent": {
                    "type": "page_id",
                    "page_id": "26148f41-cc25-4c9c-a2c0-3f86fe357b23"
                },
                "created_time": "2023-08-18T02:35:00.000Z",
                "last_edited_time": "2023-08-18T02:35:00.000Z",
                "created_by": {
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
                                "content": "스콘(Scone)의 명칭과 유래에는 이야기가 다양합니다. 스코틀랜드 군주의 대관식을 했던 장소인 Scone od Destiny(or Scone; 직사각형 돌 모양)에서 유래했다는 이야기도 있고, 영어 'fine white bread'라는 뜻의 독일어 Schoonbrot에서 유래했다고 이야기도 있습니다. 또한 어떤 사람들은 Gaelic(게일어)로 'shapeless mass', ' a large miuthful'이란 의미인 'Sgonn'에서 유래했다고 말합니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "스콘(Scone)의 명칭과 유래에는 이야기가 다양합니다. 스코틀랜드 군주의 대관식을 했던 장소인 Scone od Destiny(or Scone; 직사각형 돌 모양)에서 유래했다는 이야기도 있고, 영어 'fine white bread'라는 뜻의 독일어 Schoonbrot에서 유래했다고 이야기도 있습니다. 또한 어떤 사람들은 Gaelic(게일어)로 'shapeless mass', ' a large miuthful'이란 의미인 'Sgonn'에서 유래했다고 말합니다.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "7c92f195-8abf-4bad-8fdd-63c402c5a4f3",
                "parent": {
                    "type": "page_id",
                    "page_id": "26148f41-cc25-4c9c-a2c0-3f86fe357b23"
                },
                "created_time": "2023-08-18T02:35:00.000Z",
                "last_edited_time": "2023-08-18T02:35:00.000Z",
                "created_by": {
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
                                "content": "다양한 유래와 상관없이, 스콘은 처음에 귀리로 만든 동그란 반죽을 4~6조각의 삼각형으로 자른 후 철판에 올려 불에 굽는 방식이었다고 합니다. 시간이 흐르면서 밀가루로 반죽해서 오븐에 굽는 방식으로 변했습니다. 스콘은 삼각형, 원형, 사각형 등의 다양한 모양으로 만들어지고, 달달한 맛부터 허브류를 넣은 짭조름한 맛까지 여러 가지입니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "다양한 유래와 상관없이, 스콘은 처음에 귀리로 만든 동그란 반죽을 4~6조각의 삼각형으로 자른 후 철판에 올려 불에 굽는 방식이었다고 합니다. 시간이 흐르면서 밀가루로 반죽해서 오븐에 굽는 방식으로 변했습니다. 스콘은 삼각형, 원형, 사각형 등의 다양한 모양으로 만들어지고, 달달한 맛부터 허브류를 넣은 짭조름한 맛까지 여러 가지입니다.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "f2e7ab41-e488-4dc4-a381-5169677e171d",
                "parent": {
                    "type": "page_id",
                    "page_id": "26148f41-cc25-4c9c-a2c0-3f86fe357b23"
                },
                "created_time": "2023-08-18T02:35:00.000Z",
                "last_edited_time": "2023-08-18T02:35:00.000Z",
                "created_by": {
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
                                "content": "반면에 비스킷의 유래는 영국에서 시작되었습니다. 비스킷은 원래 \"두 번 구운 빵\"을 의미하는 \"twice-baked bread\"로, 오랫동안 보존이 가능한 음식으로 인기가 있었습니다. 이후 비스킷은 미국 남부로 전해져서, 미국의 조리법과 식문화에 맞게 변화하면서 현재의 모습을 갖추게 되었습니다. 현재 미국에서는 비스킷이 다양한 모양과 맛으로 제공되며, 식사와 간식으로 널리 즐겨지고 있습니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "반면에 비스킷의 유래는 영국에서 시작되었습니다. 비스킷은 원래 \"두 번 구운 빵\"을 의미하는 \"twice-baked bread\"로, 오랫동안 보존이 가능한 음식으로 인기가 있었습니다. 이후 비스킷은 미국 남부로 전해져서, 미국의 조리법과 식문화에 맞게 변화하면서 현재의 모습을 갖추게 되었습니다. 현재 미국에서는 비스킷이 다양한 모양과 맛으로 제공되며, 식사와 간식으로 널리 즐겨지고 있습니다.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "e9531d1e-e5b8-4153-a201-e474d96803cb",
                "parent": {
                    "type": "page_id",
                    "page_id": "26148f41-cc25-4c9c-a2c0-3f86fe357b23"
                },
                "created_time": "2023-08-18T02:35:00.000Z",
                "last_edited_time": "2023-08-18T02:35:00.000Z",
                "created_by": {
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
                                "content": "비스킷은 밀가루, 버터, 우유 또는 버터밀크, 베이킹파우더 등으로 만들어지며, 달콤하거나 짭짤한 맛을 가지고 있습니다. 비스킷은 둥근 모양의 반죽을 오븐에서 구워서, 아침 식사나 점심 식사와 같은 식사 시간에 항상 내놓습니다. 비스킷을 그냥 먹기도 하지만, 버터나 잼을 발라 먹기도 합니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "비스킷은 밀가루, 버터, 우유 또는 버터밀크, 베이킹파우더 등으로 만들어지며, 달콤하거나 짭짤한 맛을 가지고 있습니다. 비스킷은 둥근 모양의 반죽을 오븐에서 구워서, 아침 식사나 점심 식사와 같은 식사 시간에 항상 내놓습니다. 비스킷을 그냥 먹기도 하지만, 버터나 잼을 발라 먹기도 합니다.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "cba656f1-b88e-4afe-9553-6d8eb1c48939",
                "parent": {
                    "type": "page_id",
                    "page_id": "26148f41-cc25-4c9c-a2c0-3f86fe357b23"
                },
                "created_time": "2023-08-18T02:36:00.000Z",
                "last_edited_time": "2023-08-18T02:36:00.000Z",
                "created_by": {
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
                                "content": "비슷하지만 다른 점이 있는 비스킷과 스콘, 유래를 알고 먹으면 더 맛있지 않을까요?",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "비슷하지만 다른 점이 있는 비스킷과 스콘, 유래를 알고 먹으면 더 맛있지 않을까요?",
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
    }
]

  useEffect(() => {
    async function fetchData() {
      try {
        // const response = await fetch(`/api/pages/${router.query.id}`);
        // const responseData = await response.json();

        const responseData2 = myData.find(result => 
          result.results[0].parent.page_id = String(router.query.id)
        );

        if(responseData2) {
          setTitle(responseData2.title);
          setBlocks(responseData2.results);
        }
      } catch (error) {
        console.error('Error fetching title data:', error);
      }
    }
    fetchData();
  }, [router.query.id]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(`/api/blocks/${router.query.id}`);

//         const responseData = await response.json();
//         setBlocks(responseData.results);
//       } catch (error) {
//         console.error('Error fetching block data:', error);
//       }
//     }
//     fetchData();
//   }, [router.query.id]);

  return (
    <div className="w-full h-full px-14 py-28 flex flex-col justify-center items-center space-y-10">
      <div className="h-1/4 text-3xl flex flex-col justify-center items-center text-center space-y-3">
        {title}
      </div>
      <div className="h-5/6 pb-20 text-base tracking-wide leading-8">
        {blocks.map((block, index) => (
          <div key={index}>
            {block.type === "image" ?
            <div className="pb-10 flex flex-col justify-center items-center">
              <Image
                src={block.image.external.url}
                alt="This is story"
                priority
                width={700}
                height={400}
              /> 
            </div>
          : 
            <RichTextRenderer key={index} richTextData={block} /> }
          </div>
        ))}
      </div>
    </div>
  )
}