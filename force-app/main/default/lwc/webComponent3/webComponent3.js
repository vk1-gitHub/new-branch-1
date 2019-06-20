import { LightningElement, track, api } from 'lwc';

export default class WebComponent3 extends LightningElement {
    @track isRenderForm = false;
    @api recordId;
    getAccountId(event){
        const accId = event.detail.accId;
        this.recordId = accId;
        this.isRenderForm = true;
        // eslint-disable-next-line no-alert
        //alert('In 2nd '+accId);
    }
    handleSubmit(){
        // eslint-disable-next-line no-alert
        alert('Submitted');
    }
}