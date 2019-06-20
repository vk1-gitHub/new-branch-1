import { LightningElement, track, wire} from 'lwc';
import getObjects from '@salesforce/apex/NotesAndAttachmentController.getObjects';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';
import { registerListener } from 'c/pubsub';

export default class RadioButtonComp extends LightningElement {

    @wire(CurrentPageReference) pageRef;
    @track value = 'Note';
    @track value = 'Note';

    get options() {
        return [
            { label: 'Note', value: 'Note' },
            { label: 'Attachment', value: 'Attachment' },
        ];
    }

    connectedCallback() {
        registerListener('getobjectsname', this.getDataInFirst, this);
        getObjects({selectedRadio : 'Note'})
        .then(result =>{
                 fireEvent(this.pageRef, 'getobjectsname', {detail : result});
            })
        .catch(error =>{
                // eslint-disable-next-line no-console
                 console.log('error'+error);
        });
    }
    getSelectedValue(event){
       const radioButton = event.target.value;
       fireEvent(this.pageRef, 'getobjectsname', {detail : {selectedRadio : radioButton},});
       /*getObjects({selectedRadio : radioButton})
            .then(result =>{
                     fireEvent(this.pageRef, 'getobjectsname', {detail : result});
                })
            .catch(error =>{
                    // eslint-disable-next-line no-console
                     console.log('error'+error);
            });*/
    }
}