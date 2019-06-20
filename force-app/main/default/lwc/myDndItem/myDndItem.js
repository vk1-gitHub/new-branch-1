import { LightningElement, api } from 'lwc';

export default class MyDndItem extends LightningElement {
    @api task;

    itemDragStart() {
        const event = new CustomEvent('itemdrag', {
            detail: this.task.taskid
        });
        this.dispatchEvent(event);
    }
    handleDropInItem(){
        const event = new CustomEvent('itemdrop', {
            detail: this.task.taskid
        });
        this.dispatchEvent(event);
        // eslint-disable-next-line no-console
        console.log("On Drop In Item !!@@ "+this.task.taskid);
    }
}