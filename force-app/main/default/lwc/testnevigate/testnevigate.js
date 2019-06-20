import { LightningElement, track, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { CurrentPageReference} from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Testnevigate extends NavigationMixin(LightningElement) {
    @track value = '';
    @track detailValue = '';
    @wire(CurrentPageReference)
    pageRef;
    get obj() {
        return [
            { label: 'Account', value: 'Account' },
            { label: 'Contact', value: 'Contact' },
            { label: 'Opportunity', value: 'Opportunity' },
            { label: 'Case', value: 'Case' },
            { label: 'Lead', value: 'Lead' },
        ];
    }
    get options() {
        return [
            { label: 'Home', value: 'home' },
            { label: 'List', value: 'list' },
            { label: 'New', value: 'new' }
        ];
    }
    handleChangeObject(event) {
        this.value = event.detail.value;
        //alert('Clicked'); // eslint-disable-line no-alert
    }
    handleChangeDetail(event){
        this.detailValue = event.detail.value;
    }

    navigateToObjectHome() {
        // Navigate to the Account home page
        if(this.value.length > 0 && this.detailValue.length > 0){
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: this.value,
                    actionName: this.detailValue,
                },
            });
        }else{
            //alert('Please Select Object And Destination');//eslint-disable-line no-alert
            const evt = new ShowToastEvent({
                title: "Notification",
                message: 'Please Select Object And Destination',
                variant: "error",
            });
            this.dispatchEvent(evt);
        }
    }
    navigateToComponent(){
        this[NavigationMixin.Navigate]({
        type: "standard__component",
            attributes: {
            componentName: "c__MyLightningComp"
            },
        state: {
             c__recordId: "001B000000uO3jTIAS"
        }
        });
    }
}