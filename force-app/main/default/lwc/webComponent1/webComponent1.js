import { LightningElement, track, wire, api} from 'lwc';
import getAccountList from '@salesforce/apex/LWC_Handler.getAccountList';
import getContactList from '@salesforce/apex/LWC_Handler.getContactList';
export default class WebComponent1 extends LightningElement {
    @track isRender = false;
    @track isRenderContacts = false;
    @api accountId = '';
    //@track contList;
    @wire(getAccountList) accList;
    @wire(getContactList, { accId: '$accountId'})
    conList;
   
    fetchAccounts(){
        this.isRender = true;
    }
    handleClick(event){
        const acctId = event.target.title;
        this.accountId = acctId;
         this.contList = this.conList;
        // eslint-disable-next-line no-alert
        //alert(JSON.stringify(this.contList));
        //this.isRenderContacts = true;
        const eventObj = new CustomEvent('myevent', {detail : {'accId' : acctId},});
        this.dispatchEvent(eventObj);
        
    }
    getContact(event){
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(event.target.title));
    }

    /*@track myMessage = 'Hello';
    handleClick(){
     const mtEvevnt = new CustomEvent('myEvent', {detail : {'Message' : 'Hello'},});
     this.dispatchEvent(mtEvevnt);
    }*/
}