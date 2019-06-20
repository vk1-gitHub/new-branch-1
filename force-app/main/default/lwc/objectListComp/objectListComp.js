import getObjects from '@salesforce/apex/NotesAndAttachmentController.getObjects';
import { LightningElement, track , wire} from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';
import { registerListener, unregisterAllListeners } from 'c/pubsub';

export default class ObjectListComp extends LightningElement {
    @track selectedRadioButton = 'Note';
    @track selectedObjectName = '';
    @track objectsList =[];
    @wire(CurrentPageReference) pageRef; // Required by pubsub
    
    getObjectsName(){
        var arr = [];
        getObjects({selectedRadio : this.selectedRadioButton})
        .then(result =>{
            result.forEach(function(element) {
                const obj = { 'label': element, 'value': element };
                arr.push(obj);
                //this.objectsList = arr; // This will not work inside We Have to assign value in objectList Outside of forEach Loop
           });
           this.objectsList = arr;
        }).catch(error =>{
                // eslint-disable-next-line no-console
                 console.log('error'+error);
        });
    }

	connectedCallback() {
		// subscribe to getobjectsname event
        registerListener('getobjectsname', this.getObjectsList, this);
        this.getObjectsName();
	}
	disconnectedCallback() {
		// unsubscribe from getobjectsname event
		unregisterAllListeners(this);
    }
    getObjectsList(event){
       const myData = event.detail;
       var selRadio = myData.selectedRadio;
        if(selRadio !== undefined){
            this.selectedRadioButton = selRadio;
            this.getObjectsName();
            // eslint-disable-next-line no-console
            console.log('objects !!@@ '+selRadio);
        }
    }

    handleChange(event) {
        this.selectedObjectName = event.detail.value;
        fireEvent(this.pageRef, 'getobjectsname', {detail : {selectedRadio : this.selectedRadioButton, selectedObj : this.selectedObjectName},});
        // eslint-disable-next-line no-console
        console.log('Selected Object == '+this.selectedObjectName);
    }
}