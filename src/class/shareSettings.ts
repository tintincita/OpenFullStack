import { groups } from "./groups";
import { user } from "./user";

export class shareSettings {

    public owner: user;
    public publicAccess: Boolean = false;
    public collaborators: groups[] = [];
    public viewers: groups[] = [];

    constructor(owner: user) {
        this.owner = owner;
    }

}