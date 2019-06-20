import { LightningElement, track, wire} from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import getNoteAttachmentList from '@salesforce/apex/NotesAndAttachmentController.getNoteAttachmentList';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
//import { fireEvent } from 'c/pubsub';



export default class NotesAndAttachmentList extends LightningElement {
    @wire(CurrentPageReference) pageRef;
    @track txtSearchData;
    connectedCallback() {
      // subscribe to getobjectsname event
          registerListener('getobjectsname', this.getObjectsList, this);
    }
    disconnectedCallback() {
      // unsubscribe from getobjectsname event
      unregisterAllListeners(this);
    }
    getObjectsList(event){
      this.txtSearchData = event.detail;
      getNoteAttachmentList({selectedRadio : event.detail.selectedRadio, parentType : event.detail.selectedObj, searchTxt : event.detail.searchTxt})
        .then(result =>{
               // eslint-disable-next-line no-console
               console.log('NoteAttachmentList In Forth : '+result);
        }).catch(error =>{
                // eslint-disable-next-line no-console
                 console.log('error'+error);
        });
        // eslint-disable-next-line no-console
        console.log('txtSearchData -- '+JSON.stringify(this.txtSearchData)); 
    }
}