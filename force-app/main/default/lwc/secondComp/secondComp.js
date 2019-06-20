import { LightningElement, track } from 'lwc';

export default class SecondComp extends LightningElement {
    @track myMessage = 'Hi Lightning Web Component';
    handleUpdate(){
        this.myMessage = 'My Message Updated';
    }
    /*
       @track message = '';
    @api myMessage = 'Hello.............';
    handleEvent(event){
        const result = event.detail.mgs;
        this.message = result;
        //alert(JSON.stringify(result)); //eslint-disable-line 
    }
    handleUpdate(){
          this.myMessage = 'My Message Updated';
    }
    */
}