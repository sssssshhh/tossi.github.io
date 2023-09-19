import RichTextRenderer from "@/styles/RichTextRenderer";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';

export default function Detail() {
  const router = useRouter();
  const [blocks, setBlocks] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const myData2 = [
    {
        "title": "빵을 먹으면 몸에 안 좋을까요?",
        "object": "list",
        "results": [
            {
                "object": "block",
                "id": "38898eb1-5f4e-4ed0-9d06-7e43f78195f3",
                "parent": {
                    "type": "page_id",
                    "page_id": "c31e8c59-5403-48f8-840b-e4906a73cbec"
                },
                "created_time": "2023-09-09T13:05:00.000Z",
                "last_edited_time": "2023-09-09T13:05:00.000Z",
                "created_by": {
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
                        "url": "https://images.unsplash.com/photo-1486887396153-fa416526c108?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&w=1470&q=80"
                    }
                }
            },
            {
                "object": "block",
                "id": "0ff89ced-661e-4d4c-9c4a-3308d4edc941",
                "parent": {
                    "type": "page_id",
                    "page_id": "c31e8c59-5403-48f8-840b-e4906a73cbec"
                },
                "created_time": "2023-09-09T13:05:00.000Z",
                "last_edited_time": "2023-09-09T13:05:00.000Z",
                "created_by": {
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
                                "content": "빵은 몸에 안 좋을까요?\n빵의 기원을 보면, 철기 시대 전부터 인류는 곡식을 간 가루에 물을 넣고 반죽해서 구워 먹었다고 합니다. 이런 방식으로 빵을 만들어 먹었다고 사람들은 추측하고 있는데요. 이렇게 만들어 먹었던 빵은 우리 몸의 주 에너지원인 탄수화물의 주요 공급원이었습니다. 또한 곡식에 들어있는 섬유질은 소화를 돕고 장 건강을 촉진하며 혈당 조절에 도움을 주기도 하죠. 또한 곡식에는 철, 비타민 B, 마그네슘 등의 영양소를 함유하고 있어 우리 몸의 대사 기능을 지원하고 에너지 생산합니다. 이렇게만 보면 빵은 우리 식생활에 필요한 식품이라 할 수 있는데요.\n왜 빵을 먹으면 몸에 안 좋다고 말할까요?\n사실 빵이 건강에 미치는 영향은 빵의 종류, 제조 과정, 재료 등에 따라 다릅니다.\n일반적으로 하얀 가루로 만든 빵은 당과 지방이 많이 들어있고 섬유질과 영양소가 적은 경우가 많습니다. 따라서 많은 양을 섭취하면 체중 증가와 혈당 증가와 같은 부정적인 영향을 미칠 수 있습니다.\n하지만 통밀, 통곡물 등 온전한 곡물을 사용하여 만든 빵은 섬유질, 미네랄, 비타민 등이 풍부하고 건강에 좋은 영양소를 많이 포함합니다. 통곡물로 만든 빵은 소화 과정이 더 오래 걸리기 때문에 혈당을 안정시키고 포만감을 유지하는 데 도움이 될 수 있습니다. 통곡물로 만든 빵은 체중 관리, 혈당 조절, 소화 기능 강화 등의 효과를 가져올 수 있습니다.\n따라서 빵을 먹으면서도 건강을 유지하려면 첨가물이 적고 곡물 함량이 높은 온전한 통곡물빵을 선택하는 것이 중요합니다. 또한 빵을 채소나 삶은 달걀과 같은 단백질, 아보카도, 올리브오일 등 건강한 지방을 함께 섭취하여 영양소를 균형 있게 섭취합니다.\n빵 자체가 몸에 안 좋은 것은 아닙니다. 다만 제조 방법과 재료에 따라 빵의 영양소 구성이 달라질 수 있습니다. 그러니 설탕이나 인공 첨가물이 많이 들어간 빵을 피한다면  몸을 챙기면서 맛있게 빵을 즐길 수 있지 않을까요?",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "빵은 몸에 안 좋을까요?\n빵의 기원을 보면, 철기 시대 전부터 인류는 곡식을 간 가루에 물을 넣고 반죽해서 구워 먹었다고 합니다. 이런 방식으로 빵을 만들어 먹었다고 사람들은 추측하고 있는데요. 이렇게 만들어 먹었던 빵은 우리 몸의 주 에너지원인 탄수화물의 주요 공급원이었습니다. 또한 곡식에 들어있는 섬유질은 소화를 돕고 장 건강을 촉진하며 혈당 조절에 도움을 주기도 하죠. 또한 곡식에는 철, 비타민 B, 마그네슘 등의 영양소를 함유하고 있어 우리 몸의 대사 기능을 지원하고 에너지 생산합니다. 이렇게만 보면 빵은 우리 식생활에 필요한 식품이라 할 수 있는데요.\n왜 빵을 먹으면 몸에 안 좋다고 말할까요?\n사실 빵이 건강에 미치는 영향은 빵의 종류, 제조 과정, 재료 등에 따라 다릅니다.\n일반적으로 하얀 가루로 만든 빵은 당과 지방이 많이 들어있고 섬유질과 영양소가 적은 경우가 많습니다. 따라서 많은 양을 섭취하면 체중 증가와 혈당 증가와 같은 부정적인 영향을 미칠 수 있습니다.\n하지만 통밀, 통곡물 등 온전한 곡물을 사용하여 만든 빵은 섬유질, 미네랄, 비타민 등이 풍부하고 건강에 좋은 영양소를 많이 포함합니다. 통곡물로 만든 빵은 소화 과정이 더 오래 걸리기 때문에 혈당을 안정시키고 포만감을 유지하는 데 도움이 될 수 있습니다. 통곡물로 만든 빵은 체중 관리, 혈당 조절, 소화 기능 강화 등의 효과를 가져올 수 있습니다.\n따라서 빵을 먹으면서도 건강을 유지하려면 첨가물이 적고 곡물 함량이 높은 온전한 통곡물빵을 선택하는 것이 중요합니다. 또한 빵을 채소나 삶은 달걀과 같은 단백질, 아보카도, 올리브오일 등 건강한 지방을 함께 섭취하여 영양소를 균형 있게 섭취합니다.\n빵 자체가 몸에 안 좋은 것은 아닙니다. 다만 제조 방법과 재료에 따라 빵의 영양소 구성이 달라질 수 있습니다. 그러니 설탕이나 인공 첨가물이 많이 들어간 빵을 피한다면  몸을 챙기면서 맛있게 빵을 즐길 수 있지 않을까요?",
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
        "title":"건강한 빵을 선택하는 기준!",
        "object": "list",
        "results": [
            {
                "object": "block",
                "id": "3a84ab57-27a0-4ca1-ba86-84783b52666a",
                "parent": {
                    "type": "page_id",
                    "page_id": "949b2255-62ed-48cf-8d94-f0580687e2ac"
                },
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
                "has_children": false,
                "archived": false,
                "type": "image",
                "image": {
                    "caption": [],
                    "type": "external",
                    "external": {
                        "url": "https://images.unsplash.com/photo-1523294587484-bae6cc870010?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&w=1602&q=80"
                    }
                }
            },
            {
                "object": "block",
                "id": "60267f1a-3490-4866-bb7d-26f3207801f7",
                "parent": {
                    "type": "page_id",
                    "page_id": "949b2255-62ed-48cf-8d94-f0580687e2ac"
                },
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
                "has_children": false,
                "archived": false,
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "사람들은 언제부터 빵을 먹었을까요?\n빵의 기원을 살펴보면 신석기 시대부터라고 합니다. 하지만 인류의 역사와 함께하고 있는 빵이 현대 사회에서는 줄여야 할 식품으로 인식하고 있어요. 저는 이런 상황이 안타까웠어요. 그래서 어떻게 빵을 먹을 수 있을까 찾아보다가 비건 빵을 알게 되었어요. 채소가 몸에 좋으니 식물성 재료로 만든 빵도 몸에 좋으리라 생각했어요. 실제로 비건 빵은 식물성 오일, 글루텐 프리인 저항성 전분(식이섬유가 최대 90% 포함된 전분: 포도당으로 구성된 일반 전분과 달리 많이 섭취해도 지방으로 축적되지 않고 오히려 지방분해가 촉진함), 통밀가루, 비정제 설탕을 주재료 만든 빵이에요. 시중에 나와 있는 일반 빵보다 건강하다고 생각했어요.\n그러다 문득 일반적으로 말하는 '건강한 빵'의 기준이 뭘까? 라는 의문이 생겼습니다. 개인마다 생각하는 건강함의 기준은 다르겠지만 제가 생각하는 건강한 빵의 기준은 아래와 같아요.\n첫째,  건강한 재료로 만듭니다. 섬유질, 미네랄, 비타민 등이 풍부하고 건강에 좋은 영양소가 가득 들어있는 통곡물로 만든 빵입니다.\n둘째, 첨가물이 안 들어갑니다. 맛을 좋게 하기 위해 첨가물을 넣지만, 건강한 성분은 아닙니다. 인공감미료, 인공색소가 들어가지 않은 빵입니다.\n셋째, 유통기한이 짧습니다. 유통기한이 짧을수록 신선합니다. 반대로 유통기한이 긴 빵은 방부제 등이 많이 사용된 것일 가능성이 있습니다. 따라서, 유통기한이 짧은 빵을 선택하는 것이 좋습니다.\n따라서, 건강한 빵을 선택할 때는 재료, 영양소, 첨가물, 유통기한 등을 고려해야 한다고 생각합니다.\n입에 쓴 게 몸에 좋다는 말이 있습니다. 입이 즐거운 맛보다는 우리 몸이 즐거운 맛을 선택한다면 건강하게 빵을 먹을 수 있지 않을까요?",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "사람들은 언제부터 빵을 먹었을까요?\n빵의 기원을 살펴보면 신석기 시대부터라고 합니다. 하지만 인류의 역사와 함께하고 있는 빵이 현대 사회에서는 줄여야 할 식품으로 인식하고 있어요. 저는 이런 상황이 안타까웠어요. 그래서 어떻게 빵을 먹을 수 있을까 찾아보다가 비건 빵을 알게 되었어요. 채소가 몸에 좋으니 식물성 재료로 만든 빵도 몸에 좋으리라 생각했어요. 실제로 비건 빵은 식물성 오일, 글루텐 프리인 저항성 전분(식이섬유가 최대 90% 포함된 전분: 포도당으로 구성된 일반 전분과 달리 많이 섭취해도 지방으로 축적되지 않고 오히려 지방분해가 촉진함), 통밀가루, 비정제 설탕을 주재료 만든 빵이에요. 시중에 나와 있는 일반 빵보다 건강하다고 생각했어요.\n그러다 문득 일반적으로 말하는 '건강한 빵'의 기준이 뭘까? 라는 의문이 생겼습니다. 개인마다 생각하는 건강함의 기준은 다르겠지만 제가 생각하는 건강한 빵의 기준은 아래와 같아요.\n첫째,  건강한 재료로 만듭니다. 섬유질, 미네랄, 비타민 등이 풍부하고 건강에 좋은 영양소가 가득 들어있는 통곡물로 만든 빵입니다.\n둘째, 첨가물이 안 들어갑니다. 맛을 좋게 하기 위해 첨가물을 넣지만, 건강한 성분은 아닙니다. 인공감미료, 인공색소가 들어가지 않은 빵입니다.\n셋째, 유통기한이 짧습니다. 유통기한이 짧을수록 신선합니다. 반대로 유통기한이 긴 빵은 방부제 등이 많이 사용된 것일 가능성이 있습니다. 따라서, 유통기한이 짧은 빵을 선택하는 것이 좋습니다.\n따라서, 건강한 빵을 선택할 때는 재료, 영양소, 첨가물, 유통기한 등을 고려해야 한다고 생각합니다.\n입에 쓴 게 몸에 좋다는 말이 있습니다. 입이 즐거운 맛보다는 우리 몸이 즐거운 맛을 선택한다면 건강하게 빵을 먹을 수 있지 않을까요?",
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
        "title":"비건 베이킹 왜 할까요?",
        "object": "list",
        "results": [
            {
                "object": "block",
                "id": "2d284cb5-a7b7-4f2e-9b7b-5947bb70b7a7",
                "parent": {
                    "type": "page_id",
                    "page_id": "a2bb9e50-1f7e-40c5-8abc-3ee1b9c86907"
                },
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
                "has_children": false,
                "archived": false,
                "type": "image",
                "image": {
                    "caption": [],
                    "type": "external",
                    "external": {
                        "url": "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&w=1332&q=80"
                    }
                }
            },
            {
                "object": "block",
                "id": "2fbf0b87-1915-4802-8728-7e6651031480",
                "parent": {
                    "type": "page_id",
                    "page_id": "a2bb9e50-1f7e-40c5-8abc-3ee1b9c86907"
                },
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
                "has_children": false,
                "archived": false,
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "비건 베이킹은 동물성 성분을 사용하지 않고 맛과 영양가를 유지하면서 베이킹을 즐기는 것을 말합니다. 이를 위해 대체 원료로 식물성 재료를 사용합니다.\n예를 들어 동물성 재료인 버터와 계란을 대신해 귀리가 들어간 오트 밀크를 넣습니다. 코코넛오일 역시 버터를 대신할 수 있는 식물성 재료로 베이킹에 사용합니다. 이런 비건 베이킹을 왜 할까요?\n비건 베이킹을 하는 이유는 여러 가지가 있습니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "비건 베이킹은 동물성 성분을 사용하지 않고 맛과 영양가를 유지하면서 베이킹을 즐기는 것을 말합니다. 이를 위해 대체 원료로 식물성 재료를 사용합니다.\n예를 들어 동물성 재료인 버터와 계란을 대신해 귀리가 들어간 오트 밀크를 넣습니다. 코코넛오일 역시 버터를 대신할 수 있는 식물성 재료로 베이킹에 사용합니다. 이런 비건 베이킹을 왜 할까요?\n비건 베이킹을 하는 이유는 여러 가지가 있습니다.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "4d5e0e21-09ea-46c1-abc8-70b1e4633339",
                "parent": {
                    "type": "page_id",
                    "page_id": "a2bb9e50-1f7e-40c5-8abc-3ee1b9c86907"
                },
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
                "has_children": false,
                "archived": false,
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "첫 번째로, 동물 복지를 위해 비건 생활을 선택하는 사람들이 늘어나면서 비건 베이킹도 인기를 얻고 있습니다. 비건 베이킹은 동물성 재료를 사용하지 않으므로, 동물 학대와 착취 약속을 지킬 수 있습니다.\n두 번째로, 건강상 이유가 있습니다. 비건 베이킹에 사용되는 재료들이 채식주의자나 건강을 중시하는 사람들에게 인기가 있습니다. 비건 베이킹에 사용되는 식물성 재료가 콜레스테롤, 포화지방, 트랜스지방 등이 적어서 건강에 좋다는 장점이 있기 때문입니다.\n세 번째로, 환경적인 이유도 있습니다. 축산업은 환경에 부정적인 영향을 미치며, 산림벌채, 온실가스 배출 및 수질 오염의 요인입니다. 또한 동물성 재료는 식물성 재료에 비해 더 많은 자원과 에너지가 필요합니다. 반면 비건 베이킹은 동물성 재료를 피하기 때문에 자원과 에너지 소비를 줄이고, 환경 보호에 긍정적인 역할을 합니다.\n네 번째로, 알레르기와 식이 제한을 하는 경우입니다. 비건 베이킹은 특정 식이 요구 사항이나 알레르기를 가진 사람들을 위한  맞춤식으로 제공할 수 있습니다. 예를 들어, 일부 사람들은 유당 불내증이나 계란 알레르기가 있는 경우, 비건 베이킹은 이상적인 선택일 수 있습니다.\n마지막으로 개인적 가치관에 따른 선택입니다. 비건 베이킹은 개인의 라이프 스타일에 맞는 일종의 자신 신념을 드러내는 표현이기도 합니다. 미니멀 라이프나 제로 웨이스트와 같은 삶을 실천하는 사람들은 식문화에서도 비건 베이킹을 통해 일상생활을 통합하고 자기 가치관에 부합한 삶을 만들고자 합니다.\n비건 베이킹을 하는 이유는 사람마다 다를 수 있습니다. 어떤 사람들은 다양한 이유가 있을 수 있고, 어떤 사람들은 특정한 동기로 비건 베이킹을 하기도 합니다. 결국, 비건 베이킹은 개인의 신념과 가치와 일치하면서 맛있는 디저트와 베이킹을 즐길 수 있는 또 다른 선택입니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "첫 번째로, 동물 복지를 위해 비건 생활을 선택하는 사람들이 늘어나면서 비건 베이킹도 인기를 얻고 있습니다. 비건 베이킹은 동물성 재료를 사용하지 않으므로, 동물 학대와 착취 약속을 지킬 수 있습니다.\n두 번째로, 건강상 이유가 있습니다. 비건 베이킹에 사용되는 재료들이 채식주의자나 건강을 중시하는 사람들에게 인기가 있습니다. 비건 베이킹에 사용되는 식물성 재료가 콜레스테롤, 포화지방, 트랜스지방 등이 적어서 건강에 좋다는 장점이 있기 때문입니다.\n세 번째로, 환경적인 이유도 있습니다. 축산업은 환경에 부정적인 영향을 미치며, 산림벌채, 온실가스 배출 및 수질 오염의 요인입니다. 또한 동물성 재료는 식물성 재료에 비해 더 많은 자원과 에너지가 필요합니다. 반면 비건 베이킹은 동물성 재료를 피하기 때문에 자원과 에너지 소비를 줄이고, 환경 보호에 긍정적인 역할을 합니다.\n네 번째로, 알레르기와 식이 제한을 하는 경우입니다. 비건 베이킹은 특정 식이 요구 사항이나 알레르기를 가진 사람들을 위한  맞춤식으로 제공할 수 있습니다. 예를 들어, 일부 사람들은 유당 불내증이나 계란 알레르기가 있는 경우, 비건 베이킹은 이상적인 선택일 수 있습니다.\n마지막으로 개인적 가치관에 따른 선택입니다. 비건 베이킹은 개인의 라이프 스타일에 맞는 일종의 자신 신념을 드러내는 표현이기도 합니다. 미니멀 라이프나 제로 웨이스트와 같은 삶을 실천하는 사람들은 식문화에서도 비건 베이킹을 통해 일상생활을 통합하고 자기 가치관에 부합한 삶을 만들고자 합니다.\n비건 베이킹을 하는 이유는 사람마다 다를 수 있습니다. 어떤 사람들은 다양한 이유가 있을 수 있고, 어떤 사람들은 특정한 동기로 비건 베이킹을 하기도 합니다. 결국, 비건 베이킹은 개인의 신념과 가치와 일치하면서 맛있는 디저트와 베이킹을 즐길 수 있는 또 다른 선택입니다.",
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
        "title":"제로 웨이스트? 비건 베이킹?",
        "object": "list",
        "results": [
            {
                "object": "block",
                "id": "a54a0365-b04a-474a-8c00-135c934945d8",
                "parent": {
                    "type": "page_id",
                    "page_id": "618cff11-406d-4843-ae2e-385709d27652"
                },
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
                "has_children": false,
                "archived": false,
                "type": "image",
                "image": {
                    "caption": [],
                    "type": "external",
                    "external": {
                        "url": "https://images.unsplash.com/photo-1622485832460-7e78062fcb10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&w=1470&q=80"
                    }
                }
            },
            {
                "object": "block",
                "id": "fb91ba26-c63d-4662-9d84-1f404deb2e30",
                "parent": {
                    "type": "page_id",
                    "page_id": "618cff11-406d-4843-ae2e-385709d27652"
                },
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
                "has_children": false,
                "archived": false,
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "제로 웨이스트(Zero Waste) 들어 본 적 있으세요?\n제로 웨이스트(Zero Waste)\n폐기물이 전혀 발생하지 않는 것.\n모든 제품, 포장 및 자재를 태우지 않고, 환경이나 인간의 건강을 위협할 수 있는 토지, 해양, 공기로 배출하지 않으며 책임 있는 생산, 소비, 재사용 및 회수를 통해 모든 자원을 보존하는 것을 의미합니다. 즉 일상생활에서 버려지는 물건을 줄이고, 땅, 바다, 공기 등 환경에 미치는 부정적인 영향을 줄이는 것입니다.\n2020년도 기준으로 한국인 1인당 일일 폐기물 배출량은 1.27kg으로 OECD 37개국 중 4위를 차지했습니다. 우리가 생각하는 것보다 우리나라는 쓰레기 문제가 매우 심각한 나라입니다.\n그러다 보니 여러 단체와 개인이 제로 웨이스트를 실천하고 있습니다. 얼마 전 방문한 비건 베이커리 가게에서도 개인 용기를 들고 오면 10% 할인해 주는 행사를 진행하고 있었습니다. 뿐만 아니라 일회용품 사용을 최소화하고 다회용 컵(reusable cup)을 사용하자는 캠페인을 하는 매장도 많아지고 있습니다.\n이러한 제로 웨이스트 운동은 지속 가능한 생활 방식을 추구하고 환경 보호 및 자원 보전을 위한 중요한 사회적 노력입니다.\n실제로 제로 웨이스트는 환경 보호와 자원 보존에 직접적인 영향을 주고 있습니다.\n첫째, 폐기물은 지구상의 다양한 생물들에게 직접적인 위험을 안겨줄 뿐만 아니라, 오랜 시간 동안 분해되지 않기 때문에 장기적으로 지구 환경에 나쁜 영향을 줍니다. 폐기물은 이산화탄소와 메탄과 같은 온실가스의 주요인으로 기후 변화에도 영향을 줍니다. 예를 들면 기후 변화로 인한 홍수, 폭풍우, 산사태 등 자연재해, 그리고 기온 상승으로 인한 농작물 생산 감소와 물 부족은 우리 삶과 직접적으로 연관되어 있습니다.\n둘째, 자원은 한정적입니다. 자원의 소모는 생태계를 파괴하고 자연의 균형을 깨뜨릴 수 있습니다. 따라서 자원을 보존하고, 재활용하고, 재사용하는 것은 지구 환경을 지키는 방법입니다.\n제로 웨이스트를 추구하는 사람들 중에는 비건 베이킹을 하는 경우가 많습니다. 그 이유는 제로 웨이스트와 비건 베이킹은 환경 보호와 같은 지속 가능한 삶을 추구하는 중요한 역할을 한다는 공통점이 있습니다. 비건 베이킹은 유제품, 달걀, 꿀 등의 동물성 성분을 사용하지 않으며, 대신 식물성 재료로 베이킹을 말합니다. 이는 동물 복지를 고려하며, 영양 가치와 맛을 유지하면서도 지속 가능한 삶을 추구하는 거죠. 마찬가지로 제로 웨이스트는 재활용 가능한 포장을 사용하여 일회용품 사용을 최소화하여 폐기물을 줄이는 것을 목표로 합니다. 이 모두 우리의 지구를 보호하고 지속 가능한 삶을 위해 노력하는 거죠.\n우리의 지구를 보호하고 건강한 미래를 위해 비건 베이킹을 실천하면서 제로 웨이스트에 동참해 보는 것은 어떨까요?",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "제로 웨이스트(Zero Waste) 들어 본 적 있으세요?\n제로 웨이스트(Zero Waste)\n폐기물이 전혀 발생하지 않는 것.\n모든 제품, 포장 및 자재를 태우지 않고, 환경이나 인간의 건강을 위협할 수 있는 토지, 해양, 공기로 배출하지 않으며 책임 있는 생산, 소비, 재사용 및 회수를 통해 모든 자원을 보존하는 것을 의미합니다. 즉 일상생활에서 버려지는 물건을 줄이고, 땅, 바다, 공기 등 환경에 미치는 부정적인 영향을 줄이는 것입니다.\n2020년도 기준으로 한국인 1인당 일일 폐기물 배출량은 1.27kg으로 OECD 37개국 중 4위를 차지했습니다. 우리가 생각하는 것보다 우리나라는 쓰레기 문제가 매우 심각한 나라입니다.\n그러다 보니 여러 단체와 개인이 제로 웨이스트를 실천하고 있습니다. 얼마 전 방문한 비건 베이커리 가게에서도 개인 용기를 들고 오면 10% 할인해 주는 행사를 진행하고 있었습니다. 뿐만 아니라 일회용품 사용을 최소화하고 다회용 컵(reusable cup)을 사용하자는 캠페인을 하는 매장도 많아지고 있습니다.\n이러한 제로 웨이스트 운동은 지속 가능한 생활 방식을 추구하고 환경 보호 및 자원 보전을 위한 중요한 사회적 노력입니다.\n실제로 제로 웨이스트는 환경 보호와 자원 보존에 직접적인 영향을 주고 있습니다.\n첫째, 폐기물은 지구상의 다양한 생물들에게 직접적인 위험을 안겨줄 뿐만 아니라, 오랜 시간 동안 분해되지 않기 때문에 장기적으로 지구 환경에 나쁜 영향을 줍니다. 폐기물은 이산화탄소와 메탄과 같은 온실가스의 주요인으로 기후 변화에도 영향을 줍니다. 예를 들면 기후 변화로 인한 홍수, 폭풍우, 산사태 등 자연재해, 그리고 기온 상승으로 인한 농작물 생산 감소와 물 부족은 우리 삶과 직접적으로 연관되어 있습니다.\n둘째, 자원은 한정적입니다. 자원의 소모는 생태계를 파괴하고 자연의 균형을 깨뜨릴 수 있습니다. 따라서 자원을 보존하고, 재활용하고, 재사용하는 것은 지구 환경을 지키는 방법입니다.\n제로 웨이스트를 추구하는 사람들 중에는 비건 베이킹을 하는 경우가 많습니다. 그 이유는 제로 웨이스트와 비건 베이킹은 환경 보호와 같은 지속 가능한 삶을 추구하는 중요한 역할을 한다는 공통점이 있습니다. 비건 베이킹은 유제품, 달걀, 꿀 등의 동물성 성분을 사용하지 않으며, 대신 식물성 재료로 베이킹을 말합니다. 이는 동물 복지를 고려하며, 영양 가치와 맛을 유지하면서도 지속 가능한 삶을 추구하는 거죠. 마찬가지로 제로 웨이스트는 재활용 가능한 포장을 사용하여 일회용품 사용을 최소화하여 폐기물을 줄이는 것을 목표로 합니다. 이 모두 우리의 지구를 보호하고 지속 가능한 삶을 위해 노력하는 거죠.\n우리의 지구를 보호하고 건강한 미래를 위해 비건 베이킹을 실천하면서 제로 웨이스트에 동참해 보는 것은 어떨까요?",
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
        "title":"비건 베이킹? 미니멀 라이프?",
        "object": "list",
        "results": [
            {
                "object": "block",
                "id": "b9b8e747-1966-4483-b5cc-f0a5cd843a88",
                "parent": {
                    "type": "page_id",
                    "page_id": "1c0a4e59-ff2f-4540-a04d-92a24c060268"
                },
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
                "has_children": false,
                "archived": false,
                "type": "image",
                "image": {
                    "caption": [],
                    "type": "external",
                    "external": {
                        "url": "https://images.unsplash.com/photo-1622485832460-7e78062fcb10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&w=1470&q=80"
                    }
                }
            },
            {
                "object": "block",
                "id": "5bd248a5-14fc-467e-9ac3-74c403a7f628",
                "parent": {
                    "type": "page_id",
                    "page_id": "1c0a4e59-ff2f-4540-a04d-92a24c060268"
                },
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
                "has_children": false,
                "archived": false,
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "비건 베이킹을 이야기하면 미니멀 라이프를 이야기 안 할 수가 없어요.\n비건 베이킹과 미니멀 라이프가 어떤 관계가 있을까요?",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "비건 베이킹을 이야기하면 미니멀 라이프를 이야기 안 할 수가 없어요.\n비건 베이킹과 미니멀 라이프가 어떤 관계가 있을까요?",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "dceb1072-e660-4acc-9f02-53d27757f222",
                "parent": {
                    "type": "page_id",
                    "page_id": "1c0a4e59-ff2f-4540-a04d-92a24c060268"
                },
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
                "has_children": false,
                "archived": false,
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "미니멀 라이프 Minimal Life",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "미니멀 라이프 Minimal Life",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "c35788f6-9aea-4961-8730-f9ca89c21123",
                "parent": {
                    "type": "page_id",
                    "page_id": "1c0a4e59-ff2f-4540-a04d-92a24c060268"
                },
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
                "has_children": false,
                "archived": false,
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "필요한 것 이상의 물건을 작지 말고, 불필요한 물건을 버리고 '단순(mininal) 한 생활 방식(life)'을 말합니다. 물질적인 부분만 아니라 복잡한 생활을 줄이고 자연과 조화를 이루는 삶의 방식을 추구합니다. 단순함과 집중화를 추구하여 물질과 생활에서 오는 스트레스와 부담을 줄이고 자신의  삶을 관리하는 것을 목표로 합니다.\n최근 몇 년 동안 미니멀 라이프에 관한 연구가 증가하고 있습니다. 여러 연구에서 미니멀 라이프가 사람의 행복, 정서적 안정, 자원 절약 등 다양한 측면에서 긍정적 영향을 준다고 발표했습니다.\n2014년에 발표한 소비성 평등주의(Consumer equality) 연구에서는 소비의 양과 행복 감소의 관계를 분석한 결과, 일정한 수준 이상에서는 소비가 증가함에 따라 행복이 증가하지 않는 것을 밝혀냈습니다. 2018년 미국에서 소비 생활의 변화와 자원 사용량을 분석한 결과, 미니멀 라이프를 추구하는 사람들이 평균적으로 자원을 절약했다는 보고했습니다. 2020년 미니멀 라이프를 실천하는 사람들이 소비에 대한 스트레스와 부정적인 감정이 적다는 연구 결과도 있었습니다. 또한, 미니멀 라이프를 추구하는 사람들은 더 많은 시간과 에너지를 대인관계와 삶의 의미에 투자하며, 이는 심리적 안정을 올리는 데 도움이 된다는 것을 밝혔습니다. 다시 말해, 미니멀 라이프가 인간의 행복과 심리적 안정, 자원 절약 및 지속 가능성 등 여러 측면에서 긍정적인 영향을 미칠 수 있다는 것이 증명되고 있습니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "필요한 것 이상의 물건을 작지 말고, 불필요한 물건을 버리고 '단순(mininal) 한 생활 방식(life)'을 말합니다. 물질적인 부분만 아니라 복잡한 생활을 줄이고 자연과 조화를 이루는 삶의 방식을 추구합니다. 단순함과 집중화를 추구하여 물질과 생활에서 오는 스트레스와 부담을 줄이고 자신의  삶을 관리하는 것을 목표로 합니다.\n최근 몇 년 동안 미니멀 라이프에 관한 연구가 증가하고 있습니다. 여러 연구에서 미니멀 라이프가 사람의 행복, 정서적 안정, 자원 절약 등 다양한 측면에서 긍정적 영향을 준다고 발표했습니다.\n2014년에 발표한 소비성 평등주의(Consumer equality) 연구에서는 소비의 양과 행복 감소의 관계를 분석한 결과, 일정한 수준 이상에서는 소비가 증가함에 따라 행복이 증가하지 않는 것을 밝혀냈습니다. 2018년 미국에서 소비 생활의 변화와 자원 사용량을 분석한 결과, 미니멀 라이프를 추구하는 사람들이 평균적으로 자원을 절약했다는 보고했습니다. 2020년 미니멀 라이프를 실천하는 사람들이 소비에 대한 스트레스와 부정적인 감정이 적다는 연구 결과도 있었습니다. 또한, 미니멀 라이프를 추구하는 사람들은 더 많은 시간과 에너지를 대인관계와 삶의 의미에 투자하며, 이는 심리적 안정을 올리는 데 도움이 된다는 것을 밝혔습니다. 다시 말해, 미니멀 라이프가 인간의 행복과 심리적 안정, 자원 절약 및 지속 가능성 등 여러 측면에서 긍정적인 영향을 미칠 수 있다는 것이 증명되고 있습니다.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "20803fa0-f75f-4dc2-969b-404743f6b936",
                "parent": {
                    "type": "page_id",
                    "page_id": "1c0a4e59-ff2f-4540-a04d-92a24c060268"
                },
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
                "has_children": false,
                "archived": false,
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "이런 미니멀 라이프가 비건 베이킹과 비슷한 모습을 보이고 있지 않나요?",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "이런 미니멀 라이프가 비건 베이킹과 비슷한 모습을 보이고 있지 않나요?",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "9e0b9d77-e917-4177-80b6-5e789f8657cb",
                "parent": {
                    "type": "page_id",
                    "page_id": "1c0a4e59-ff2f-4540-a04d-92a24c060268"
                },
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
                "has_children": false,
                "archived": false,
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "첫째, 비건 베이킹은 식물성 재료를 사용합니다. 동물성 제품을 사용하지 않고 맛과 풍미를 살려낼 수 있는 새로운 방법들을 찾아내는 것이 비건 베이킹의 핵심입니다. 미니멀 라이프를 추구하는 사람들은 불필요한 것들을 줄이고, 더욱 단순한 삶을 선택하는 모습과 비건 베이킹의 핵심에는 같은 맥락이 있습니다.\n둘째, 비건 베이킹을 추구하는 사람들은 환경을 보호하고 지속 가능한 삶을 살기 위해 노력하는 사람들이 많습니다. 이는 미니멀 라이프를 추구하는 사람들과도 공유하는 가치입니다. 미니멀 라이프의 핵심이 환경 문제를 해결하고 지구를 보호하기 위해서는 지속 가능한 방식으로 생활하고 소비해야 한다는 것입니다. 비건 베이킹과 미니멀 라이프는 이러한 가치를 공유하며, 지속 가능한 삶을 추구한다는 점에서 서로 통하는 부분이 있습니다.\n셋째, 비건 베이킹은 직접 만드는 것을 지향합니다. 미니멀 라이프를 지향하는 사람들도 보통 자기 손으로 직접 만드는 것을 선호합니다. 직접 만드는 행위를 통해 사용하는 것을 제한하고 소비를 줄일 수 있고, 자기 손으로 만드는 것은 건강한 삶을 추구하는 것과 일치합니다.\n이러한 이유로 비건 베이킹과 미니멀 라이프는 상호 보완적인 관계라 생각해요. 여러분들은 미니멀 라이프와 비건 베이킹의 연결 고리가 보이시나요?",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "첫째, 비건 베이킹은 식물성 재료를 사용합니다. 동물성 제품을 사용하지 않고 맛과 풍미를 살려낼 수 있는 새로운 방법들을 찾아내는 것이 비건 베이킹의 핵심입니다. 미니멀 라이프를 추구하는 사람들은 불필요한 것들을 줄이고, 더욱 단순한 삶을 선택하는 모습과 비건 베이킹의 핵심에는 같은 맥락이 있습니다.\n둘째, 비건 베이킹을 추구하는 사람들은 환경을 보호하고 지속 가능한 삶을 살기 위해 노력하는 사람들이 많습니다. 이는 미니멀 라이프를 추구하는 사람들과도 공유하는 가치입니다. 미니멀 라이프의 핵심이 환경 문제를 해결하고 지구를 보호하기 위해서는 지속 가능한 방식으로 생활하고 소비해야 한다는 것입니다. 비건 베이킹과 미니멀 라이프는 이러한 가치를 공유하며, 지속 가능한 삶을 추구한다는 점에서 서로 통하는 부분이 있습니다.\n셋째, 비건 베이킹은 직접 만드는 것을 지향합니다. 미니멀 라이프를 지향하는 사람들도 보통 자기 손으로 직접 만드는 것을 선호합니다. 직접 만드는 행위를 통해 사용하는 것을 제한하고 소비를 줄일 수 있고, 자기 손으로 만드는 것은 건강한 삶을 추구하는 것과 일치합니다.\n이러한 이유로 비건 베이킹과 미니멀 라이프는 상호 보완적인 관계라 생각해요. 여러분들은 미니멀 라이프와 비건 베이킹의 연결 고리가 보이시나요?",
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
        "title":"건강한 베이킹은 뭘까요?",
        "object": "list",
        "results": [
            {
                "object": "block",
                "id": "945c19dd-f72c-480b-a321-cfe91a7a5398",
                "parent": {
                    "type": "page_id",
                    "page_id": "b11a8468-6b4c-42dd-bcec-bc3a277a73a4"
                },
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
                "has_children": false,
                "archived": false,
                "type": "image",
                "image": {
                    "caption": [],
                    "type": "external",
                    "external": {
                        "url": "https://images.unsplash.com/photo-1499889808931-317a0255c0e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&w=1470&q=80"
                    }
                }
            },
            {
                "object": "block",
                "id": "2e1fac5b-4756-449e-82f0-a57ee7cd41c5",
                "parent": {
                    "type": "page_id",
                    "page_id": "b11a8468-6b4c-42dd-bcec-bc3a277a73a4"
                },
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
                "has_children": false,
                "archived": false,
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "건강한 빵을 먹고 싶어서 자연스럽게 홈베이킹을 하기 시작했어요. 덜 달게, 덜 기름지게 건강한 재료로 빵을 만들어 먹고 싶었어요. 그러다 비건 베이킹을 알게 되었어요. 또 글루텐 프리 베이킹도 알게 되었어요. 글루텐 프리 베이킹 중 대부분은 키토 베이킹이더라고요.\n비건 베이킹? 글루텐 프리 베이킹? 키토 베이킹?\n처음에는 어떤 차이가 있는지 잘 몰라서 자료를 찾아보고 검색을 해봤어요.\n저탄고지! 한 번쯤 들어보셨죠?\n저탄수화물 고지방을 줄여서 '저탄고지'라고 하죠? 키토 베이킹을 검색하면 저탄고지라는 말이 따라오는데요. 키토 베이킹은 저탄고지 식단을 하는 사람들을 위해 생긴 베이킹이기 때문이에요. 키토 베이킹은 보통 밀가루 대신 아몬드 가루, 코코넛 가루, 씨앗 가루 등을 사용해요. 설탕 대신 에리스리톨, 알룰로스, 스테이바 등 대체 당을 넣어요. 이런 키토 베이킹은 탄수화물과 당 함량이 낮아지지만, 지방 함량이 높아져요.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "건강한 빵을 먹고 싶어서 자연스럽게 홈베이킹을 하기 시작했어요. 덜 달게, 덜 기름지게 건강한 재료로 빵을 만들어 먹고 싶었어요. 그러다 비건 베이킹을 알게 되었어요. 또 글루텐 프리 베이킹도 알게 되었어요. 글루텐 프리 베이킹 중 대부분은 키토 베이킹이더라고요.\n비건 베이킹? 글루텐 프리 베이킹? 키토 베이킹?\n처음에는 어떤 차이가 있는지 잘 몰라서 자료를 찾아보고 검색을 해봤어요.\n저탄고지! 한 번쯤 들어보셨죠?\n저탄수화물 고지방을 줄여서 '저탄고지'라고 하죠? 키토 베이킹을 검색하면 저탄고지라는 말이 따라오는데요. 키토 베이킹은 저탄고지 식단을 하는 사람들을 위해 생긴 베이킹이기 때문이에요. 키토 베이킹은 보통 밀가루 대신 아몬드 가루, 코코넛 가루, 씨앗 가루 등을 사용해요. 설탕 대신 에리스리톨, 알룰로스, 스테이바 등 대체 당을 넣어요. 이런 키토 베이킹은 탄수화물과 당 함량이 낮아지지만, 지방 함량이 높아져요.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "b5617b7c-bb21-4040-888d-a7bf0fcc29aa",
                "parent": {
                    "type": "page_id",
                    "page_id": "b11a8468-6b4c-42dd-bcec-bc3a277a73a4"
                },
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
                "has_children": false,
                "archived": false,
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "키토 베이킹의 장점은 아래와 같아요.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "키토 베이킹의 장점은 아래와 같아요.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "c8c667f3-6efe-4757-8ca5-16bafc04ae22",
                "parent": {
                    "type": "page_id",
                    "page_id": "b11a8468-6b4c-42dd-bcec-bc3a277a73a4"
                },
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
                "has_children": false,
                "archived": false,
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "체중 감량:  탄수화물 섭취를 줄이고 건강한 지방과 단백질을 더 많이 섭취하여 체중 감량을 도와줘요. 실제로 Journal of Nutrition and Metabolism에서 발표한 연구에서 저지방 다이어트보다 저탄수화물 키토제닉 다이어트가 체중 감량과 허리둘레 감소를 더 보여줬어요.\n혈당 조절 개선: 탄수화물 섭취를 줄이므로 당뇨병 환자의 혈당 조절을 도울 수 있어요. Diabetes Care에서 발표한 연구는 저탄수화물 키토제닉 다이어트가 2형 당뇨병 환자의 혈당 조절과 지질 프로필 개선을 도왔다는 결과를 발표했어요.\n포만감 증가: 키토 베이킹은 단백질과 지방 함량이 높기 때문에 포만감이 높아요. Appetite에서 발표한 연구는 저탄고지 식사가 건강한 성인인 경우,  포만감을 증가시키고 칼로리 섭취를 줄일 수 있다는 결과를 내놓았어요.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "체중 감량:  탄수화물 섭취를 줄이고 건강한 지방과 단백질을 더 많이 섭취하여 체중 감량을 도와줘요. 실제로 Journal of Nutrition and Metabolism에서 발표한 연구에서 저지방 다이어트보다 저탄수화물 키토제닉 다이어트가 체중 감량과 허리둘레 감소를 더 보여줬어요.\n혈당 조절 개선: 탄수화물 섭취를 줄이므로 당뇨병 환자의 혈당 조절을 도울 수 있어요. Diabetes Care에서 발표한 연구는 저탄수화물 키토제닉 다이어트가 2형 당뇨병 환자의 혈당 조절과 지질 프로필 개선을 도왔다는 결과를 발표했어요.\n포만감 증가: 키토 베이킹은 단백질과 지방 함량이 높기 때문에 포만감이 높아요. Appetite에서 발표한 연구는 저탄고지 식사가 건강한 성인인 경우,  포만감을 증가시키고 칼로리 섭취를 줄일 수 있다는 결과를 내놓았어요.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "8e7529a4-983a-4ad2-b282-c440313d9b7a",
                "parent": {
                    "type": "page_id",
                    "page_id": "b11a8468-6b4c-42dd-bcec-bc3a277a73a4"
                },
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
                "has_children": false,
                "archived": false,
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "그럼 비건 베이킹은 뭘까요?\n비건 베이킹은 동물성 재료를 사용하지 않는 베이킹이에요. 비건 베이킹은 동물성 식품 대신 식물성 버터, 식물성 우유 등을 대체 재료로 사용해요. 비건 베이킹에서도 대체 당을 사용하여 설탕 함량을 줄일 수 있어요. 또한 비건 베이킹은 일반적인 베이킹보다 식이섬유 함량이 높아요. 동물성 재료 사용으로 인한 환경파괴 문제를 해결할 수 있어 환경보호도 할 수 있죠.\n비건 베이킹은 장점은 아래와 같아요.\n만성 질환 위험 감소: 비건 베이킹은 심장 질환, 당뇨병 및 특정 종류의 암 등 만성 질환 위험을 줄이는 데 도움이 될 수 있어요. The American Journal of Clinical Nutrition에서 발표한 연구는 비건 식이가 심근 경색병 위험을 25% 감소시킨다는 결과가 있어요.\n개선된 소화 기능: 비건 베이킹은 섬유질 섭취를 늘리므로 소화 기능을 개선할 수 있어요. The Journal of Nutrition에서 발표한 연구는 비건 베이킹 속 식이섬유가 장 기능을 개선했다고 해요.\n환경 지속 가능성: 비건 베이킹은 동물 제품 수요를 줄이고 동물 농업과 관련된 온실가스 배출을 줄이므로 지속적인 환경 보호가 가능해요. Science에서 발표한 연구는 식물 기반 식습관으로의 전환으로 음식 관련 온실가스 배출을 최대 70% 감소시킬 수 있다는 결과가 있어요.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "그럼 비건 베이킹은 뭘까요?\n비건 베이킹은 동물성 재료를 사용하지 않는 베이킹이에요. 비건 베이킹은 동물성 식품 대신 식물성 버터, 식물성 우유 등을 대체 재료로 사용해요. 비건 베이킹에서도 대체 당을 사용하여 설탕 함량을 줄일 수 있어요. 또한 비건 베이킹은 일반적인 베이킹보다 식이섬유 함량이 높아요. 동물성 재료 사용으로 인한 환경파괴 문제를 해결할 수 있어 환경보호도 할 수 있죠.\n비건 베이킹은 장점은 아래와 같아요.\n만성 질환 위험 감소: 비건 베이킹은 심장 질환, 당뇨병 및 특정 종류의 암 등 만성 질환 위험을 줄이는 데 도움이 될 수 있어요. The American Journal of Clinical Nutrition에서 발표한 연구는 비건 식이가 심근 경색병 위험을 25% 감소시킨다는 결과가 있어요.\n개선된 소화 기능: 비건 베이킹은 섬유질 섭취를 늘리므로 소화 기능을 개선할 수 있어요. The Journal of Nutrition에서 발표한 연구는 비건 베이킹 속 식이섬유가 장 기능을 개선했다고 해요.\n환경 지속 가능성: 비건 베이킹은 동물 제품 수요를 줄이고 동물 농업과 관련된 온실가스 배출을 줄이므로 지속적인 환경 보호가 가능해요. Science에서 발표한 연구는 식물 기반 식습관으로의 전환으로 음식 관련 온실가스 배출을 최대 70% 감소시킬 수 있다는 결과가 있어요.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "7a358ff4-8d6d-417b-81da-014c633b202b",
                "parent": {
                    "type": "page_id",
                    "page_id": "b11a8468-6b4c-42dd-bcec-bc3a277a73a4"
                },
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
                "has_children": false,
                "archived": false,
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "글루텐 프리 베이킹을 간혹 비건 베이킹으로 생각하는 경우가 종종 있어요.\n하지만 글루텐 프리 베이킹은 글루텐이 포함되지 않은 재료를 넣어 베이킹을 하는 것을 말해요. 글루텐 프리 베이킹은 버터, 달걀과 같은 동물성 재료를 넣어 베이킹을 할 수 있어요. 대신 글루텐이 없는 가루(쌀가루, 옥수수 가루, 콩가루 등)을 넣어 베이킹을 합니다.\n글루텐 프리 베이킹의 장점은 아래와 같아요.\n글루텐 불내증/ 셀리악병: 글루텐 불내증(Gluten Intolerance : 글루텐을 소화시키지 못하여 설사나 복통, 소화장애 등을 일으키는 증상)이나 셀리악병(Celiac Disease : 뭄 안에 글루텐을 소화 분해시키는 효소가 없어서 밀가루를 먹으면 복통, 묽은 변 등의 알레르기 증상이 나타나는 질환)이 있는 사람들에게 글루텐 프리 베이킹은 필수적입니다. 글루텐 프리 베이킹은 이러한 사람들이 즐길 수 있는 안전한 베이킹입니다.건강한 대체재 사용: 글루텐 프리 베이킹은 곡물 대신 다른 건강한 대체재를 사용합니다. 예를 들어, 글루텐 프리 베이킹에는 쌀가루, 옥수수가루, 감자 전분 등이 사용될 수 있습니다. 이러한 대체재는 보통 식이섬유, 비타민, 미네랄과 같은 영양소가 풍부합니다.**\n어떤 베이킹이 가장 건강하다고 단정 지을 수는 없어요. 탄수화물 섭취를 줄이고 지방 섭취를 늘리는 저탄고지 식단이나 키토를 하는 사람들에게는 키토 베이킹이 가장 건강한 선택일 수 있어요. 반면에 식물성 식단을 지향하는 사람들에게는 비건 베이킹이 건강한 선택일 수 있어요. 또 글루텐 민감증을 가진 사람들은 글루텐 프리 베이킹이 최선의 선택입니다. 키토 베이킹, 비건 베이킹, 글루텐 프리 베이킹은 각각 다른 장점이 있습니다. 개인의 식이 습관과 건강 상태에 따라 선택하는 것이 가장 건강한 베이킹이지 않을까 생각합니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "글루텐 프리 베이킹을 간혹 비건 베이킹으로 생각하는 경우가 종종 있어요.\n하지만 글루텐 프리 베이킹은 글루텐이 포함되지 않은 재료를 넣어 베이킹을 하는 것을 말해요. 글루텐 프리 베이킹은 버터, 달걀과 같은 동물성 재료를 넣어 베이킹을 할 수 있어요. 대신 글루텐이 없는 가루(쌀가루, 옥수수 가루, 콩가루 등)을 넣어 베이킹을 합니다.\n글루텐 프리 베이킹의 장점은 아래와 같아요.\n글루텐 불내증/ 셀리악병: 글루텐 불내증(Gluten Intolerance : 글루텐을 소화시키지 못하여 설사나 복통, 소화장애 등을 일으키는 증상)이나 셀리악병(Celiac Disease : 뭄 안에 글루텐을 소화 분해시키는 효소가 없어서 밀가루를 먹으면 복통, 묽은 변 등의 알레르기 증상이 나타나는 질환)이 있는 사람들에게 글루텐 프리 베이킹은 필수적입니다. 글루텐 프리 베이킹은 이러한 사람들이 즐길 수 있는 안전한 베이킹입니다.건강한 대체재 사용: 글루텐 프리 베이킹은 곡물 대신 다른 건강한 대체재를 사용합니다. 예를 들어, 글루텐 프리 베이킹에는 쌀가루, 옥수수가루, 감자 전분 등이 사용될 수 있습니다. 이러한 대체재는 보통 식이섬유, 비타민, 미네랄과 같은 영양소가 풍부합니다.**\n어떤 베이킹이 가장 건강하다고 단정 지을 수는 없어요. 탄수화물 섭취를 줄이고 지방 섭취를 늘리는 저탄고지 식단이나 키토를 하는 사람들에게는 키토 베이킹이 가장 건강한 선택일 수 있어요. 반면에 식물성 식단을 지향하는 사람들에게는 비건 베이킹이 건강한 선택일 수 있어요. 또 글루텐 민감증을 가진 사람들은 글루텐 프리 베이킹이 최선의 선택입니다. 키토 베이킹, 비건 베이킹, 글루텐 프리 베이킹은 각각 다른 장점이 있습니다. 개인의 식이 습관과 건강 상태에 따라 선택하는 것이 가장 건강한 베이킹이지 않을까 생각합니다.",
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
        "title":"유기농을 꼭 먹어야 할까요?",
        "object": "list",
        "results": [
            {
                "object": "block",
                "id": "c094c210-56fd-454a-a440-5e74b012671b",
                "parent": {
                    "type": "page_id",
                    "page_id": "0d8407b6-cbcd-4724-beaf-6733d75c9c71"
                },
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
                "has_children": false,
                "archived": false,
                "type": "image",
                "image": {
                    "caption": [],
                    "type": "external",
                    "external": {
                        "url": "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&w=1374&q=80"
                    }
                }
            },
            {
                "object": "block",
                "id": "d1c5c1b4-740a-4198-a38c-54785558a9ca",
                "parent": {
                    "type": "page_id",
                    "page_id": "0d8407b6-cbcd-4724-beaf-6733d75c9c71"
                },
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
                "has_children": false,
                "archived": false,
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "유기농 식품 과연 몸에 더 좋을까요?",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "유기농 식품 과연 몸에 더 좋을까요?",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "3b5e7a2f-7bf5-4d24-ab2c-0a9f786e5670",
                "parent": {
                    "type": "page_id",
                    "page_id": "0d8407b6-cbcd-4724-beaf-6733d75c9c71"
                },
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
                "has_children": false,
                "archived": false,
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "2012년도 스탠퍼드 대학교 연구에 따르면 유기농 식품이 일반식품보다 영양가가  높다는 확실한 증거는 없다고 발표했습니다. 하지만 유기농 식품 생산 과정에서 합성 비료, 살충제, 기타 화학 물질들이 우리 몸에 미치는 위험도를 줄이는 데 도움을 줄 수 있다고 합니다. 또한 유기농 재배 농장은 지속 가능한 농업과 자연 보호에 기여하는 경우가 일반 농장보다 더 많다고 합니다.\n매년  환경운동 그룹(The Environmental Working Group)에서 \"Dirty Dozen\"과 \"Clean Fifteen\"을 발표하는데요.  \"Dirty Dozen\"은 가장 높은 수준의 농약이 검출된 12개의 식품을 말합니다. \"Dirty Dozen\"으로 발표한 식품들은 가능하다면 유기농 제품을 선택하는 것이 좋겠죠? 반면, \"Clean Fifteen\" 목록은 유기농 식품을 선택하지 않아도 농약 및 화학 물질의 수준이 상대적으로 적은 15개의 식품을 말합니다. 2023년 선정된 Clean Fifteen(15가지 깨끗한 식품)과 Dirty Dozen(12가지 오염된 식품)으로는 아래와 같습니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "2012년도 스탠퍼드 대학교 연구에 따르면 유기농 식품이 일반식품보다 영양가가  높다는 확실한 증거는 없다고 발표했습니다. 하지만 유기농 식품 생산 과정에서 합성 비료, 살충제, 기타 화학 물질들이 우리 몸에 미치는 위험도를 줄이는 데 도움을 줄 수 있다고 합니다. 또한 유기농 재배 농장은 지속 가능한 농업과 자연 보호에 기여하는 경우가 일반 농장보다 더 많다고 합니다.\n매년  환경운동 그룹(The Environmental Working Group)에서 \"Dirty Dozen\"과 \"Clean Fifteen\"을 발표하는데요.  \"Dirty Dozen\"은 가장 높은 수준의 농약이 검출된 12개의 식품을 말합니다. \"Dirty Dozen\"으로 발표한 식품들은 가능하다면 유기농 제품을 선택하는 것이 좋겠죠? 반면, \"Clean Fifteen\" 목록은 유기농 식품을 선택하지 않아도 농약 및 화학 물질의 수준이 상대적으로 적은 15개의 식품을 말합니다. 2023년 선정된 Clean Fifteen(15가지 깨끗한 식품)과 Dirty Dozen(12가지 오염된 식품)으로는 아래와 같습니다.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "3ca9da79-7e95-4a4f-a477-f266a099bb6d",
                "parent": {
                    "type": "page_id",
                    "page_id": "0d8407b6-cbcd-4724-beaf-6733d75c9c71"
                },
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
                "has_children": false,
                "archived": false,
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "2023 Clean Fifteen\n아보카도, 옥수수, 파인애플, 양파, 파파야, 스위트 콩 (냉동), 아스파라거스, 허니듀 멜론, 키위, 양배추, 버섯, 망고, 고구마, 수박, 당근",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "2023 Clean Fifteen\n아보카도, 옥수수, 파인애플, 양파, 파파야, 스위트 콩 (냉동), 아스파라거스, 허니듀 멜론, 키위, 양배추, 버섯, 망고, 고구마, 수박, 당근",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "c50debd2-3a34-4e23-815f-7fa2342783a8",
                "parent": {
                    "type": "page_id",
                    "page_id": "0d8407b6-cbcd-4724-beaf-6733d75c9c71"
                },
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
                "has_children": false,
                "archived": false,
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "2023 Dirty Dozen\n딸기, 시금치, 케일, 복숭아, 배, 천도복숭아, 사과, 포도, 피망, 체리, 블루베리, 껍질콩",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "2023 Dirty Dozen\n딸기, 시금치, 케일, 복숭아, 배, 천도복숭아, 사과, 포도, 피망, 체리, 블루베리, 껍질콩",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "1c55f794-3bf2-43c9-af0d-a2d397eadb90",
                "parent": {
                    "type": "page_id",
                    "page_id": "0d8407b6-cbcd-4724-beaf-6733d75c9c71"
                },
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
                "has_children": false,
                "archived": false,
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "사실 \"Dirty Dozen\" 목록에 있는 식품들은 농약 수준이 높다는 주장이 있지만, 식품의 안전성에는 아무런 문제가 없다고 합니다. 일부 연구에서는 \"Dirty Dozen\" 목록에 있는 식품을 유기농 식품으로 바꿔도 건강에 큰 이익이 없다고 발표했습니다. 과일과 야채를 안 먹어서 생기는 위험보다 소량의 농약을 섭취하는 위협이 우리 건강에 훨씬 낮다고 보고 있는 거죠.\n지금까지도 유기농 섭취에 관한 연구와 의견이 많습니다. 개인의 식습관과 가치관에 따른 선택이라고 생각합니다. 막연하게 유기농이 몸에  좋을 거 같다는 생각보다는 의식적으로 식품을 구매해 보세요.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "사실 \"Dirty Dozen\" 목록에 있는 식품들은 농약 수준이 높다는 주장이 있지만, 식품의 안전성에는 아무런 문제가 없다고 합니다. 일부 연구에서는 \"Dirty Dozen\" 목록에 있는 식품을 유기농 식품으로 바꿔도 건강에 큰 이익이 없다고 발표했습니다. 과일과 야채를 안 먹어서 생기는 위험보다 소량의 농약을 섭취하는 위협이 우리 건강에 훨씬 낮다고 보고 있는 거죠.\n지금까지도 유기농 섭취에 관한 연구와 의견이 많습니다. 개인의 식습관과 가치관에 따른 선택이라고 생각합니다. 막연하게 유기농이 몸에  좋을 거 같다는 생각보다는 의식적으로 식품을 구매해 보세요.",
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
        "title":"글루텐 프리 몸에 좋을까요?",
        "object": "list",
        "results": [
            {
                "object": "block",
                "id": "af3cd840-e651-49ef-88a2-ed6e4d51277e",
                "parent": {
                    "type": "page_id",
                    "page_id": "71c2ef4c-7465-4735-9df1-1d73d451e7cd"
                },
                "created_time": "2023-08-16T02:30:00.000Z",
                "last_edited_time": "2023-08-16T02:30:00.000Z",
                "created_by": {
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
                        "url": "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&w=1472&q=80"
                    }
                }
            },
            {
                "object": "block",
                "id": "c916ef46-ae66-4bc7-861f-bee23abeb951",
                "parent": {
                    "type": "page_id",
                    "page_id": "71c2ef4c-7465-4735-9df1-1d73d451e7cd"
                },
                "created_time": "2023-08-16T02:29:00.000Z",
                "last_edited_time": "2023-08-16T02:29:00.000Z",
                "created_by": {
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
                                "content": "글루텐=밀가루?\n글루텐 하면 밀가루가 생각나죠?\n전문적인 개념은 밀, 보리, 호밀 곡물에 존재하는 단백질을 말합니다.\n즉 글루텐 = 곡물 속 단백질 | 글루텐의 끈기가 가스를 보유하기 때문에 빵을 부풀게 만든다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "글루텐=밀가루?\n글루텐 하면 밀가루가 생각나죠?\n전문적인 개념은 밀, 보리, 호밀 곡물에 존재하는 단백질을 말합니다.\n즉 글루텐 = 곡물 속 단백질 | 글루텐의 끈기가 가스를 보유하기 때문에 빵을 부풀게 만든다.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "372e9936-c80b-4561-8149-a898762b5b7f",
                "parent": {
                    "type": "page_id",
                    "page_id": "71c2ef4c-7465-4735-9df1-1d73d451e7cd"
                },
                "created_time": "2023-08-16T02:29:00.000Z",
                "last_edited_time": "2023-08-16T02:29:00.000Z",
                "created_by": {
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
                                "content": "글루텐이 나쁜 성분은 아닌데, 왜 글루텐 프리가 나타났을까요?",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "글루텐이 나쁜 성분은 아닌데, 왜 글루텐 프리가 나타났을까요?",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "851b1e64-83ac-41c9-a334-d25fd3d27c76",
                "parent": {
                    "type": "page_id",
                    "page_id": "71c2ef4c-7465-4735-9df1-1d73d451e7cd"
                },
                "created_time": "2023-08-16T02:29:00.000Z",
                "last_edited_time": "2023-08-16T05:30:00.000Z",
                "created_by": {
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
                                "content": "사람은 글루텐의 일부(글리아딘)를 끝까지 분해할 수 있는 효소가 없습니다.  분해가 덜 된 글루텐이 몸의 면역 반응을 일으킵니다. 심지어 염증성 질환이 생기거나 악화하기도 합니다.\n대표적인 예가 바로 셀리악 병(Celiac DIsease)입니다. 셀리악 병을 방치하면 심각한 질환으로 발전할 수 있습니다.  만약 셀리악병이 의심된다면 병원에 가서 항체 검사와 적절한 치료를 받아야 합니다.\n여기서 이 셀리악 병에 관한 중요한 사실이 있습니다. 우리나라에서 현재 보고된 셀리악 병 환자가 2016년 2월 기준으로 딱 한 명뿐이라고 합니다. <",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "사람은 글루텐의 일부(글리아딘)를 끝까지 분해할 수 있는 효소가 없습니다.  분해가 덜 된 글루텐이 몸의 면역 반응을 일으킵니다. 심지어 염증성 질환이 생기거나 악화하기도 합니다.\n대표적인 예가 바로 셀리악 병(Celiac DIsease)입니다. 셀리악 병을 방치하면 심각한 질환으로 발전할 수 있습니다.  만약 셀리악병이 의심된다면 병원에 가서 항체 검사와 적절한 치료를 받아야 합니다.\n여기서 이 셀리악 병에 관한 중요한 사실이 있습니다. 우리나라에서 현재 보고된 셀리악 병 환자가 2016년 2월 기준으로 딱 한 명뿐이라고 합니다. <",
                            "href": null
                        },
                        {
                            "type": "text",
                            "text": {
                                "content": "서울아산병원 질환 백과>",
                                "link": {
                                    "url": "http://www.amc.seoul.kr/asan/healthinfo/disease/diseaseDetail.do?contentId=32038"
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
                            "plain_text": "서울아산병원 질환 백과>",
                            "href": "http://www.amc.seoul.kr/asan/healthinfo/disease/diseaseDetail.do?contentId=32038"
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "6de66143-7954-4a78-ad60-330067fa465d",
                "parent": {
                    "type": "page_id",
                    "page_id": "71c2ef4c-7465-4735-9df1-1d73d451e7cd"
                },
                "created_time": "2023-08-16T05:30:00.000Z",
                "last_edited_time": "2023-08-16T05:31:00.000Z",
                "created_by": {
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
                                "content": "소화병학회의 여러 연구에 의하면 셀리악병의 원인이 글루텐이 아닌 다른 첨가물일 수도 있다는 견해가 있습니다. 하지만 글루텐은 알레르기 식품군에 속하기 때문에 만약 글루텐이 들어간 음식을 먹고 몸이 아팠다면 병원에 가서 셀리악 병인지 다른 문제가 있는지 알아보세요. 글루텐 관련 장애가 있다고 진단받으면 글루텐 프리 제품이 도움이 됩니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "소화병학회의 여러 연구에 의하면 셀리악병의 원인이 글루텐이 아닌 다른 첨가물일 수도 있다는 견해가 있습니다. 하지만 글루텐은 알레르기 식품군에 속하기 때문에 만약 글루텐이 들어간 음식을 먹고 몸이 아팠다면 병원에 가서 셀리악 병인지 다른 문제가 있는지 알아보세요. 글루텐 관련 장애가 있다고 진단받으면 글루텐 프리 제품이 도움이 됩니다.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "c1d5f8cf-74f9-4451-8adf-1eb8b35819b4",
                "parent": {
                    "type": "page_id",
                    "page_id": "71c2ef4c-7465-4735-9df1-1d73d451e7cd"
                },
                "created_time": "2023-08-16T05:31:00.000Z",
                "last_edited_time": "2023-08-16T05:31:00.000Z",
                "created_by": {
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
                                "content": "하지만 글루텐 프리 제품 중에는 흰 쌀가루, 전분 등 가공된 탄수화물을 넣어 혈당을  높이는 제품도 많습니다. 또 쌀로 만든 빵이지만 글루텐을 넣고 만드는 경우도 있습니다. 글루텐 프리 제품 중에는 가공된 탄수화물, 인공 감미료, 버터 등을  넣는 경우도 있으니 꼭 첨가물을 확인해 보세요.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "하지만 글루텐 프리 제품 중에는 흰 쌀가루, 전분 등 가공된 탄수화물을 넣어 혈당을  높이는 제품도 많습니다. 또 쌀로 만든 빵이지만 글루텐을 넣고 만드는 경우도 있습니다. 글루텐 프리 제품 중에는 가공된 탄수화물, 인공 감미료, 버터 등을  넣는 경우도 있으니 꼭 첨가물을 확인해 보세요.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "173eb6f0-c695-4b4f-90d7-dbde774fa667",
                "parent": {
                    "type": "page_id",
                    "page_id": "71c2ef4c-7465-4735-9df1-1d73d451e7cd"
                },
                "created_time": "2023-08-16T05:31:00.000Z",
                "last_edited_time": "2023-08-16T05:31:00.000Z",
                "created_by": {
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
                                "content": "물론 글루텐 프리에 관심을 두는 사람들은 일반적으로 가공식품을 덜 소비하고 야채, 과일, 건강한 지방을 더 소비하는 경향이 있습니다. 즉 중요한 것은 글루텐 프리 마케팅에 휘둘리는 것보다는 건강한 식단을 갖추는 게 더 중요합니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "물론 글루텐 프리에 관심을 두는 사람들은 일반적으로 가공식품을 덜 소비하고 야채, 과일, 건강한 지방을 더 소비하는 경향이 있습니다. 즉 중요한 것은 글루텐 프리 마케팅에 휘둘리는 것보다는 건강한 식단을 갖추는 게 더 중요합니다.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "3975359c-dc16-4739-b060-fbffdafabd96",
                "parent": {
                    "type": "page_id",
                    "page_id": "71c2ef4c-7465-4735-9df1-1d73d451e7cd"
                },
                "created_time": "2023-08-16T05:31:00.000Z",
                "last_edited_time": "2023-08-16T05:31:00.000Z",
                "created_by": {
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
                                "content": "또한 지나친 밀가루 섭취로 인한 소화 불량이 문제라면 '통곡물' 재료로 만든 베이킹을 하거나 통곡물 베이커리를 추천합니다. '글루텐 프리' 베이킹과  글루텐 프리 제품이 건강하다고 생각하실 필요는 없습니다.\n'글루텐'은 모두에게 나쁜 것은 아닙니다. 여러 선택지 중 하나입니다.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "또한 지나친 밀가루 섭취로 인한 소화 불량이 문제라면 '통곡물' 재료로 만든 베이킹을 하거나 통곡물 베이커리를 추천합니다. '글루텐 프리' 베이킹과  글루텐 프리 제품이 건강하다고 생각하실 필요는 없습니다.\n'글루텐'은 모두에게 나쁜 것은 아닙니다. 여러 선택지 중 하나입니다.",
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
        "title":"나쁜 설탕? 착한 설탕?",
        "object": "list",
        "results": [
            {
                "object": "block",
                "id": "3ed040ed-51b9-4f75-aaee-2cc9f5e9cf38",
                "parent": {
                    "type": "page_id",
                    "page_id": "f59d76c5-6d91-4272-b1e8-5bc6726e303e"
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
                        "url": "https://images.unsplash.com/photo-1628619876503-2db74e724757?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&w=1510&q=80"
                    }
                }
            },
            {
                "object": "block",
                "id": "1cd981af-2f79-4c02-b84f-ca4497da9ce1",
                "parent": {
                    "type": "page_id",
                    "page_id": "f59d76c5-6d91-4272-b1e8-5bc6726e303e"
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
                                "content": "설탕에 관한 얼마나 알고 계세요?",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "설탕에 관한 얼마나 알고 계세요?",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "4cf80f59-2d0c-4624-90ef-347fe036c39a",
                "parent": {
                    "type": "page_id",
                    "page_id": "f59d76c5-6d91-4272-b1e8-5bc6726e303e"
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
                                "content": "황설탕, 흑설탕은 정제 설탕일까요? 비정제 설탕일까요?\n맞아요. 흰설탕, 황설탕, 흑설탕은 정제 설탕이에요.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "황설탕, 흑설탕은 정제 설탕일까요? 비정제 설탕일까요?\n맞아요. 흰설탕, 황설탕, 흑설탕은 정제 설탕이에요.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "02a294cf-c3cd-4ac4-afc8-5af124123c72",
                "parent": {
                    "type": "page_id",
                    "page_id": "f59d76c5-6d91-4272-b1e8-5bc6726e303e"
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
                                "content": "정제 설탕은 사탕수수에서 오로지 당분만 뽑아낸 감미료(단맛을 내는 데 쓰는 재료를 통틀어 이르는 말)이에요.\n정제 설탕은 체내 흡수가 빠르고, 배부름을 느끼지 못해요. 그래서 과다 섭취할 위험이 있어요.\n정제 설탕을 과다 섭취하면 비만, 당뇨 등 질환이 유발될 수 있기 때문에 주의해야 해요.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "정제 설탕은 사탕수수에서 오로지 당분만 뽑아낸 감미료(단맛을 내는 데 쓰는 재료를 통틀어 이르는 말)이에요.\n정제 설탕은 체내 흡수가 빠르고, 배부름을 느끼지 못해요. 그래서 과다 섭취할 위험이 있어요.\n정제 설탕을 과다 섭취하면 비만, 당뇨 등 질환이 유발될 수 있기 때문에 주의해야 해요.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "940bd971-88b2-4300-9751-c6b9f9e43891",
                "parent": {
                    "type": "page_id",
                    "page_id": "f59d76c5-6d91-4272-b1e8-5bc6726e303e"
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
                                "content": "그럼, 비정제 원당은 뭘까요?\n비정제 설탕은 사탕수수에 단순한 정제 과정만 거쳐 만들어요. 그래서 미네랄이 풍부하고 칼슘, 칼륨, 마그네슘, 아연, 망간, 식이섬유, 철분 등 많은 영양소가 풍부해요. 이런 미네랄, 식이섬유가 당이 체내에 바로 흡수되는 걸 막아줘요.\n비정제 원당을 어떻게 만들까요?\n첫째, 사탕수수를 수확해요.\n둘째, 수확한 사탕수수를 물과 함께 끓여요.\n셋째, 사탕수수를 끓이고 남은 성분을 원심분리기(원심력을 이용하여 섞여 있는 액체와 고체 또는 비중이 서로 다른 액체 혼합을 분리하는 장치)에 넣어요.\n이 단계에서 화학적, 물리적 과정을 더 거치면 앞서 이야기한 흰 설탕, 황설탕, 흑설탕(정제 설탕)이 만들어져요.\n하지만 당 함유량의 경우 정제 설탕과 비정제 설탕 모두 비슷하기 때문에 당뇨 환자 혹은 당을 제한하고 있다면 천연 감미료를  사용하는 것을 추천해요.\n설탕 대신 음식에 단맛을 내는 조미료를 감미료라고 해요. 감미료에는 천연 감미료와 인공 감미료가 있어요.\n천연 감미료에는 코코넛 슈가, 마스코바도, 아가베 시럽, 메이플 시럽, 스테비아, 나한가, 에리스테롤, 조청, 꿀 등이 있어요.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "그럼, 비정제 원당은 뭘까요?\n비정제 설탕은 사탕수수에 단순한 정제 과정만 거쳐 만들어요. 그래서 미네랄이 풍부하고 칼슘, 칼륨, 마그네슘, 아연, 망간, 식이섬유, 철분 등 많은 영양소가 풍부해요. 이런 미네랄, 식이섬유가 당이 체내에 바로 흡수되는 걸 막아줘요.\n비정제 원당을 어떻게 만들까요?\n첫째, 사탕수수를 수확해요.\n둘째, 수확한 사탕수수를 물과 함께 끓여요.\n셋째, 사탕수수를 끓이고 남은 성분을 원심분리기(원심력을 이용하여 섞여 있는 액체와 고체 또는 비중이 서로 다른 액체 혼합을 분리하는 장치)에 넣어요.\n이 단계에서 화학적, 물리적 과정을 더 거치면 앞서 이야기한 흰 설탕, 황설탕, 흑설탕(정제 설탕)이 만들어져요.\n하지만 당 함유량의 경우 정제 설탕과 비정제 설탕 모두 비슷하기 때문에 당뇨 환자 혹은 당을 제한하고 있다면 천연 감미료를  사용하는 것을 추천해요.\n설탕 대신 음식에 단맛을 내는 조미료를 감미료라고 해요. 감미료에는 천연 감미료와 인공 감미료가 있어요.\n천연 감미료에는 코코넛 슈가, 마스코바도, 아가베 시럽, 메이플 시럽, 스테비아, 나한가, 에리스테롤, 조청, 꿀 등이 있어요.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "d7e55e02-3b99-4bb0-b79d-00d4a759f29b",
                "parent": {
                    "type": "page_id",
                    "page_id": "f59d76c5-6d91-4272-b1e8-5bc6726e303e"
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
                "has_children": true,
                "archived": false,
                "type": "numbered_list_item",
                "numbered_list_item": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "코코넛 슈가",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "코코넛 슈가",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "16f7459d-e18b-4331-9e7c-b0132a3afb37",
                "parent": {
                    "type": "page_id",
                    "page_id": "f59d76c5-6d91-4272-b1e8-5bc6726e303e"
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
                "has_children": true,
                "archived": false,
                "type": "numbered_list_item",
                "numbered_list_item": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "마스코바도",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "마스코바도",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "1d4c6460-4391-4133-89d3-1a4102a90d85",
                "parent": {
                    "type": "page_id",
                    "page_id": "f59d76c5-6d91-4272-b1e8-5bc6726e303e"
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
                "type": "numbered_list_item",
                "numbered_list_item": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "아가베 시럽\n식물 용설란의 수액으로 만든 감미료로 설탕의 1.3배 정도의 단맛을 지니고 있어요.\n프로바이오틱스와 프리바이오틱스를 제공하여 소화 건강에 도움이 되고, 항산화 성분도 함유하고 있어요.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "아가베 시럽\n식물 용설란의 수액으로 만든 감미료로 설탕의 1.3배 정도의 단맛을 지니고 있어요.\n프로바이오틱스와 프리바이오틱스를 제공하여 소화 건강에 도움이 되고, 항산화 성분도 함유하고 있어요.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "10c03e85-1fd6-4f55-8ccb-143654f01ee3",
                "parent": {
                    "type": "page_id",
                    "page_id": "f59d76c5-6d91-4272-b1e8-5bc6726e303e"
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
                "has_children": true,
                "archived": false,
                "type": "numbered_list_item",
                "numbered_list_item": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "메이플 시럽",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "메이플 시럽",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "df4319af-5511-4cdc-9c54-08421292becd",
                "parent": {
                    "type": "page_id",
                    "page_id": "f59d76c5-6d91-4272-b1e8-5bc6726e303e"
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
                "has_children": true,
                "archived": false,
                "type": "numbered_list_item",
                "numbered_list_item": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "스테비아",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "스테비아",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "e14f8d17-4d8d-4666-b04f-4b656dee619b",
                "parent": {
                    "type": "page_id",
                    "page_id": "f59d76c5-6d91-4272-b1e8-5bc6726e303e"
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
                "type": "numbered_list_item",
                "numbered_list_item": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "나한과\n조롱박과의 열매에 추출한 물질로 항산화제와 폴리페놀을 함유하고 있어 면역 체계를 지원하고, 항염증 효과도 있어요.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "나한과\n조롱박과의 열매에 추출한 물질로 항산화제와 폴리페놀을 함유하고 있어 면역 체계를 지원하고, 항염증 효과도 있어요.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "d18c1bbd-754a-4184-8ed9-39cc60199083",
                "parent": {
                    "type": "page_id",
                    "page_id": "f59d76c5-6d91-4272-b1e8-5bc6726e303e"
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
                "type": "numbered_list_item",
                "numbered_list_item": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "에리스테롤\n옥수수에서 추출한 청량감을 갖고 있는 저칼로리 감미료예요.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "에리스테롤\n옥수수에서 추출한 청량감을 갖고 있는 저칼로리 감미료예요.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "78b472df-479f-4ce6-8d8b-d33e9cc44814",
                "parent": {
                    "type": "page_id",
                    "page_id": "f59d76c5-6d91-4272-b1e8-5bc6726e303e"
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
                "type": "numbered_list_item",
                "numbered_list_item": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "조청\n곡식을 엿기름으로 삭힌 다음 불에 끓이다 졸여서 걸쭉하게 만든 것이에요.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "조청\n곡식을 엿기름으로 삭힌 다음 불에 끓이다 졸여서 걸쭉하게 만든 것이에요.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "4423d8e5-5b05-47a9-a48e-4c5bf0862457",
                "parent": {
                    "type": "page_id",
                    "page_id": "f59d76c5-6d91-4272-b1e8-5bc6726e303e"
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
                "type": "numbered_list_item",
                "numbered_list_item": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "꿀\n황산화 작용, 칼로리와 당 성분 있고, 벌의 노동착취와 얻은 감미료로 비건 베이킹에서 사용 안 해요.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "꿀\n황산화 작용, 칼로리와 당 성분 있고, 벌의 노동착취와 얻은 감미료로 비건 베이킹에서 사용 안 해요.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "56954d1c-4ec7-409b-b8b4-a4b50cbb4492",
                "parent": {
                    "type": "page_id",
                    "page_id": "f59d76c5-6d91-4272-b1e8-5bc6726e303e"
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
                                "content": "천연 감미료를 사용할 때 몇 가지 주의사항이 있어요.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "천연 감미료를 사용할 때 몇 가지 주의사항이 있어요.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "32c5780c-e5ef-4c8f-8581-a3967e0f4ff4",
                "parent": {
                    "type": "page_id",
                    "page_id": "f59d76c5-6d91-4272-b1e8-5bc6726e303e"
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
                "type": "numbered_list_item",
                "numbered_list_item": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "천연 감미료는 설탕보다 낮은 칼로리를 가지고 있지만, 여전히 과다 섭취할 경우 체중 증가와 당뇨병 등의 질환을 유발할 수 있어요. 적절한 양을 섭취하는 것이 중요해요.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "천연 감미료는 설탕보다 낮은 칼로리를 가지고 있지만, 여전히 과다 섭취할 경우 체중 증가와 당뇨병 등의 질환을 유발할 수 있어요. 적절한 양을 섭취하는 것이 중요해요.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "202bba16-d0e5-4f3c-8c12-33d54dd9ce7c",
                "parent": {
                    "type": "page_id",
                    "page_id": "f59d76c5-6d91-4272-b1e8-5bc6726e303e"
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
                "type": "numbered_list_item",
                "numbered_list_item": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "나무 열매나 꽃에서 추출한 감미료는 꽃나무 알레르기가 있는 사람들에게는 문제가 될 수 있어요. 천연 감미료를 넣기 전에 원료를 확인하고 알레르기 반응이 있는 경우 사용을 삼가세요.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "나무 열매나 꽃에서 추출한 감미료는 꽃나무 알레르기가 있는 사람들에게는 문제가 될 수 있어요. 천연 감미료를 넣기 전에 원료를 확인하고 알레르기 반응이 있는 경우 사용을 삼가세요.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "f0a3e4f9-23a9-41b5-8ae4-76db5447a7e3",
                "parent": {
                    "type": "page_id",
                    "page_id": "f59d76c5-6d91-4272-b1e8-5bc6726e303e"
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
                "type": "numbered_list_item",
                "numbered_list_item": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "천연 감미료는 보존 기간이 짧은 경우가 많아서, 보관 및 유통 기간에 대한 주의가 필요해요. 각 제품의 유통 기한과 보관 방법을 확인하고, 유통 기한이 지난 제품을 사용하지 않도록 주의해야 해요.",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "천연 감미료는 보존 기간이 짧은 경우가 많아서, 보관 및 유통 기간에 대한 주의가 필요해요. 각 제품의 유통 기한과 보관 방법을 확인하고, 유통 기한이 지난 제품을 사용하지 않도록 주의해야 해요.",
                            "href": null
                        }
                    ],
                    "color": "default"
                }
            },
            {
                "object": "block",
                "id": "53f55b5d-ecde-422a-8d92-7fd21f39003a",
                "parent": {
                    "type": "page_id",
                    "page_id": "f59d76c5-6d91-4272-b1e8-5bc6726e303e"
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
                "type": "numbered_list_item",
                "numbered_list_item": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "일부 천연 감미료 제품은 인공적인 첨가물을 함유하고 있을 수 있어요. 천연 감미료를 구매할 때는 제품 성분표를 꼼꼼히 확인하여 인공 첨가물이 함유되어 있는지 확인해야 해요.\n당에 관한 정리해 보았는데요. 여러분의 건강 상태와 라이프 스타일에 따라 설탕을 이용해 보면 어떨까요?",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "일부 천연 감미료 제품은 인공적인 첨가물을 함유하고 있을 수 있어요. 천연 감미료를 구매할 때는 제품 성분표를 꼼꼼히 확인하여 인공 첨가물이 함유되어 있는지 확인해야 해요.\n당에 관한 정리해 보았는데요. 여러분의 건강 상태와 라이프 스타일에 따라 설탕을 이용해 보면 어떨까요?",
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

        const responseData2 = myData2.find(result => 
            result.results[0].parent.page_id === String(router.query.id)
          );
          myData2.forEach(result => 
            console.log(result.results[0].parent.page_id, " ", String(router.query.id))
          );
          console.log(responseData2);

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
    <div className="w-full h-full md:px-14 py-28 flex flex-col justify-center items-center space-y-10">
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