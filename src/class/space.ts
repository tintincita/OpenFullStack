import { shareSettings } from "./shareSettings";
import { user } from "./user";

export class space {
    public parentSpace?: space;
    public shareSettings: shareSettings;
    public title: string;

    constructor(title : string = "", owner : user) {
        this.shareSettings = new shareSettings(owner);
        this.title = title;
    }

    public nest(parentSpace: space) {
        this.parentSpace = parentSpace;
    }
}