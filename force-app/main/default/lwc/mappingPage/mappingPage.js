import { LightningElement, track } from 'lwc';
import getObjFieldsValue from '@salesforce/apex/MappingPageController.getObjFieldsValue';

export default class MappingPage extends LightningElement {
    @track value = 'Common App Application';
    @track objValue = 'Contact';
    @track fieldsList = [];
    @track firstField = 'Select Value';

    /*@wire(getObjFieldsValue, { objectName: '$objValue' })
    myData;*/
    connectedCallback(){
        var arr = [];
        getObjFieldsValue({objectName : this.objValue})
        .then(result =>{
            result.forEach(function(element) {
                const obj = { 'label': element, 'value': element };
                arr.push(obj);
                //this.objectsList = arr; // This will not work inside We Have to assign value in objectList Outside of forEach Loop
           });
           this.fieldsList = arr;
        }).catch(error =>{
                // eslint-disable-next-line no-console
                 console.log('error'+error);
        });

    }

    get options() {
        return [
            { label: 'Common App Application', value: 'Common App Application' },
            { label: 'DateTime', value: 'DateTime' },
            { label: 'Deduplication Test', value: 'Deduplication Test' },
            { label: 'TestData Two', value: 'TestData Two' },
            { label: 'New Data Source', value: 'New Data Source' },
            { label: 'Test', value: 'Test' },
        ];
    }

    get options2() {
        return [
            { label: 'Contact', value: 'Contact' },
            { label: 'Account', value: 'Account' },
            { label: 'Lead', value: 'Lead' },
        ];
    }
    handleChange(event){
        const selectedItem = event.detail.value;
        // eslint-disable-next-line no-console
        console.log('You Selected : '+selectedItem);
    }
    getSelectedField(event){
        const selectedField = event.target.value;
        this.firstField = selectedField;
    }
}