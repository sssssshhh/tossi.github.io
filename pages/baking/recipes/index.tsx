import Link from "next/link";
import Recipe from '@/models/Recipe';
import Image from "next/image";
import { useState, useEffect } from "react";

type Props = {
  title?: string;
  num?: number;
};

export default function Recipes() {
  const results = {
    "object": "list",
    "results": [
        {
            "object": "page",
            "id": "293380b2-1bd8-4cb0-82f8-0d2708918f25",
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
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "1b83168b-8cec-4490-abfe-757fe53936bf"
            },
            "archived": false,
            "properties": {
                "level": {
                    "id": "k%7Cpe",
                    "type": "select",
                    "select": {
                        "id": "yrW|",
                        "name": "Moderate",
                        "color": "gray"
                    }
                },
                "image": {
                    "id": "q_D%3C",
                    "type": "url",
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/bananaChocolatemurfin.jpg"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "비건 글루텐 프리 바나나 초콜릿 머핀",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "비건 글루텐 프리 바나나 초콜릿 머핀",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/293380b21bd84cb082f80d2708918f25",
            "public_url": null
        },
        {
            "object": "page",
            "id": "9097d660-d106-42c8-9959-1e596edfba1b",
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
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "1b83168b-8cec-4490-abfe-757fe53936bf"
            },
            "archived": false,
            "properties": {
                "level": {
                    "id": "k%7Cpe",
                    "type": "select",
                    "select": {
                        "id": "yrW|",
                        "name": "Moderate",
                        "color": "gray"
                    }
                },
                "image": {
                    "id": "q_D%3C",
                    "type": "url",
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/rasberrymurfin.jpg"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "비건 글루텐 프리 라즈베리 머핀",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "비건 글루텐 프리 라즈베리 머핀",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/9097d660d10642c899591e596edfba1b",
            "public_url": null
        },
        {
            "object": "page",
            "id": "aac7877d-2025-4ca8-a020-82b2e7f89b28",
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
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "1b83168b-8cec-4490-abfe-757fe53936bf"
            },
            "archived": false,
            "properties": {
                "level": {
                    "id": "k%7Cpe",
                    "type": "select",
                    "select": {
                        "id": "yrW|",
                        "name": "Moderate",
                        "color": "gray"
                    }
                },
                "image": {
                    "id": "q_D%3C",
                    "type": "url",
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/blueberryMuffin.jpg"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "비건 글루텐 프리 블루베리 머핀",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "비건 글루텐 프리 블루베리 머핀",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/aac7877d20254ca8a02082b2e7f89b28",
            "public_url": null
        },
        {
            "object": "page",
            "id": "d6fcb443-7730-45a2-81fe-54e86c5eb91d",
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
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "1b83168b-8cec-4490-abfe-757fe53936bf"
            },
            "archived": false,
            "properties": {
                "level": {
                    "id": "k%7Cpe",
                    "type": "select",
                    "select": {
                        "id": "gJJA",
                        "name": "Easy",
                        "color": "blue"
                    }
                },
                "image": {
                    "id": "q_D%3C",
                    "type": "url",
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/chocochipScorn.jpg"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "비건 글루텐 프리 초코칩 스콘",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "비건 글루텐 프리 초코칩 스콘",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/d6fcb443773045a281fe54e86c5eb91d",
            "public_url": null
        },
        {
            "object": "page",
            "id": "bbee358d-7d78-4568-bf3e-da37804aa2fc",
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
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "1b83168b-8cec-4490-abfe-757fe53936bf"
            },
            "archived": false,
            "properties": {
                "level": {
                    "id": "k%7Cpe",
                    "type": "select",
                    "select": {
                        "id": "gJJA",
                        "name": "Easy",
                        "color": "blue"
                    }
                },
                "image": {
                    "id": "q_D%3C",
                    "type": "url",
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/bananaBlueberryScorn2.jpg"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "비건 글루텐 프리 바나나 블루베리 스콘",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "비건 글루텐 프리 바나나 블루베리 스콘",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/bbee358d7d784568bf3eda37804aa2fc",
            "public_url": null
        },
        {
            "object": "page",
            "id": "f81ad60b-ad34-4769-ba8f-2b60ddf0c804",
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
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "1b83168b-8cec-4490-abfe-757fe53936bf"
            },
            "archived": false,
            "properties": {
                "level": {
                    "id": "k%7Cpe",
                    "type": "select",
                    "select": {
                        "id": "yrW|",
                        "name": "Moderate",
                        "color": "gray"
                    }
                },
                "image": {
                    "id": "q_D%3C",
                    "type": "url",
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/coconutScorn.jpg"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "비건 글루텐 프리 비건 코코넛 스콘",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "비건 글루텐 프리 비건 코코넛 스콘",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/f81ad60bad344769ba8f2b60ddf0c804",
            "public_url": null
        },
        {
            "object": "page",
            "id": "7ca14f72-e5bf-4b9b-b008-164ed5b62070",
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
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "1b83168b-8cec-4490-abfe-757fe53936bf"
            },
            "archived": false,
            "properties": {
                "level": {
                    "id": "k%7Cpe",
                    "type": "select",
                    "select": {
                        "id": "gJJA",
                        "name": "Easy",
                        "color": "blue"
                    }
                },
                "image": {
                    "id": "q_D%3C",
                    "type": "url",
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/chocoCakeScorn2.jpg"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "비건 초코 케이크 스콘",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "비건 초코 케이크 스콘",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/7ca14f72e5bf4b9bb008164ed5b62070",
            "public_url": null
        },
        {
            "object": "page",
            "id": "64f1cf8c-a469-4591-a206-0668eafb6bc8",
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
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "1b83168b-8cec-4490-abfe-757fe53936bf"
            },
            "archived": false,
            "properties": {
                "level": {
                    "id": "k%7Cpe",
                    "type": "select",
                    "select": {
                        "id": "yrW|",
                        "name": "Moderate",
                        "color": "gray"
                    }
                },
                "image": {
                    "id": "q_D%3C",
                    "type": "url",
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/rebangCookie.jpg"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "비건 르뱅 쿠키",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "비건 르뱅 쿠키",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/64f1cf8ca4694591a2060668eafb6bc8",
            "public_url": null
        },
        {
            "object": "page",
            "id": "8ae5234a-627a-499e-b287-f1c372573e12",
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
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "1b83168b-8cec-4490-abfe-757fe53936bf"
            },
            "archived": false,
            "properties": {
                "level": {
                    "id": "k%7Cpe",
                    "type": "select",
                    "select": {
                        "id": "yrW|",
                        "name": "Moderate",
                        "color": "gray"
                    }
                },
                "image": {
                    "id": "q_D%3C",
                    "type": "url",
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/rasberryWhiteChocolateCookie.jpg"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "라즈베리 화이트 초콜릿 쿠키",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "라즈베리 화이트 초콜릿 쿠키",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/8ae5234a627a499eb287f1c372573e12",
            "public_url": null
        },
        {
            "object": "page",
            "id": "10283a93-2a7c-4d20-a18d-37623b75f359",
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
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "1b83168b-8cec-4490-abfe-757fe53936bf"
            },
            "archived": false,
            "properties": {
                "level": {
                    "id": "k%7Cpe",
                    "type": "select",
                    "select": {
                        "id": "gJJA",
                        "name": "Easy",
                        "color": "blue"
                    }
                },
                "image": {
                    "id": "q_D%3C",
                    "type": "url",
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/peanutCookie.jpg"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "비건 피넛 버터 쿠키",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "비건 피넛 버터 쿠키",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/10283a932a7c4d20a18d37623b75f359",
            "public_url": null
        },
        {
            "object": "page",
            "id": "7a4ee776-9f90-432c-94ae-66ab7d45ea52",
            "created_time": "2023-09-09T09:03:00.000Z",
            "last_edited_time": "2023-09-09T09:16:00.000Z",
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
                "database_id": "1b83168b-8cec-4490-abfe-757fe53936bf"
            },
            "archived": false,
            "properties": {
                "level": {
                    "id": "k%7Cpe",
                    "type": "select",
                    "select": {
                        "id": "yrW|",
                        "name": "Moderate",
                        "color": "gray"
                    }
                },
                "image": {
                    "id": "q_D%3C",
                    "type": "url",
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/chocoCrackCookie.jpg"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "크랙 초코 쿠키",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "크랙 초코 쿠키",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/7a4ee7769f90432c94ae66ab7d45ea52",
            "public_url": null
        },
        {
            "object": "page",
            "id": "1cca7ba2-7acd-4cc7-853d-4e71a90732a6",
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
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "1b83168b-8cec-4490-abfe-757fe53936bf"
            },
            "archived": false,
            "properties": {
                "level": {
                    "id": "k%7Cpe",
                    "type": "select",
                    "select": {
                        "id": "yrW|",
                        "name": "Moderate",
                        "color": "gray"
                    }
                },
                "image": {
                    "id": "q_D%3C",
                    "type": "url",
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/congpoteChocolateCookie.jpg"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "비건 라즈베리 콩포트 초콜릿 쿠키",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "비건 라즈베리 콩포트 초콜릿 쿠키",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/1cca7ba27acd4cc7853d4e71a90732a6",
            "public_url": null
        },
        {
            "object": "page",
            "id": "819669c1-d551-49a5-ae40-6fb070f0c4bc",
            "created_time": "2023-09-09T09:01:00.000Z",
            "last_edited_time": "2023-09-09T09:15:00.000Z",
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
                "database_id": "1b83168b-8cec-4490-abfe-757fe53936bf"
            },
            "archived": false,
            "properties": {
                "level": {
                    "id": "k%7Cpe",
                    "type": "select",
                    "select": {
                        "id": "gJJA",
                        "name": "Easy",
                        "color": "blue"
                    }
                },
                "image": {
                    "id": "q_D%3C",
                    "type": "url",
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/oreoCookie2.jpg"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "비건 오레오 청크 쿠키",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "비건 오레오 청크 쿠키",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/819669c1d55149a5ae406fb070f0c4bc",
            "public_url": null
        },
        {
            "object": "page",
            "id": "7bc41ce3-5571-43e2-96f4-fa5bf57353c4",
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
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "1b83168b-8cec-4490-abfe-757fe53936bf"
            },
            "archived": false,
            "properties": {
                "level": {
                    "id": "k%7Cpe",
                    "type": "select",
                    "select": {
                        "id": "yrW|",
                        "name": "Moderate",
                        "color": "gray"
                    }
                },
                "image": {
                    "id": "q_D%3C",
                    "type": "url",
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/rottusCookie.jpg"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "비건 더블 로투스 쿠키",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "비건 더블 로투스 쿠키",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/7bc41ce3557143e296f4fa5bf57353c4",
            "public_url": null
        },
        {
            "object": "page",
            "id": "98ae66c8-4f14-4e78-8ae4-808948f9b87a",
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
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "1b83168b-8cec-4490-abfe-757fe53936bf"
            },
            "archived": false,
            "properties": {
                "level": {
                    "id": "k%7Cpe",
                    "type": "select",
                    "select": {
                        "id": "gJJA",
                        "name": "Easy",
                        "color": "blue"
                    }
                },
                "image": {
                    "id": "q_D%3C",
                    "type": "url",
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/granola.jpg"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "원볼 비건 글루텐 프리 그래놀라 쿠키",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "원볼 비건 글루텐 프리 그래놀라 쿠키",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/98ae66c84f144e788ae4808948f9b87a",
            "public_url": null
        },
        {
            "object": "page",
            "id": "272296de-54ee-4426-a56c-a2445275d9e9",
            "created_time": "2023-09-09T08:57:00.000Z",
            "last_edited_time": "2023-09-09T09:12:00.000Z",
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
                "database_id": "1b83168b-8cec-4490-abfe-757fe53936bf"
            },
            "archived": false,
            "properties": {
                "level": {
                    "id": "k%7Cpe",
                    "type": "select",
                    "select": {
                        "id": "yrW|",
                        "name": "Moderate",
                        "color": "gray"
                    }
                },
                "image": {
                    "id": "q_D%3C",
                    "type": "url",
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/oatmealChocolateCookie.jpg"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "비건 글루텐 프리 오트밀 초콜릿 칩 쿠키",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "비건 글루텐 프리 오트밀 초콜릿 칩 쿠키",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/272296de54ee4426a56ca2445275d9e9",
            "public_url": null
        },
        {
            "object": "page",
            "id": "83c7212f-3944-46bf-8397-040dbc10c534",
            "created_time": "2023-08-18T03:08:00.000Z",
            "last_edited_time": "2023-09-09T08:59:00.000Z",
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
                "database_id": "1b83168b-8cec-4490-abfe-757fe53936bf"
            },
            "archived": false,
            "properties": {
                "level": {
                    "id": "k%7Cpe",
                    "type": "select",
                    "select": {
                        "id": "gJJA",
                        "name": "Easy",
                        "color": "blue"
                    }
                },
                "image": {
                    "id": "q_D%3C",
                    "type": "url",
                    "url": "https://tossibaking.s3.ap-northeast-2.amazonaws.com/ChocolateCoconutCookie.jpg"
                },
                "title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "비건 초콜릿 코코넛 쿠키",
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "비건 초콜릿 코코넛 쿠키",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/83c7212f394446bf8397040dbc10c534",
            "public_url": null
        }
    ],
    "next_cursor": null,
    "has_more": false,
    "type": "page_or_database",
    "page_or_database": {}
};

  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // const response = await fetch('/api/DB/recipe');
        // const responseData = await response.json();
        // const updatedRecipes = responseData.results

        const updatedRecipes = results.results
        .filter((result: any) => (
          result.properties.title.title[0]?.plain_text && result.properties.image.url
        ))
        .map((result: any) => (
          {
          id: result.id,
          title: result.properties.title.title[0].plain_text,
          img: result.properties.image.url,
          level: result.properties.level.select.name,
        }));
        setRecipes(updatedRecipes);
      } catch (error) {
        console.error('Error fetching recipe data:', error);
      }
    }
    fetchData();
  }, []);

  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event: any) => {
    const value = event.target.value;
    setSelectedValue(value);
  };

  const filterRecipesByLevel = (): Recipe[] => {
    return selectedValue === "" 
        ? recipes 
        : recipes.filter((recipe) => recipe.level === selectedValue);
    };
  const filteredRecipes: Recipe[] = filterRecipesByLevel();

    return (
      <div className="w-full h-3/4 px-3 md:px-14 pt-28 flex flex-col justify-center items-center space-y-10">
        <div className="w-full flex flex-col justify-center items-center mb-16">
          <div className="py-6 text-3xl text-amber-700">RECIPES</div>
          <div className="w-full h-full p-4 text-amber-600 bg-amber-200 rounded-lg text-center">
            <i className="text-lg">You are the butter to my bread, the breath to my life.</i>
            <br />
            <i className="text-sm">- Julie and Julia</i>
          </div>
        </div>
        <div className="w-full flex items-center pl-9 ">
          <span className="mr-2 font-bold">LEVEL:</span>
          <select value={selectedValue} onChange={handleSelectChange} className="border border-gray-300 rounded px-2 py-1 border-none focus:outline-none">
            <option value="">All</option>
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 mt-2 gap-3">
          {filteredRecipes.map((recipe, index) => (
            <Link key={index} href={{ pathname: `/baking/recipes/${recipe.id}` }}>
              <div className="flex flex-col items-center space-y-2 text-amber-800" key={`recipe-${recipe.id}`}>
                  <div className="w-[300px] h-[400px]">
                    <Image
                        src={recipe.img}
                        alt="cookie"
                        width={300}
                        height={200}
                        priority
                    />
                  </div>
                <i className="text-xs text-black self-end">level: {recipe.level}</i>
                <div className="text-base sm:text-xl font-extralight">{recipe.title}</div>
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