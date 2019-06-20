import { LightningElement, track} from 'lwc';

export default class TestLwc extends LightningElement {
    @track num1 = 5;
    @track num2 = 6;
    @track boolVar = true;
    handleclick(){
        this.boolVar = !(this.boolVar);
    }
}