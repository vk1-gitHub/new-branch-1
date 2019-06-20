import { LightningElement, api } from 'lwc';

export default class SecondLWC extends LightningElement {
    @api message = '';
    @api message1 = '';

    @api
    callMethod(myParam){
        this.message1 = this.message;
        // eslint-disable-next-line no-console
        console.log('Method Called In SecondLWC');
        // eslint-disable-next-line no-console
        console.log('Method Called In SecondLWC : '+myParam);
    }
    
}