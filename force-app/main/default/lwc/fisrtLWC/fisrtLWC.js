import { LightningElement } from 'lwc';

export default class FisrtLWC extends LightningElement {
    sendMEssage(){
        const eventObj = new CustomEvent('mgsevent', {detail : {message : 'Hi Lightning Web Component'},});
        this.dispatchEvent(eventObj);
        
    }
}