import { Level } from "@/enum/level";

export default interface RecipeDetail {
    id: number;
    title: string;
    level: Level;
    intro: string;
    result: string;
    ingredient: string;
    explanation: string;
    img: string;
    tip?:string;
}