import { user } from "./user";


export class feedback {
    public item : string;
    public author: user;
    public content: string;

    constructor(author: user, item: string){
        this.author = author;
        this.item = item;
        this.content = "";
    }
}