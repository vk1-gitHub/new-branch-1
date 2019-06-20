import { LightningElement, track } from 'lwc';

export default class ChildLWC extends LightningElement {

    @track mgs = 'Hello';

    updateItemNameInChild() {
        this.mgs = "updated item name in Child";
        const myEvent = new CustomEvent('update',{detail : {'message' : 'Hi LWC'},});
        this.dispatchEvent(myEvent);
    }

}