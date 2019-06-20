import { LightningElement, track, wire } from 'lwc';
import getContactList from '@salesforce/apex/LWC_Handler.getContactList';
export default class WebComponent2 extends LightningElement {
    @track accountId ='';
    @track isRenderContacts = false;
    @wire(getContactList, { accId: '$accountId'})
    conList;
    handleEvent(event){
        const eventData = event.detail;
        // eslint-disable-next-line no-alert
        alert(eventData.data);
       // this.message = eventData;
    }
    getAccountId(event){
        const accId = event.detail.accId;
        this.accountId = accId;
        // eslint-disable-next-line no-alert
        //alert('In 2nd '+accId);
        this.isRenderContacts = true;
    }
    getContact(event){
        const contact = event.target.title;
        // eslint-disable-next-line no-alert
        alert('Clicked Contact : '+JSON.stringify(contact));
    }
}