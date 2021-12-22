import { Author } from "./author";

export interface Bookfav{
    id:number;
    url:string
    title:string
    authors:Author[]
    subjects:string
}