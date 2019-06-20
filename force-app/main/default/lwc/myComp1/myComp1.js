import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';

export default class MyComp1 extends LightningElement {
    @wire(CurrentPageReference) pageRef;

    handleClick(){
        fireEvent(this.pageRef, 'bearListUpdate', {detail : {firstName : 'Vivek', lastName : 'Kumar'},});
    }
}