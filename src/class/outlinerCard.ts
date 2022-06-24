import { space } from "./space";

export class outlinerCard {
    public parentCard?: outlinerCard;
    public document: space;
    public orderIndex: number;
    public title?: string;
    public content: string;

    constructor(document: space, orderIndex: number = 1) {
        this.document = document;
        this.orderIndex = orderIndex;
        this.content = "";

    }

    public arrangeCard(orderIndex: number){
        this.orderIndex = orderIndex;
    }

    public nest(parentCard: outlinerCard){
        this.parentCard= parentCard;
    }
    

}