import { LightningElement, track } from 'lwc';

export default class ParentLWC extends LightningElement {

    @track itemName = "Milk";

    updateItemName() {
        this.itemName = "updated item name in Parent";
    }
}