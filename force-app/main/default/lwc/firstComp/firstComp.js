import { LightningElement, api } from 'lwc';

export default class FirstComp extends LightningElement {
    @api messageValue = '';
    /*
      @track message = '';
    setMessage(event){
        this.message = event.target.value;
    }
    handleClick(){
        const myEvent = new CustomEvent('lwcevent',{detail : {'mgs' : this.message},});
        this.dispatchEvent(myEvent);
    }
    */
}